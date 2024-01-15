"use client"
import React, { useEffect } from "react";
import Tools from "../Components/Tools";
import "../globals.css";
import Link from "next/link";
import HeroBg from "../../public/hero-bg.jpg";
import Image from "next/image";

const MainPage = () => {
  useEffect(() => {
    document.title = "Portcity - Home"
  }, [])
  return (
    <>
      <div className="relative md_mb-[5.6rem] w-full mb-[15rem] mt-[5rem] md_mt-0 main-heading text-center flex flex-col items-center justify-center h-screen z-10">
        <Image alt="hero-bg" src={HeroBg} className="-z-30 hidden lg_block brightness-75 pt-14 absolute" />
        <h1 className="md_flex grid md:-mt-[6rem] mt-[5rem] justify-center items-center text-[4rem] sm_text-[5rem] md:text-[6rem] font-extrabold cursor-default select-none z-10">
          <span className="animated-text-1 -mb-10 md_mb-0">Develop. </span><span className="animated-text-2 -mb-10 md_mb-0">Run. </span><span className="animated-text-3 -mb-5 md_mb-0">Deploy.</span>
        </h1>
        <p className="md_w-[70%] w-full p-5 mt-6 text-[#bababa] text-xl md_text-2xl text-justify md_text-center cursor-default select-none">
          Welcome to my world of code and creativity! As a full stack developer,
          my passion lies in the art of developing, running, and deploying
          top-notch projects. With a versatile skill set spanning both frontend
          and backend technologies, I bring ideas to life and ensure they thrive
          in the digital realm. Let&apos;s collaborate and make the best work
          together!
        </p>
        <div className="btns grid md_flex justify-center items-center sm_gap-8 w-full">
          <button className="bg-white text-black rounded-md py-3 w-[10rem] mt-12">Collaborate</button>
          <Link href="/repos" className="animated-btn rounded-md py-3 w-[10rem] mt-12 border-violet-500 border-2 shadow-violet-500 shadow-3xl bg-black text-white">Projects</Link>
        </div>
      </div>
      <Tools />
      <div className='imgCarouselContainer lg_block hidden'>
        <div className='imgCarousel' />
      </div>
    </>
  );
};

export default MainPage;
