/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../../common";

export declare namespace IUniswapV3Adapter {
  export type ExactAllInputParamsStruct = {
    path: BytesLike;
    deadline: BigNumberish;
    rateMinRAY: BigNumberish;
  };

  export type ExactAllInputParamsStructOutput = [
    string,
    BigNumber,
    BigNumber
  ] & { path: string; deadline: BigNumber; rateMinRAY: BigNumber };

  export type ExactAllInputSingleParamsStruct = {
    tokenIn: string;
    tokenOut: string;
    fee: BigNumberish;
    deadline: BigNumberish;
    rateMinRAY: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactAllInputSingleParamsStructOutput = [
    string,
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    deadline: BigNumber;
    rateMinRAY: BigNumber;
    sqrtPriceLimitX96: BigNumber;
  };
}

export declare namespace ISwapRouter {
  export type ExactInputParamsStruct = {
    path: BytesLike;
    recipient: string;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
  };

  export type ExactInputParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    path: string;
    recipient: string;
    deadline: BigNumber;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
  };

  export type ExactInputSingleParamsStruct = {
    tokenIn: string;
    tokenOut: string;
    fee: BigNumberish;
    recipient: string;
    deadline: BigNumberish;
    amountIn: BigNumberish;
    amountOutMinimum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactInputSingleParamsStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    recipient: string;
    deadline: BigNumber;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
    sqrtPriceLimitX96: BigNumber;
  };

  export type ExactOutputParamsStruct = {
    path: BytesLike;
    recipient: string;
    deadline: BigNumberish;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
  };

  export type ExactOutputParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    path: string;
    recipient: string;
    deadline: BigNumber;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
  };

  export type ExactOutputSingleParamsStruct = {
    tokenIn: string;
    tokenOut: string;
    fee: BigNumberish;
    recipient: string;
    deadline: BigNumberish;
    amountOut: BigNumberish;
    amountInMaximum: BigNumberish;
    sqrtPriceLimitX96: BigNumberish;
  };

  export type ExactOutputSingleParamsStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    recipient: string;
    deadline: BigNumber;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
    sqrtPriceLimitX96: BigNumber;
  };
}

export interface IUniswapV3AdapterInterface extends utils.Interface {
  functions: {
    "_gearboxAdapterType()": FunctionFragment;
    "_gearboxAdapterVersion()": FunctionFragment;
    "creditFacade()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "exactAllInput((bytes,uint256,uint256))": FunctionFragment;
    "exactAllInputSingle((address,address,uint24,uint256,uint256,uint160))": FunctionFragment;
    "exactInput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
    "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
    "exactOutput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
    "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
    "targetContract()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_gearboxAdapterType"
      | "_gearboxAdapterVersion"
      | "creditFacade"
      | "creditManager"
      | "exactAllInput"
      | "exactAllInputSingle"
      | "exactInput"
      | "exactInputSingle"
      | "exactOutput"
      | "exactOutputSingle"
      | "targetContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_gearboxAdapterType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_gearboxAdapterVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditFacade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exactAllInput",
    values: [IUniswapV3Adapter.ExactAllInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactAllInputSingle",
    values: [IUniswapV3Adapter.ExactAllInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInput",
    values: [ISwapRouter.ExactInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [ISwapRouter.ExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [ISwapRouter.ExactOutputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [ISwapRouter.ExactOutputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "targetContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_gearboxAdapterType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_gearboxAdapterVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFacade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactAllInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactAllInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IUniswapV3Adapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV3AdapterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _gearboxAdapterType(overrides?: CallOverrides): Promise<[number]>;

    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<[number]>;

    creditFacade(overrides?: CallOverrides): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    exactAllInput(
      params: IUniswapV3Adapter.ExactAllInputParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactAllInputSingle(
      params: IUniswapV3Adapter.ExactAllInputSingleParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactInput(
      params: ISwapRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactInputSingle(
      params: ISwapRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutput(
      params: ISwapRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutputSingle(
      params: ISwapRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    targetContract(overrides?: CallOverrides): Promise<[string]>;
  };

  _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;

  _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;

  creditFacade(overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  exactAllInput(
    params: IUniswapV3Adapter.ExactAllInputParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactAllInputSingle(
    params: IUniswapV3Adapter.ExactAllInputSingleParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactInput(
    params: ISwapRouter.ExactInputParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactInputSingle(
    params: ISwapRouter.ExactInputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutput(
    params: ISwapRouter.ExactOutputParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutputSingle(
    params: ISwapRouter.ExactOutputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  targetContract(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;

    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;

    creditFacade(overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    exactAllInput(
      params: IUniswapV3Adapter.ExactAllInputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactAllInputSingle(
      params: IUniswapV3Adapter.ExactAllInputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInput(
      params: ISwapRouter.ExactInputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      params: ISwapRouter.ExactInputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: ISwapRouter.ExactOutputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: ISwapRouter.ExactOutputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetContract(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;

    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;

    creditFacade(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    exactAllInput(
      params: IUniswapV3Adapter.ExactAllInputParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactAllInputSingle(
      params: IUniswapV3Adapter.ExactAllInputSingleParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactInput(
      params: ISwapRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactInputSingle(
      params: ISwapRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutput(
      params: ISwapRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: ISwapRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    targetContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _gearboxAdapterType(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _gearboxAdapterVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exactAllInput(
      params: IUniswapV3Adapter.ExactAllInputParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactAllInputSingle(
      params: IUniswapV3Adapter.ExactAllInputSingleParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactInput(
      params: ISwapRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactInputSingle(
      params: ISwapRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutput(
      params: ISwapRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutputSingle(
      params: ISwapRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
