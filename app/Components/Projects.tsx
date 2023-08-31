import React from 'react'
import FlipBox from './FlipBox'

const Projects = () => {
    return (
        <>
            <div className='w-full h-[45vh] flex justify-between items-center scroll-smooth'>
                <div className='w-full h-full px-4 ov'>
                    <h1>Digpal Singh Rathore</h1>
                    <h2>Devops Engineer</h2>
                    <p>I build open-source front-end projects, or you call I do freelancing and <br /><br />
                        In my spare time, I share what I learn on my blog and speak at tech conferences around the world.</p>
                </div>
                <div className='w-full h-full px-4 space-y-2 overflow-y-scroll'>
                    <FlipBox />
                    <FlipBox />
                    <FlipBox />
                    <FlipBox />
                </div>
            </div>

        </>
    )
}

export default Projects