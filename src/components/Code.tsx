import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type RunButtonProps = {
  disabled: boolean;
  onClick: () => void;
};
const RunButton = ({ disabled, onClick }: RunButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        disabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-700",
        "text-white font-bold py-2 px-4 rounded"
      )}
    >
      Run
    </button>
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
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-end">
        <RunButton
          disabled={false}
          onClick={() => {
            console.log("Hire me plz");
          }}
        />
      </div>
      <div className="w-[500px] h-[300px] bg-[#282c34f5] p-4 rounded-md overflow-hidden shadow-md inset-1">
        <div className="text-white" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  );
};
