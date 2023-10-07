import { useState } from "react";
import Link from "next/link";

interface ListItem {
  id: number;
  href: string;
  link: string;
}

interface MenuProps {
  list: ListItem[];
}

export default function Menu({ list }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside className="block relative h-16 xl:invisible">
        <input
          onClick={() => setIsOpen(!isOpen)}
          type="checkbox"
          name="checkbox"
          className="peer absolute block h-8 w-8 top-5 left-5 z-[60] opacity-0 cursor-pointer"
        />
        <div className="absolute flex flex-col justify-between w-[32px] h-[26px] z-50 top-4 left-5">
          <span
            className={`block h-1 w-full rounded-[10px] bg-[#ffffff] transform origin-[0%_0%] transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 bg-[#0C616E]" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full rounded-[10px] bg-[#ffffff] transition-transform duration-200 ease-in-out ${
              isOpen ? "scale-y-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full rounded-[10px] bg-[#ffffff] origin-[0%_100%] transform transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 bg-[#0C616E]" : ""
            } `}
          ></span>
        </div>
      </aside>
      <aside></aside>
      <nav
        className={`pt-32 xl:pt-14 bg-[#ffffff]  top-0 xl:top-16 absolute w-full xl:w-[20%] h-screen  flex flex-col  transition-transform duration-500 ease-in-out text-center z-[30] shadow-2xl drop-shadow-2xl ${
          isOpen ? "xs:translate-y-0" : "xs:translate-y-[-150%]"
        } `}
      >
        {list.map((item: { href: string; link: string }, index: any) => {
          return (
            <li
              key={index}
              className="text-[#0C616E] font-medium hover:text-white hover:bg-[#0C616E] text-lg list-none rounded-md py-4 mx-4"
            >
              <Link onClick={handleClick} href={item.href}>
                {item.link}
              </Link>
            </li>
          );
        })}
      </nav>
    </>
  );
}
