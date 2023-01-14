import type { Information } from "../utils/loadData";

export type LogoProps = {
  info: Information;
};
export const Logo = ({ info }: LogoProps) => {
  return (
    <a href="/">
      <div className="flex flex-col">
        <h3>{info.name}</h3>
        <p className=" text-[#888] font-semibold md:text-[16px]  text-[12px]">
          Bachelor of Science in Engineering, Computer
          <br />
          Science and Engineering student at Lund university
        </p>
      </div>
    </a>
  );
};
