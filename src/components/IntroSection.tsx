// components/IntroSection.tsx
import Image from "next/image";

const IntroSection: React.FC = () => {
  return (
    <div className="bg-blue-500 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Welcome to Sirius Scan</h2>
            <p className="mb-4">
              Sirius Scan is an open-source, general-purpose vulnerability
              scanning tool that helps you identify and manage security risks in
              your network infrastructure.
            </p>
            <h3 className="mb-4 text-xl font-medium">
              Discover, Assess, and Remediate
            </h3>
            <div className="mt-4">
              <a
                href="/features"
                className="border-2 border-white px-8 py-2 text-white transition duration-300 hover:bg-white hover:text-blue-500"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/sirius-logo400w.png"
              alt="Sirius Scan"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
