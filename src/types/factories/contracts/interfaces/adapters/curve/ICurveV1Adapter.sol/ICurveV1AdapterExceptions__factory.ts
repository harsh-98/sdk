/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICurveV1AdapterExceptions,
  ICurveV1AdapterExceptionsInterface,
} from "../../../../../../contracts/interfaces/adapters/curve/ICurveV1Adapter.sol/ICurveV1AdapterExceptions";

const _abi = [
  {
    inputs: [],
    name: "IncorrectIndexException",
    type: "error",
  },
];

export class ICurveV1AdapterExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveV1AdapterExceptionsInterface {
    return new utils.Interface(_abi) as ICurveV1AdapterExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveV1AdapterExceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICurveV1AdapterExceptions;
  }
}
