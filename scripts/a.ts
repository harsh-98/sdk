import { setLTZero } from "../src/dev/ltUtils";
import { createAnvilClient , AnvilClientConfig} from "../src/dev/createAnvilClient";
import { createTransport,Provider } from "../src/sdk";
import { pino } from "pino";
import type {  CreditSuiteState } from "../src/sdk/base/index";
import { iMarketCompressorAbi, iCreditSuiteCompressorAbi } from "../src/abi/compressors";
import  { Address } from "viem";
import  { GearboxSDK } from "../src/sdk/GearboxSDK";
import  { GearboxState , } from "../src/sdk/types/state";
import  { NetworkType } from "../src/sdk/chain";
import {AP_CREDIT_SUITE_COMPRESSOR, AP_CONTRACTS_REGISTER, AP_MARKET_COMPRESSOR} from "../src/sdk/constants";
import {
  createAddressProvider,
} from "../src/sdk/core/index";
import { VERSION_RANGE_310,VERSION_RANGE_300 } from "../src/sdk/constants/versions";

import  { AddressProviderState } from "../src/sdk/core/index";
import { bigint } from "zod";

let RPC = "http://localhost:8545";
let chainId = 1;
let networkType: NetworkType = "Mainnet";

let transport = createTransport({rpcURLs: [RPC]});
let provider = new Provider({chainId, networkType, transport});
  let config: AnvilClientConfig = {
    transport,
    chain:provider.chain,
};



const logger = pino({
  level:  "debug",
});
let addressProvider: Address= "0xBaB2014Dd88223E168bA06911c06df638311a097";
let creditManagerAddr: Address= "0x3eb95430fdb99439a86d3c6d7d01c3c561393556";
let poolAddr: Address = "0xda00000035fef4082F78dEF6A8903bee419FbF8E"; // Example pool address, adjust as needed


// 0xe541b88d68602e5f3fb511633bac708bacd8ea4c


let _addrproviderState :AddressProviderState ={
  baseParams: {
      addr: addressProvider,
      version: BigInt(300),
      contractType: "0x",
      serializedParams: "0x",
  },
  addresses: {},
};
  const sdk = GearboxSDK.hydrate(
    {
      plugins: {
        // stalenessV300: V300StalenessPeriodPlugin,
      },
      rpcURLs: [RPC],
      timeout: 480_000,
      logger,
      strictContractTypes: true,
    },
    {
      chainId,
      network: networkType,
      currentBlock: 22773835n -1000n,
      timestamp: 0n, // Example timestamp, adjust as needed
      plugins:{},
      markets: [],
      addressProvider: _addrproviderState,
      version: 1
    }
  );

  let addrprovider = await createAddressProvider(sdk, addressProvider);


  let client = createAnvilClient(config);

await  addrprovider.syncState(sdk.currentBlock);
// let marketCompressorAddress = addrprovider.mustGetLatest("MARKET_COMPRESSOR", VERSION_RANGE_310)[0];
// let market = await provider.publicClient.readContract({
//         abi: iMarketCompressorAbi,
//         address: marketCompressorAddress,
//         functionName: "getMarketData",
//         args: [poolAddr],
//         blockNumber: sdk.currentBlock,
//       });

// for (const cm of market.creditManagers) {
//   if (cm.creditManager.baseParams.addr === creditManagerAddr) {
//     await setLTZero(client, market.creditManagers[0] ,logger);
//     console.log("Found credit manager:", cm.creditManager.baseParams.addr);
//   }
// }

let creditSuiteABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "creditManager",
        "type": "address"
      }
    ],
    "name": "getCreditSuiteData",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "version",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "contractType",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes",
                    "name": "serializedParams",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct BaseParams",
                "name": "baseParams",
                "type": "tuple"
              },
              {
                "internalType": "address",
                "name": "creditManager",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "degenNFT",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "botList",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "expirable",
                "type": "bool"
              },
              {
                "internalType": "uint40",
                "name": "expirationDate",
                "type": "uint40"
              },
              {
                "internalType": "uint8",
                "name": "maxDebtPerBlockMultiplier",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "minDebt",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "maxDebt",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "forbiddenTokenMask",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isPaused",
                "type": "bool"
              }
            ],
            "internalType": "struct CreditFacadeState",
            "name": "creditFacade",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "version",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "contractType",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes",
                    "name": "serializedParams",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct BaseParams",
                "name": "baseParams",
                "type": "tuple"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "accountFactory",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "underlying",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "pool",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "creditFacade",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "creditConfigurator",
                "type": "address"
              },
              {
                "internalType": "uint8",
                "name": "maxEnabledTokens",
                "type": "uint8"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                  },
                  {
                    "internalType": "uint16",
                    "name": "liquidationThreshold",
                    "type": "uint16"
                  }
                ],
                "internalType": "struct CollateralToken[]",
                "name": "collateralTokens",
                "type": "tuple[]"
              },
              {
                "internalType": "uint16",
                "name": "feeInterest",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "feeLiquidation",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "liquidationDiscount",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "feeLiquidationExpired",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "liquidationDiscountExpired",
                "type": "uint16"
              }
            ],
            "internalType": "struct CreditManagerState",
            "name": "creditManager",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "version",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "contractType",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes",
                    "name": "serializedParams",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct BaseParams",
                "name": "baseParams",
                "type": "tuple"
              }
            ],
            "internalType": "struct BaseState",
            "name": "creditConfigurator",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "version",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "contractType",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes",
                    "name": "serializedParams",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct BaseParams",
                "name": "baseParams",
                "type": "tuple"
              },
              {
                "internalType": "address",
                "name": "targetContract",
                "type": "address"
              }
            ],
            "internalType": "struct AdapterState[]",
            "name": "adapters",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct CreditSuiteData",
        "name": "result",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
];
let marketCompressorAddress = addrprovider.mustGetLatest("CREDIT_SUITE_COMPRESSOR", VERSION_RANGE_310)[0];
let creditSuiteLocal = await provider.publicClient.readContract({
        abi: creditSuiteABI,
        address: marketCompressorAddress,
        functionName: "getCreditSuiteData",
        args: [creditManagerAddr],
        blockNumber: sdk.currentBlock,
      });

      let creditSuiteLocalJson =      JSON.stringify(creditSuiteLocal, (key, value) =>
        typeof value === "bigint" ? Number(value) : value,
      );
      let obj: CreditSuiteState = JSON.parse(creditSuiteLocalJson);
      console.log(obj);


      await setLTZero(client, obj ,logger);
