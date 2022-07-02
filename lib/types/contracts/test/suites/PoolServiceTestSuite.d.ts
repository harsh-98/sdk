import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface PoolServiceTestSuiteInterface extends utils.Interface {
    functions: {
        "acl()": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "cmMock()": FunctionFragment;
        "dieselToken()": FunctionFragment;
        "linearIRModel()": FunctionFragment;
        "poolService()": FunctionFragment;
        "treasury()": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acl" | "addressProvider" | "cmMock" | "dieselToken" | "linearIRModel" | "poolService" | "treasury" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "acl", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "cmMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "dieselToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "linearIRModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolService", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cmMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dieselToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linearIRModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    events: {};
}
export interface PoolServiceTestSuite extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolServiceTestSuiteInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        acl(overrides?: CallOverrides): Promise<[string]>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        cmMock(overrides?: CallOverrides): Promise<[string]>;
        dieselToken(overrides?: CallOverrides): Promise<[string]>;
        linearIRModel(overrides?: CallOverrides): Promise<[string]>;
        poolService(overrides?: CallOverrides): Promise<[string]>;
        treasury(overrides?: CallOverrides): Promise<[string]>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    acl(overrides?: CallOverrides): Promise<string>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    cmMock(overrides?: CallOverrides): Promise<string>;
    dieselToken(overrides?: CallOverrides): Promise<string>;
    linearIRModel(overrides?: CallOverrides): Promise<string>;
    poolService(overrides?: CallOverrides): Promise<string>;
    treasury(overrides?: CallOverrides): Promise<string>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        acl(overrides?: CallOverrides): Promise<string>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        cmMock(overrides?: CallOverrides): Promise<string>;
        dieselToken(overrides?: CallOverrides): Promise<string>;
        linearIRModel(overrides?: CallOverrides): Promise<string>;
        poolService(overrides?: CallOverrides): Promise<string>;
        treasury(overrides?: CallOverrides): Promise<string>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        acl(overrides?: CallOverrides): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        cmMock(overrides?: CallOverrides): Promise<BigNumber>;
        dieselToken(overrides?: CallOverrides): Promise<BigNumber>;
        linearIRModel(overrides?: CallOverrides): Promise<BigNumber>;
        poolService(overrides?: CallOverrides): Promise<BigNumber>;
        treasury(overrides?: CallOverrides): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cmMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dieselToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        linearIRModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}