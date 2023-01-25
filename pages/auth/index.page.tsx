import React from 'react'
import Nav from "/src/modules/Nav";
import Footer from "/src/modules/Footer";

import { QRCodeSVG } from "qrcode.react";
import { generate, verify } from "nano-uri";

export { Page }

function Page() {

  let address = "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579";
  let amount = "";

  // let request = {
  //   account: "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
  //   nonce: "some_random_nonce",
  //   label: "Login to Perish",
  //   message: "See this content after login",
  //   timestamp: Date.now(),
  //   methods: [
  //     {
  //       type: "http",
  //       url: "https://perish.co/auth"
  //     }
  //   ],
  //   format: ["nonce", "timestamp", "label", "account"],
  //   separator: ":",
  // };

  let request = {
    account: "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
    nonce: "some_random_nonce",
    label: "Login to nanobyte",
    message: "See this content after login",
    timestamp: Date.now(),
    methods: [
      {
        type: "http",
        url: "https://nanobytepay.com/auth"
      }
    ],
    format: ["nonce", "timestamp", "label", "account"],
    separator: ":",
  };

  let nanoAuthStr = generate.auth(request);
  console.log(nanoAuthStr);

  console.log(
    verify.auth(
      {
        "account": "nano_11qwaxtmb5c7xc16wat5rgirbxzug1kgq8tf996xi8kf5cdcrjyaiy39foun",
        "signature": "9708F8E22940C0F3698E2333CB7CF4A44C6D98398BBA4BE342C52B89E8EFCEC847F385C02E07B4E1E25670C4A0B255383C4E6A5E74E5CE06F84909EC59EDB907",
        "signed": "736F6D655F72616E646F6D5F6E6F6E63653A313636313430363737383A4C6F67696E20746F205065726973683A6E616E6F5F33383731337839357A796A73717A78366E6D3164736F6D316A6D6D3636386F776B6562393931336178366E66676A3135617A336E7538786B78353739",
        "formatted": "some_random_nonce:1661406778:Login to Perish:nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
        "message": "See this content after login",
        "label": "Login to Perish"
      }
    ));



  return (
    <div className="page bg-white dark:bg-gray-800 text-black dark:text-white w-full min-h-screen">
      <Nav />
      <div className="flex flex-row justify-center">
        <a href={nanoAuthStr}>
          <div className="bg-white p-3 rounded-lg">
            <QRCodeSVG size={256} level="L" value={nanoAuthStr} />
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );

}