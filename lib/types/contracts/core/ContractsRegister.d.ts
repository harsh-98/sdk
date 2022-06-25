import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface ContractsRegisterInterface extends utils.Interface {
    functions: {
        "_acl()": FunctionFragment;
        "addCreditManager(address)": FunctionFragment;
        "addPool(address)": FunctionFragment;
        "creditManagers(uint256)": FunctionFragment;
        "getCreditManagers()": FunctionFragment;
        "getCreditManagersCount()": FunctionFragment;
        "getPools()": FunctionFragment;
        "getPoolsCount()": FunctionFragment;
        "isCreditManager(address)": FunctionFragment;
        "isPool(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "pools(uint256)": FunctionFragment;
        "unpause()": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_acl" | "addCreditManager" | "addPool" | "creditManagers" | "getCreditManagers" | "getCreditManagersCount" | "getPools" | "getPoolsCount" | "isCreditManager" | "isPool" | "pause" | "paused" | "pools" | "unpause" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "_acl", values?: undefined): string;
    encodeFunctionData(functionFragment: "addCreditManager", values: [string]): string;
    encodeFunctionData(functionFragment: "addPool", values: [string]): string;
    encodeFunctionData(functionFragment: "creditManagers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCreditManagers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCreditManagersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPools", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCreditManager", values: [string]): string;
    encodeFunctionData(functionFragment: "isPool", values: [string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_acl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCreditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditManagers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditManagersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCreditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "NewCreditManagerAdded(address)": EventFragment;
        "NewPoolAdded(address)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewCreditManagerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPoolAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface NewCreditManagerAddedEventObject {
    creditManager: string;
}
export declare type NewCreditManagerAddedEvent = TypedEvent<[
    string
], NewCreditManagerAddedEventObject>;
export declare type NewCreditManagerAddedEventFilter = TypedEventFilter<NewCreditManagerAddedEvent>;
export interface NewPoolAddedEventObject {
    pool: string;
}
export declare type NewPoolAddedEvent = TypedEvent<[string], NewPoolAddedEventObject>;
export declare type NewPoolAddedEventFilter = TypedEventFilter<NewPoolAddedEvent>;
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
export interface ContractsRegister extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ContractsRegisterInterface;
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
        addCreditManager(newCreditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addPool(newPoolAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getCreditManagers(overrides?: CallOverrides): Promise<[string[]]>;
        getCreditManagersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPools(overrides?: CallOverrides): Promise<[string[]]>;
        getPoolsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        isCreditManager(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPool(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _acl(overrides?: CallOverrides): Promise<string>;
    addCreditManager(newCreditManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addPool(newPoolAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getCreditManagers(overrides?: CallOverrides): Promise<string[]>;
    getCreditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
    getPools(overrides?: CallOverrides): Promise<string[]>;
    getPoolsCount(overrides?: CallOverrides): Promise<BigNumber>;
    isCreditManager(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    isPool(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _acl(overrides?: CallOverrides): Promise<string>;
        addCreditManager(newCreditManager: string, overrides?: CallOverrides): Promise<void>;
        addPool(newPoolAddress: string, overrides?: CallOverrides): Promise<void>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getCreditManagers(overrides?: CallOverrides): Promise<string[]>;
        getCreditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPools(overrides?: CallOverrides): Promise<string[]>;
        getPoolsCount(overrides?: CallOverrides): Promise<BigNumber>;
        isCreditManager(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        isPool(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewCreditManagerAdded(address)"(creditManager?: string | null): NewCreditManagerAddedEventFilter;
        NewCreditManagerAdded(creditManager?: string | null): NewCreditManagerAddedEventFilter;
        "NewPoolAdded(address)"(pool?: string | null): NewPoolAddedEventFilter;
        NewPoolAdded(pool?: string | null): NewPoolAddedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        _acl(overrides?: CallOverrides): Promise<BigNumber>;
        addCreditManager(newCreditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addPool(newPoolAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCreditManagers(overrides?: CallOverrides): Promise<BigNumber>;
        getCreditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
        getPools(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolsCount(overrides?: CallOverrides): Promise<BigNumber>;
        isCreditManager(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addCreditManager(newCreditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addPool(newPoolAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditManagers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreditManagersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCreditManager(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPool(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
