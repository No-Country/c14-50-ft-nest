"use client";
import Link from "next/link";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://turnero-ed6c2-default-rtdb.firebaseio.com/menu.json/"
      );
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <header className="relative flex justify-between h-16 xl:w-screen z-[100] shadow-2xl drop-shadow-2xl">
      <Menu list={data} />
      <div className="w-24 flex justify-around items-center content-center mr-3 xl:mr-12 z-40">
        <Link href="#" className="w-16">
          <span className=" w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8"
            >
              <path
                fill="white"
                d="M450.27,348.569,406.6,267.945V184c0-83.813-68.187-152-152-152s-152,68.187-152,152v83.945L58.928,348.568A24,24,0,0,0,80.031,384h86.935c-.238,2.636-.367,5.3-.367,8a88,88,0,0,0,176,0c0-2.7-.129-5.364-.367-8h86.935a24,24,0,0,0,21.1-35.431ZM310.6,392a56,56,0,1,1-111.419-8H310.018A56.14,56.14,0,0,1,310.6,392ZM93.462,352,134.6,276.055V184a120,120,0,0,1,240,0v92.055L415.736,352Z"
              ></path>
            </svg>
          </span>
        </Link>
        <Link href="#" className="px-2">
          <span className="text-white"> Profile</span>
        </Link>
      </div>
    </header>
  );
}
