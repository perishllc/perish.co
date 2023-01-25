import React from 'react'
import Nav from "/src/modules/Nav";
import Footer from "/src/modules/Footer";

export { Page }

function Page() {
  return (
    <div className="page bg-white dark:bg-gray-800 text-black dark:text-white w-full min-h-screen">

      <Nav />

      <section
        id="lander"
        className="max-w-screen-2xl px-4 md:px-8 mx-auto <sm:pb-6 sm:pb-8 lg:pb-12 text-black dark:text-white"
      >
        <div className="flex <lg:flex-col lg:flex-row justify-between <sm:gap-6 sm:gap-10 md:gap-16 mb-8 md:mb-16">
          {/* content - start */}
          <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12">
            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Introducing</p>
            <h1 className="text-black-800 <sm:text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
              {/* Pseudo-Private Transactions for Nano */} Software Solutions for Nano
            </h1>
            <div className="flex <sm:flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <a
                href="#"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Start now
              </a>
              <a
                href="#illustrations"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* content - end */}
          {/* image - start */}
          {/* h-48 */}
          <div className="!xl:w-5/12 w-full h-96 lg:h-96 bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            {/* <img
                src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center"
              /> */}
            {/* https://storyset.com/illustration/bitcoin/pana/animate */}
            <img
              src="/assets/cash-tornado.svg"
              // loading="lazy"
              // className="w-full h-full object-cover object-center"
              className="mx-auto max-w-md !lg:max-w-full"
            />
          </div>
          {/* image - end */}
        </div>
      </section>

      {/* UMBRELLA GRAPHIC */}
      {/* <section
        id="illustrations"
        className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 pt-7 pb-7 md:pt-20 md:pb-24"
      >
        <div className="box-border flex flex-col items-center content-center leading-6 text-black border-0 border-gray-300 border-solid md:flex-row ">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="/assets/undraw/undraw_privacy_protection_nlwy.svg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
          </div>
          <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl dark:text-white text-black font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Protection from Everyone
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 dark:text-gray-300 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Designed so that no observer can be 100% certain of a link between deposits and withdraws
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300 text-gray-700 dark:text-gray-300">
              <li className="box-border relative py-1 pl-0 text-left border-solid -indent-8 pl-8">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-500 rounded-full indent-0">
                  <span className="text-sm font-bold text-white">✓</span>
                </span>
                Hides your deposits and withdraws from the public
              </li>
              <li className="box-border relative py-1 pl-0 text-left border-solid -indent-8 pl-8">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-500 rounded-full indent-0">
                  <span className="text-sm font-bold text-white">✓</span>
                </span>
                Makes it non-trivial to find out where your funds came from
              </li>
              <li className="box-border relative py-1 pl-0 text-left border-solid -indent-8 pl-8">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-red-500 rounded-full indent-0">
                  <span className="text-sm font-bold text-white">✗</span>
                </span>
                Prevents analysis from linking withdraws to your account
              </li>
            </ul>
          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center mt-2 leading-6 border-0 border-gray-300 border-solid md:mt-20 xl:mt-10 md:flex-row">
          <div className="box-border w-full border-solid md:w-1/2">
            <h2 className="m-0 text-xl dark:text-white text-black font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Variable Privacy
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 dark:text-gray-200 text-gray-800 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              At the end of the day, how private the transaction needs to be is up to you. How you use the service
              determines how easy it is to track your funds
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300 text-gray-700 dark:text-gray-300 list-outside">
              <li className="box-border relative py-1 pl-0 text-left border-solid -indent-8 pl-8">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-500 rounded-full indent-0">
                  <span className="text-sm font-bold text-white">✓</span>
                </span>
                Relaying common amounts (e.g. 1, 5, 10, 100) is more likely to stay anonymous
              </li>
              <li className="box-border relative py-1 pl-0 text-left border-solid -indent-8 pl-8">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-500 rounded-full indent-0">
                  <span className="text-sm font-bold text-white">✓</span>
                </span>
                The longer you're willing to wait for a transaction to be relayed, the less likely it is to be linked to
                your account
              </li>
            </ul>
          </div>
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="/assets/undraw/undraw_surveillance_re_8tkl.svg" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
          </div>
        </div>
      </section> */}

      {/* <Pricing /> */}

      {/* +2 padding on the left to compensate for the weird timeline border */}
      {/* <section id="timeline" className="max-w-screen-2xl mx-auto px-[1.5rem] md:px-8 lg:px-16 flex">
        <div>
          <ol className="relative border-l border-gray-300 w-full">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Initial Announcement
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                TBA, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                When the first version of the service was announced!
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Prototype v1 launch!</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                TBA, 2022
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Prototype service launches! Funds are gauranteed to to be relayed, but the time window that they get
                sent out will likely still be short. <br />
                After a month or so if things go well, the service will likely get an upgrade
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Perish Beta Launch</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                TBA, 2022
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                An upgraded version of the service goes live! probably with a new feature or two.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Perish + Nautilus Wallet</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                TBA, 2022
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Integration with the Nautilus wallet goes into production! By now the App is on the Play Store and maybe
                even the App Store.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                ZKSnarks / Trustless execution
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                TBA, 2023
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Trustless execution of the protocol goes into beta!
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">NanoFusion?</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                TBA, 2023
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Support for NanoFusion (assuming it's been finished)
              </p>
            </li>
          </ol>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}