import React from "react";
import Tools from "../Components/Tools";
import "../globals.css";
import Link from "next/link";
import HeroBg from "../../public/hero-bg.jpg";
import Image from "next/image";

const MainPage = () => {
  return (
    <>
      <div className="relative main-heading text-center flex flex-col items-center justify-center h-screen z-10">
        <Image alt="hero-bg" src={HeroBg} className="-z-30 brightness-75 pt-14 absolute" />
        <h1 className="flex -mt-[6rem] justify-center items-center text-[6rem] font-extrabold cursor-default select-none z-10">
          <span className="animated-text-1">Develop. </span><span className="animated-text-2">Run. </span><span className="animated-text-3">Deploy.</span>
        </h1>
        <p className="w-[70%] mt-6 text-[#bababa] text-2xl text-center cursor-default select-none">
          Welcome to my world of code and creativity! As a full stack developer,
          my passion lies in the art of developing, running, and deploying
          top-notch projects. With a versatile skill set spanning both frontend
          and backend technologies, I bring ideas to life and ensure they thrive
          in the digital realm. Let&apos;s collaborate and make the best work
          together!
        </p>
        <div className="btns flex justify-center items-center gap-8 w-full">
          <button className="bg-white text-black rounded-md py-3 w-[10rem] mt-12">Collaborate</button>
          <Link href="/repos" className="animated-btn rounded-md py-3 w-[10rem] mt-12 border-violet-500 border-2 shadow-violet-500 shadow-3xl bg-black text-white">Projects</Link>
        </div>
      </div>
      <Tools />
      <div className='imgCarouselContainer'>
        <div className='imgCarousel' />
      </div>
    </>
  );
};

export default MainPage;
