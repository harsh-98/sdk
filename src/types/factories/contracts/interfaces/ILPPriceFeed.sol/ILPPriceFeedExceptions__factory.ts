/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILPPriceFeedExceptions,
  ILPPriceFeedExceptionsInterface,
} from "../../../../contracts/interfaces/ILPPriceFeed.sol/ILPPriceFeedExceptions";

const _abi = [
  {
    inputs: [],
    name: "IncorrectLimitsException",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueOutOfRangeException",
    type: "error",
  },
];

export class ILPPriceFeedExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): ILPPriceFeedExceptionsInterface {
    return new utils.Interface(_abi) as ILPPriceFeedExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILPPriceFeedExceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILPPriceFeedExceptions;
  }
}
