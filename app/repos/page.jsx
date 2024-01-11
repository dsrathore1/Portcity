"use client"

import React from 'react'
import Image from "next/image";
import "../globals.css";
import ProjectBG from "@/public/project_bg.jpg";
import { Playfair_Display } from 'next/font/google';
import MyProject from './my-projects';
import { BsArrowDown } from 'react-icons/bs'

export const pd = Playfair_Display({
    weight: ['500'],
    subsets: ['latin'],
    style: ['normal', 'italic']
})

const ReposBanner = () => {
    return (
        <>
            <Image className='fixed top-[-10rem] mt-4 z-0 brightness-50' height={1900} width={1600} src={ProjectBG} alt='bg' />
            <div className='pt-[10vh] bg-black'>
                <div className="relative text-white flex flex-wrap justify-center items-center">
                    <h1 className={`uppercase my-5 ${pd.className}`}>All my <span className='text-textViolet'>projects</span></h1>
                    <div className='h-[70vh] w-screen bg-transparent z-10' >
                        <div className='absolute left-[20rem]'>
                            <h1 className={`${pd.className} text-xl mt-10 uppercase tracking-wide`}>About <span className='text-[#8d57ff] font-semibold text-3xl ml-2'>King,</span></h1>
                            <p className={`${pd.className} w-[50vw] mt-16 text-justify text-5xl`} >I am a Bay Area - based product developer focused on collaboration, my users, and creativity of my work.</p>
                            <div className='xl_block hidden bg-[#532da7] h-3 w-[13rem] bottom-2 -left-1 absolute -z-20' />
                        </div>
                        <div className='absolute top-[5rem] w-1/2 bg-[#939393] opacity-10 h-[31.8rem] z-20'>
                        </div>
                        <div className='h-full flex justify-end items-center flex-col'>
                            <p className='mt-4 font-thin text-xl tracking-widest'>Scroll Down</p>
                            <p className='mb-4 text-3xl'><BsArrowDown /></p>
                        </div>
                    </div>
                    <div className='bg-[#14131A] h-full w-full'>
                        <MyProject />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReposBanner