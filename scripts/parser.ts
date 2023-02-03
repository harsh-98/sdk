import { TxParser } from "../src/parsers/txParser";
import { providers } from "ethers";

import {
  IDataCompressor__factory,
  // ICreditFacade__factory,
} from "../src/types";

import { MultiCallStruct } from "../src/types/@gearbox-protocol/core-v2/contracts/interfaces/ICreditFacade.sol/ICreditFacade";

async function main() {
  let dataCompressor = "0x0a2CA503153Cd5CB2892a0928ac0F71F49a3c194";
  let provider = new providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/ac3e2f11fafb420c94cc0a357084fb85",
  );
  let cm = await IDataCompressor__factory.connect(
    dataCompressor,
    provider,
  ).getCreditManagerData("0x95357303f995e184a7998da6c6ea35cc728a1900");
  if (cm.creditFacade !== "") {
    TxParser.addCreditFacade(cm.creditFacade, "WETH");

    TxParser.addAdapters(
      cm.adapters.map(a => ({
        adapter: a.adapter,
        contract: a.allowedContract,
      })),
    );
  }

  //   let data= '0x';
  //   let cf = ICreditFacade__factory.createInterface();
  //  let x= cf.parseTransaction({data: data});
  //  console.log(x.args)
  let mcs: Array<MultiCallStruct> = Array(
    {
      target: "0x61fbb350e39cc7bF22C01A469cf03085774184aa",
      callData:
        "0x81314b5900000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000006bc777ca36",
    },
    {
      target: "0x198656fF41a98Fb4894e02124dDAf445CA86C9a2",
      callData:
        "0x79bea664000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
    {
      target: "0x3883500A0721c09DC824421B00F79ae524569E09",
      callData:
        "0xc7fbf4de000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000001f400000000000000000000000000000000000000000000000000000000636bae8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
  );
  //  let mcs: Array<MultiCallStruct> = arrayValues as Array<MultiCallStruct>;
  console.log(TxParser.parseMultiCall(mcs));
}

main();
