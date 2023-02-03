import {
  contractsByNetwork,
  contractParams,
  LidoParams,
  CurveSteCRVPoolParams,
} from "./src/contracts/contracts";
import { priceFeedsByNetwork } from "./src/oracles/priceFeeds";
import { PriceFeedData, OracleType } from "./src/oracles/oracles";
import { tokenDataByNetwork } from "./src/tokens/token";

export interface PriceFeed {
  name: string;
  address: string;
  type: string;
}
tokenDataByNetwork.Goerli.WETH = "0x595DFFf822767c2E14CFB7D5e0b5a5e23eCfACdd";
tokenDataByNetwork.Goerli.yvWETH = "0xEe8Adf657c5EF8e10622b6B47014D2C6f6993E5E";
let chainlinks: PriceFeed[] = [
  {
    address: "0xd6852347062aB885B6Fb9F7220BedCc5A39CE862",
    name: "LUSD",
    type: "priceFeedUSD",
  },
  {
    address: "0xf4f054C2E3269730c781dc7e1Fe2a3ca745784bd",
    name: "STETH",
    type: "priceFeedUSD",
  },
];
Object.entries(priceFeedsByNetwork).map(([key, value], _) => {
  if (value.priceFeedETH) {
    let data = value.priceFeedETH as PriceFeedData;
    if (data.type == OracleType.CHAINLINK_ORACLE && key != "LUNA") {
      if (data.address.Goerli) {
        chainlinks.push({
          address: data.address.Goerli,
          name: key,
          type: "priceFeedETH",
        });
      }
    }
  }
  if (value.priceFeedUSD) {
    let data = value.priceFeedUSD as PriceFeedData;
    if (data.type == OracleType.CHAINLINK_ORACLE && key != "LUNA") {
      if (data.address.Goerli) {
        chainlinks.push({
          address: data.address.Goerli,
          name: key,
          type: "priceFeedUSD",
        });
      }
    }
  }
});

