import classNames from "classnames";

export type GrayBoxProps = {
  className?: string;
  strength?: "light" | "medium" | "dark";
};

export const GrayBox = ({ className, strength = "medium" }: GrayBoxProps) => {
  return (
    <div
      className={classNames(
        "bg-gray-400 w-[100px] h-[100px] rounded-md",
        strength === "light" && "bg-gray-100",
        strength === "medium" && "bg-gray-400",
        strength === "dark" && "bg-gray-800",
        className
      )}
    ></div>
  );
};
