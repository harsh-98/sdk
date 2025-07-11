import type { ERC4626VaultContract } from "../contracts/index.js";
import type { CurveLPToken } from "./curveLP.js";
import type { NormalToken } from "./normal.js";
import type { TokenBase } from "./token.js";
import type { TokenNetwork } from "./tokenType.js";
import { TokenType } from "./tokenType.js";

export type ERC4626LPToken =
  | "sDAI"
  | "YieldETH"
  | "sUSDe"
  | "sUSDS"
  | "scrvUSD"
  | "ynBNBx"
  | "sUSDX";

export type ERC4626VaultTokenData = {
  symbol: ERC4626LPToken;
  type: Partial<Record<TokenNetwork, TokenType.ERC4626_VAULT_TOKEN>>;
  underlying: NormalToken;
  vault: ERC4626VaultContract | undefined;
} & TokenBase;

export type ERC4626VaultOfCurveLPTokenData = {
  symbol: ERC4626LPToken;
  type: Partial<Record<TokenNetwork, TokenType.ERC4626_VAULT_TOKEN>>;
  underlying: CurveLPToken;
  vault: ERC4626VaultContract | undefined;
} & TokenBase;

export const erc4626Tokens: Record<
  ERC4626LPToken,
  ERC4626VaultTokenData | ERC4626VaultOfCurveLPTokenData
> = {
  // YEARN TOKENS
  sDAI: {
    name: "Maker DSR",
    symbol: "sDAI",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "DAI",
    vault: "MAKER_DSR_VAULT",
  },

  YieldETH: {
    name: "Sommelier ETH Vault",
    symbol: "YieldETH",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "WETH",
    vault: "YIELD_ETH_VAULT",
  },

  sUSDe: {
    name: "Staked USDe",
    symbol: "sUSDe",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "USDe",
    vault: "STAKED_USDE_VAULT",
  },

  sUSDS: {
    name: "Staked USDS",
    symbol: "sUSDS",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "USDS",
    vault: "STAKED_USDS_VAULT",
  },
  scrvUSD: {
    name: "Savings crvUSD",
    symbol: "scrvUSD",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "crvUSD",
    vault: "SAVINGS_CRVUSD_VAULT",
  },

  ynBNBx: {
    name: "Staked WBNB",
    symbol: "ynBNBx",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "WBNB",
    vault: undefined,
  },
  sUSDX: {
    name: "Staked USDX",
    symbol: "sUSDX",
    type: { AllNetworks: TokenType.ERC4626_VAULT_TOKEN },
    underlying: "USDX",
    vault: undefined,
  },
};
