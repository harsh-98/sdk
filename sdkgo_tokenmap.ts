import { tokenDataByNetwork } from "./src/tokens/token";
import { convexTokens } from "./src/tokens/convex";
import {
  contractsByNetwork,
  UNISWAP_V3_QUOTER,
  contractParams,
  CurveSteCRVPoolParams,
} from "./src/contracts/contracts";
let tokens;
let network;
let nullAddr = "0x0000000000000000000000000000000000000000";
let yvSTETH;
let steCRV_POOL;
//
if (process.argv.length < 2) {
  console.log("args length less than 2: ", process.argv.length);
  process.exit(1);
}
let networkName = process.argv[2].toLocaleLowerCase();
let stkcvxLUSD3CRV;
let univ3Factory = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
switch (networkName) {
  case "mainnet":
    yvSTETH = "0x15a2B3CfaFd696e1C783FE99eed168b78a3A371e";
    steCRV_POOL = (contractParams.CURVE_STETH_GATEWAY as CurveSteCRVPoolParams)
      .pool.Mainnet;
    network = contractsByNetwork.Mainnet;
    tokens = tokenDataByNetwork.Mainnet;
    stkcvxLUSD3CRV = tokens.stkcvxLUSD3CRV; // TODO:fix this when the convex lusd token phatom is added to sdk
    break;
  // case "kovan":
  //     yvSTETH = nullAddr;
  //     // steCRV_POOL = (contractParams.CURVE_STETH_GATEWAY as CurveSteCRVPoolParams).pool.Kovan
  //     // network = contractsByNetwork.Kovan
  //     // tokens = tokenDataByNetwork.Kovan
  //     stkcvxLUSD3CRV = tokens.stkcvxLUSD3CRV;
  //     break
  case "goerli":
    yvSTETH = nullAddr;
    steCRV_POOL = (contractParams.CURVE_STETH_GATEWAY as CurveSteCRVPoolParams)
      .pool.Goerli;
    network = contractsByNetwork.Goerli;
    tokens = tokenDataByNetwork.Goerli;
    stkcvxLUSD3CRV = tokens.stkcvxLUSD3CRV;
    break;
  default:
    console.log("wrong network");
    process.exit(1);
}

