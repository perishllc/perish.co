import React, { useState } from "react";

import DarkModeSwitch from "../../src/common/components/DarkModeSwitch";


export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="topNav" className="max-w-screen-2xl px-4 md:px-8 mx-auto text-black dark:text-white">
      <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
        {/* logo - start */}
        <a href="/" className="inline-flex items-center <md:text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
          <img src="/assets/logo.svg" className="w-10 pt-3 mr-2 h-auto" />
          Perish
        </a>
        {/* logo - end */}

        <DarkModeSwitch />
        {/* nav - start */}
        <nav className="<lg:hidden ml-4 !lg:flex gap-12 text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-indigo-500 text-lg font-semibold">
            Home
          </a>

          <a
            href="/support"
            className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
          >
            Support
          </a>
        </nav>

        {/* nav - end */}
        {/* buttons - start */}
        <button
          type="button"
          className="ml-4 <lg:inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        {/* buttons - end */}
      </header>
      {menuOpen &&
          <nav className="mb-12 rounded-lg flex flex-col justify-center h-32 bg-gray-100 text-center gap-12 text-gray-600 dark:text-gray-400">
            <a href="/" className="hover:text-indigo-500 text-lg font-semibold">
              Home
            </a>
            <a
              href="/support"
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Support
            </a>
          </nav>
        }
    </section>
  );
}
