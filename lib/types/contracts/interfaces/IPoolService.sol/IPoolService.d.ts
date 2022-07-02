import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IPoolServiceInterface extends utils.Interface {
    functions: {
        "_cumulativeIndex_RAY()": FunctionFragment;
        "_timestampLU()": FunctionFragment;
        "addLiquidity(uint256,address,uint256)": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "availableLiquidity()": FunctionFragment;
        "borrowAPY_RAY()": FunctionFragment;
        "calcLinearCumulative_RAY()": FunctionFragment;
        "creditManagers(uint256)": FunctionFragment;
        "creditManagersCanBorrow(address)": FunctionFragment;
        "creditManagersCount()": FunctionFragment;
        "dieselToken()": FunctionFragment;
        "expectedLiquidity()": FunctionFragment;
        "expectedLiquidityLimit()": FunctionFragment;
        "fromDiesel(uint256)": FunctionFragment;
        "getDieselRate_RAY()": FunctionFragment;
        "lendCreditAccount(uint256,address)": FunctionFragment;
        "removeLiquidity(uint256,address)": FunctionFragment;
        "repayCreditAccount(uint256,uint256,uint256)": FunctionFragment;
        "toDiesel(uint256)": FunctionFragment;
        "totalBorrowed()": FunctionFragment;
        "underlyingToken()": FunctionFragment;
        "version()": FunctionFragment;
        "withdrawFee()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cumulativeIndex_RAY" | "_timestampLU" | "addLiquidity" | "addressProvider" | "availableLiquidity" | "borrowAPY_RAY" | "calcLinearCumulative_RAY" | "creditManagers" | "creditManagersCanBorrow" | "creditManagersCount" | "dieselToken" | "expectedLiquidity" | "expectedLiquidityLimit" | "fromDiesel" | "getDieselRate_RAY" | "lendCreditAccount" | "removeLiquidity" | "repayCreditAccount" | "toDiesel" | "totalBorrowed" | "underlyingToken" | "version" | "withdrawFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cumulativeIndex_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "_timestampLU", values?: undefined): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "availableLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAPY_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcLinearCumulative_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManagers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditManagersCanBorrow", values: [string]): string;
    encodeFunctionData(functionFragment: "creditManagersCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "dieselToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectedLiquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectedLiquidityLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "fromDiesel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDieselRate_RAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "lendCreditAccount", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "repayCreditAccount", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "toDiesel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalBorrowed", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlyingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFee", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_cumulativeIndex_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_timestampLU", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "availableLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAPY_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcLinearCumulative_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagersCanBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManagersCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dieselToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectedLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectedLiquidityLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromDiesel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDieselRate_RAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toDiesel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFee", data: BytesLike): Result;
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
export interface IPoolService extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolServiceInterface;
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
        _timestampLU(overrides?: CallOverrides): Promise<[BigNumber]>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        availableLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditManagers(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        creditManagersCanBorrow(id: string, overrides?: CallOverrides): Promise<[boolean]>;
        creditManagersCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        dieselToken(overrides?: CallOverrides): Promise<[string]>;
        expectedLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowed(overrides?: CallOverrides): Promise<[BigNumber]>;
        underlyingToken(overrides?: CallOverrides): Promise<[string]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;
    addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
    borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    creditManagers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    creditManagersCanBorrow(id: string, overrides?: CallOverrides): Promise<boolean>;
    creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
    dieselToken(overrides?: CallOverrides): Promise<string>;
    expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
    expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;
    fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;
    lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
    underlyingToken(overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        creditManagers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        creditManagersCanBorrow(id: string, overrides?: CallOverrides): Promise<boolean>;
        creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
        dieselToken(overrides?: CallOverrides): Promise<string>;
        expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: CallOverrides): Promise<void>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: CallOverrides): Promise<void>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
        underlyingToken(overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
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
        _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        creditManagers(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creditManagersCanBorrow(id: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;
        dieselToken(overrides?: CallOverrides): Promise<BigNumber>;
        expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;
        underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _cumulativeIndex_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _timestampLU(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addLiquidity(amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        availableLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAPY_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManagers(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManagersCanBorrow(id: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManagersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dieselToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        expectedLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        expectedLiquidityLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fromDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDieselRate_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendCreditAccount(borrowedAmount: BigNumberish, creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidity(amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayCreditAccount(borrowedAmount: BigNumberish, profit: BigNumberish, loss: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
