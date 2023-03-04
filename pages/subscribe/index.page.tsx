import React, { useState } from "react";
import Nav from "/src/modules/Nav";
import Footer from "/src/modules/Footer";

import { QRCodeSVG } from "qrcode.react";
import { generate } from "nano-uri";
import { tools } from "nanocurrency-web";

import { decode } from "js-base64";

export { Page }

function Page() {
  const [request, setRequest] = useState({
    account: "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
    amount: "1000000000000000000000000000000",
    label: "",
    message: "",
    frequency: `0 0 ${new Date().getDate()} * *`,
  });

  const handleAmountChange = (event: any) => {
    let value = event.target.value;
    if (value == "") {
      value = "0";
    }

    const converted = tools.convert(value, 'NANO', 'RAW');

    setRequest({ ...request, amount: converted });
  };

  const handleLabelChange = (event: any) => {
    setRequest({ ...request, label: event.target.value });
  };

  const handleMessageChange = (event: any) => {

    setRequest({ ...request, message: event.target.value });
  };

  const handleAccountChange = (event: any) => {
    let value = event.target.value;
    if (value == "") {
      value = "nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579";
    }

    setRequest({ ...request, account: value });
  };

  const handleFrequencyChange = (event: any) => {
    if (event.target.value == "") {
      event.target.value = `0 0 ${new Date().getDate()} * *`;
    }

    setRequest({ ...request, frequency: event.target.value });
  };

  let nanoStr = generate.sub(request);

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
        <div className="flex flex-col justify-center mt-6 text-black">
          <div className="flex flex-row justify-center mb-3">
            <input
              type="text"
              placeholder="Account"
              // value={request.account}
              onChange={handleAccountChange}
            />
          </div>
          <div className="flex flex-row justify-center mb-3">
            <input
              type="text"
              placeholder="Amount"
              // value={request.amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="flex flex-row justify-center mb-3">
            <input
              type="text"
              placeholder="Label"
              value={request.label}
              onChange={handleLabelChange}
            />
          </div>
          <div className="flex flex-row justify-center mb-3">
            <input
              type="text"
              placeholder="Message"
              value={request.message}
              onChange={handleMessageChange}
            />
          </div>
          <div className="flex flex-row justify-center mb-3">
            <input
              type="text"
              placeholder="Frequency"
              // value={request.frequency}
              onChange={handleFrequencyChange}
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
