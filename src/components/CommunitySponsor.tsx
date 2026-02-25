import React from "react";
import Link from "next/link";

const CommunitySponsor: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#15162c] to-[#1e1b4b] py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-violet-700/40 bg-violet-900/10 p-10 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
            Proudly Sponsored By
          </p>
          <div className="mb-6 flex justify-center">
            <Link href="https://opensecurity.com" target="_blank" rel="noopener noreferrer">
              <img
                alt="Open Security"
                src="/os-logo.png"
                width={200}
                className="transition-opacity hover:opacity-80"
              />
            </Link>
          </div>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-300">
            Sirius Scan is sponsored by Open Security. Their support makes it
            possible to keep this project free, open, and growing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://opensecurity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-violet-200 bg-violet-600 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-violet-700 hover:shadow-lg"
            >
              Learn More
            </Link>
            <Link
              href="https://github.com/sponsors/SiriusScan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-violet-200 px-8 py-2.5 font-medium text-white transition duration-300 hover:bg-white hover:text-violet-600 hover:shadow-lg"
            >
              Support the Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySponsor;
