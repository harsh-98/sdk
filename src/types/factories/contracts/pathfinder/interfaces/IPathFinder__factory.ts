/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPathFinder,
  IPathFinderInterface,
} from "../../../../contracts/pathfinder/interfaces/IPathFinder";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum PathFinderComponent",
        name: "",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "PathFinderComponentUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "enum PathFinderComponent",
        name: "",
        type: "uint8",
      },
    ],
    name: "ResolverUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum PathFinderComponent",
        name: "pf",
        type: "uint8",
      },
    ],
    name: "componentAddressById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum SwapOperation",
            name: "swapOperation",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "creditAccount",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "connectors",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "externalSlippage",
            type: "bool",
          },
        ],
        internalType: "struct SwapTask",
        name: "swapTask",
        type: "tuple",
      },
    ],
    name: "findAllSwaps",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct PathFinderResult[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "slippage",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "option",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "totalOptions",
            type: "uint8",
          },
        ],
        internalType: "struct PathOption[]",
        name: "pathOptions",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "iterations",
        type: "uint256",
      },
    ],
    name: "findBestClosePath",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct PathFinderResult",
        name: "result",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "slippage",
        type: "uint256",
      },
    ],
    name: "findOneTokenPath",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct PathFinderResult",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct Balance[]",
        name: "balances",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "slippage",
        type: "uint256",
      },
    ],
    name: "findOpenStrategyPath",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct Balance[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall[]",
            name: "calls",
            type: "tuple[]",
          },
        ],
        internalType: "struct PathFinderResult",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getGasPriceTokenOutRAY",
    outputs: [
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isPathFinderConfigurator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenTypes",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPathFinder__factory {
  static readonly abi = _abi;
  static createInterface(): IPathFinderInterface {
    return new utils.Interface(_abi) as IPathFinderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPathFinder {
    return new Contract(address, _abi, signerOrProvider) as IPathFinder;
  }
}
