import { BigNumber } from "ethers";

import { contractParams, SupportedContract } from "../contracts/contracts";
import { getContractName } from "../contracts/contractsRegister";
import { extractTokenData } from "../tokens/token";
import { formatBN } from "../utils/formatter";
import { LEVERAGE_DECIMALS } from "./constants";
import { EVMTx, EVMTxProps } from "./eventOrTx";

export interface TxSerialized {
  type:
    | "TxAddLiquidity"
    | "TxRemoveLiquidity"
    | "TxSwap"
    | "TxAddCollateral"
    | "TxIncreaseBorrowAmount"
    | "TxOpenAccount"
    | "TxRepayAccount"
    | "TxCloseAccount"
    | "TxApprove"
    | "TxOpenMultitokenAccount"
    | "TxClaimReward"
    | "TxClaimNFT"
    | "TxClaimGearRewards"
    | "TxEnableTokens";
  content: string;
}

export class TxSerializer {
  static serialize(items: Array<EVMTx>): string {
    return JSON.stringify(items.map(i => i.serialize()));
  }

  static deserialize(data: string): Array<EVMTx> {
    return (JSON.parse(data) as Array<TxSerialized>).map(e => {
      const params = JSON.parse(e.content);
      switch (e.type) {
        case "TxAddLiquidity":
          return new TxAddLiquidity(params);
        case "TxRemoveLiquidity":
          return new TxRemoveLiquidity(params);
        case "TxSwap":
          return new TXSwap(params);
        case "TxAddCollateral":
          return new TxAddCollateral(params);
        case "TxIncreaseBorrowAmount":
          return new TxIncreaseBorrowAmount(params);
        case "TxOpenAccount":
          return new TxOpenAccount(params);
        case "TxRepayAccount":
          return new TxRepayAccount(params);
        case "TxCloseAccount":
          return new TxCloseAccount(params);
        case "TxApprove":
          return new TxApprove(params);
        case "TxOpenMultitokenAccount":
          return new TxOpenMultitokenAccount(params);
        case "TxClaimReward":
          return new TxClaimReward(params);
        case "TxClaimNFT":
          return new TxClaimNFT(params);
        case "TxClaimGearRewards":
          return new TxClaimGearRewards(params);

        case "TxEnableTokens":
          return new TxEnableTokens(params);
        default:
          throw new Error(`Unknown transaction for parsing: ${e.type}`);
      }
    });
  }
}

interface AddLiquidityProps extends EVMTxProps {
  amount: BigNumber;
  underlyingToken: string;
  pool: string;
}

export class TxAddLiquidity extends EVMTx {
  public readonly amount: BigNumber;

  public readonly underlyingToken: string;

  public readonly pool: string;

  constructor(opts: AddLiquidityProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.amount = opts.amount;
    this.underlyingToken = opts.underlyingToken;
    this.pool = opts.pool;
  }

  toString(): string {
    const [underlyingSymbol, underlyingDecimals] = extractTokenData(
      this.underlyingToken,
    );

    return `${getContractName(this.pool)}: Deposit ${formatBN(
      this.amount,
      underlyingDecimals || 18,
    )} ${underlyingSymbol}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxAddLiquidity",
      content: JSON.stringify(this),
    };
  }
}

interface RemoveLiquidityProps extends EVMTxProps {
  amount: BigNumber;
  dieselToken: string;
  pool: string;
}

export class TxRemoveLiquidity extends EVMTx {
  public readonly amount: BigNumber;

  public readonly dieselToken: string;

  public readonly pool: string;

  constructor(opts: RemoveLiquidityProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.amount = opts.amount;
    this.dieselToken = opts.dieselToken;
    this.pool = opts.pool;
  }

  toString(): string {
    const [dSymbol, dDecimals] = extractTokenData(this.dieselToken);

    return `${getContractName(this.pool)}: Withdraw ${formatBN(
      this.amount,
      dDecimals || 18,
    )} ${dSymbol}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxRemoveLiquidity",
      content: JSON.stringify(this),
    };
  }
}

interface SwapProps extends EVMTxProps {
  protocol: string;
  operation: string;
  amountFrom: BigNumber;
  amountTo?: BigNumber;
  tokenFrom: string;
  tokenTo?: string;
  creditManager: string;
}

export class TXSwap extends EVMTx {
  public readonly protocol: string;

  public readonly operation: string;

  public readonly amountFrom: BigNumber;

  public readonly amountTo?: BigNumber;

  public readonly tokenFrom: string;

  public readonly tokenTo?: string;

  public readonly creditManager: string;

