import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface PoolServiceMockInterface extends utils.Interface {
    functions: {
        "_cumulativeIndex_RAY()": FunctionFragment;
        "_expectedLiquidityLU()": FunctionFragment;
        "_timestampLU()": FunctionFragment;
        "addLiquidity(uint256,address,uint256)": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "availableLiquidity()": FunctionFragment;
        "borrowAPY_RAY()": FunctionFragment;
        "calcLinearCumulative_RAY()": FunctionFragment;
        "calcLinearIndex_RAY()": FunctionFragment;
        "connectCreditManager(address)": FunctionFragment;
        "creditManagers(uint256)": FunctionFragment;
        "creditManagersCanBorrow(address)": FunctionFragment;
        "creditManagersCanRepay(address)": FunctionFragment;
        "creditManagersCount()": FunctionFragment;
        "dieselToken()": FunctionFragment;
        "expectedLiquidity()": FunctionFragment;
        "expectedLiquidityLimit()": FunctionFragment;
        "forbidCreditManagerToBorrow(address)": FunctionFragment;
        "fromDiesel(uint256)": FunctionFragment;
        "getDieselRate_RAY()": FunctionFragment;
        "interestRateModel()": FunctionFragment;
        "lendAccount()": FunctionFragment;
        "lendAmount()": FunctionFragment;
        "lendCreditAccount(uint256,address)": FunctionFragment;
        "newInterestRateModel(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "removeLiquidity(uint256,address)": FunctionFragment;
        "repayAmount()": FunctionFragment;
        "repayCreditAccount(uint256,uint256,uint256)": FunctionFragment;
        "repayLoss()": FunctionFragment;
        "repayProfit()": FunctionFragment;
        "setCumulative_RAY(uint256)": FunctionFragment;
        "setExpectedLiquidityLimit(uint256)": FunctionFragment;
        "setWithdrawFee(uint256)": FunctionFragment;
        "toDiesel(uint256)": FunctionFragment;
        "totalBorrowed()": FunctionFragment;
        "treasuryAddress()": FunctionFragment;
        "underlyingToken()": FunctionFragment;
        "unpause()": FunctionFragment;
        "version()": FunctionFragment;
        "withdrawFee()": FunctionFragment;
        "withdrawMultiplier()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cumulativeIndex_RAY" | "_expectedLiquidityLU" | "_timestampLU" | "addLiquidity" | "addressProvider" | "availableLiquidity" | "borrowAPY_RAY" | "calcLinearCumulative_RAY" | "calcLinearIndex_RAY" | "connectCreditManager" | "creditManagers" | "creditManagersCanBorrow" | "creditManagersCanRepay" | "creditManagersCount" | "dieselToken" | "expectedLiquidity" | "expectedLiquidityLimit" | "forbidCreditManagerToBorrow" | "fromDiesel" | "getDieselRate_RAY" | "interestRateModel" | "lendAccount" | "lendAmount" | "lendCreditAccount" | "newInterestRateModel" | "pause" | "paused" | "removeLiquidity" | "repayAmount" | "repayCreditAccount" | "repayLoss" | "repayProfit" | "setCumulative_RAY" | "setExpectedLiquidityLimit" | "setWithdrawFee" | "toDiesel" | "totalBorrowed" | "treasuryAddress" | "underlyingToken" | "unpause" | "version" | "withdrawFee" | "withdrawMultiplier"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cumulativeIndex_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "_expectedLiquidityLU", values?: undefined): string;
    encodeFunctionData(functionFragment: "_timestampLU", values?: undefined): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "availableLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAPY_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcLinearCumulative_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcLinearIndex_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "connectCreditManager", values: [string]): string;
    encodeFunctionData(functionFragment: "creditManagers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditManagersCanBorrow", values: [string]): string;
    encodeFunctionData(functionFragment: "creditManagersCanRepay", values: [string]): string;
    encodeFunctionData(functionFragment: "creditManagersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "dieselToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectedLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectedLiquidityLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "forbidCreditManagerToBorrow", values: [string]): string;
    encodeFunctionData(functionFragment: "fromDiesel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDieselRate_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "lendAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "lendAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "lendCreditAccount", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "newInterestRateModel", values: [string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "repayAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayCreditAccount", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayLoss", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "setCumulative_RAY", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setExpectedLiquidityLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWithdrawFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toDiesel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalBorrowed", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasuryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlyingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawMultiplier", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_cumulativeIndex_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_expectedLiquidityLU", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_timestampLU", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "availableLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAPY_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcLinearCumulative_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcLinearIndex_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectCreditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagersCanBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagersCanRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dieselToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectedLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectedLiquidityLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forbidCreditManagerToBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromDiesel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDieselRate_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newInterestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayLoss", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCumulative_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExpectedLiquidityLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toDiesel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawMultiplier", data: BytesLike): Result;
    events: {
        "AddLiquidity(address,address,uint256,uint256)": EventFragment;
        "Borrow(address,address,uint256)": EventFragment;
        "BorrowForbidden(address)": EventFragment;
        "NewCreditManagerConnected(address)": EventFragment;
        "NewExpectedLiquidityLimit(uint256)": EventFragment;
        "NewInterestRateModel(address)": EventFragment;
        "NewWithdrawFee(uint256)": EventFragment;
        "RemoveLiquidity(address,address,uint256)": EventFragment;
        "Repay(address,uint256,uint256,uint256)": EventFragment;
        "UncoveredLoss(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowForbidden"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCreditManagerConnected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewExpectedLiquidityLimit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewInterestRateModel"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewWithdrawFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UncoveredLoss"): EventFragment;
}
export interface AddLiquidityEventObject {
    sender: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: BigNumber;
}
export declare type AddLiquidityEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], AddLiquidityEventObject>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export interface BorrowEventObject {
    creditManager: string;
    creditAccount: string;
    amount: BigNumber;
}
export declare type BorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber
], BorrowEventObject>;
export declare type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface BorrowForbiddenEventObject {
    creditManager: string;
}
export declare type BorrowForbiddenEvent = TypedEvent<[
    string
], BorrowForbiddenEventObject>;
export declare type BorrowForbiddenEventFilter = TypedEventFilter<BorrowForbiddenEvent>;
export interface NewCreditManagerConnectedEventObject {
    creditManager: string;
}
export declare type NewCreditManagerConnectedEvent = TypedEvent<[
    string
], NewCreditManagerConnectedEventObject>;
export declare type NewCreditManagerConnectedEventFilter = TypedEventFilter<NewCreditManagerConnectedEvent>;
export interface NewExpectedLiquidityLimitEventObject {
    newLimit: BigNumber;
}
export declare type NewExpectedLiquidityLimitEvent = TypedEvent<[
    BigNumber
], NewExpectedLiquidityLimitEventObject>;
export declare type NewExpectedLiquidityLimitEventFilter = TypedEventFilter<NewExpectedLiquidityLimitEvent>;
export interface NewInterestRateModelEventObject {
    newInterestRateModel: string;
}
export declare type NewInterestRateModelEvent = TypedEvent<[
    string
], NewInterestRateModelEventObject>;
export declare type NewInterestRateModelEventFilter = TypedEventFilter<NewInterestRateModelEvent>;
export interface NewWithdrawFeeEventObject {
    fee: BigNumber;
}
export declare type NewWithdrawFeeEvent = TypedEvent<[
    BigNumber
], NewWithdrawFeeEventObject>;
export declare type NewWithdrawFeeEventFilter = TypedEventFilter<NewWithdrawFeeEvent>;
export interface RemoveLiquidityEventObject {
    sender: string;
    to: string;
    amount: BigNumber;
}
export declare type RemoveLiquidityEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RemoveLiquidityEventObject>;
export declare type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export interface RepayEventObject {
    creditManager: string;
    borrowedAmount: BigNumber;
    profit: BigNumber;
    loss: BigNumber;
}
export declare type RepayEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RepayEventObject>;
export declare type RepayEventFilter = TypedEventFilter<RepayEvent>;
export interface UncoveredLossEventObject {
    creditManager: string;
    loss: BigNumber;
}
export declare type UncoveredLossEvent = TypedEvent<[
    string,
    BigNumber
], UncoveredLossEventObject>;
export declare type UncoveredLossEventFilter = TypedEventFilter<UncoveredLossEvent>;
export interface PoolServiceMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PoolServiceMockInterface;
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
        _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        _expectedLiquidityLU(overrides?: CallOverrides): Promise<[BigNumber]>;
        _timestampLU(overrides?: CallOverrides): Promise<[BigNumber]>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        availableLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        calcLinearIndex_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        connectCreditManager(_creditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        creditManagersCanBorrow(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        creditManagersCanRepay(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        creditManagersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        dieselToken(overrides?: CallOverrides): Promise<[string]>;
        expectedLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        forbidCreditManagerToBorrow(_creditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        interestRateModel(overrides?: CallOverrides): Promise<[string]>;
        lendAccount(overrides?: CallOverrides): Promise<[string]>;
        lendAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        newInterestRateModel(_interestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayLoss(overrides?: CallOverrides): Promise<[BigNumber]>;
        repayProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        setCumulative_RAY(cumulativeIndex_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setExpectedLiquidityLimit(num: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWithdrawFee(num: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowed(overrides?: CallOverrides): Promise<[BigNumber]>;
        treasuryAddress(overrides?: CallOverrides): Promise<[string]>;
        underlyingToken(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    _expectedLiquidityLU(overrides?: CallOverrides): Promise<BigNumber>;
    _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;
    addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
    borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    calcLinearIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    connectCreditManager(_creditManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    creditManagersCanBorrow(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    creditManagersCanRepay(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
    dieselToken(overrides?: CallOverrides): Promise<string>;
    expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
    expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;
    forbidCreditManagerToBorrow(_creditManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    interestRateModel(overrides?: CallOverrides): Promise<string>;
    lendAccount(overrides?: CallOverrides): Promise<string>;
    lendAmount(overrides?: CallOverrides): Promise<BigNumber>;
    lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    newInterestRateModel(_interestRateModel: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayAmount(overrides?: CallOverrides): Promise<BigNumber>;
    repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayLoss(overrides?: CallOverrides): Promise<BigNumber>;
    repayProfit(overrides?: CallOverrides): Promise<BigNumber>;
    setCumulative_RAY(cumulativeIndex_RAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setExpectedLiquidityLimit(num: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWithdrawFee(num: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
    treasuryAddress(overrides?: CallOverrides): Promise<string>;
    underlyingToken(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _expectedLiquidityLU(overrides?: CallOverrides): Promise<BigNumber>;
        _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        calcLinearIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        connectCreditManager(_creditManager: string, overrides?: CallOverrides): Promise<void>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        creditManagersCanBorrow(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        creditManagersCanRepay(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
        dieselToken(overrides?: CallOverrides): Promise<string>;
        expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;
        forbidCreditManagerToBorrow(_creditManager: string, overrides?: CallOverrides): Promise<void>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<string>;
        lendAccount(overrides?: CallOverrides): Promise<string>;
        lendAmount(overrides?: CallOverrides): Promise<BigNumber>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: CallOverrides): Promise<void>;
        newInterestRateModel(_interestRateModel: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        repayAmount(overrides?: CallOverrides): Promise<BigNumber>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayLoss(overrides?: CallOverrides): Promise<BigNumber>;
        repayProfit(overrides?: CallOverrides): Promise<BigNumber>;
        setCumulative_RAY(cumulativeIndex_RAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setExpectedLiquidityLimit(num: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWithdrawFee(num: BigNumberish, overrides?: CallOverrides): Promise<void>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryAddress(overrides?: CallOverrides): Promise<string>;
        underlyingToken(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddLiquidity(address,address,uint256,uint256)"(sender?: string | null, onBehalfOf?: string | null, amount?: null, referralCode?: null): AddLiquidityEventFilter;
        AddLiquidity(sender?: string | null, onBehalfOf?: string | null, amount?: null, referralCode?: null): AddLiquidityEventFilter;
        "Borrow(address,address,uint256)"(creditManager?: string | null, creditAccount?: string | null, amount?: null): BorrowEventFilter;
        Borrow(creditManager?: string | null, creditAccount?: string | null, amount?: null): BorrowEventFilter;
        "BorrowForbidden(address)"(creditManager?: string | null): BorrowForbiddenEventFilter;
        BorrowForbidden(creditManager?: string | null): BorrowForbiddenEventFilter;
        "NewCreditManagerConnected(address)"(creditManager?: string | null): NewCreditManagerConnectedEventFilter;
        NewCreditManagerConnected(creditManager?: string | null): NewCreditManagerConnectedEventFilter;
        "NewExpectedLiquidityLimit(uint256)"(newLimit?: null): NewExpectedLiquidityLimitEventFilter;
        NewExpectedLiquidityLimit(newLimit?: null): NewExpectedLiquidityLimitEventFilter;
        "NewInterestRateModel(address)"(newInterestRateModel?: string | null): NewInterestRateModelEventFilter;
        NewInterestRateModel(newInterestRateModel?: string | null): NewInterestRateModelEventFilter;
        "NewWithdrawFee(uint256)"(fee?: null): NewWithdrawFeeEventFilter;
        NewWithdrawFee(fee?: null): NewWithdrawFeeEventFilter;
        "RemoveLiquidity(address,address,uint256)"(sender?: string | null, to?: string | null, amount?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(sender?: string | null, to?: string | null, amount?: null): RemoveLiquidityEventFilter;
        "Repay(address,uint256,uint256,uint256)"(creditManager?: string | null, borrowedAmount?: null, profit?: null, loss?: null): RepayEventFilter;
        Repay(creditManager?: string | null, borrowedAmount?: null, profit?: null, loss?: null): RepayEventFilter;
        "UncoveredLoss(address,uint256)"(creditManager?: string | null, loss?: null): UncoveredLossEventFilter;
        UncoveredLoss(creditManager?: string | null, loss?: null): UncoveredLossEventFilter;
    };
    estimateGas: {
        _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _expectedLiquidityLU(overrides?: CallOverrides): Promise<BigNumber>;
        _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        calcLinearIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        connectCreditManager(_creditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creditManagersCanBorrow(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditManagersCanRepay(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
        dieselToken(overrides?: CallOverrides): Promise<BigNumber>;
        expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;
        forbidCreditManagerToBorrow(_creditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        lendAccount(overrides?: CallOverrides): Promise<BigNumber>;
        lendAmount(overrides?: CallOverrides): Promise<BigNumber>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        newInterestRateModel(_interestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayAmount(overrides?: CallOverrides): Promise<BigNumber>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayLoss(overrides?: CallOverrides): Promise<BigNumber>;
        repayProfit(overrides?: CallOverrides): Promise<BigNumber>;
        setCumulative_RAY(cumulativeIndex_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setExpectedLiquidityLimit(num: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWithdrawFee(num: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _expectedLiquidityLU(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _timestampLU(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        availableLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcLinearIndex_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        connectCreditManager(_creditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        creditManagers(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManagersCanBorrow(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManagersCanRepay(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManagersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dieselToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        expectedLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forbidCreditManagerToBorrow(_creditManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        newInterestRateModel(_interestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayLoss(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repayProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCumulative_RAY(cumulativeIndex_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setExpectedLiquidityLimit(num: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawFee(num: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}