import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface LinearInterestRateModelInterface extends utils.Interface {
    functions: {
        "_R_base_RAY()": FunctionFragment;
        "_R_slope1_RAY()": FunctionFragment;
        "_R_slope2_RAY()": FunctionFragment;
        "_U_Optimal_WAD()": FunctionFragment;
        "_U_Optimal_inverted_WAD()": FunctionFragment;
        "calcBorrowRate(uint256,uint256)": FunctionFragment;
        "getModelParameters()": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_R_base_RAY" | "_R_slope1_RAY" | "_R_slope2_RAY" | "_U_Optimal_WAD" | "_U_Optimal_inverted_WAD" | "calcBorrowRate" | "getModelParameters" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "_R_base_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "_R_slope1_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "_R_slope2_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "_U_Optimal_WAD", values?: undefined): string;
    encodeFunctionData(functionFragment: "_U_Optimal_inverted_WAD", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcBorrowRate", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getModelParameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_R_base_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_R_slope1_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_R_slope2_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_U_Optimal_WAD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_U_Optimal_inverted_WAD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModelParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface LinearInterestRateModel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LinearInterestRateModelInterface;
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
        _R_base_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        _R_slope1_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        _R_slope2_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        _U_Optimal_WAD(overrides?: CallOverrides): Promise<[BigNumber]>;
        _U_Optimal_inverted_WAD(overrides?: CallOverrides): Promise<[BigNumber]>;
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getModelParameters(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            U_optimal: BigNumber;
            R_base: BigNumber;
            R_slope1: BigNumber;
            R_slope2: BigNumber;
        }>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _R_base_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    _R_slope1_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    _R_slope2_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    _U_Optimal_WAD(overrides?: CallOverrides): Promise<BigNumber>;
    _U_Optimal_inverted_WAD(overrides?: CallOverrides): Promise<BigNumber>;
    calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getModelParameters(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        U_optimal: BigNumber;
        R_base: BigNumber;
        R_slope1: BigNumber;
        R_slope2: BigNumber;
    }>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _R_base_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _R_slope1_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _R_slope2_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _U_Optimal_WAD(overrides?: CallOverrides): Promise<BigNumber>;
        _U_Optimal_inverted_WAD(overrides?: CallOverrides): Promise<BigNumber>;
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getModelParameters(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            U_optimal: BigNumber;
            R_base: BigNumber;
            R_slope1: BigNumber;
            R_slope2: BigNumber;
        }>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        _R_base_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _R_slope1_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _R_slope2_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _U_Optimal_WAD(overrides?: CallOverrides): Promise<BigNumber>;
        _U_Optimal_inverted_WAD(overrides?: CallOverrides): Promise<BigNumber>;
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getModelParameters(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _R_base_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _R_slope1_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _R_slope2_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _U_Optimal_WAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _U_Optimal_inverted_WAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getModelParameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}