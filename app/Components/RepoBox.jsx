"use client"
import React from 'react';

const RepoBox = ({ lang, star, name, size, click, watchers }) => {

    return (
        <>
            <div className="flex justify-start items-center flex-col m-3 bg-gray-600 bg-opacity-30 rounded-lg h-[35vh] w-[22vw] py-2 hover_scale-[1.1] transition-all ease-in-out duration-200">
                <div className='flex justify-between items-center px-3 py-1 w-full'>
                    <p>Language : {lang}</p>
                    <p>Stars :- {star}</p>
                </div>
                <div className='flex flex-col justify-center font-bold items-center h-full'>
                    <p className='text-2xl capitalize flex justify-center items-center h-[8vh] w-[16vw]'>{name}</p>
                    <p className='text-sm'>Size :- {size}</p>
                </div>
                <div className='flex justify-between items-center px-3 py-1 w-full'>
                    <button onClick={() => { window.open(click) }} className='capitalize bg-white justify-center items-center flex text-black w-24 h-10 rounded-md font-semibold duration-500 hover_bg-transparent hover_text-white active:translate-y-3' >Watch Me</button>
                    <p>Watched by : {watchers}</p>
                </div>
            </div>
        </>
    )
}

export default RepoBox