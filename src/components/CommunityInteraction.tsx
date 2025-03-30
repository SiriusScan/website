import Link from "next/link";
import React, { useRef, useState } from "react";

const CommunityInteraction: React.FC = () => {
  // State to manage the currently selected item
  const [selectedItem, setSelectedItem] = useState<number | null>(0); // Default to the first item
  const [hoverItem, setHoverItem] = useState<number | null>(null); // Default to no hover

  const hoverRef = React.useRef<HTMLDivElement | null>(null);
  const handleMouseOver = (interaction: any, element: HTMLDivElement) => {
    // Reset the z-index of the previously hovered element
    if (hoverRef.current) {
      hoverRef.current.style.zIndex = "0";
    }

    // Update the ref to point to the currently hovered element
    hoverRef.current = element;

    // Bring the currently hovered element to the front
    element.style.zIndex = "10";
    setHoverItem(interaction.id);
  };

  return (
    <div className="container overflow-hidden text-white md:mb-10 md:flex">
      {/* Left Side: Description */}
      <div className="md:flex-2 min-h-[500px] max-w-[500px] rounded-lg py-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">
          {selectedItem !== null ? interactions[selectedItem]?.title : null}
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          {selectedItem !== null
            ? interactions[selectedItem]?.description
            : null}
        </p>
        {selectedItem !== null && interactions[selectedItem]?.actionImage && (
          <img
            src={interactions[selectedItem]?.actionImage || ""}
            alt="Action Image"
            className="my-4 rounded-lg"
          />
        )}

        <div className="mt-8 flex gap-4">
          <Link href="https://twitter.com/Sirius_Scan">
            <button className="mr-4 flex rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
              <span className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
              <span className="mx-2">Twitter</span>
            </button>
          </Link>
          <Link href="https://discord.gg/HuxjuMC3">
            <button className="mr-4 flex rounded bg-orange-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-600">
              <span className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </span>
              <span className="mx-2">Discord</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side: Interactions */}
      <div className="md:flex-3 relative top-[-220px] md:top-5 md:ml-24 md:p-8">
        {interactions.map((interaction, index) => (
          <div
            key={interaction.id}
            ref={(element) => {
              if (element && selectedItem === interaction.id) {
                hoverRef.current = element;
                element.style.zIndex = "5";
              }
            }}
            style={{
              top: `${(index % 3.5) * 120}px`,
              left: `${(index % 6) * 110}px`,
            }}
            className={`absolute w-screen p-4 transition-transform duration-300 
            ${selectedItem === interaction.id ? "z-10" : "z-0"}`}
            onMouseOver={(e) => handleMouseOver(interaction, e.currentTarget)}
            onMouseOut={() => setHoverItem(null)}
            onClick={() => setSelectedItem(interaction.id)}
          >
            <img
              src={interaction.image}
              alt={interaction.title}
              className={`rounded-lg 
              ${
                selectedItem === interaction.id
                  ? "scale-125 shadow-lg shadow-amber-300/40 ring-1 ring-amber-300/40"
                  : ""
              }
              ${
                hoverItem === interaction.id
                  ? "scale-125 cursor-pointer shadow-xl shadow-violet-100/40 ring-1 ring-violet-200/40"
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityInteraction;

const interactions = [
  {
    id: 0,
    image: "/community-interaction/build-together.png",
    title: "Building a Vulnerability Scanner Together",
    description:
      "Driven by the collective voice of hundreds on Twitter, Sirius Scan is more than just a vulnerability scanner; it's a testament to the power of community collaboration. Each feature and function reflects the specific needs and insights of our cybersecurity community. It's not just our tool, but the embodiment of everyone's vision, solidifying our commitment to a safer digital realm through unity.",
    actionImage: null,
  },
  {
    id: 1,
    image: "/community-interaction/community-features.png",
    title: "Post 2",
    description:
      "The community is what has caused this tool to be successful...",
    actionImage: null,
  },
  {
    id: 2,
    image: "/community-interaction/wish-list.png",
    title: "Post 2",
    description:
      "The community is what has caused this tool to be successful...",
    actionImage: null,
  },
  {
    id: 3,
    image: "/community-interaction/cmdb-integration.png",
    title: "Post 2",
    description:
      "The community is what has caused this tool to be successful...",
    actionImage: null,
  },
  {
    id: 4,
    image: "/community-interaction/regular-discussions.png",
    title: "Post 2",
    description:
      "The community is what has caused this tool to be successful...",
    actionImage: null,
  },
  {
    id: 5,
    image: "/community-interaction/remediation-evaluation.png",
    title: "Post 2",
    description:
      "The community is what has caused this tool to be successful...",
    actionImage: null,
  },
  {
    id: 6,
    image: "/community-interaction/agent-scanning.png",
    title: "Post 2",
    description:
      "The community is what has caused this tool to be successful...",
    actionImage: null,
  },
  // ... add more interactions here
];
