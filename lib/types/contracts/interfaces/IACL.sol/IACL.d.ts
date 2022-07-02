import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IACLInterface extends utils.Interface {
    functions: {
        "isConfigurator(address)": FunctionFragment;
        "isPausableAdmin(address)": FunctionFragment;
        "isUnpausableAdmin(address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isConfigurator" | "isPausableAdmin" | "isUnpausableAdmin" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "isConfigurator", values: [string]): string;
    encodeFunctionData(functionFragment: "isPausableAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "isUnpausableAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "isConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPausableAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isUnpausableAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "PausableAdminAdded(address)": EventFragment;
        "PausableAdminRemoved(address)": EventFragment;
        "UnpausableAdminAdded(address)": EventFragment;
        "UnpausableAdminRemoved(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PausableAdminAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PausableAdminRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnpausableAdminAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnpausableAdminRemoved"): EventFragment;
}
export interface PausableAdminAddedEventObject {
    newAdmin: string;
}
export declare type PausableAdminAddedEvent = TypedEvent<[
    string
], PausableAdminAddedEventObject>;
export declare type PausableAdminAddedEventFilter = TypedEventFilter<PausableAdminAddedEvent>;
export interface PausableAdminRemovedEventObject {
    admin: string;
}
export declare type PausableAdminRemovedEvent = TypedEvent<[
    string
], PausableAdminRemovedEventObject>;
export declare type PausableAdminRemovedEventFilter = TypedEventFilter<PausableAdminRemovedEvent>;
export interface UnpausableAdminAddedEventObject {
    newAdmin: string;
}
export declare type UnpausableAdminAddedEvent = TypedEvent<[
    string
], UnpausableAdminAddedEventObject>;
export declare type UnpausableAdminAddedEventFilter = TypedEventFilter<UnpausableAdminAddedEvent>;
export interface UnpausableAdminRemovedEventObject {
    admin: string;
}
export declare type UnpausableAdminRemovedEvent = TypedEvent<[
    string
], UnpausableAdminRemovedEventObject>;
export declare type UnpausableAdminRemovedEventFilter = TypedEventFilter<UnpausableAdminRemovedEvent>;
export interface IACL extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IACLInterface;
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
        isConfigurator(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        isUnpausableAdmin(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    isConfigurator(account: string, overrides?: CallOverrides): Promise<boolean>;
    isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;
    isUnpausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        isConfigurator(account: string, overrides?: CallOverrides): Promise<boolean>;
        isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;
        isUnpausableAdmin(addr: string, overrides?: CallOverrides): Promise<boolean>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "PausableAdminAdded(address)"(newAdmin?: string | null): PausableAdminAddedEventFilter;
        PausableAdminAdded(newAdmin?: string | null): PausableAdminAddedEventFilter;
        "PausableAdminRemoved(address)"(admin?: string | null): PausableAdminRemovedEventFilter;
        PausableAdminRemoved(admin?: string | null): PausableAdminRemovedEventFilter;
        "UnpausableAdminAdded(address)"(newAdmin?: string | null): UnpausableAdminAddedEventFilter;
        UnpausableAdminAdded(newAdmin?: string | null): UnpausableAdminAddedEventFilter;
        "UnpausableAdminRemoved(address)"(admin?: string | null): UnpausableAdminRemovedEventFilter;
        UnpausableAdminRemoved(admin?: string | null): UnpausableAdminRemovedEventFilter;
    };
    estimateGas: {
        isConfigurator(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        isUnpausableAdmin(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isConfigurator(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPausableAdmin(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isUnpausableAdmin(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
