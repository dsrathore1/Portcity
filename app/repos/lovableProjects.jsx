import React, { useState, useEffect } from "react";
import Image from "next/image";
import moreProjects from "@/app/JSON/morePorjects.json";

const LovableProjects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(moreProjects);
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
              className="rounded-tl-lg rounded-tr-lg h-48"
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

export default LovableProjects;
