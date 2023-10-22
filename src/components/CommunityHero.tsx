import React from "react";
import Link from "next/link";

const CommunityHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-[#15162c] py-20">
      <div className="container mx-auto px-4 text-white">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text Section */}
          <div>
            <h1 className="mb-4 text-4xl font-bold">
              Sirius Scan: Powered by the Community
            </h1>
            <p className="mb-8 text-xl">
              Showcasing the strength of open-source contributions,
              sponsorships, and global collaborations.
            </p>
            <Link href="/community-details">
              <button className="rounded-full bg-white px-8 py-3 text-[#15162c] transition duration-300 hover:bg-opacity-90">
                Explore the Community
              </button>
            </Link>
          </div>

          {/* Imagery Section */}
          <div className="flex items-center justify-center">
            {/* Placeholder for the image or collage */}
            <div className="h-96 w-96 rounded-lg bg-gray-300">
              <p className="text-center text-black">
                Placeholder for Image/Collage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
