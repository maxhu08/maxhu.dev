import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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
        p: props => {
          const { children } = props;

          return <p className="leading-6">{children}</p>;
        },
        a: props => {
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
        img: props => {
          const { src, alt } = props;

          return (
            <a href={`/${src}`} target="_blank">
              <div className="my-2 rounded-md md:rounded-lg overflow-hidden">
                <img src={`/${src!}`} alt={alt ?? ""} />
              </div>
            </a>
          );
        }
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
