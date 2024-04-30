import { FancyContent } from "~/components/fancy/fancy-content";
import { TC } from "~/components/term-color";

const Page = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid place-items-center">
        <FancyContent>term-colors</FancyContent>
        <FancyContent>
          <TC.col0b>##</TC.col0b>
          <TC.col1b>##</TC.col1b>
          <TC.col2b>##</TC.col2b>
          <TC.col3b>##</TC.col3b>
          <TC.col4b>##</TC.col4b>
          <TC.col5b>##</TC.col5b>
          <TC.col6b>##</TC.col6b>
          <TC.col7b>##</TC.col7b>
          <br />
          <TC.col8b>##</TC.col8b>
          <TC.col9b>##</TC.col9b>
          <TC.col10b>##</TC.col10b>
          <TC.col11b>##</TC.col11b>
          <TC.col12b>##</TC.col12b>
          <TC.col13b>##</TC.col13b>
          <TC.col14b>##</TC.col14b>
          <TC.col15b>##</TC.col15b>
        </FancyContent>
      </div>
    </div>
  );
};

export default Page;
