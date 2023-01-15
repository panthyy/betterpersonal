import type { Information, Settings } from "../utils/loadData";

export type MenuProps = {
  items: Settings["menu"];
};
export const Menu = ({ items }: MenuProps) => {
  return (
    <nav>
      <ul className="flex w-full md:w-fit justify-evenly md:justify-start  gap-1 md:gap-6 text-md text-dark font-{Roboto} font-bold text-[20px] transition-all duration-300">
        {items.map((item) => (
          <li key={item.name} className="hover:text-[#6F9AFF] active:text-gray-800">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
