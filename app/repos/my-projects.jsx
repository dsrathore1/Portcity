import React from 'react'
import TopProjects from './topProjects';
import LovableProjects from './lovableProjects';

const MyProject = () => {
    return (
        <>
            <div className='top-projects px-4 py-3'>
                <h1 className='5xl text-white my-[4rem] uppercase font-extralight tracking-wide'>Top Projects 🚀</h1>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                    <TopProjects />
                    <TopProjects />
                    <TopProjects />
                    <TopProjects />
                </div>
            </div>
            <div className='more-projects px-4 py-3'>
                <h1 className='5xl text-white my-[4rem] uppercase font-extralight tracking-wide'>Lovable Projects 💲</h1>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                    <LovableProjects />
                    <LovableProjects />
                    <LovableProjects />
                    <LovableProjects />
                    <LovableProjects />
                </div>
            </div>
        </>
    )
}

export default MyProject;