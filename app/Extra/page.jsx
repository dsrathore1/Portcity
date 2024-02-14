"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"

const Extra = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    }, [])

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center capitalize'>
            <h1>Welcome to practice ground</h1>
            {
                data.map((res, index) => {
                    return (
                        <div className='text-2xl mt-5 flex' key={index}>
                            title :- {res.title}
                            <br />
                            image:- <Image className='' alt='#' src={res.image_link} height={100} width={100} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Extra