import React from 'react';
import Logo from "../static/LOGO.png";
import Image from "next/image";
import { Great_Vibes, Space_Mono } from 'next/font/google';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const gv = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"]
});

const sm = Space_Mono({
    subsets: ["latin"],
    weight: ["400", '700'],
    style: ["normal", 'italic']
})

const Footer = () => {
    return (
        <>
            <div className='flex justify-evenly items-center h-[40vh] bg-slate-900 w-full '>
                <div className='border-r-2 h-full w-full px-2 flex flex-col justify-center items-center'>
                    <Image src={Logo} alt='#' height={100} width={100} className='mt-10' />
                    <div className=' flex flex-col justify-center items-center h-full w-full -mt-10'>
                        <p className={`${sm.className} text-xl w-full text-center tracking-wide uppercase`}>Portfolios are everything, promises are nothing. Do the work.</p>
                        <div className='bg-amber-300 w-full relative'>
                            <p className={`${gv.className} absolute right-4`}>- King</p>
                        </div>
                    </div>
                </div>
                <div className='border-r-2 h-full w-full px-2'>
                    <p className='text-lg'>Contact</p>
                    <div>
                        <MdEmail />
                        <p>Email Me</p>
                        <p>dsrathorebsw1234@gmail.com</p>
                    </div>
                    <div>
                        <FaPhoneAlt />
                        <p>Call Me</p>
                        <p>+91 9461858617</p>
                    </div>
                </div>
                <div className='px-2 h-full w-full'>
                    <p>Join my newsletter to get tips and tricks or an awesome projects</p>
                </div>
            </div>
        </>
    )
}

export default Footer