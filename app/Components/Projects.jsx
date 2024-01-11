"use client"
import React from 'react'
import ShareBtn from "../../public/share-button.jsx";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Space_Mono, Kaushan_Script } from 'next/font/google';
import UsedTech from './UsedTech.jsx';

export const s_m = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"]
});

const k_s = Kaushan_Script({
    subsets: ["latin"],
    weight: ["400"]
});

const Projects = () => {
    return (
        <>
            <h3 className="text-center my-8 text-sm font-medium uppercase tracking-widest text-[#888888] select-none cursor-default">Let&apos;s me show some glimpse of my work</h3>
            <div className='w-full h-[55vh] flex justify-between items-center scroll-smooth'>
                <div className='w-full h-full px-4 ov'>
                    <h1 className={`animate-text text-4xl tracking-wide uppercase flex ${k_s.className}`}>Digpal Singh Rathore<div className='animate-ball w-[1rem] h-[1rem] bg-violet-500 ml-2 rounded-full'></div></h1>
                    <h2 className='mb-10 text-lg font-semibold text-violet-500'>Full-Stack Developer</h2>
                    <p className='text-[#b3b3b3]'>I built open source projects and also I contributes on several platform. With an relentless passion for harnessing the power of automation, continuous integration, and continuous deployment. <br /><br /> I has emerged as a driving force in modern software development practices moreover deep-rooted technical acumen, combined with an insatiable curiosity, has propelled me to the vanguard of DevOps methodologies, where I orchestrates intricate systems with finesse and precision.</p>
                    <div className='mt-6 flex justify-center items-center gap-10'>
                        <button onClick={() => { window.open("https://linkedin.com/in/dsrathore1") }} className='hover_text-blue-600 duration-500 ease-in-out flex justify-center items-center gap-2 text-sm'>
                            <span className='text-4xl'>
                                <FaLinkedin />
                            </span>
                            LinkedIn
                            <ShareBtn />
                        </button>
                        <button onClick={() => { window.open("https://instagram.com/amblent_photographer") }} className='hover_text-pink-600 duration-500 ease-in-out flex justify-center items-center gap-2 text-sm'>
                            <span className='text-4xl'>
                                <FaInstagram />
                            </span>
                            Instagram
                            <ShareBtn />
                        </button>
                        <button onClick={() => { window.open("https://github.com/dsrathore1") }} className='hover_text-slate-500 duration-500 ease-in-out flex justify-center items-center gap-2 text-sm'>
                            <span className='text-4xl'>
                                <FaGithub />
                            </span>
                            GitHub
                            <ShareBtn />
                        </button>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='ml-16 no-scrollbar'>
                        <UsedTech />
                    </div>
                    <div className={`px-4 flex justify-center items-center ${s_m.className}`}>
                        <Link href="/projects" className='bg-violet-500 px-10 my-5 py-3 rounded-lg uppercase tracking-wide' >Load More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects