import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <div className="h-[10vh] w-full flex justify-between items-center bg-transparent backdrop-blur-sm fixed">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl uppercase font-extrabold ml-7">
            Port<span className="text-violet-500">city</span>
          </h2>
          <ol className="text-[15px] ml-6 text-gray-300 font-light">
            <Link
              className="mx-4 hover:text-white transition-all ease-in-out duration-[.3s]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="mx-4 hover:text-white transition-all ease-in-out duration-[.3s]"
              href="/about"
            >
              About
            </Link>
            <Link
              className="mx-4 hover:text-white transition-all ease-in-out duration-[.3s]"
              href="#project"
            >
              Projects
            </Link>
            <Link
              className="mx-4 hover:text-white transition-all ease-in-out duration-[.3s]"
              href="#project"
            >
              Contribute
            </Link>
            <Link
              className="mx-4 hover:text-white transition-all ease-in-out duration-[.3s]"
              href="#project"
            >
              Progress
            </Link>
            <Link
              className="mx-4 hover:text-white transition-all ease-in-out duration-[.3s]"
              href="#project"
            >
              Social Media
            </Link>
          </ol>
        </div>
        <div className="Btn-Container text-base space-x-6 mr-6">
          <Link
            className="border-slate-500 border py-2 px-6 rounded-lg transition-all ease-in-out duration-[.3s]"
            href="#contact"
          >
            Contact
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