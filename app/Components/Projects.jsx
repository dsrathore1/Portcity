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
        <div className='h-full'>
            <h3 className="text-center my-8 text-sm font-medium uppercase tracking-widest text-[#888888] select-none cursor-default">Let&apos;s me show some glimpse of my work</h3>
            <div className='w-full h-[55vh] grid lg_flex justify-between items-center scroll-smooth'>
                <div className='w-full h-full px-4'>
                    <h1 className={`animate-text text-4xl tracking-wide uppercase flex ${k_s.className}`}>Digpal Singh Rathore<div className='animate-ball sm_w-[1rem] sm_h-[1rem] w-[2rem] h-[5rem] bg-violet-500 xl_ml-5 rounded-full'></div></h1>
                    <h2 className='mb-10 text-lg font-semibold text-violet-500'>Full-Stack Developer / DevOps Engineer</h2>
                    <p className='text-[#b3b3b3] md_text-lg text-xl '>I built open source projects and also I contributes on several platform. With an relentless passion for harnessing the power of automation, continuous integration, and continuous deployment. <br /><br /> I has emerged as a driving force in modern software development practices moreover deep-rooted technical acumen, combined with an insatiable curiosity, has propelled me to the vanguard of DevOps methodologies, where I orchestrates intricate systems with finesse and precision.</p>
                    <div className='mt-6 flex justify-center items-center gap-10'>
                        <button onClick={() => { window.open("https://linkedin.com/in/dsrathore1") }} className='hover_text-blue-600 duration-500 ease-in-out flex justify-center items-center gap-2 text-sm'>
                            <span className='text-4xl'>
                                <FaLinkedin />
                            </span>
                            <span className='hidden md_flex justify-center items-center gap-2 '> LinkedIn
                                <ShareBtn />
                            </span>
                        </button>
                        <button onClick={() => { window.open("https://instagram.com/amblent_photographer") }} className='hover_text-pink-600 duration-500 ease-in-out flex justify-center items-center gap-2 text-sm'>
                            <span className='text-4xl'>
                                <FaInstagram />
                            </span>
                            <span className='hidden md_flex justify-center items-center gap-2 '>Instagram
                                <ShareBtn />
                            </span>
                        </button>
                        <button onClick={() => { window.open("https://github.com/dsrathore1") }} className='hover_text-slate-500 duration-500 ease-in-out flex justify-center items-center gap-2 text-sm'>
                            <span className='text-4xl'>
                                <FaGithub />
                            </span>
                            <span className='hidden md_flex justify-center items-center gap-2 '>GitHub
                                <ShareBtn />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='md_w-full md_h-full mt-10 md_mt-0 md_block flex flex-col justify-center items-center'>
                    <div className='md_ml-16 no-scrollbar'>
                        <UsedTech />
                    </div>
                    <div className={`px-4 flex md_w-full w-screen justify-center items-center ${s_m.className}`}>
                        <Link href="/repos" className='bg-violet-500 px-10 my-5 py-3 rounded-lg uppercase tracking-wide' >Load More</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects