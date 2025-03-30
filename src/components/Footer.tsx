import Image from "next/image";

const FooterSection = () => {
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Download", href: "https://github.com/SiriusScan/Sirius" },
    { title: "Documentation", href: "/docs" },
    { title: "Community", href: "/Community" },
    { title: "Support", href: "https://discord.gg/VTjqSxkJqX" },
  ];

  return (
    <div className="bg-[#222448] py-12 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/sirius-logo400w.png"
            alt="Sirius Scan"
            width={320}
            height={0}
            className=""
          />
          <p className="mt-4 text-xl font-extralight">
            Empowering Cybersecurity, One Scan at a Time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="mb-4 text-xl font-semibold">Quick Links</h6>
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index} className="mt-2">
                <a href={link.href} className="text-base hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and GitHub */}
        <div>
          <h6 className="mb-4 text-xl font-semibold">Contact</h6>
          <div className="mt-2">
            <a
              href="https://discord.gg/VTjqSxkJqX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-base hover:underline"
            >
              <ChatBubble /> Community Discord Server
            </a>
          </div>
          <div className="mt-4">
            <h6 className="mb-2 text-xl font-semibold">GitHub Repository</h6>
            <a
              href="https://github.com/SiriusScan/Sirius"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-base hover:underline"
            >
              <GitHubIcon /> Sirius GitHub
            </a>
          </div>
          <hr className="my-4" />
          <a
            href="https://opensecurity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            <Image
              src="/os-logo.png"
              alt="Open Security"
              width={150}
              height={0}
              className=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

const ChatBubble = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="mr-4 h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    />
  </svg>
);
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#fff"
    className="mr-4"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
