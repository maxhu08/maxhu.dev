import { FC } from "react";
// @ts-expect-error
import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-expect-error
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface FancySyntaxHighlighterProps {
  language: string;
  children: string;
}

export const FancySyntaxHighlighter: FC<FancySyntaxHighlighterProps> = ({
  language,
  children,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomOneDark}
      customStyle={{ background: "#00000000", padding: 0 }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
