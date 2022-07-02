import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IPriceFeedAddressInterface extends utils.Interface {
    functions: {
        "decimals()": FunctionFragment;
        "description()": FunctionFragment;
        "latestRoundData(address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decimals" | "description" | "latestRoundData" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "description", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestRoundData", values: [string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface IPriceFeedAddress extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceFeedAddressInterface;
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
        decimals(overrides?: CallOverrides): Promise<[number]>;
        description(overrides?: CallOverrides): Promise<[string]>;
        latestRoundData(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    decimals(overrides?: CallOverrides): Promise<number>;
    description(overrides?: CallOverrides): Promise<string>;
    latestRoundData(creditAccount: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
    }>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        decimals(overrides?: CallOverrides): Promise<number>;
        description(overrides?: CallOverrides): Promise<string>;
        latestRoundData(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        description(overrides?: CallOverrides): Promise<BigNumber>;
        latestRoundData(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        description(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestRoundData(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
