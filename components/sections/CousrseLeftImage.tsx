import Image from "next/image";
import { type } from "os";
import React from "react";
import Button from "../Button";

interface DataProps {
  title: string;
  desc: {
    para1: string;
    para2: string;
  };
  image: string;
  levels: string[];
  shortdesc: string;
  highlights: {
    icons: string;
    name: string;
  }[];
}

const CousrseLeftImage: React.FC<DataProps> = ({
  title,
  image,
  desc,
  levels,
  shortdesc,
  highlights,
}) => {
  return (
    <div className=" flex w-full flex-col-reverse items-center md:flex-row md:space-x-12">
      <div className="relative md:w-1/2">
        <Image
          src={image}
          alt={shortdesc}
          width={540}
          height={300}
          className="shadow-lg shadow-black"
        />
        <div className="absolute  top-3">
          {levels.map((i: string, index: number) => {
            return (
              <div
                key={index}
                className="badge badge-accent mx-4 inline-flex items-center  text-black"
              >
                {i}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1  gap-4  md:grid-cols-3">
          {highlights.map((value, index) => {
            return (
              <div key={index} className="flex items-center space-x-4">
                <Image src={value.icons} width={50} height={50} alt="astangh" />
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-[30px] md:text-[40px]">{title}</h2>
        <p>{desc.para1}</p>
        <br />
        <p>{desc.para2}</p>
        <br />
        <Button
          title="Enroll Now"
          url="/"
          style="text-lg text-orange-600 px-6 py-3 border-orange-600 border-2 hover:bg-orange-500 hover:text-white"
        />
      </div>
    </div>
  );
};

export default CousrseLeftImage;
