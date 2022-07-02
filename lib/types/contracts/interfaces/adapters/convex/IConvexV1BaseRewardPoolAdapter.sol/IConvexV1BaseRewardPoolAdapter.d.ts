import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface IConvexV1BaseRewardPoolAdapterInterface extends utils.Interface {
    functions: {
        "_gearboxAdapterType()": FunctionFragment;
        "_gearboxAdapterVersion()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "crv()": FunctionFragment;
        "currentRewards()": FunctionFragment;
        "curveLPtoken()": FunctionFragment;
        "cvx()": FunctionFragment;
        "cvxLPtoken()": FunctionFragment;
        "donate(uint256)": FunctionFragment;
        "duration()": FunctionFragment;
        "earned(address)": FunctionFragment;
        "extraReward1()": FunctionFragment;
        "extraReward2()": FunctionFragment;
        "extraRewards(uint256)": FunctionFragment;
        "extraRewardsLength()": FunctionFragment;
        "getReward()": FunctionFragment;
        "getReward(address,bool)": FunctionFragment;
        "historicalRewards()": FunctionFragment;
        "lastTimeRewardApplicable()": FunctionFragment;
        "lastUpdateTime()": FunctionFragment;
        "newRewardRatio()": FunctionFragment;
        "operator()": FunctionFragment;
        "periodFinish()": FunctionFragment;
        "pid()": FunctionFragment;
        "queuedRewards()": FunctionFragment;
        "rewardManager()": FunctionFragment;
        "rewardPerToken()": FunctionFragment;
        "rewardPerTokenStored()": FunctionFragment;
        "rewardRate()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewards(address)": FunctionFragment;
        "stake(uint256)": FunctionFragment;
        "stakeAll()": FunctionFragment;
        "stakeFor(address,uint256)": FunctionFragment;
        "stakedPhantomToken()": FunctionFragment;
        "stakingToken()": FunctionFragment;
        "targetContract()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "userRewardPerTokenPaid(address)": FunctionFragment;
        "withdraw(uint256,bool)": FunctionFragment;
        "withdrawAll(bool)": FunctionFragment;
        "withdrawAllAndUnwrap(bool)": FunctionFragment;
        "withdrawAndUnwrap(uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_gearboxAdapterType" | "_gearboxAdapterVersion" | "balanceOf" | "creditFacade" | "creditManager" | "crv" | "currentRewards" | "curveLPtoken" | "cvx" | "cvxLPtoken" | "donate" | "duration" | "earned" | "extraReward1" | "extraReward2" | "extraRewards" | "extraRewardsLength" | "getReward()" | "getReward(address,bool)" | "historicalRewards" | "lastTimeRewardApplicable" | "lastUpdateTime" | "newRewardRatio" | "operator" | "periodFinish" | "pid" | "queuedRewards" | "rewardManager" | "rewardPerToken" | "rewardPerTokenStored" | "rewardRate" | "rewardToken" | "rewards" | "stake" | "stakeAll" | "stakeFor" | "stakedPhantomToken" | "stakingToken" | "targetContract" | "totalSupply" | "userRewardPerTokenPaid" | "withdraw" | "withdrawAll" | "withdrawAllAndUnwrap" | "withdrawAndUnwrap"): FunctionFragment;
    encodeFunctionData(functionFragment: "_gearboxAdapterType", values?: undefined): string;
    encodeFunctionData(functionFragment: "_gearboxAdapterVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "crv", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "curveLPtoken", values?: undefined): string;
    encodeFunctionData(functionFragment: "cvx", values?: undefined): string;
    encodeFunctionData(functionFragment: "cvxLPtoken", values?: undefined): string;
    encodeFunctionData(functionFragment: "donate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "duration", values?: undefined): string;
    encodeFunctionData(functionFragment: "earned", values: [string]): string;
    encodeFunctionData(functionFragment: "extraReward1", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraReward2", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "extraRewardsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward()", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward(address,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "historicalRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastTimeRewardApplicable", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "newRewardRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "operator", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodFinish", values?: undefined): string;
    encodeFunctionData(functionFragment: "pid", values?: undefined): string;
    encodeFunctionData(functionFragment: "queuedRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerTokenStored", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values: [string]): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakeFor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakedPhantomToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "userRewardPerTokenPaid", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [boolean]): string;
    encodeFunctionData(functionFragment: "withdrawAllAndUnwrap", values: [boolean]): string;
    encodeFunctionData(functionFragment: "withdrawAndUnwrap", values: [BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "_gearboxAdapterType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_gearboxAdapterVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "curveLPtoken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cvx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cvxLPtoken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraReward1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraReward2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraRewardsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward(address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "historicalRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastTimeRewardApplicable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newRewardRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFinish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakedPhantomToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userRewardPerTokenPaid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllAndUnwrap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndUnwrap", data: BytesLike): Result;
    events: {};
}
export interface IConvexV1BaseRewardPoolAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConvexV1BaseRewardPoolAdapterInterface;
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
        _gearboxAdapterType(overrides?: CallOverrides): Promise<[number]>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<[number]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        crv(overrides?: CallOverrides): Promise<[string]>;
        currentRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        curveLPtoken(overrides?: CallOverrides): Promise<[string]>;
        cvx(overrides?: CallOverrides): Promise<[string]>;
        cvxLPtoken(overrides?: CallOverrides): Promise<[string]>;
        donate(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        duration(overrides?: CallOverrides): Promise<[BigNumber]>;
        earned(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        extraReward1(overrides?: CallOverrides): Promise<[string]>;
        extraReward2(overrides?: CallOverrides): Promise<[string]>;
        extraRewards(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        extraRewardsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        "getReward()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        historicalRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        newRewardRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        operator(overrides?: CallOverrides): Promise<[string]>;
        periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;
        pid(overrides?: CallOverrides): Promise<[BigNumber]>;
        queuedRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardManager(overrides?: CallOverrides): Promise<[string]>;
        rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewards(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stake(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakedPhantomToken(overrides?: CallOverrides): Promise<[string]>;
        stakingToken(overrides?: CallOverrides): Promise<[string]>;
        targetContract(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        userRewardPerTokenPaid(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    crv(overrides?: CallOverrides): Promise<string>;
    currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
    curveLPtoken(overrides?: CallOverrides): Promise<string>;
    cvx(overrides?: CallOverrides): Promise<string>;
    cvxLPtoken(overrides?: CallOverrides): Promise<string>;
    donate(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    duration(overrides?: CallOverrides): Promise<BigNumber>;
    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    extraReward1(overrides?: CallOverrides): Promise<string>;
    extraReward2(overrides?: CallOverrides): Promise<string>;
    extraRewards(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;
    "getReward()"(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;
    operator(overrides?: CallOverrides): Promise<string>;
    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
    pid(overrides?: CallOverrides): Promise<BigNumber>;
    queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
    rewardManager(overrides?: CallOverrides): Promise<string>;
    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewards(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    stake(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeAll(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakedPhantomToken(overrides?: CallOverrides): Promise<string>;
    stakingToken(overrides?: CallOverrides): Promise<string>;
    targetContract(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    userRewardPerTokenPaid(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        crv(overrides?: CallOverrides): Promise<string>;
        currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
        curveLPtoken(overrides?: CallOverrides): Promise<string>;
        cvx(overrides?: CallOverrides): Promise<string>;
        cvxLPtoken(overrides?: CallOverrides): Promise<string>;
        donate(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraReward1(overrides?: CallOverrides): Promise<string>;
        extraReward2(overrides?: CallOverrides): Promise<string>;
        extraRewards(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;
        "getReward()"(overrides?: CallOverrides): Promise<boolean>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: CallOverrides): Promise<boolean>;
        historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<string>;
        periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
        pid(overrides?: CallOverrides): Promise<BigNumber>;
        queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
        rewardManager(overrides?: CallOverrides): Promise<string>;
        rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewards(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        stakeAll(overrides?: CallOverrides): Promise<boolean>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        stakedPhantomToken(overrides?: CallOverrides): Promise<string>;
        stakingToken(overrides?: CallOverrides): Promise<string>;
        targetContract(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenPaid(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: CallOverrides): Promise<boolean>;
        withdrawAll(claim: boolean, overrides?: CallOverrides): Promise<void>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: CallOverrides): Promise<void>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        crv(overrides?: CallOverrides): Promise<BigNumber>;
        currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
        curveLPtoken(overrides?: CallOverrides): Promise<BigNumber>;
        cvx(overrides?: CallOverrides): Promise<BigNumber>;
        cvxLPtoken(overrides?: CallOverrides): Promise<BigNumber>;
        donate(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraReward1(overrides?: CallOverrides): Promise<BigNumber>;
        extraReward2(overrides?: CallOverrides): Promise<BigNumber>;
        extraRewards(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;
        "getReward()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;
        operator(overrides?: CallOverrides): Promise<BigNumber>;
        periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
        pid(overrides?: CallOverrides): Promise<BigNumber>;
        queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
        rewardManager(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewards(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        stake(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakedPhantomToken(overrides?: CallOverrides): Promise<BigNumber>;
        stakingToken(overrides?: CallOverrides): Promise<BigNumber>;
        targetContract(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        userRewardPerTokenPaid(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        curveLPtoken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cvxLPtoken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        donate(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        earned(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraReward1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraReward2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraRewards(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraRewardsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getReward()"(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "getReward(address,bool)"(_account: string, _claimExtras: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        historicalRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        newRewardRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queuedRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeAll(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeFor(_for: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakedPhantomToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userRewardPerTokenPaid(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllAndUnwrap(claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAndUnwrap(amount: BigNumberish, claim: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
