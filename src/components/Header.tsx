// components/Header.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show !== scroll) {
        setScroll(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <header
      className={`fixed left-0 top-0 w-full transition-all duration-300 ${
        scroll ? "bg-transparent text-black" : " text-white"
      } p-4`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span>
            <Image
              src={scroll ? "/sirius-logo400w.png" : "/sirius-logo400w.png"}
              alt="Your Logo"
              width={200}
              height={36}
            />
          </span>
        </Link>
        <div>
          <Link href="/features">
            <span className="mx-2 hover:font-bold">Features</span>
          </Link>
          <Link href="/docs">
            <span className="mx-2 hover:font-bold">Documentation</span>
          </Link>
          <Link href="/community">
            <span className="mx-2 hover:font-bold">Community</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
