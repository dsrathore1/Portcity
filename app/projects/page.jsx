import React from 'react';
import FavProjects from "@/app/Components/FavProjects.tsx";

const TopProjects = () => {
    return (
        <>
            <div>
                <div className='flex flex-wrap justify-center items-center'>
                    <FavProjects />
                    <FavProjects />
                    <FavProjects />
                    <FavProjects />
                    <FavProjects />
                </div>
            </div>
        </>
    )
}

export default TopProjects