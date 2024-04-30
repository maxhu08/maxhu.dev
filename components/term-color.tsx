import { FC } from "react";
import { tc } from "~/constants/term-colors";

interface TCProps {
  children?: React.ReactNode;
}

// prettier-ignore
export const TC = {
  // regular
  col0: (p) => <span style={{ color: tc.col0 }}>{p.children}</span>,
  col1: (p) => <span style={{ color: tc.col1 }}>{p.children}</span>,
  col2: (p) => <span style={{ color: tc.col2 }}>{p.children}</span>,
  col3: (p) => <span style={{ color: tc.col3 }}>{p.children}</span>,
  col4: (p) => <span style={{ color: tc.col4 }}>{p.children}</span>,
  col5: (p) => <span style={{ color: tc.col5 }}>{p.children}</span>,
  col6: (p) => <span style={{ color: tc.col6 }}>{p.children}</span>,
  col7: (p) => <span style={{ color: tc.col7 }}>{p.children}</span>,
  col8: (p) => <span style={{ color: tc.col8 }}>{p.children}</span>,
  col9: (p) => <span style={{ color: tc.col9 }}>{p.children}</span>,
  col10: (p) => <span style={{ color: tc.col10 }}>{p.children}</span>,
  col11: (p) => <span style={{ color: tc.col11 }}>{p.children}</span>,
  col12: (p) => <span style={{ color: tc.col12 }}>{p.children}</span>,
  col13: (p) => <span style={{ color: tc.col13 }}>{p.children}</span>,
  col14: (p) => <span style={{ color: tc.col14 }}>{p.children}</span>,
  col15: (p) => <span style={{ color: tc.col15 }}>{p.children}</span>,

  // bold
  col0b: (p) => <span style={{ color: tc.col0 }} className="font-semibold">{p.children}</span>,
  col1b: (p) => <span style={{ color: tc.col1 }} className="font-semibold">{p.children}</span>,
  col2b: (p) => <span style={{ color: tc.col2 }} className="font-semibold">{p.children}</span>,
  col3b: (p) => <span style={{ color: tc.col3 }} className="font-semibold">{p.children}</span>,
  col4b: (p) => <span style={{ color: tc.col4 }} className="font-semibold">{p.children}</span>,
  col5b: (p) => <span style={{ color: tc.col5 }} className="font-semibold">{p.children}</span>,
  col6b: (p) => <span style={{ color: tc.col6 }} className="font-semibold">{p.children}</span>,
  col7b: (p) => <span style={{ color: tc.col7 }} className="font-semibold">{p.children}</span>,
  col8b: (p) => <span style={{ color: tc.col8 }} className="font-semibold">{p.children}</span>,
  col9b: (p) => <span style={{ color: tc.col9 }} className="font-semibold">{p.children}</span>,
  col10b: (p) => <span style={{ color: tc.col10 }} className="font-semibold">{p.children}</span>,
  col11b: (p) => <span style={{ color: tc.col11 }} className="font-semibold">{p.children}</span>,
  col12b: (p) => <span style={{ color: tc.col12 }} className="font-semibold">{p.children}</span>,
  col13b: (p) => <span style={{ color: tc.col13 }} className="font-semibold">{p.children}</span>,
  col14b: (p) => <span style={{ color: tc.col14 }} className="font-semibold">{p.children}</span>,
  col15b: (p) => <span style={{ color: tc.col15 }} className="font-semibold">{p.children}</span>,
} satisfies Record<string, FC<TCProps>>;
