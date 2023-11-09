import React from 'react';
import Image from 'next/image';
import "@/app/globals.css";
import Check from "@/app/static/DWYL.jpg";

const Project_Boxes = () => {
    return (
        <>
            <div className="flip-card h-[18rem] w-[18rem] bg-purple-500 hover:bg-opacity-20 duration-300 ease-in-out rounded-md">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image src={Check} alt="Avatar" width={300} height={400} />
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project_Boxes