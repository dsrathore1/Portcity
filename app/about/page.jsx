"use client"
import React, { useEffect } from 'react'

import Link from 'next/link';
import { Kaushan_Script, Space_Mono, Cardo } from 'next/font/google';
import { BsHeartHalf } from "react-icons/bs";

export const k_s = Kaushan_Script({
    weight: ['400'],
    subsets: ["latin"]
});

export const s_m = Space_Mono({
    weight: ["700"],
    subsets: ['latin'],

});

export const cardo = Cardo({
    weight: ["400", "700"],
    subsets: ["latin"]
})
const About = () => {

    useEffect(() => {
        document.title = "About Page - Let me tell you little bit about myself"
    }, []);

    return (
        <>
            <div className="flex justify-between items-center h-screen">
                <div className='px-4 w-[100%]'>
                    <h1 className={`${k_s.className} relative text-6xl mt-10 flex`}>Exprienced Engineer <br />& A Great Person<div className='animate-ball absolute left-[26.4rem] bottom-[1.5rem] w-[1rem] h-[1rem] bg-violet-500 ml-2 rounded-full'></div></h1>
                    <h3 className={`${s_m.className} text-md tracking-widest mt-4`}>Designer and photographer for personal use</h3>
                    <div className='mt-10'>
                        <h2 className={`${s_m.className} tracking-wider uppercase font-extrabold text-2xl`}>Hello! I&apos;m Digpal</h2>
                        <p className={`${s_m.className} w-1/2 tracking-tight text-[#c1c1c1] text-[17px] font-medium my-4 text-justify`}>I&apos;m a developer, designer, with awesome designs as well as I pursued my B.Tech. Computer Science degree, from Rajasthan Technical University. Join me in exploring the captivating narrative of technology, turned DevOps virtuoso, as I continues to shape the future of software engineering with my profound insights and groundbreaking contributions.</p>
                    </div>
                    <div>
                        <h3 className={`${s_m.className} uppercase text-lg tracking-widest mt-8`}>Where to find me</h3>
                        <ol className={`${s_m.className} flex tracking-wide mt-3`}>
                            <Link className='hover:text-violet-600 transition-all duration-[.7s] ease-in-out flex justify-center items-center mx-3 gap-2' href="#"><BsHeartHalf />GitHub</Link>
                            <Link className='hover:text-pink-600 transition-all duration-[.7s] ease-in-out flex justify-center items-center mx-3 gap-2' href="#"><BsHeartHalf />Instagram</Link>
                            <Link className='hover:text-blue-600 transition-all duration-[.7s] ease-in-out flex justify-center items-center mx-3 gap-2' href="#"><BsHeartHalf />LinknkedIn</Link>
                            <Link className='hover:text-slate-500 transition-all duration-[.7s] ease-in-out flex justify-center items-center mx-3 gap-2' href="#"><BsHeartHalf />Twitter</Link>
                        </ol>
                    </div>
                    <div className='w-1/2 h-[8vh] flex justify-center items-end mt-6'>
                        <button className={`${s_m.className} bg-purple-500 w-1/2 h-[80%] rounded-md shadow-4xl shadow-purple-700 text-xl hover:border-2 duration-[.5s] ease-in-out transition-all hover:border-purple-500 hover:bg-transparent uppercase tracking-wider `}>Have a look once</button>
                    </div>
                </div>
                <div className='image'></div>
            </div >
        </>
    )
}

export default About