  constructor(opts: SwapProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.protocol = opts.protocol;
    this.operation = opts.operation;
    this.amountFrom = opts.amountFrom;
    this.amountTo = opts.amountTo;
    this.tokenFrom = opts.tokenFrom;
    this.tokenTo = opts.tokenTo;
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    let toPart = "";
    if (this.tokenTo && this.amountTo) {
      const [toSymbol, toDecimals] = extractTokenData(this.tokenTo);

      toPart = ` ⇒  ${formatBN(this.amountTo, toDecimals || 18)} ${toSymbol}`;
    }

    const [fromSymbol, fromDecimals] = extractTokenData(this.tokenFrom);

    return `Credit account ${getContractName(this.creditManager)}: ${
      this.operation
    } ${formatBN(
      this.amountFrom,
      fromDecimals || 18,
    )} ${fromSymbol} ${toPart} on ${getContractName(this.protocol)}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxSwap",
      content: JSON.stringify(this),
    };
  }
}

interface AddCollateralProps extends EVMTxProps {
  amount: BigNumber;
  addedToken: string;
  creditManager: string;
}

export class TxAddCollateral extends EVMTx {
  public readonly amount: BigNumber;

  public readonly addedToken: string;

  public readonly creditManager: string;

  constructor(opts: AddCollateralProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.amount = opts.amount;
    this.addedToken = opts.addedToken;
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    const [addedSymbol, addedDecimals] = extractTokenData(this.addedToken);

    return `Credit account ${getContractName(
      this.creditManager,
    )}: Added ${formatBN(
      this.amount,
      addedDecimals || 18,
    )} ${addedSymbol} as collateral`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxAddCollateral",
      content: JSON.stringify(this),
    };
  }
}

interface IncreaseBorrowAmountProps extends EVMTxProps {
  amount: BigNumber;
  underlyingToken: string;
  creditManager: string;
}

export class TxIncreaseBorrowAmount extends EVMTx {
  public readonly amount: BigNumber;

  public readonly underlyingToken: string;

  public readonly creditManager: string;

  constructor(opts: IncreaseBorrowAmountProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.amount = opts.amount;
    this.underlyingToken = opts.underlyingToken;
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    const [tokenSymbol, tokenDecimals] = extractTokenData(this.underlyingToken);

    return `Credit account ${getContractName(
      this.creditManager,
    )}: Borrowed amount was increased for ${formatBN(
      this.amount,
      tokenDecimals || 18,
    )} ${tokenSymbol}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxIncreaseBorrowAmount",
      content: JSON.stringify(this),
    };
  }
}

interface OpenAccountProps extends EVMTxProps {
  amount: BigNumber;
  underlyingToken: string;
  leverage: number;
  creditManager: string;
}

export class TxOpenAccount extends EVMTx {
  public readonly amount: BigNumber;

  public readonly underlyingToken: string;

  public readonly leverage: number;

  public readonly creditManager: string;

  constructor(opts: OpenAccountProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.amount = BigNumber.from(opts.amount);
    this.underlyingToken = opts.underlyingToken;
    this.leverage = opts.leverage;
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    const [tokenSymbol, tokenDecimals] = extractTokenData(this.underlyingToken);

    return `Credit account ${getContractName(
      this.creditManager,
    )}: opening ${formatBN(
      this.amount,
      tokenDecimals || 18,
    )} ${tokenSymbol} x ${this.leverage.toFixed(2)} ⇒ 
    ${formatBN(
      this.amount
        .mul(Math.floor(this.leverage * LEVERAGE_DECIMALS))
        .div(LEVERAGE_DECIMALS),
      tokenDecimals || 18,
    )} ${tokenSymbol}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxOpenAccount",
      content: JSON.stringify(this),
    };
  }
}

interface TxOpenMultitokenAccountProps extends EVMTxProps {
  borrowedAmount: BigNumber;
  creditManager: string;
  underlyingToken: string;
  assets: Array<string>;
}

export class TxOpenMultitokenAccount extends EVMTx {
  public readonly borrowedAmount: BigNumber;

  public readonly creditManager: string;

  public readonly underlyingToken: string;

  public readonly assets: Array<string>;

  constructor(opts: TxOpenMultitokenAccountProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.borrowedAmount = BigNumber.from(opts.borrowedAmount);
    this.underlyingToken = opts.underlyingToken;
    this.creditManager = opts.creditManager;
    this.assets = opts.assets;
  }

  toString(): string {
    const assetSymbols = this.assets.reduce<Array<string>>(
      (acc, assetAddress) => {
        const [tokenSymbol] = extractTokenData(assetAddress);
        if (tokenSymbol) acc.push(tokenSymbol);
        return acc;
      },
      [],
    );

    const [symbol, underlyingDecimals] = extractTokenData(this.underlyingToken);

    return `Credit account ${getContractName(
      this.creditManager,
    )}: opening. Borrowed amount: ${formatBN(
      this.borrowedAmount,
      underlyingDecimals || 18,
    )} ${symbol}; assets: ${assetSymbols.join(", ")}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxOpenMultitokenAccount",
      content: JSON.stringify(this),
    };
  }
}

