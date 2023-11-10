"use client"

import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav';
import RepoBox from '../Components/RepoBox';

const Repos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Repositories - All my GitHub repositories are present here"
        fetch("/api/repos")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);

    return (
        <>
            <Nav />
            <div className='pt-[10vh]'>
                <div className="text-white flex flex-wrap justify-center items-center">
                    {
                        data && data.map((data, index) => {
                            return (
                                <div key={index} >
                                    <RepoBox lang={data.language} star={data.stargazers_count} name={data.name} size={data.size} click={data.clone_url} watchers={data.watchers} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Repos