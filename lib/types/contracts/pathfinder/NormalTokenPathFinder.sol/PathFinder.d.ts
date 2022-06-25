import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace PathFinder {
    type TradePathStruct = {
        path: string[];
        rate: BigNumberish;
        expectedAmount: BigNumberish;
    };
    type TradePathStructOutput = [string[], BigNumber, BigNumber] & {
        path: string[];
        rate: BigNumber;
        expectedAmount: BigNumber;
    };
}
export interface PathFinderInterface extends utils.Interface {
    functions: {
        "bestPath(address[],uint256,address,address,uint256,address[])": FunctionFragment;
        "bestUniPath(uint8,address,uint256,address,address,uint256,address[])": FunctionFragment;
        "convertPathToPathV3(address[],uint256)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bestPath" | "bestUniPath" | "convertPathToPathV3" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "bestPath", values: [string[], BigNumberish, string, string, BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "bestUniPath", values: [
        BigNumberish,
        string,
        BigNumberish,
        string,
        string,
        BigNumberish,
        string[]
    ]): string;
    encodeFunctionData(functionFragment: "convertPathToPathV3", values: [string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bestPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bestUniPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertPathToPathV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface PathFinder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PathFinderInterface;
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
        bestPath(adapters: string[], swapType: BigNumberish, from: string, to: string, amount: BigNumberish, connectors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bestUniPath(swapInterface: BigNumberish, router: string, swapType: BigNumberish, from: string, to: string, amount: BigNumberish, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        convertPathToPathV3(path: string[], swapType: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    bestPath(adapters: string[], swapType: BigNumberish, from: string, to: string, amount: BigNumberish, connectors: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bestUniPath(swapInterface: BigNumberish, router: string, swapType: BigNumberish, from: string, to: string, amount: BigNumberish, tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    convertPathToPathV3(path: string[], swapType: BigNumberish, overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        bestPath(adapters: string[], swapType: BigNumberish, from: string, to: string, amount: BigNumberish, connectors: string[], overrides?: CallOverrides): Promise<PathFinder.TradePathStructOutput>;
        bestUniPath(swapInterface: BigNumberish, router: string, swapType: BigNumberish, from: string, to: string, amount: BigNumberish, tokens: string[], overrides?: CallOverrides): Promise<PathFinder.TradePathStructOutput>;
        convertPathToPathV3(path: string[], swapType: BigNumberish, overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        bestPath(adapters: string[], swapType: BigNumberish, from: string, to: string, amount: BigNumberish, connectors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bestUniPath(swapInterface: BigNumberish, router: string, swapType: BigNumberish, from: string, to: string, amount: BigNumberish, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        convertPathToPathV3(path: string[], swapType: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bestPath(adapters: string[], swapType: BigNumberish, from: string, to: string, amount: BigNumberish, connectors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bestUniPath(swapInterface: BigNumberish, router: string, swapType: BigNumberish, from: string, to: string, amount: BigNumberish, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        convertPathToPathV3(path: string[], swapType: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