let obj: any = {
  network: networkName,
  tokens: {
    ETH: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    //
    yvCURVE_FRAX: tokens.yvCurve_FRAX,
    yvDAI: tokens.yvDAI,
    yvUSDC: tokens.yvUSDC,
    yvWETH: tokens.yvWETH,
    yvWBTC: tokens.yvWBTC,
    yvSTETH: yvSTETH,
    yvCurve_stETH: tokens.yvCurve_stETH,
    ///////////////////////////
    // convex curve pools
    ///////////////////////////
    stkcvxFRAX3CRV: tokens.stkcvxFRAX3CRV,
    stkcvxcrvFRAX: tokens.stkcvxcrvFRAX,
    stkcvxsteCRV: tokens.stkcvxsteCRV,
    stkcvxgusd3CRV: tokens.stkcvxgusd3CRV,
    stkcvxcrvPlain3andSUSD: tokens.stkcvxcrvPlain3andSUSD,
    stkcvx3Crv: tokens.stkcvx3Crv,
    stkcvxLUSD3CRV: stkcvxLUSD3CRV,
    //
    cvxFRAX3CRV: tokens.cvxFRAX3CRV,
    cvxcrvFRAX: tokens.cvxcrvFRAX, // usdc /frax
    cvxsteCRV: tokens.cvxsteCRV,
    cvxgusd3CRV: tokens.cvxgusd3CRV,
    cvxcrvPlain3andSUSD: tokens.cvxcrvPlain3andSUSD,
    cvx3Crv: tokens.cvx3Crv,
    cvxLUSD3CRV: tokens.cvxLUSD3CRV,
    GEAR: tokens.GEAR,
    ///////////////////////////
    // curve meta pools
    ///////////////////////////
    FRAX3CRV: tokens.FRAX3CRV,
    crvFRAX: tokens.crvFRAX,
    LUSD3CRV: tokens.LUSD3CRV,
    GUSD3CRV: tokens.gusd3CRV,
    crvPlain3andSUSD: tokens.crvPlain3andSUSD, // this is using a different underlying 3CRV pool 0xA5407eAE9Ba41422680e2e00537571bcC53efBfD
    ///////////////////////////
    // curve pools
    ///////////////////////////
    "3CRV": tokens["3Crv"],
    steCRV: tokens.steCRV,
    ////////////////////
    // tokens swappable on AMM
    ////////////////////
    FEI: tokens.FEI,
    FRAX: tokens.FRAX,
    SUSD: tokens.sUSD,
    stETH: tokens.STETH,
    wstETH: tokens.wstETH,
    GUSD: tokens.GUSD,
    LUSD: tokens.LUSD,
    // yellow
    SNX: tokens.SNX,
    LQTY: tokens.LQTY,
    // SPELL: tokens.SPELL,
    CVX: tokens.CVX,
    LDO: tokens.LDO,
    FXS: tokens.FXS,
    CRV: tokens.CRV,
    // red
    // SUSHI: tokens.SUSHI,
    // FTM: tokens.FTM,
    // LUNA: tokens.LUNA,
    UNI: tokens.UNI,
    "1INCH": tokens["1INCH"],
    YFI: tokens.YFI,
    AAVE: tokens.AAVE,
    DPI: tokens.DPI,
    COMP: tokens.COMP,
    LINK: tokens.LINK,
    //////////////////////
    // underlying asset
    //////////////////////
    USDC: tokens.USDC,
    DAI: tokens.DAI,
    WETH: tokens.WETH,
    WBTC: tokens.WBTC,
    //
    USDT: tokens.USDT,
  },
  //||||||||||||||||||||||||||||||
  // exchanges
  //||||||||||||||||||||||||||||||
  exchanges: {
    CONVEX_FRAX3CRV_POOL: network.CONVEX_FRAX3CRV_POOL,
    CONVEX_3CRV_POOL: network.CONVEX_3CRV_POOL,
    CONVEX_STECRV_POOL: network.CONVEX_STECRV_POOL,
    CONVEX_SUSD_POOL: network.CONVEX_SUSD_POOL,
    CONVEX_GUSD_POOL: network.CONVEX_GUSD_POOL,
    CONVEX_LUSD3CRV_POOL: network.CONVEX_LUSD3CRV_POOL,
    CONVEX_FRAX_USDC_POOL: network.CONVEX_FRAX_USDC_POOL,
    //
    CONVEX_BOOSTER: network.CONVEX_BOOSTER,
    ///////////////////////////
    // curve meta pools
    ///////////////////////////
    LUSD3CRV_POOL: tokens.LUSD3CRV,
    FRAX3CRV_POOL: tokens.FRAX3CRV,
    GUSD3CRV_POOL: network.CURVE_GUSD_POOL,
    CURVE_FRAX_USDC_POOL: network.CURVE_FRAX_USDC_POOL,
    ///////////////////////////
    // curve pools
    ///////////////////////////
    // DEPOSIT SUSD  is like a wrapper with remove_liq_one_coin and calc_withdraw_one_coin and the susd pool doesn't have these functions
    crvPlain3andSUSD_DEPOSIT: network.CURVE_SUSD_DEPOSIT,
    CURVE_SUSD_POOL: network.CURVE_SUSD_POOL,
    //  the pool deals with native eth but has calc_withdraw_one_coin, but remove_liq is missing for WETH which is available on gateway.
    CURVE_STETH_GATEWAY: network.CURVE_STETH_GATEWAY,
    steCRV_POOL: steCRV_POOL, //CRV4
    //
    "3CRV_POOL": network.CURVE_3CRV_POOL,
    LIDO_STETH_GATEWAY: network.LIDO_STETH_GATEWAY,
    ///////////////////////////
    // AMM
    ///////////////////////////
    UNISWAPV2_ROUTER: network.UNISWAP_V2_ROUTER,
    UNISWAPV3_ROUTER: network.UNISWAP_V3_ROUTER,
    UNISWAPV3_QUOTER: UNISWAP_V3_QUOTER,
    UNISWAPV3_FACTORY: univ3Factory,
    SUSHISWAP_ROUTER: network.SUSHISWAP_ROUTER,
  },
  ids: {
    cvxFRAX3CRV: convexTokens.cvxFRAX3CRV.pid,
    cvxsteCRV: convexTokens.cvxsteCRV.pid,
    cvxcrvFRAX: convexTokens.cvxcrvFRAX.pid,
    cvxgusd3CRV: convexTokens.cvxgusd3CRV.pid,
    cvxcrvPlain3andSUSD: convexTokens.cvxcrvPlain3andSUSD.pid,
    cvx3Crv: convexTokens.cvx3Crv.pid,
    cvxLUSD3CRV: convexTokens.cvxLUSD3CRV.pid,
  },
};

if (networkName == "mainnet") {
  obj["tokens"]["G-BLOCK"] = "0xf568F6C71aE0439B8d3FFD60Ceba9B1DcB5819bF";
  obj["tokens"]["G-OBS"] = "0x26F7D7509490B292AFBB0443A7A371d345B5f684";
}

console.log(JSON.stringify(obj));
