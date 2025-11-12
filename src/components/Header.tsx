// components/Header.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import SiriusIcon from "./icons/SiriusIcon";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`absolute z-30 w-full pt-4 text-white transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-2">
            <SiriusIcon
              width={40}
              height={40}
              fill="white"
              className="transition-opacity hover:opacity-80"
            />
            <div className="flex items-baseline gap-2">
              <h1 
                className="text-2xl font-black text-white tracking-[0.15em] drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                SIRIUS
              </h1>
              <h2 
                className="text-xl font-light text-cyan-400 tracking-[0.3em] drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                SCAN
              </h2>
            </div>
          </span>
        </Link>
        <div className="hidden text-xl sm:flex">
          <Link href="/features">
            <span className="mx-2 hover:font-bold">Features</span>
          </Link>
          <Link href="/docs">
            <span className="mx-2 hover:font-bold">Documentation</span>
          </Link>
          <Link href="/community">
            <span className="mx-2 hover:font-bold">Community</span>
          </Link>
          <Link href="https://github.com/SiriusScan/Sirius">
            <span className="mx-2 hover:font-bold">Getting Started</span>
          </Link>
        </div>
        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      {mounted && (
        <div
          className={`top-full mx-auto mt-2 flex flex-col justify-end border-b border-violet-100 bg-[#161b37] p-2 pb-8 text-xl text-violet-100 transition-all duration-300 sm:hidden ${
            isOpen ? "opacity-100" : "hidden opacity-0"
          }`}
        >
          <Link href="/features">
            <span className="mx-2 my-2 block hover:font-bold">Features</span>
          </Link>
          <Link href="/docs">
            <span className="mx-2 my-2 block hover:font-bold">
              Documentation
            </span>
          </Link>
          <Link href="/community">
            <span className="mx-2 my-2 block hover:font-bold">Community</span>
          </Link>
          <Link href="https://github.com/SiriusScan/Sirius">
            <span className="mx-2 my-2 block hover:font-bold">
              Getting Started
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
