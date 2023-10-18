"use client"
import Link from "next/link";
import { useState } from "react";

interface ListItem {
  id: number;
  href: string;
  link: string;
}

interface MenuProps {
  list: ListItem[];
}

export default function Menu ({ list }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };

  return (
    <>
      <aside className="block relative h-16 lg:invisible">
        <input
          onClick={handleClick}
          type="checkbox"
          name="checkbox"
          className="peer absolute block h-8 w-8 top-5 left-5 z-[60] opacity-0 cursor-pointer"
        />
        <div className="absolute flex flex-col justify-between w-[32px] h-[26px] z-50 top-4 left-5">
          <span
            className={`block h-1 w-full rounded-[10px] bg-[#ffffff] transform origin-[0%_0%] transition-transform duration-300 ease-in-out ${ isOpen ? "rotate-45 xs:bg-primary" : ""
              }`}
          ></span>
          <span
            className={`block h-1 w-full rounded-[10px] bg-[#ffffff] transition-transform duration-200 ease-in-out ${ isOpen ? "scale-y-0" : ""
              }`}
          ></span>
          <span
            className={`block h-1 w-full rounded-[10px] bg-[#ffffff] origin-[0%_100%] transform transition-transform duration-300 ease-in-out ${ isOpen ? "-rotate-45 xs:bg-primary" : ""
              } `}
          ></span>
        </div>
      </aside>
      <nav
        className={`pt-32 lg:pt-14 bg-[#ffffff]  top-0 lg:top-16 absolute w-full lg:w-[20%] h-screen  flex flex-col  transition-transform duration-500 ease-in-out text-center z-[30] shadow-2xl drop-shadow-2xl ${ isOpen ? "translate-y-0" : "translate-y-[-150%] lg:translate-y-0"
          } `}
      >
        {list.map((item: { href: string; link: string }, index: number) => {
          return (
            <li
              key={index}
              className="text-primary font-medium hover:text-white hover:bg-primary text-lg py-4 mx-4 list-none rounded-md lg:border-b-2"
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