interface TxClaimRewardProps extends EVMTxProps {
  contracts: Array<SupportedContract>;
}

export class TxClaimReward extends EVMTx {
  public readonly contracts: Array<SupportedContract>;

  constructor(opts: TxClaimRewardProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.contracts = opts.contracts;
  }

  toString(): string {
    const contractNames = this.contracts.map(contract => {
      const contractInfo = contractParams[contract];
      return contractInfo.name;
    });

    return `Pools reward claimed: ${contractNames.join(", ")}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxClaimReward",
      content: JSON.stringify(this),
    };
  }
}

type TxClaimNFTProps = EVMTxProps;

export class TxClaimNFT extends EVMTx {
  constructor(opts: TxClaimNFTProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
  }

  toString(): string {
    return `NFT claimed`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxClaimNFT",
      content: JSON.stringify(this),
    };
  }
}

interface TxClaimGearRewardsProps extends EVMTxProps {
  token: string;
  amount: BigNumber;
}

export class TxClaimGearRewards extends EVMTx {
  token: string;
  amount: BigNumber;

  constructor(opts: TxClaimGearRewardsProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });

    this.amount = opts.amount;
    this.token = opts.token;
  }

  toString(): string {
    const [symbol, decimals] = extractTokenData(this.token);

    return `GEAR Rewards claimed: ${formatBN(
      this.amount,
      decimals || 18,
    )} ${symbol} `;
  }

  serialize(): TxSerialized {
    return {
      type: "TxClaimGearRewards",
      content: JSON.stringify(this),
    };
  }
}

interface RepayAccountProps extends EVMTxProps {
  creditManager: string;
}

export class TxRepayAccount extends EVMTx {
  public readonly creditManager: string;

  constructor(opts: RepayAccountProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    return `Credit account ${getContractName(
      this.creditManager,
    )}: Repaying account`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxRepayAccount",
      content: JSON.stringify(this),
    };
  }
}

interface CloseAccountProps extends EVMTxProps {
  creditManager: string;
}

export class TxCloseAccount extends EVMTx {
  public readonly creditManager: string;

  constructor(opts: CloseAccountProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    return `Credit account ${getContractName(
      this.creditManager,
    )}: Closing account`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxCloseAccount",
      content: JSON.stringify(this),
    };
  }
}

interface ApproveProps extends EVMTxProps {
  token: string;
}

export class TxApprove extends EVMTx {
  public readonly token: string;

  constructor(opts: ApproveProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.token = opts.token;
  }

  toString(): string {
    const [symbol] = extractTokenData(this.token);
    return `Approve ${symbol}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxApprove",
      content: JSON.stringify(this),
    };
  }
}

interface TxEnableTokensProps extends EVMTxProps {
  enabledTokens: Array<string>;
  disabledTokens: Array<string>;
  creditManager: string;
}

export class TxEnableTokens extends EVMTx {
  public readonly enabledTokens: Array<string>;
  public readonly disabledTokens: Array<string>;
  public readonly creditManager: string;

  constructor(opts: TxEnableTokensProps) {
    super({
      block: opts.block,
      txHash: opts.txHash,
      txStatus: opts.txStatus,
      timestamp: opts.timestamp,
    });
    this.enabledTokens = opts.enabledTokens;
    this.disabledTokens = opts.disabledTokens;
    this.creditManager = opts.creditManager;
  }

  toString(): string {
    const enabledSymbols = this.enabledTokens.map(address => {
      const [tokenSymbol] = extractTokenData(address);
      return tokenSymbol;
    });

    const disabledSymbols = this.disabledTokens.map(address => {
      const [tokenSymbol] = extractTokenData(address);
      return tokenSymbol;
    });

    const currentSentences = [
      enabledSymbols.length > 0 ? `enabled: ${enabledSymbols.join(", ")}` : "",
      disabledSymbols.length > 0
        ? `disabled: ${disabledSymbols.join(", ")}`
        : "",
    ].filter(s => !!s);

    return `Credit account ${getContractName(
      this.creditManager,
    )}: ${currentSentences.join("; ")}`;
  }

  serialize(): TxSerialized {
    return {
      type: "TxEnableTokens",
      content: JSON.stringify(this),
    };
  }
}
