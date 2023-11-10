"use client"

import React from 'react';
import { IoLogoSnapchat, IoLogoInstagram, IoLogoGithub, IoMdGlobe } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import Nav from "../Components/Nav";

const SocialMedia = () => {
    return (
        <>
            <Nav />
            <div className='main-container flex h-screen w-full justify-center items-center'>
                <div className='icons-container gap-[5rem] flex justify-center items-center'>
                    <ImLinkedin className='text-10xl hover:text-blue-500 duration-[.7s] ease-in-out' onClick={() => { window.open("https://linkedin.com/in/dsrathore1") }} />
                    <IoLogoInstagram className='text-10xl hover:text-pink-500 duration-[.7s] ease-in-out' onClick={() => { window.open("https://instagram.com/amblent_photographer") }} />
                    <IoLogoSnapchat className='text-10xl hover:text-yellow-300 duration-[.7s] ease-in-out' onClick={() => { window.open("https://www.snapchat.com/add/dsrathore1") }} />
                    <IoLogoGithub className='text-10xl hover:text-gray-500 duration-[.7s] ease-in-out' onClick={() => { window.open("https://github.com/dsrathore1") }} />
                    <IoMdGlobe className='text-10xl hover:text-green-500 duration-[.7s] ease-in-out' onClick={() => {
                        window.open("https://dsrathore1.github.io/Portfolio.github.io/")
                    }} />
                </div>
            </div>
        </>
    )
}

export default SocialMedia