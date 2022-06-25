import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IClaimZapInterface extends utils.Interface {
    functions: {
        "claimRewards(address[],address[],address[],address[],uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "crv()": FunctionFragment;
        "cvx()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimRewards" | "crv" | "cvx"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimRewards", values: [
        string[],
        string[],
        string[],
        string[],
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "crv", values?: undefined): string;
    encodeFunctionData(functionFragment: "cvx", values?: undefined): string;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cvx", data: BytesLike): Result;
    events: {};
}
export interface IClaimZap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IClaimZapInterface;
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
        claimRewards(rewardContracts: string[], extraRewardContracts: string[], tokenRewardContracts: string[], tokenRewardTokens: string[], depositCrvMaxAmount: BigNumberish, minAmountOut: BigNumberish, depositCvxMaxAmount: BigNumberish, spendCvxAmount: BigNumberish, options: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        crv(overrides?: CallOverrides): Promise<[string]>;
        cvx(overrides?: CallOverrides): Promise<[string]>;
    };
    claimRewards(rewardContracts: string[], extraRewardContracts: string[], tokenRewardContracts: string[], tokenRewardTokens: string[], depositCrvMaxAmount: BigNumberish, minAmountOut: BigNumberish, depositCvxMaxAmount: BigNumberish, spendCvxAmount: BigNumberish, options: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    crv(overrides?: CallOverrides): Promise<string>;
    cvx(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        claimRewards(rewardContracts: string[], extraRewardContracts: string[], tokenRewardContracts: string[], tokenRewardTokens: string[], depositCrvMaxAmount: BigNumberish, minAmountOut: BigNumberish, depositCvxMaxAmount: BigNumberish, spendCvxAmount: BigNumberish, options: BigNumberish, overrides?: CallOverrides): Promise<void>;
        crv(overrides?: CallOverrides): Promise<string>;
        cvx(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        claimRewards(rewardContracts: string[], extraRewardContracts: string[], tokenRewardContracts: string[], tokenRewardTokens: string[], depositCrvMaxAmount: BigNumberish, minAmountOut: BigNumberish, depositCvxMaxAmount: BigNumberish, spendCvxAmount: BigNumberish, options: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        crv(overrides?: CallOverrides): Promise<BigNumber>;
        cvx(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claimRewards(rewardContracts: string[], extraRewardContracts: string[], tokenRewardContracts: string[], tokenRewardTokens: string[], depositCrvMaxAmount: BigNumberish, minAmountOut: BigNumberish, depositCvxMaxAmount: BigNumberish, spendCvxAmount: BigNumberish, options: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
