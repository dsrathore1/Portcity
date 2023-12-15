"use client"
import React, { useState, useEffect } from 'react';
import FavProjects from "@/app/Components/FavProjects.jsx";
import axios from 'axios';

const TopProjects = () => {
    const [useData, setData] = useState([]);

    useEffect(() => {
        document.title = "Favourite Projects";

        axios.get("/api/favProjects").then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <>
            <div>
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        useData.map((data) => {
                            return (
                                <FavProjects  key={data._id} title={data.title} lang={data.lang} desc={data.desc} img={data.image_link} repo={data.repo_link} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TopProjects