import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IInterestRateModelInterface extends utils.Interface {
    functions: {
        "calcBorrowRate(uint256,uint256)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcBorrowRate" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcBorrowRate", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "calcBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface IInterestRateModel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IInterestRateModelInterface;
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
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calcBorrowRate(expectedLiquidity: BigNumberish, availableLiquidity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
