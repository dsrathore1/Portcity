"use client"

import React, { useEffect, useState } from 'react'
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
            <div className='pt-[10vh]'>
                <div className="text-white flex flex-wrap justify-center items-center">
                    {
                        data.map((item, index) => {
                            return (
                                <div className='flex flex-wrap justify-center items-center' key={index}>
                                    {item.map((dataItems) => {
                                        return (
                                            <RepoBox key={dataItems.id} lang={dataItems.language} star={dataItems.stargazers_count} name={dataItems.name} size={dataItems.size} click={dataItems.clone_url} watchers={dataItems.watchers} />
                                        );
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Repos