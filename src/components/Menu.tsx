import type { Information, Settings } from "../utils/loadData";

export type MenuProps = {
  items: Settings["menu"];
};
export const Menu = ({ items }: MenuProps) => {
  return (
    <nav>
      <ul className="flex w-full md:w-fit justify-evenly md:justify-start  gap-1 md:gap-6 text-md text-dark font-{Roboto} font-bold text-lg transition-all duration-300">
        {items.map((item) => (
          <li key={item.name} className="hover:text-[#6F9AFF] active:text-gray-800">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
        <a href="/CV Fahad Alhatshami.pdf" target="_blank" rel="noreferrer">
          <li className="-mt-2 bg-[#6F9AFF] rounded-full px-3 py-2 text-white transition-all duration-200 hover:bg-[#587dd4] active:bg-[#6F9AFF] shadow-md  hover:cursor-pointer active:scale-105 active:shadow-none">
            CV
          </li>
        </a>
      </ul>
    </nav>
  );
};
