"use client"
import Image from 'next/image';
import React from 'react';
import { Kaushan_Script, Dancing_Script, Libre_Franklin } from "next/font/google";
import "../globals.css";

export const s_m = Kaushan_Script({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
});

export const ds = Dancing_Script({
    style: ["normal"],
    weight: ["700"],
    subsets: ["latin"]
});

export const lf = Libre_Franklin({
    weight: ["200"],
    style: ["italic"],
    subsets: ["latin"]
})

const FavProjects = ({ title, lang, desc, img, repo, key }) => {

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-gray-400 backdrop-filter backdrop-blur h-[35rem] w-[35rem] mx-5 rounded-lg -mb-10 bg-opacity-20 p-4 text-white hover:scale-[1.1] duration-[.4s] ease-in-out overflow-scroll no-scrollbar">
                    <div className="imgSection flex justify-center items-center flex-col">
                        <Image className='w-full rounded-lg h-[35vh] ' src={img} priority={true} width={300} height={400} alt={key} />

                    </div>
                    <div className="relative">
                        <h1 className={`${s_m.className} my-4 text-center`}>{title}</h1>
                        <p className={`${lf.className} capitalize text-[15px] text-gray-300`}>{desc}</p>
                        <div className='flex justify-center items-center'>
                            <button onClick={() => window.open(repo)} className={`${s_m.className} mt-3 py-1 px-7 rounded-md shadow-lg shadow-black bg-white text-black font-black text-xl`}>Watch Me</button>
                        </div>
                        <p className={`${ds.className} text-gray-400 text-2xl absolute right-0`}>{lang}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavProjects