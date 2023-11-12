"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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

const FavProjects = () => {

    const [data, setData] = useState();

    useEffect(() => {
        document.title = "Favourite Projects";

        fetch("/api/favProjects").then((res) => { res.json() }).then((data) => {
            setData(data);
            console.log(data);
        });
    }, []);


    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-gray-400 backdrop-filter backdrop-blur h-[35rem] w-[35rem] mx-5 rounded-lg -mb-10 bg-opacity-20 p-4 text-white hover:scale-[1.1] duration-[.4s] ease-in-out">
                    <div className="imgSection flex justify-center items-center flex-col">
                        <Image className='w-full rounded-lg h-[35vh] ' src='https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' priority={true} width={300} height={400} alt='image' />
                    </div>
                    <div className="relative">
                        <h1 className={`${s_m.className} my-4 text-center`}>My Digital Canvas</h1>
                        <p className={`${lf.className} capitalize text-[15px] text-gray-300`}>Portcity is a dynamic and visually engaging personal portfolio website that showcases the unique story and skills of Digpal Singh Rathore. The website serves as a virtual canvas, bringing together a collection of DS Rathore&apos;s projects, achievements, and experiences. The design is clean, modern, and user-friendly, allowing visitors to seamlessly navigate through different sections like &apos;About Me&apos;, &apos;Portfolio&apos;, and &apos;Contact.&apos;</p>
                        <div className='flex justify-center items-center'>
                            <button className={`${s_m.className} mt-3 py-1 px-7 rounded-md shadow-lg shadow-black bg-white text-black font-black text-xl`}>Watch Me</button>
                        </div>
                        <p className={`${ds.className} text-gray-400 text-2xl absolute right-0`}>JavaScript</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavProjects