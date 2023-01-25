import React from 'react'
import Nav from "/src/modules/Nav";
import Footer from "/src/modules/Footer";

import { QRCodeSVG } from "qrcode.react";
import { generate } from "nano-uri";

import { decode } from "js-base64";

export { Page }

function Page() {

  // get current day of month:


  let request = {
    account: "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
    amount: "100000000000000000000000000000",
    label: "",
    message: "Nautilus Donation",
    frequency: `0 0 ${new Date().getDate()} * *`
  };

  let nanoStr = generate.sub(request);
  console.log(nanoStr);
  console.log(JSON.parse(decode(nanoStr.substring(8))));


  return (
    <div className="page bg-white dark:bg-gray-800 text-black dark:text-white w-full min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <a href={nanoStr}>
            <div className="bg-white p-3 rounded-lg m-3">
              <QRCodeSVG size={200} level="L" value={nanoStr} />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );

}