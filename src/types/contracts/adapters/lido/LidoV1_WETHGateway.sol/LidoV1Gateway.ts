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
} from "../../../../common";

export interface LidoV1GatewayInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "getFee()": FunctionFragment;
    "getPooledEthByShares(uint256)": FunctionFragment;
    "getSharesByPooledEth(uint256)": FunctionFragment;
    "getTotalPooledEther()": FunctionFragment;
    "getTotalShares()": FunctionFragment;
    "name()": FunctionFragment;
    "sharesOf(address)": FunctionFragment;
    "stETH()": FunctionFragment;
    "submit(uint256,address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "weth()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowance"
      | "balanceOf"
      | "decimals"
      | "getFee"
      | "getPooledEthByShares"
      | "getSharesByPooledEth"
      | "getTotalPooledEther"
      | "getTotalShares"
      | "name"
      | "sharesOf"
      | "stETH"
      | "submit"
      | "symbol"
      | "totalSupply"
      | "weth"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "getFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPooledEthByShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSharesByPooledEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPooledEther",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalShares",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "sharesOf", values: [string]): string;
  encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "submit",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPooledEthByShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSharesByPooledEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPooledEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sharesOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "submit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {};
}

export interface LidoV1Gateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LidoV1GatewayInterface;

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
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    getFee(overrides?: CallOverrides): Promise<[number]>;

    getPooledEthByShares(
      _sharesAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSharesByPooledEth(
      _ethAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalPooledEther(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    sharesOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    stETH(overrides?: CallOverrides): Promise<[string]>;

    submit(
      amount: BigNumberish,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  allowance(
    _owner: string,
    _spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  getFee(overrides?: CallOverrides): Promise<number>;

  getPooledEthByShares(
    _sharesAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSharesByPooledEth(
    _ethAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalPooledEther(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalShares(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  sharesOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  stETH(overrides?: CallOverrides): Promise<string>;

  submit(
    amount: BigNumberish,
    _referral: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    getFee(overrides?: CallOverrides): Promise<number>;

    getPooledEthByShares(
      _sharesAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSharesByPooledEth(
      _ethAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPooledEther(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalShares(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    sharesOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    stETH(overrides?: CallOverrides): Promise<string>;

    submit(
      amount: BigNumberish,
      _referral: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPooledEthByShares(
      _sharesAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSharesByPooledEth(
      _ethAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPooledEther(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalShares(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    sharesOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    stETH(overrides?: CallOverrides): Promise<BigNumber>;

    submit(
      amount: BigNumberish,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPooledEthByShares(
      _sharesAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSharesByPooledEth(
      _ethAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPooledEther(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sharesOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    submit(
      amount: BigNumberish,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
