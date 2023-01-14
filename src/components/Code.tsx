import { useEffect, useState } from "react";
import { GrayBox } from "./GrayBox";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Highlight from "react-highlight";
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
      disabled={disabled}
    >
      Run
    </button>
  );
};

export const Code = () => {
  const [completed, setCompleted] = useState(false);
  const [text] = useTypewriter({
    words: ["const text = 'SGlyZSBtZSBwbHo='\nconst decoded = atob(text)\nconsole.log(decoded) "],
    loop: 1,
    typeSpeed: 40,
    onLoopDone: () => {
      setCompleted(true);
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-end">
        <RunButton
          disabled={!completed}
          onClick={() => {
            console.log("Hire me plz");
          }}
        />
      </div>
      <div className="w-[500px] h-[300px] bg-[#282c34] p-4 rounded-md overflow-hidden shadow-md inset-1">
        <Highlight className="javascript w-full h-full">{text}</Highlight>
      </div>
    </div>
  );
};
