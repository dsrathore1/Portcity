"use client"

import React from 'react';
import { IoLogoSnapchat, IoLogoInstagram, IoLogoGithub, IoMdGlobe } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import Footer from '../../Components/Footer';

const SocialMedia = () => {
    return (
        <>
            <div className='main-container flex h-[97vh] w-full justify-center items-center'>
                <div className='icons-container gap-[5rem] flex justify-center items-center'>
                    <ImLinkedin className='text-10xl text-blue-400 hover_text-blue-600 cursor-pointer duration-[.2s] ease-in-out' onClick={() => { window.open("https://linkedin.com/in/dsrathore1") }} />
                    <IoLogoInstagram className='text-10xl text-pink-400 hover_text-pink-600 duration-[.2s] ease-in-out' onClick={() => { window.open("https://instagram.com/amblent_photographer") }} />
                    <IoLogoSnapchat className='text-10xl text-yellow-200 hover_text-yellow-300 duration-[.2s] ease-in-out' onClick={() => { window.open("https://www.snapchat.com/add/dsrathore1") }} />
                    <IoLogoGithub className='text-10xl hover_text-gray-600 text-gray-400 duration-[.2s] ease-in-out' onClick={() => { window.open("https://github.com/dsrathore1") }} />
                    <IoMdGlobe className='text-10xl hover_text-green-600 text-green-400 duration-[.2s] ease-in-out' onClick={() => {
                        window.open("https://dsrathore1.github.io/Portfolio.github.io/")
                    }} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SocialMedia