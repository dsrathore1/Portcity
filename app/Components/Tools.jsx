/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tools = () => {
    return (
        <>
            <div className="lg_flex hidden lg_flex-col justify-center items-center z-10 relative">
                <h3 className="text-center -mt-[9rem] mb-4 text-sm font-medium uppercase tracking-widest text-[#888888]">The tools which I always prefer first</h3>
                <div className="flex justify-center items-center flex-col -space-y-5 mt-4">
                    <div className="flex justify-center items-center mb-8 gap-14 w-[80%]">
                        <img width={70} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img width={70} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                    </div>
                    <div className="flex justify-center items-center gap-10 w-[80%]">
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg" />
                        <img width={80} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                        <img width={60} height={100} alt="#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                        <i className="devicon-nextjs-plain-wordmark text-[90px]" />
                        <i className="devicon-tailwindcss-original-wordmark colored text-[150px]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tools;