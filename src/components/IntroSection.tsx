// components/IntroSection.tsx
import React, { useState } from "react";

import Image from "next/image";
import useTypewriter from "react-typewriter-hook";
import "typeface-roboto-slab";

const IntroSection: React.FC = () => {
  const [showPro, setShowPro] = useState(false);
  const title = useTypewriter("Welcome to Sirius Scan");

  return (
    <div
      className="relative pb-6 pt-20 text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]"
      style={{
        backgroundImage: "url(/loginbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#2e026d]/80 via-[#8b5cf6]/40 to-[#15162c]/95"
        style={{ mixBlendMode: "multiply" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#15162c]/50 to-[#15162c] pointer-events-none" />
      <div className="container relative mx-auto px-4 z-10">
        <div className="ml-4 grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr,3fr]">
          <div>
            <h2 className="font-robotoSlab text-shadow-md mb-6 text-4xl font-extralight tracking-wide">
              {title}
            </h2>

            <p className="mb-2 text-xl font-extralight leading-relaxed tracking-wide">
              Sirius Scan is an enterprise-grade, open-source vulnerability
              management platform that unifies network scanning, host-based
              agent telemetry, and operator-driven triage in one interface.
              Built for security teams that need speed, context, and control.
            </p>
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-semibold text-violet-300">
                v1.0.0 Released
              </span>
              <span className="text-sm text-violet-300">
                Production-ready scanning and operator workflows
              </span>
            </div>
            <h3 className="mb-6 text-2xl leading-relaxed tracking-wide">
              Discover, Prioritize, Investigate, and Remediate
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
            {/* Stable aspect-ratio wrapper so both views occupy the same space */}
            <div className="relative w-full" style={{ aspectRatio: "800 / 460" }}>
              {showPro ? (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-violet-500/30 bg-gradient-to-br from-[#1e1b4b]/80 via-[#2e1065]/60 to-[#15162c]/90 backdrop-blur-sm">
                  <div className="text-center px-8">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-500/20 border border-violet-400/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-10 w-10 text-violet-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold text-white">
                      Sirius Pro
                    </h3>
                    <p className="mb-6 text-lg text-violet-300/80">
                      Coming Soon
                    </p>
                    <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-400">
                      Advanced reporting, team collaboration, managed
                      infrastructure, and priority support for enterprise
                      security operations.
                    </p>
                  </div>
                </div>
              ) : (
                <Image
                  src="/dashboard-dark.gif"
                  alt="Sirius Scan"
                  fill
                  className="rounded-lg object-contain"
                />
              )}
            </div>
            <div className="mt-6 flex cursor-pointer justify-center">
              <div className="inline-flex rounded-xl overflow-hidden border border-violet-500/30">
                <button
                  className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    !showPro
                      ? "bg-violet-600 text-white"
                      : "bg-[#1e1b4b]/60 text-gray-400 hover:text-white hover:bg-violet-600/30"
                  }`}
                  onClick={() => setShowPro(false)}
                >
                  Open Source
                </button>
                <button
                  className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    showPro
                      ? "bg-violet-600 text-white"
                      : "bg-[#1e1b4b]/60 text-gray-400 hover:text-white hover:bg-violet-600/30"
                  }`}
                  onClick={() => setShowPro(true)}
                >
                  Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