let v3Pairs = [
  {
    token0: "USDC",
    token1: "DAI",
    fee: 100,
  },
  {
    token0: "USDT",
    token1: "USDC",
    fee: 100,
  },
  {
    token0: "USDT",
    token1: "DAI",
    fee: 100,
  },
  {
    token0: "USDC",
    token1: "FRAX",
    fee: 100,
  },
  {
    token0: "USDC",
    token1: "FEI",
    fee: 100,
  },
  {
    token0: "USDC",
    token1: "DAI",
    fee: 500,
  },
  {
    token0: "USDC",
    token1: "FRAX",
    fee: 500,
  },
  {
    token0: "WETH",
    token1: "USDC",
    fee: 500,
  },
  {
    token0: "WETH",
    token1: "WBTC",
    fee: 500,
  },
  {
    token0: "USDT",
    token1: "USDC",
    fee: 500,
  },
  {
    token0: "WETH",
    token1: "USDT",
    fee: 500,
  },
  {
    token0: "WETH",
    token1: "DAI",
    fee: 500,
  },
  {
    token0: "USDT",
    token1: "FRAX",
    fee: 500,
  },
  {
    token0: "USDC",
    token1: "LUSD",
    fee: 500,
  },
  {
    token0: "LUSD",
    token1: "FRAX",
    fee: 500,
  },
  {
    token0: "sUSD",
    token1: "FRAX",
    fee: 500,
  },
  {
    token0: "FEI",
    token1: "DAI",
    fee: 500,
  },
  {
    token0: "USDT",
    token1: "DAI",
    fee: 500,
  },
  {
    token0: "LUSD",
    token1: "DAI",
    fee: 500,
  },
  {
    token0: "USDC",
    token1: "GUSD",
    fee: 500,
  },
  {
    token0: "WETH",
    token1: "UNI",
    fee: 500,
  },
  {
    token0: "sUSD",
    token1: "USDC",
    fee: 500,
  },
  {
    token0: "WETH",
    token1: "WBTC",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "USDC",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "USDT",
    fee: 3000,
  },
  {
    token0: "WBTC",
    token1: "USDC",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "DAI",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "LINK",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "UNI",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "1INCH",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "LDO",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "FRAX",
    fee: 3000,
  },
  {
    token0: "WBTC",
    token1: "USDT",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "AAVE",
    fee: 3000,
  },
  {
    token0: "UNI",
    token1: "AAVE",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "DPI",
    fee: 3000,
  },
  {
    token0: "USDC",
    token1: "LINK",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "SNX",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "LQTY",
    fee: 3000,
  },
  {
    token0: "WBTC",
    token1: "DAI",
    fee: 3000,
  },
  {
    token0: "USDT",
    token1: "UNI",
    fee: 3000,
  },
  {
    token0: "USDC",
    token1: "UNI",
    fee: 3000,
  },
  {
    token0: "USDC",
    token1: "LQTY",
    fee: 3000,
  },
  {
    token0: "USDT",
    token1: "LINK",
    fee: 3000,
  },
  {
    token0: "YFI",
    token1: "WETH",
    fee: 3000,
  },
  {
    token0: "LUSD",
    token1: "DAI",
    fee: 3000,
  },
  {
    token0: "WETH",
    token1: "USDC",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "LDO",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "CRV",
    fee: 10000,
  },
  {
    token0: "FXS",
    token1: "FRAX",
    fee: 10000,
  },
  {
    token0: "USDC",
    token1: "1INCH",
    fee: 10000,
  },
  {
    token0: "USDC",
    token1: "SNX",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "1INCH",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "FXS",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "DAI",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "UNI",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "USDT",
    fee: 10000,
  },
  {
    token0: "YFI",
    token1: "USDC",
    fee: 10000,
  },
  {
    token0: "sUSD",
    token1: "SNX",
    fee: 10000,
  },
  {
    token0: "WETH",
    token1: "SNX",
    fee: 10000,
  },
  {
    token0: "STETH",
    token1: "WETH",
    fee: 10000,
  },
];
let tokens = {
  "1INCH": {
    address: tokenDataByNetwork.Goerli["1INCH"],
    isV3Token: false,
  },
  AAVE: {
    address: tokenDataByNetwork.Goerli.AAVE,
    isV3Token: false,
  },
  COMP: {
    address: tokenDataByNetwork.Goerli.COMP,
    isV3Token: false,
  },
  CRV: {
    address: tokenDataByNetwork.Goerli.CRV,
    isV3Token: false,
  },
  DPI: {
    address: tokenDataByNetwork.Goerli.DPI,
    isV3Token: false,
  },
  FEI: {
    address: tokenDataByNetwork.Goerli.FEI,
    isV3Token: false,
  },
  LINK: {
    address: tokenDataByNetwork.Goerli.LINK,
    isV3Token: true,
  },
  SNX: {
    address: tokenDataByNetwork.Goerli.SNX,
    isV3Token: true,
  },
  UNI: {
    address: tokenDataByNetwork.Goerli.UNI,
    isV3Token: false,
  },
  USDT: {
    address: tokenDataByNetwork.Goerli.USDT,
    isV3Token: false,
  },
  USDC: {
    address: tokenDataByNetwork.Goerli.USDC,
    isV3Token: true,
    isPool: true,
    faucetSize: 100,
  },
  DAI: {
    address: tokenDataByNetwork.Goerli.DAI,
    isV3Token: true,
    isPool: true,
    faucetSize: 100,
  },
  WETH: {
    address: tokenDataByNetwork.Goerli.WETH,
    isV3Token: false,
  },
  WBTC: {
    address: tokenDataByNetwork.Goerli.WBTC,
    isV3Token: true,
    isPool: true,
    faucetSize: 0.005,
  },
  YFI: {
    address: tokenDataByNetwork.Goerli.YFI,
    isV3Token: false,
  },
  STETH: {
    address: tokenDataByNetwork.Goerli.STETH,
    isV3Token: false,
  },
  CVX: {
    address: tokenDataByNetwork.Goerli.CVX,
    isV3Token: false,
  },
  FRAX: {
    address: tokenDataByNetwork.Goerli.FRAX,
    isV3Token: false,
  },
  FXS: {
    address: tokenDataByNetwork.Goerli.FXS,
    isV3Token: false,
  },
  LDO: {
    address: tokenDataByNetwork.Goerli.LDO,
    isV3Token: false,
  },
  LUSD: {
    address: tokenDataByNetwork.Goerli.LUSD,
    isV3Token: false,
  },
  sUSD: {
    address: tokenDataByNetwork.Goerli.sUSD,
    isV3Token: false,
  },
  GUSD: {
    address: tokenDataByNetwork.Goerli.GUSD,
    isV3Token: false,
  },
  LQTY: {
    address: tokenDataByNetwork.Goerli.LQTY,
    isV3Token: false,
  },
};

