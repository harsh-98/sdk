import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IAddressProviderInterface extends utils.Interface {
    functions: {
        "getACL()": FunctionFragment;
        "getAccountFactory()": FunctionFragment;
        "getContractsRegister()": FunctionFragment;
        "getDataCompressor()": FunctionFragment;
        "getGearToken()": FunctionFragment;
        "getPriceOracle()": FunctionFragment;
        "getTreasuryContract()": FunctionFragment;
        "getWETHGateway()": FunctionFragment;
        "getWethToken()": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getACL" | "getAccountFactory" | "getContractsRegister" | "getDataCompressor" | "getGearToken" | "getPriceOracle" | "getTreasuryContract" | "getWETHGateway" | "getWethToken" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "getACL", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContractsRegister", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDataCompressor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGearToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTreasuryContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWETHGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWethToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getACL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractsRegister", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataCompressor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGearToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWETHGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWethToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "AddressSet(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
}
export interface AddressSetEventObject {
    service: string;
    newAddress: string;
}
export declare type AddressSetEvent = TypedEvent<[
    string,
    string
], AddressSetEventObject>;
export declare type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;
export interface IAddressProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAddressProviderInterface;
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
        getACL(overrides?: CallOverrides): Promise<[string]>;
        getAccountFactory(overrides?: CallOverrides): Promise<[string]>;
        getContractsRegister(overrides?: CallOverrides): Promise<[string]>;
        getDataCompressor(overrides?: CallOverrides): Promise<[string]>;
        getGearToken(overrides?: CallOverrides): Promise<[string]>;
        getPriceOracle(overrides?: CallOverrides): Promise<[string]>;
        getTreasuryContract(overrides?: CallOverrides): Promise<[string]>;
        getWETHGateway(overrides?: CallOverrides): Promise<[string]>;
        getWethToken(overrides?: CallOverrides): Promise<[string]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getACL(overrides?: CallOverrides): Promise<string>;
    getAccountFactory(overrides?: CallOverrides): Promise<string>;
    getContractsRegister(overrides?: CallOverrides): Promise<string>;
    getDataCompressor(overrides?: CallOverrides): Promise<string>;
    getGearToken(overrides?: CallOverrides): Promise<string>;
    getPriceOracle(overrides?: CallOverrides): Promise<string>;
    getTreasuryContract(overrides?: CallOverrides): Promise<string>;
    getWETHGateway(overrides?: CallOverrides): Promise<string>;
    getWethToken(overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getACL(overrides?: CallOverrides): Promise<string>;
        getAccountFactory(overrides?: CallOverrides): Promise<string>;
        getContractsRegister(overrides?: CallOverrides): Promise<string>;
        getDataCompressor(overrides?: CallOverrides): Promise<string>;
        getGearToken(overrides?: CallOverrides): Promise<string>;
        getPriceOracle(overrides?: CallOverrides): Promise<string>;
        getTreasuryContract(overrides?: CallOverrides): Promise<string>;
        getWETHGateway(overrides?: CallOverrides): Promise<string>;
        getWethToken(overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddressSet(bytes32,address)"(service?: BytesLike | null, newAddress?: string | null): AddressSetEventFilter;
        AddressSet(service?: BytesLike | null, newAddress?: string | null): AddressSetEventFilter;
    };
    estimateGas: {
        getACL(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getContractsRegister(overrides?: CallOverrides): Promise<BigNumber>;
        getDataCompressor(overrides?: CallOverrides): Promise<BigNumber>;
        getGearToken(overrides?: CallOverrides): Promise<BigNumber>;
        getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        getTreasuryContract(overrides?: CallOverrides): Promise<BigNumber>;
        getWETHGateway(overrides?: CallOverrides): Promise<BigNumber>;
        getWethToken(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContractsRegister(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataCompressor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGearToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTreasuryContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWETHGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
