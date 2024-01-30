"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="lg_flex hidden h-[10vh] w-full justify-between items-center bg-transparent backdrop-blur-sm fixed border-b-[.2px] border-gray-800 z-20">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl uppercase font-extrabold ml-7">
            Port<span className="text-violet-500">city</span>
          </h2>
          <ol className="text-[15px] ml-6 text-gray-300 font-light">
            <Link
              className={`${pathname == "/" ? "text-white font-bold" : "text-gray-300"} mx-4 hover_text-white transition-all ease-in-out duration-[.3s]`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${pathname == "/about" ? "text-white font-bold" : "text-gray-300"} mx-4 hover_text-white transition-all ease-in-out duration-[.3s]`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${pathname == "/repos" ? "text-white font-bold" : "text-gray-300"} mx-4 hover_text-white transition-all ease-in-out duration-[.3s]`}
              href="/repos"
            >
              Projects
            </Link>
            <Link
              className={`${pathname == "/socialMedia" ? "text-white font-bold" : "text-gray-300"} mx-4 hover_text-white transition-all ease-in-out duration-[.3s]`}
              href="/socialMedia"
            >
              Social Media
            </Link>
          </ol>
        </div>
        <div className="Btn-Container text-base space-x-6 mr-6">
          <Link
            className="border-slate-500 border py-2 px-6 rounded-lg transition-all ease-in-out duration-[.3s]"
            href="/contact"
          >
            Contact Me
          </Link>
          <button className="text-black bg-white py-2 px-6 rounded-lg">
            Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
