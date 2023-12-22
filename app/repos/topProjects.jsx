import React from 'react'
import Image from "next/image";
import NetflixClone from "@/public/Assets/Netflix-Clone.webp";

const TopProjects = () => {
    return (
        <>
            <div className='bg-[#ebebeb] h-[20rem] w-[20rem] rounded-xl'>
                <Image className='rounded-tl-lg rounded-tr-lg h-52' src={NetflixClone} height={200} width={400} alt='topProject-imgs' />
                <div className='px-10 my-4'>
                    <p className='text-black font-semibold capitalize'>Portcity (Personal Portfolio)</p>
                    <p className='text-gray-600 text-sm'>Next.js, ExpressJS, React-Hooks, TailwindCSS, Docker, MongoDB</p>
                </div>
            </div>

        </>
    )
}

export default TopProjects