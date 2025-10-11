import Link from "next/link";
import React, { useState, useRef } from "react";

const FeaturesHero: React.FC = () => {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-4 pb-6 pt-20">
        <div className="grid items-center justify-center gap-8 md:grid-cols-5">
          {/* Text Section (2/3 width) */}
          <div className="md:col-span-3 md:px-24">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-semibold text-violet-300">
                v0.4.0 Released
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-amber-300">
              Enterprise-Grade Vulnerability Scanning with Real-Time Observability
            </h1>
            <p className="mb-8 text-xl font-light text-violet-100">
              Sirius Scan combines powerful network scanning with comprehensive system monitoring. 
              Built on a modern microservices architecture, it integrates industry-standard tools 
              like Nmap and RustScan with real-time health monitoring, centralized logging, and 
              performance metrics. Get complete visibility into both your security posture and 
              system health in one unified platform.
            </p>
            <div className="flex gap-4">
              <Link
                href="/docs/getting-started/installation"
                className="inline-block rounded-md border border-violet-200 bg-violet-600 px-8 py-2 text-white transition duration-300 hover:bg-violet-700 hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/SiriusScan/Sirius"
                className="inline-block rounded-md border border-violet-200 px-8 py-2 text-white transition duration-300 hover:bg-white hover:text-violet-500 hover:shadow-lg"
              >
                View on GitHub
              </Link>
            </div>
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
      </div>
    </div>
  );
};

export default FeaturesHero;
