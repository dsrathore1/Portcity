import React, { useEffect, useState } from "react";
import Image from "next/image";
import favProject from "@/app/JSON/favProjects.json";

const TopProjects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(favProject);
  }, []);

  return (
    <>
      {data.map((res, index) => {
        return (
          <div
            className="bg-[#ebebeb] h-[20rem] w-[20rem] rounded-xl"
            key={index}
          >
            <Image
              className="rounded-tl-lg rounded-tr-lg h-[11rem]"
              src={res.image_link}
              height={200}
              width={400}
              alt="topProject-imgs"
            />
            <div className="px-4 my-4">
              <p className="text-black font-semibold capitalize">{res.title}</p>
              <p className="text-gray-600 text-sm">{res.lang}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopProjects;
