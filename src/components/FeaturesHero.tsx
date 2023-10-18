import Link from "next/link";
import React, { useState, useRef } from "react";

const FeaturesHero: React.FC = () => {
  return (
    <main className="container z-20 mx-auto px-4 pb-6 pt-20 text-white">
      <div className="grid items-center justify-center gap-8 md:grid-cols-5">
        {/* Text Section (2/3 width) */}
        <div className="md:col-span-3 md:px-24">
          <h1 className="mb-6 text-4xl font-bold text-amber-300">
            A good scanner should help YOU understand YOUR systems!
          </h1>
          <p className="mb-8 text-xl font-light text-violet-100">
            Do you use Nmap? Many information security professional do because
            it is vital to explore what the system is, not just what CVEs may
            affect it. Good penetration testers and vulnerability assessors look
            for attack surface and opportunity. Sirius Scan presents you a
            data-first view of the environment that empowers the operator
            directly.
          </p>
          <Link href="https://github.com/SiriusScan/Sirius">
            <button className="rounded-md border border-violet-200 px-16 py-2 text-white transition duration-300 hover:bg-white hover:text-violet-500 hover:shadow-lg">
              Learn More
            </button>
          </Link>
        </div>

        {/* Image Section (1/3 width) */}
        <div className="flex items-center justify-center md:col-span-2">
          <img
            src="/host-view.png"
            alt="Sirius Scan Image"
            className="max-h-full w-auto rounded-lg shadow-2xl shadow-violet-300/20"
          />
        </div>
      </div>
    </main>
  );
};

export default FeaturesHero;
