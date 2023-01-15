import { Logo } from "./Logo";
import { Menu } from "./Menu";
import type { Information, Settings } from "../utils/loadData";

export const Header = ({ info, settings }: { info: Information; settings: Settings }) => {
  return (
    <header className="flex justify-between flex-col md:flex-row md:px-[160px] md:pt-[80px] px-[30px] pt-[40px]">
      <Logo info={info} />
      <div className="md:mt-2 mt-6 w-full md:w-auto">
        <Menu items={settings.menu} />
      </div>
    </header>
  );
};
