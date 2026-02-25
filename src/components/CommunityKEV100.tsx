import React from "react";
import Link from "next/link";

const CommunityKEV100: React.FC = () => {
  return (
    <div className="bg-[#15162c] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-300">
              Community Initiative
            </span>
            <h2 className="mb-6 text-3xl font-bold text-amber-300 sm:text-4xl">
              The Race to #KEV100
            </h2>
            <p className="mb-6 text-xl font-light text-violet-100">
              Not all vulnerabilities are created equal — most CVEs will never
              be exploited. By anyone. Ever.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              How do we know what matters, and is there a free option to empower
              all security teams to find the most important vulnerabilities?
              Sirius Scan is proud to support the endeavor to create an open
              source option to discover every vulnerability on CISA&apos;s Known
              Exploited Vulnerabilities (KEV) list.
            </p>
            <Link
              href="https://opensecurity.com"
              className="inline-block rounded-md border border-violet-200 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-white hover:text-violet-600 hover:shadow-lg"
            >
              Join the Fight
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-xl border border-violet-700/40 shadow-2xl shadow-violet-300/10">
              <img
                src="/kev100.png"
                alt="The Race to KEV100"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityKEV100;
