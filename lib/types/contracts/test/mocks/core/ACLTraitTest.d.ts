import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface ACLTraitTestInterface extends utils.Interface {
    functions: {
        "_acl()": FunctionFragment;
        "accessConfiguratorOnly()": FunctionFragment;
        "accessWhenNotPaused()": FunctionFragment;
        "accessWhenPaused()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_acl" | "accessConfiguratorOnly" | "accessWhenNotPaused" | "accessWhenPaused" | "pause" | "paused" | "unpause"): FunctionFragment;
    encodeFunctionData(functionFragment: "_acl", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessConfiguratorOnly", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessWhenNotPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessWhenPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_acl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessConfiguratorOnly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessWhenNotPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessWhenPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface ACLTraitTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ACLTraitTestInterface;
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
        _acl(overrides?: CallOverrides): Promise<[string]>;
        accessConfiguratorOnly(overrides?: CallOverrides): Promise<[void]>;
        accessWhenNotPaused(overrides?: CallOverrides): Promise<[void]>;
        accessWhenPaused(overrides?: CallOverrides): Promise<[void]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _acl(overrides?: CallOverrides): Promise<string>;
    accessConfiguratorOnly(overrides?: CallOverrides): Promise<void>;
    accessWhenNotPaused(overrides?: CallOverrides): Promise<void>;
    accessWhenPaused(overrides?: CallOverrides): Promise<void>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _acl(overrides?: CallOverrides): Promise<string>;
        accessConfiguratorOnly(overrides?: CallOverrides): Promise<void>;
        accessWhenNotPaused(overrides?: CallOverrides): Promise<void>;
        accessWhenPaused(overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        _acl(overrides?: CallOverrides): Promise<BigNumber>;
        accessConfiguratorOnly(overrides?: CallOverrides): Promise<BigNumber>;
        accessWhenNotPaused(overrides?: CallOverrides): Promise<BigNumber>;
        accessWhenPaused(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessConfiguratorOnly(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessWhenNotPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessWhenPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