let obj = {
  convex: {
    manager: "0xe2496e7082e35de8d22884977e95b80337d5c619", // FIX_ADDR
    mainnetCvxToken: tokenDataByNetwork.Mainnet.CVX,
    pools: [
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_3CRV_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_3CRV_POOL,
        name: "CONVEX_3CRV_POOL",
      },
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_GUSD_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_GUSD_POOL,
        name: "CONVEX_GUSD_POOL",
      },
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_SUSD_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_SUSD_POOL,
        name: "CONVEX_SUSD_POOL",
      },
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_STECRV_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_STECRV_POOL,
        name: "CONVEX_STECRV_POOL",
      },
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_FRAX3CRV_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_FRAX3CRV_POOL,
        name: "CONVEX_FRAX3CRV_POOL",
      },
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_LUSD3CRV_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_LUSD3CRV_POOL,
        name: "CONVEX_LUSD3CRV_POOL",
      },
      {
        mainnetAddr: contractsByNetwork.Mainnet.CONVEX_FRAX_USDC_POOL,
        kovanAddr: contractsByNetwork.Goerli.CONVEX_FRAX_USDC_POOL,
        name: "CURVE_FRAX_USDC_POOL",
      },
      // { mainnetAddr: contractsByNetwork.Mainnet.CONVEX_FRAX_USDC_POOL, kovanAddr: "0xAc22d4495166c945cc91FDB611b7515eBbfd60c0", name: 'CURVE_FRAX_USDC_POOL' },
    ],
  },
  curve: [
    {
      mainnetAddr: contractsByNetwork.Mainnet.CURVE_3CRV_POOL,
      kovanAddr: contractsByNetwork.Goerli.CURVE_3CRV_POOL,
      name: "CURVE_3CRV_POOL",
      mulBy100: false,
    },
    {
      mainnetAddr: (contractParams.CURVE_STETH_GATEWAY as CurveSteCRVPoolParams)
        .pool.Mainnet,
      kovanAddr: (contractParams.CURVE_STETH_GATEWAY as CurveSteCRVPoolParams)
        .pool.Goerli,
      name: "CURVE_STETH_GATEWAY",
      mulBy100: true,
    },
    {
      mainnetAddr: contractsByNetwork.Mainnet.CURVE_LUSD_POOL,
      kovanAddr: contractsByNetwork.Goerli.CURVE_LUSD_POOL,
      name: "CURVE_LUSD_POOL",
      mulBy100: true,
    },
    {
      mainnetAddr: contractsByNetwork.Mainnet.CURVE_FRAX_POOL,
      kovanAddr: contractsByNetwork.Goerli.CURVE_FRAX_POOL,
      name: "CURVE_FRAX_POOL",
      mulBy100: true,
    },
    {
      mainnetAddr: contractsByNetwork.Mainnet.CURVE_SUSD_POOL,
      kovanAddr: contractsByNetwork.Goerli.CURVE_SUSD_POOL,
      name: "CURVE_SUSD_POOL",
      mulBy100: false,
    },
    {
      mainnetAddr: contractsByNetwork.Mainnet.CURVE_GUSD_POOL,
      kovanAddr: contractsByNetwork.Goerli.CURVE_GUSD_POOL,
      name: "CURVE_GUSD_POOL",
      mulBy100: true,
    },
    // { mainnetAddr: contractsByNetwork.Mainnet.CURVE_FRAX_USDC_POOL, kovanAddr: "0x9C85E4F4061160B6177cad3f72EDfd374Dc8AD88", name: 'CURVE_FRAX_USDC_POOL', mulBy100: false },
    {
      mainnetAddr: contractsByNetwork.Mainnet.CURVE_FRAX_USDC_POOL,
      kovanAddr: contractsByNetwork.Goerli.CURVE_FRAX_USDC_POOL,
      name: "CURVE_FRAX_USDC_POOL",
      mulBy100: false,
    },
  ],
  lido: {
    oracle: {
      mainnetAddr: (contractParams.LIDO_STETH_GATEWAY as LidoParams).oracle
        .Mainnet,
      kovanAddr: (contractParams.LIDO_STETH_GATEWAY as LidoParams).oracle
        .Goerli,
    },
    stk: {
      mainnetAddr: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", // FIX_ADDR
      kovanAddr: tokenDataByNetwork.Goerli.STETH, //contractsByNetwork.Goerli.LIDO_STETH_GATEWAY,
    },
  },
  tokens: tokens,
  uniswapv2: {
    v2: {
      router: contractsByNetwork.Goerli.UNISWAP_V2_ROUTER,
      factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
      name: "uniswapv2",
    },
    sushi: {
      router: contractsByNetwork.Goerli.SUSHISWAP_ROUTER,
      factory: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
      name: "sushiswap",
    },
  },
  uniswapv3: {
    router: contractsByNetwork.Goerli.UNISWAP_V3_ROUTER,
    factory: "0x1f98431c8ad98523631ae4a59f267346ea31f984",
    quoter: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
    name: "uniswapv3",
    posManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
    pairs: v3Pairs,
  },
  yearn: [
    {
      mainnetAddr: tokenDataByNetwork.Mainnet.yvDAI,
      kovanAddr: tokenDataByNetwork.Goerli.yvDAI,
      name: "yvDAI",
      underlyingToken: tokenDataByNetwork.Goerli.DAI,
    },
    {
      mainnetAddr: tokenDataByNetwork.Mainnet.yvUSDC,
      kovanAddr: tokenDataByNetwork.Goerli.yvUSDC,
      name: "yvUSDC",
      underlyingToken: tokenDataByNetwork.Goerli.USDC,
    },
    {
      mainnetAddr: tokenDataByNetwork.Mainnet.yvWETH,
      kovanAddr: tokenDataByNetwork.Goerli.yvWETH,
      name: "yvWETH",
      underlyingToken: tokenDataByNetwork.Goerli.WETH,
    },
    {
      mainnetAddr: tokenDataByNetwork.Mainnet.yvWBTC,
      kovanAddr: tokenDataByNetwork.Goerli.yvWBTC,
      name: "yvWBTC",
      underlyingToken: tokenDataByNetwork.Goerli.WBTC,
    },
    {
      mainnetAddr: tokenDataByNetwork.Mainnet["yvCurve_stETH"],
      kovanAddr: tokenDataByNetwork.Goerli["yvCurve_stETH"],
      name: "CURVE_STETH",
      underlyingToken: tokenDataByNetwork.Goerli.steCRV,
    },
  ],
  USDC: tokenDataByNetwork.Goerli.USDC,
  WETH: tokenDataByNetwork.Goerli.WETH,
  chainlinks: chainlinks,
};

console.log(JSON.stringify(obj));
