/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICrvDeposit,
  ICrvDepositInterface,
} from "../../../../../contracts/integrations/convex/Interfaces.sol/ICrvDeposit";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockIncentive",
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

export class ICrvDeposit__factory {
  static readonly abi = _abi;
  static createInterface(): ICrvDepositInterface {
    return new utils.Interface(_abi) as ICrvDepositInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICrvDeposit {
    return new Contract(address, _abi, signerOrProvider) as ICrvDeposit;
  }
}
