import { IAddressProvider__factory } from "../types";
import { AbstractParser } from "./abstractParser";
import { IParser } from "./iParser";

export class AddressProviderParser extends AbstractParser implements IParser {
  constructor() {
    super("AddressProvider");
    this.ifc = IAddressProvider__factory.createInterface();
  }
  parse(calldata: string): string {
    const { functionFragment, functionName } = this.parseSelector(calldata);

    switch (functionFragment.name) {
      case "getWethToken":
      case "getGearToken":
      case "getLeveragedActions":
      case "getDataCompressor":
      case "getPriceOracle": {
        return `${functionName}`;
      }

      default:
        return `${functionName}: Unknown operation ${functionFragment.name} with calldata ${calldata}`;
    }
  }
  parseToObject(address: string, calldata: string) {
    const { functionFragment } = this.parseSelector(calldata);

    const args = this.decodeFunctionData(functionFragment, calldata);

    return {
      address,
      functionFragment,
      args,
    };
  }
}
