import React from 'react';
import Logo from "../../public/LOGO.png";
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
            <div className='md_flex md_justify-evenly items-center mt-[90rem] md_mt-0 h-[40vh] md_border-t w-[90vw] md_w-full border-solid md_border-[1px] border-white border-opacity-20'>
                <div className='h-full w-full px-2 flex flex-col justify-center items-center'>
                    <Image src={Logo} alt='#' height={100} width={100} className='mt-10' />
                    <div className=' flex flex-col justify-center items-center h-full w-full -mt-10'>
                        <p className={`${sm.className} text-xl w-full text-center tracking-wide uppercase`}>Portfolios are everything, promises are nothing. Do the work.</p>
                        <div className='bg-amber-300 w-full relative'>
                            <p className={`${gv.className} absolute right-4`}>- King</p>
                        </div>
                    </div>
                </div>
                <div className='ml-9 h-full w-full px-2 flex justify-center items-start flex-col space-y-9'>
                    <p className='text-4xl font-bold'>Contact</p>
                    <div className='flex justify-center items-center'>
                        <span className='px-3 text-4xl py-3 mr-3 bg-gradient-to-tr from-indigo-500 from-10% to-pink-500 rounded-md'>
                            <MdEmail />
                        </span>
                        <div>
                            <p className='font-bold text-gray-500 uppercase'>Email Me</p>
                            <p>dsrathorebsw1234@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='px-3 text-4xl py-3 mr-3 bg-gradient-to-tr from-indigo-500 from-10% to-pink-500 rounded-md'>
                            <FaPhoneAlt />
                        </span>
                        <div>
                            <p className='font-bold text-gray-500 uppercase'>Call Me</p>
                            <p>+91 9461858617</p>
                        </div>
                    </div>
                </div>
                <div className='ml-9 h-full w-full px-2 flex justify-center items-start flex-col space-y-7'>
                    <h1>Newsletter</h1>
                    <p className=''>Join my newsletter to get tips and tricks or an awesome projects</p>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <input className='h-[7vh] my-3 rounded-full bg-transparent w-full border-solid border-t-2 border-r-2 border-l-2 border-gray-600 px-4 text-lg' placeholder='Email' />
                        <button className='text-md mt-5 md_mt-0 bg-gradient-to-r rounded-full py-2 w-full md_w-[12vw] active:scale-75 transition-all ease-in-out duration-500 from-indigo-500 from-10% to-pink-500'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer