import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { SimpleImage } from "~/components/simple-image";

interface MarkdownProps {
  children: string;
}

export const Content: FC<MarkdownProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ReactMarkdown
      components={{
        p: (props) => {
          const { children } = props;

          return <p className="leading-6">{children}</p>;
        },
        a: (props) => {
          const { href, children } = props;

          return (
            <a
              href={href}
              target="_blank"
              className="text-blue-500 hover:text-blue-700 duration-300 ease-in-out leading-6 underline"
            >
              {children}
            </a>
          );
        },
        img: (props) => {
          const { src, alt } = props;

          console.log("img", props);

          return <SimpleImage src={src ?? ""} alt={alt ?? ""} />;
        }
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
