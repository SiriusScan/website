// components/IntroSection.tsx
import React, { useState } from "react";
import Image from "next/image";
import useTypewriter from "react-typewriter-hook";
import "typeface-roboto-slab";

const IntroSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const title = useTypewriter("Welcome to Sirius Scan");

  return (
    <div
      className={`pt-20 pb-6 text-white  ${
        darkMode
          ? "bg-blue-500 "
          : "bg-gradient-to-b from-[#2e026d] to-[#15162c]"
      }`}

    >
      <div className="container mx-auto px-4">
        <div className="ml-4 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-robotoSlab text-shadow-md mb-1 text-4xl font-extralight tracking-wide">
              {title}
            </h2>

            <p className="mb-2 text-lg font-extralight">
              Sirius Scan is an open-source, general-purpose vulnerability
              scanning tool that helps you identify and manage security risks in
              your network infrastructure.
            </p>
            <h3 className="mb-6 text-2xl leading-relaxed tracking-wide">
              Discover, Assess, and Remediate
            </h3>
            <div className="mt-4">
              <a
                href="/features"
                className="rounded-md border border-violet-200 px-8 py-2 text-white transition duration-300 hover:bg-white hover:text-blue-500 hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            {darkMode ? (
              <Image
                src="/dashboard-light.png"
                alt="Sirius Scan"
                width={800}
                height={0}
                className="rounded-lg"
              />
            ) : (
              <Image
                src="/dash-dark.gif"
                alt="Sirius Scan"
                width={800}
                height={0}
                className="rounded-lg"
              />
            )}
            <div className="mt-6 flex justify-center space-x-1">
              <button
                className={`h-9 w-16 rounded-l-xl pl-6 ${
                  darkMode ? "bg-gray-600" : "bg-black"
                } text-white`}
                onClick={() => setDarkMode(false)}
              >
                {/* Dark Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
              <button
                className={`h-9 w-16 rounded-r-xl pl-4 ${
                  darkMode ? "bg-gray-300" : "bg-white"
                } text-black`}
                onClick={() => setDarkMode(true)}
              >
                {/* Light Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
