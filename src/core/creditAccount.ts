import { BigNumber } from "ethers";

import { isTokenWithAPY, LpTokensAPY } from "../apy";
import { CreditAccountDataPayload } from "../payload/creditAccount";
import { decimals } from "../tokens/decimals";
import { tokenSymbolByAddress } from "../tokens/token";
import { TokenData } from "../tokens/tokenData";
import { toSignificant } from "../utils/formatter";
import { calcTotalPrice, convertByPrice } from "../utils/price";
import { Asset } from "./assets";
import {
  LEVERAGE_DECIMALS,
  PERCENTAGE_DECIMALS,
  PERCENTAGE_FACTOR,
  PRICE_DECIMALS,
  RAY,
  WAD,
  WAD_DECIMALS_POW,
} from "./constants";
import { CreditManagerData } from "./creditManager";
import { PriceOracleData } from "./priceOracle";

export class CreditAccountData {
  public readonly addr: string;
  public readonly borrower: string;
  public readonly inUse: boolean;
  public readonly creditManager: string;
  public readonly underlyingToken: string;

  public readonly since: number;
  public readonly cumulativeIndexAtOpen: BigNumber;
  public readonly borrowedAmount: BigNumber;
  public readonly borrowedAmountPlusInterestAndFees: BigNumber;

  public borrowedAmountPlusInterest: BigNumber;
  public totalValue: BigNumber;
  public healthFactor: number;
  public borrowRate: number;
  public readonly collateralTokens: Array<string> = [];
  public readonly allTokens: Array<string> = [];
  public balances: Record<string, BigNumber> = {};
  public allBalances: Record<string, BigNumber> = {};
  public isDeleting: boolean;
  public enabledTokenMask: BigNumber;
  public readonly version: number = 1;

  /// V1 Artifacts
  public readonly repayAmount: BigNumber;
  public readonly liquidationAmount: BigNumber;
  public readonly canBeClosed: boolean;

  constructor(payload: CreditAccountDataPayload) {
    this.addr = payload.addr.toLowerCase();
    this.borrower = payload.borrower.toLowerCase();
    this.inUse = payload.inUse;
    this.creditManager = payload.creditManager.toLowerCase();
    this.underlyingToken = payload.underlying.toLowerCase();

    this.since = BigNumber.from(payload.since).toNumber();
    this.cumulativeIndexAtOpen = payload.cumulativeIndexAtOpen;

    this.borrowedAmount = payload.borrowedAmount;
    this.borrowedAmountPlusInterest = payload.borrowedAmountPlusInterest;
    this.borrowedAmountPlusInterestAndFees =
      payload.borrowedAmountPlusInterestAndFees;

    this.totalValue = payload.totalValue;
    this.healthFactor = payload.healthFactor.toNumber();
    this.borrowRate = payload.borrowRate
      .mul(PERCENTAGE_FACTOR)
      .mul(PERCENTAGE_DECIMALS)
      .div(RAY)
      .toNumber();

    payload.balances.forEach(b => {
      const tokenLC = b.token.toLowerCase();
      if (b.isAllowed) {
        this.balances[tokenLC] = b.balance;
        this.collateralTokens.push(tokenLC);
      }

      this.allBalances[tokenLC] = b.balance;
      this.allTokens.push(tokenLC);
    });

    this.enabledTokenMask = payload.enabledTokenMask;
    this.isDeleting = false;
    this.version = payload.version;

    this.repayAmount = payload.repayAmount;
    this.liquidationAmount = payload.liquidationAmount;
    this.canBeClosed = payload.canBeClosed;
  }

  balancesSorted(
    prices: Record<string, BigNumber>,
    tokens: Record<string, TokenData>,
  ): Array<Asset> {
    return sortBalances(this.balances, prices, tokens).map(
      ([token, balance]) => ({ token, balance }),
    );
  }

  calcBorrowAmountPlusInterestRate(
    currentCumulativeIndex: BigNumber,
  ): BigNumber {
    return this.borrowedAmount
      .mul(currentCumulativeIndex)
      .div(this.cumulativeIndexAtOpen);
  }

  updateHealthFactor(
    creditManager: CreditManagerData,
    currentCumulativeIndex: BigNumber,
    priceOracle: PriceOracleData,
  ) {
    const twvUSDValue = this.collateralTokens
      .filter(
        (_, num) =>
          !BigNumber.from(2).pow(num).and(this.enabledTokenMask).isZero(),
      )
      .map(token =>
        priceOracle
          .convertToUSD(this.balances[token], token)
          .mul(creditManager.liquidationThresholds[token]),
      )
      .reduce((a, b) => a.add(b));

    this.healthFactor = priceOracle
      .convertFromUSD(twvUSDValue, this.underlyingToken)
      .div(this.calcBorrowAmountPlusInterestRate(currentCumulativeIndex))
      .toNumber();
  }

