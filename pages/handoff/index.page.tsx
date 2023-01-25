import React from 'react'
import Nav from "/src/modules/Nav";
import Footer from "/src/modules/Footer";

import { QRCodeSVG } from "qrcode.react";
import { generate } from "nano-uri";

import { decode } from "js-base64";

export { Page }

function Page() {

  let address = "nano_1i4fcujt49de3mio9eb9y5jakw8o9m1za6ntidxn4nkwgnunktpy54z1ma58";
  let amount = "";

  // let request = {
  //   account: "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
  //   amount: "1000000000000000000000000000000",
  //   label: "Nautilus Donation",
  //   message: "block handoff test",
  //   methods: [
  //     {
  //       type: "http",
  //       url: "https://nautilus.perish.co/handoff"
  //     }
  //   ]
  // };

  let request = {
    account: "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
    amount: "100000000000000000000000000",
    methods: [
      {
        type: "http",
        url: "https://nautilus.perish.co/handoff"
      }
    ],
    label: "nanobyte test",
    message: "block handoff test",
    metadata: { merchantId: "HWopKaaqNqGsDfZF" },
  };

  let nanoPayStr = generate.pay(request);
  console.log(nanoPayStr);
  console.log(JSON.parse(decode(nanoPayStr.substring(8))));


  return (
    <div className="page bg-white dark:bg-gray-800 text-black dark:text-white w-full min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <a href={nanoPayStr}>
            <div className="bg-white p-3 rounded-lg m-3">
              <QRCodeSVG size={200} level="L" value={nanoPayStr} />
            </div>
          </a>
        </div>

        <a id="nanobytepay" className="bg-white rounded-full w-40 m-auto"
          href="javascript:void(0);"
        >
          <img src="https://imagedelivery.net/uA65-M4gr037oB0C4RNdvw/948c07d3-a89d-4aee-fbd5-2800252b9a00/public" />
        </a>
      </div>
      <Footer />
    </div>
  );

}