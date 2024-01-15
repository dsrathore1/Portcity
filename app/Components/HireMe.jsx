import React from 'react';
import { Space_Mono } from "next/font/google"
import Link from "next/link";


const s_m = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
});


const HireMe = () => {

    return (
        <>
            <div className='h-[90vh] hidden md_flex justify-center items-center flex-col'>
                <div className='animate-box py-10 h-[35vh] w-[50vw] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center flex-col rounded-lg'>
                    <h3 className={`${s_m.className} uppercase text-center md_px-2 px-10 mb-4`}>Have some crazy ideas in yours that needed to be realized?</h3>
                    <h1 className='text-5xl text-center'>Let&apos;s talk with me.</h1>
                    <Link href='/Digpal_Singh_Rathore-Resume.pdf' className='active:translate-y-2 ease-in-out duration-200 mt-10 border-solid border-white bg-transparent border-2 py-2.5 px-12 shadow-2xl rounded-md'>Hire me</Link>
                </div>
            </div>
        </>
    );
}

export default HireMe