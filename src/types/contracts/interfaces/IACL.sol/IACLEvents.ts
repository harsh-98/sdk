/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IACLEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "PausableAdminAdded(address)": EventFragment;
    "PausableAdminRemoved(address)": EventFragment;
    "UnpausableAdminAdded(address)": EventFragment;
    "UnpausableAdminRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PausableAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausableAdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausableAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausableAdminRemoved"): EventFragment;
}

export interface PausableAdminAddedEventObject {
  newAdmin: string;
}
export type PausableAdminAddedEvent = TypedEvent<
  [string],
  PausableAdminAddedEventObject
>;

export type PausableAdminAddedEventFilter =
  TypedEventFilter<PausableAdminAddedEvent>;

export interface PausableAdminRemovedEventObject {
  admin: string;
}
export type PausableAdminRemovedEvent = TypedEvent<
  [string],
  PausableAdminRemovedEventObject
>;

export type PausableAdminRemovedEventFilter =
  TypedEventFilter<PausableAdminRemovedEvent>;

export interface UnpausableAdminAddedEventObject {
  newAdmin: string;
}
export type UnpausableAdminAddedEvent = TypedEvent<
  [string],
  UnpausableAdminAddedEventObject
>;

export type UnpausableAdminAddedEventFilter =
  TypedEventFilter<UnpausableAdminAddedEvent>;

export interface UnpausableAdminRemovedEventObject {
  admin: string;
}
export type UnpausableAdminRemovedEvent = TypedEvent<
  [string],
  UnpausableAdminRemovedEventObject
>;

export type UnpausableAdminRemovedEventFilter =
  TypedEventFilter<UnpausableAdminRemovedEvent>;

export interface IACLEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IACLEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "PausableAdminAdded(address)"(
      newAdmin?: string | null
    ): PausableAdminAddedEventFilter;
    PausableAdminAdded(newAdmin?: string | null): PausableAdminAddedEventFilter;

    "PausableAdminRemoved(address)"(
      admin?: string | null
    ): PausableAdminRemovedEventFilter;
    PausableAdminRemoved(
      admin?: string | null
    ): PausableAdminRemovedEventFilter;

    "UnpausableAdminAdded(address)"(
      newAdmin?: string | null
    ): UnpausableAdminAddedEventFilter;
    UnpausableAdminAdded(
      newAdmin?: string | null
    ): UnpausableAdminAddedEventFilter;

    "UnpausableAdminRemoved(address)"(
      admin?: string | null
    ): UnpausableAdminRemovedEventFilter;
    UnpausableAdminRemoved(
      admin?: string | null
    ): UnpausableAdminRemovedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
