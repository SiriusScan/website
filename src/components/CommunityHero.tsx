import React from "react";
import Link from "next/link";

const CommunityHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-[#15162c] py-20">
      <div className="container mx-auto px-4 text-white">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text Section */}
          <div>
            <h1 className="mb-4 text-4xl font-bold text-amber-300">
              The Race to #KEV100
            </h1>
            <p className="mb-8 text-2xl font-extralight">
              Not all vulnerabilities are created equal and most CVEs will never
              be exploited. By anyone. Ever.
            </p>
            <p className="mb-8 text-xl text-violet-200">
              How do we know what matters and is their an free option to empower
              all security teams to find the most important vulnerabilities?{" "}
              <br />
              Sirius Scan is proud to support the endeavor to create an open
              source option to discover every vulnerability on the Cybersecurity
              Infrastructure Security Agency's (CISA) Known Exploited
              Vulnerabilities (KEV) list.
            </p>
            <Link href="https://opensecurity.com">
              <button className="rounded-md border border-violet-200 px-8 py-2 text-white transition duration-300 hover:bg-white hover:text-blue-500 hover:shadow-lg">
                Join the Fight!
              </button>
            </Link>
          </div>

          {/* Imagery Section */}
          <div className="flex items-center justify-center">
            {/* Placeholder for the image or collage */}
            <div className="rounded-lg">
              <img
                className="rounded-xl"
                src="/kev100.png"
                alt="Community Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
