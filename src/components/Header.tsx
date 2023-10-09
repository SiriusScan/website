// components/Header.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`absolute w-full pt-4 text-white transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span>
            <Image
              src={"/sirius-logo400w.png"}
              width={200}
              height={36}
              alt={""}
            />
          </span>
        </Link>
        <div className="hidden text-xl sm:flex">
          <Link href="/features">
            <span className="mx-2 hover:font-bold">Features</span>
          </Link>
          <Link href="/community">
            <span className="mx-2 hover:font-bold">Community</span>
          </Link>
          <Link href="/start">
            <span className="mx-2 hover:font-bold">Getting Started</span>
          </Link>
        </div>
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="top-full mx-auto mt-2 flex flex-col justify-end  border-b border-violet-100 bg-[#161b37] p-2 pb-16 text-xl text-violet-100 sm:hidden">
          <Link href="/features">
            <span className="mx-2 my-2 block hover:font-bold">Features</span>
          </Link>
          <Link href="/community">
            <span className="mx-2 my-2 block hover:font-bold">Community</span>
          </Link>
          <Link href="/docs">
            <span className="mx-2 my-2 block hover:font-bold">
              Documentation
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
