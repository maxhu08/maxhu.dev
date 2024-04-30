import { FancyContent } from "../fancy/fancy-content";
import { TC } from "~/components/term-color";

// prettier-ignore
export const Distros = {
  arch: () => (
    <div>
      <pre className="whitespace-pre tracking-wider">
        <FancyContent>
          <TC.col6b>
            {`                 -\`                  
                .o+\`                
               \`ooo/                
              \`+oooo:               
             \`+oooooo:              
             -+oooooo+:             
           \`/:-:++oooo+:            
          \`/++++/+++++++:           
         \`/++++++++++++++:          
        \`/+++ooooooooooooo/\`        
       ./ooosssso++osssssso+\`       
      .oossssso-\`\`\`\`/ossssss+\`      
     -osssssso.      :ssssssso.     
    :osssssss/        osssso+++.    
   /ossssssss/        +ssssooo/-    
 \`/ossssso+/:-        -:/+osssso+-
\`+sso+:-\`                 \`.-/+oso: 
\`++:.                          \`-/+/
.\`                                \`/`}
          </TC.col6b>
        </FancyContent>
      </pre>
    </div>
  ),
};
