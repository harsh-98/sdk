import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICreditAccountInterface extends utils.Interface {
    functions: {
        "borrowedAmount()": FunctionFragment;
        "cancelAllowance(address,address)": FunctionFragment;
        "connectTo(address,uint256,uint256)": FunctionFragment;
        "creditManager()": FunctionFragment;
        "cumulativeIndexAtOpen()": FunctionFragment;
        "execute(address,bytes)": FunctionFragment;
        "factory()": FunctionFragment;
        "initialize()": FunctionFragment;
        "safeTransfer(address,address,uint256)": FunctionFragment;
        "since()": FunctionFragment;
        "updateParameters(uint256,uint256)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "borrowedAmount" | "cancelAllowance" | "connectTo" | "creditManager" | "cumulativeIndexAtOpen" | "execute" | "factory" | "initialize" | "safeTransfer" | "since" | "updateParameters" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "borrowedAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "connectTo", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "cumulativeIndexAtOpen", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransfer", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "since", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateParameters", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "borrowedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeIndexAtOpen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "since", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface ICreditAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditAccountInterface;
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
        borrowedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        cancelAllowance(token: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        connectTo(_creditManager: string, _borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<[BigNumber]>;
        execute(destination: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransfer(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        since(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateParameters(_borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    borrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;
    cancelAllowance(token: string, targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    connectTo(_creditManager: string, _borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<BigNumber>;
    execute(destination: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransfer(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    since(overrides?: CallOverrides): Promise<BigNumber>;
    updateParameters(_borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        borrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;
        cancelAllowance(token: string, targetContract: string, overrides?: CallOverrides): Promise<void>;
        connectTo(_creditManager: string, _borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: CallOverrides): Promise<void>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<BigNumber>;
        execute(destination: string, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        safeTransfer(token: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        since(overrides?: CallOverrides): Promise<BigNumber>;
        updateParameters(_borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        borrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;
        cancelAllowance(token: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        connectTo(_creditManager: string, _borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<BigNumber>;
        execute(destination: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransfer(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        since(overrides?: CallOverrides): Promise<BigNumber>;
        updateParameters(_borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        borrowedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelAllowance(token: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        connectTo(_creditManager: string, _borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cumulativeIndexAtOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(destination: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransfer(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        since(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateParameters(_borrowedAmount: BigNumberish, _cumulativeIndexAtOpen: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
