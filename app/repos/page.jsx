"use client"

import React, { useEffect, useState } from 'react'
import RepoBox from '../Components/RepoBox';
import Image from "next/image";
import "../globals.css";
import ProjectBG from "@/public/project_bg.jpg";
import { Playfair_Display } from 'next/font/google';

export const pd = Playfair_Display({
    weight: ['500'],
    subsets: ['latin'],
    style: ['normal']
})

const Repos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Repositories - All my GitHub repositories are present here"
        fetch("/api/repos")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // console.log(data);
            });
    }, []);

    return (
        <>
            <Image className='fixed top-[-10rem] mt-4 z-0 brightness-50' height={1900} width={1600} src={ProjectBG} alt='bg' />
            <div className='pt-[10vh] bg-black'>
                <div className="relative text-white flex flex-wrap justify-center items-center">
                    <h1 className='uppercase my-5'>All my <span className='text-textViolet'>projects</span></h1>
                    <div className='h-[70vh] w-screen bg-transparent z-20' >
                        <div className='absolute left-[20rem]'>
                            <h1 className={`${pd.className} text-2xl mt-10 uppercase tracking-wide `}>About King</h1>
                            <p className={`${pd.className} w-[50vw] mt-16 text-justify text-6xl`} >I am a Bay Area - based product developer focused on collaboration, my users, and <span className='text-[#c082ff] capitalize'>creati</span>vity of applications.</p>
                        </div>
                        <div className='absolute top-[5rem] w-1/2 bg-[#ffffff] opacity-10 h-[31.8rem] -z-20'>
                        </div>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='flex flex-wrap justify-center items-center bg-black' key={index}>
                                    {item.map((dataItems) => {
                                        return (
                                            <RepoBox key={dataItems.id} lang={dataItems.language} star={dataItems.stargazers_count} name={dataItems.name} size={dataItems.size} click={dataItems.clone_url} watchers={dataItems.watchers} />
                                        );
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Repos