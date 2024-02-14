import React, { useState, useEffect } from 'react'
import Image from "next/image";

const TopProjects = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch("http://localhost:3000/api/favProjects", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {data.map((res, index) => {
                return (
                    <div className='bg-[#ebebeb] h-[20rem] w-[20rem] rounded-xl' key={index}>
                        <Image className='rounded-tl-lg rounded-tr-lg h-52' src={res.image_link} height={200} width={400} alt='topProject-imgs' />
                        <div className='px-10 my-4'>
                            <p className='text-black font-semibold capitalize'>{res.title}</p>
                            <p className='text-gray-600 text-sm'>{res.lang}</p>
                        </div>
                    </div>
                );
            })}

        </>
    );
}

export default TopProjects