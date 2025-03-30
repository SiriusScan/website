import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <span className="text-violet-400 hover:text-violet-300">
          {children}
        </span>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} className="text-violet-400 hover:text-violet-300">
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-violet-400 hover:text-violet-300"
    >
      {children}
    </a>
  );
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 800,
  height = 400,
}) => {
  return (
    <div className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
        layout="responsive"
      />
    </div>
  );
};

const MDXComponents = {
  h1: (props: any) => (
    <h1 className="mb-8 text-4xl font-bold text-violet-200" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mb-6 text-2xl font-semibold text-violet-200" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mb-4 text-xl font-semibold text-violet-200" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mb-4 text-lg font-semibold text-violet-200" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed text-gray-300" {...props} />
  ),
  a: CustomLink,
  img: CustomImage,
  ul: (props: any) => (
    <ul className="mb-4 list-disc pl-6 text-gray-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-4 list-decimal pl-6 text-gray-300" {...props} />
  ),
  li: (props: any) => <li className="mb-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="mb-4 border-l-4 border-violet-400 pl-4 italic text-gray-400"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="rounded bg-[#1a1b2e] px-1.5 py-0.5 font-mono text-violet-200"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg bg-[#1a1b2e] p-4 font-mono text-violet-200"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="mb-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-violet-800/20" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="bg-violet-800/10 px-4 py-2 text-left font-semibold text-violet-200"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border-t border-violet-800/20 px-4 py-2" {...props} />
  ),
};

export default MDXComponents;
