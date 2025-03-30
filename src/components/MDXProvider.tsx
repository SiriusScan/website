import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";

const components = {
  pre: (props: any) => {
    const codeProps = props.children.props;
    return (
      <CodeBlock>
        <pre {...props} />
      </CodeBlock>
    );
  },
};

interface MDXWrapperProps {
  children: React.ReactNode;
}

const MDXWrapper: React.FC<MDXWrapperProps> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXWrapper;
