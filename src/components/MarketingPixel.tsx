import { useEffect } from "react";

const RDCDN_SCRIPT_ID = "sirius-rdcdn-pixel";
const RDCDN_RTJS_URL = "https://rdcdn.com/rtjs?aid=32981";

/**
 * Loads the marketing attribution script from rdcdn (async GET to rtjs?aid=…).
 * Mount once from _app; idempotent for React 18 Strict Mode in development.
 */
export default function MarketingPixel() {
  useEffect(() => {
    if (document.getElementById(RDCDN_SCRIPT_ID)) return;

    const w = window as Window & { rdcndbg?: boolean };
    w.rdcndbg = false;

    const script = document.createElement("script");
    script.id = RDCDN_SCRIPT_ID;
    script.async = true;
    script.src = RDCDN_RTJS_URL;
    document.head.appendChild(script);
  }, []);

  return null;
}
