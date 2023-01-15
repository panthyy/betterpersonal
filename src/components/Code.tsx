import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type RunButtonProps = {
  disabled: boolean;
  script: string;
};
const RunButton = ({ disabled, script }: RunButtonProps) => {
  return (
    <>
      <button
        id="runButton"
        className={classNames(
          disabled
            ? "bg-gray-400"
            : "bg-green-500 hover:bg-green-700 active:bg-green-900 active:scale-105 transform transition duration-200",
          "text-white font-bold py-2 px-4 rounded"
        )}
      >
        Run
      </button>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const RunButtonFn = () => {${script}}
          document.getElementById("runButton").addEventListener("click", RunButtonFn);
          `,
        }}
      />
    </>
  );
};

const text = "SGlyZSBtZSBwbHo=";
const decoded = atob(text);
console.log(decoded);

export const Code = () => {
  const code = `
<span style="color: #A149A9">const</span>  <span style="color: #D9923B">text</span> = <span style="color: #5DA165" >'SGlyZSBtZSBwbHo='</span>;
<br>
<span style="color: #A149A9">const</span><span style="color: #D9923B"> decoded</span>  = <span style="color: #4D84BE">atob</span>(<span style="color: #D9923B">text</span>);
<br>
<span style="color: #D9923B">console</span>.<span style="color: #4D84BE">log</span>(<span style="color: #D9923B">decoded</span>);
`;

  return (
    <div className="flex flex-col gap-4 relative">
      <div className="w-full flex justify-end absolute bottom-4 right-4">
        <RunButton disabled={false} script={'console.log("Hire me plz");'} />
      </div>
      <div className="w-[500px] h-[300px] bg-[#282c34f5] p-4 rounded-md overflow-hidden shadow-md inset-1">
        <div className="text-white" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  );
};
