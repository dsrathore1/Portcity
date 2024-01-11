import React from 'react'

const Extra = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='flex justify-evenly flex-wrap w-[40vw] gap-4'>
                <div className='bg-[#1C1B23] h-[15rem] w-[12rem] px-3 rounded-lg'>
                    <h2 className='my-3 text-lg text-gray-200 drop-shadow-lg'>Frontend</h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-blue-500 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>ReactJS</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-gray-400 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>NextJS 14</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-yellow-800 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>TypeScript</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-pink-600 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Tailwind</div>
                        <div className='bg-black text-[13px] font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Bootstrap</div>
                        <div className='bg-black text-[13px] font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Flask</div>
                        <div className='bg-black text-[13px] font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Django</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-yellow-500 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Javascript</div>
                    </div>
                </div>
                <div className='bg-[#1C1B23] h-[15rem] w-[12rem] px-3 rounded-lg'>
                    <h2 className='my-3 text-lg text-gray-200 drop-shadow-lg'>Backend</h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-green-200 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>NodeJS</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-green-500 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>ExpressJS</div>
                        <div className='bg-black text-[13px] font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Next-Auth</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-yellow-500 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Django</div>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-gray-500 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>NextJS</div>
                        <div className='bg-black text-[13px] font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Flask</div>
                    </div>
                </div>
                <div className='bg-[#1C1B23] h-[15rem] w-[12rem] px-3 rounded-lg'>
                    <h2 className='my-3 text-lg text-gray-200 drop-shadow-lg'>Database</h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-black text-[13px] border-[1px] border-opacity-75 border-green-500 font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>MongoDB</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-blue-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>PostgreSQL</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-yellow-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>MySQL</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-red-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Redis</div>
                        <div className='bg-black text-[13px] font-normal text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Elastic Search</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-green-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Supabase</div>
                    </div>
                </div>
                <div className='bg-[#1C1B23] h-[15rem] w-[12rem] px-3 rounded-lg'>
                    <h2 className='my-3 text-lg text-gray-200 drop-shadow-lg'>DevOps</h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-blue-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Docker</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-gray-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Jenkins</div>
                        <div className='bg-black text-[13px]  text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Kubernetes</div>
                        <div className='bg-black text-[13px] text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl border-[1px] font-normal border-opacity-75 border-red-500'>GIT</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-yellow-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>AWS</div>
                        <div className='bg-black text-[13px] border-[1px] font-normal border-opacity-75 border-green-500 text-gray-400 h-8 flex justify-center items-center px-2 rounded-sm shadow-2xl'>Nginx</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extra