  static calcMaxIncreaseBorrow(
    healthFactor: number,
    borrowAmountPlusInterest: BigNumber,
    maxLeverageFactor: number,
    underlyingLT: number,
  ): BigNumber {
    const minHealthFactor =
      maxLeverageFactor > 0
        ? Math.floor(
            (underlyingLT * (maxLeverageFactor + LEVERAGE_DECIMALS)) /
              maxLeverageFactor,
          )
        : PERCENTAGE_FACTOR;

    const result = borrowAmountPlusInterest
      .mul(healthFactor - minHealthFactor)
      .div(minHealthFactor - underlyingLT);
    return result.isNegative() ? BigNumber.from(0) : result;
  }

  get id(): string {
    return this.creditManager;
  }

  hash(): string {
    return CreditAccountData.hash(this.creditManager, this.borrower);
  }

  static hash(creditManager: string, borrower: string): string {
    return `${creditManager.toLowerCase()}:${borrower.toLowerCase()}`;
  }
}

export function sortBalances(
  balances: Record<string, BigNumber>,
  prices: Record<string, BigNumber>,
  tokens: Record<string, TokenData>,
): Array<[string, BigNumber]> {
  return Object.entries(balances).sort(([addr1, amount1], [addr2, amount2]) => {
    const addr1Lc = addr1.toLowerCase();
    const addr2Lc = addr2.toLowerCase();

    const token1 = tokens[addr1Lc];
    const token2 = tokens[addr2Lc];

    const price1 = prices[addr1Lc] || PRICE_DECIMALS;
    const price2 = prices[addr2Lc] || PRICE_DECIMALS;

    const totalPrice1 = calcTotalPrice(price1, amount1, token1?.decimals);
    const totalPrice2 = calcTotalPrice(price2, amount2, token2?.decimals);

    if (totalPrice1.eq(totalPrice2)) {
      return amount1.eq(amount2)
        ? tokensAbcComparator(token1, token2)
        : amountAbcComparator(amount1, amount2);
    }

    if (totalPrice1.gt(totalPrice2)) {
      return -1;
    }

    return 1;
  });
}

export function tokensAbcComparator(t1?: TokenData, t2?: TokenData) {
  const { symbol: symbol1 = "" } = t1 || {};
  const { symbol: symbol2 = "" } = t2 || {};

  return symbol1 > symbol2 ? 1 : -1;
}

export function amountAbcComparator(t1: BigNumber, t2: BigNumber) {
  return t1?.gt(t2) ? -1 : 1;
}

export interface CalcOverallAPYProps {
  caAssets: Array<Asset>;
  lpAPY: LpTokensAPY | undefined;
  prices: Record<string, BigNumber>;

  totalValue: BigNumber | undefined;
  debt: BigNumber | undefined;
  borrowRate: number;
  underlyingToken: string;
}

export function calcOverallAPY({
  caAssets,
  lpAPY,
  prices,

  totalValue,
  debt,
  borrowRate,
  underlyingToken,
}: CalcOverallAPYProps): number | undefined {
  if (!lpAPY || !totalValue || totalValue.lte(0) || !debt) return undefined;

  const assetAPYMoney = caAssets.reduce(
    (acc, { token: tokenAddress, balance: amount }) => {
      const tokenAddressLC = tokenAddress.toLowerCase();
      const symbol = tokenSymbolByAddress[tokenAddressLC];
      if (!isTokenWithAPY(symbol)) return acc;

      const apy = lpAPY[symbol] || 0;
      const price = prices[tokenAddressLC] || BigNumber.from(0);
      const tokenDecimals = decimals[symbol];

      const money = calcTotalPrice(price, amount, tokenDecimals);
      const apyMoney = money.mul(BigNumber.from(apy));

      return acc.add(apyMoney);
    },
    BigNumber.from(0),
  );

  const underlyingTokenAddressLC = underlyingToken.toLowerCase();
  const underlyingTokenSymbol =
    tokenSymbolByAddress[underlyingTokenAddressLC] || "";
  const underlyingTokenDecimals = decimals[underlyingTokenSymbol] || 18;
  const underlyingPrice = prices[underlyingTokenAddressLC] || PRICE_DECIMALS;
  const assetAPYAmountInUnderlying = convertByPrice(assetAPYMoney, {
    price: underlyingPrice,
    decimals: underlyingTokenDecimals,
  });

  const debtAPY = debt.mul(BigNumber.from(borrowRate));

  const yourAssets = totalValue.sub(debt);

  const apyInPercent = assetAPYAmountInUnderlying
    .sub(debtAPY)
    .mul(WAD)
    .div(yourAssets)
    .div(PERCENTAGE_FACTOR);

  return Number(toSignificant(apyInPercent, WAD_DECIMALS_POW));
}
