import Link from "next/link";
import React, { useState, useRef } from "react";

const CommuinitySponsor: React.FC = () => {
  return (
    <main className=" bg-blue-500 py-8 text-white">
      <div className="container flex items-center justify-center gap-10">
        <div className="flex flex-col md:text-xl">
          Sirius Scan is sponsored by Open Security
          <Link href="https://opensecurity.com">
            <button className="mt-2 rounded-md border border-violet-100 px-4 py-2 text-sm hover:bg-violet-100 hover:text-blue-500">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <img alt="Open Security" src="/os-logo.png" width={190} />
        </div>
      </div>
    </main>
  );
};

export default CommuinitySponsor;
