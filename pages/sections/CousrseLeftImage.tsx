import Image from "next/image";
import { type } from "os";
import React from "react";
import Button from "../components/Button";

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
    <div className="flex w-full items-center space-x-12">
      <div className="relative w-1/2">
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
                className="badge badge-accent mx-4 inline-block text-white"
              >
                {i}
              </div>
            );
          })}
        </div>
        <div className="grid  grid-cols-3  gap-4">
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
      <div className="w-1/2">
        <h2 className="text-[40px] font-semibold">{title}</h2>
        <p>{desc.para1}</p>
        <br />
        <p>{desc.para2}</p>
        <br />
        <Button title="Enroll Now" url="/" />
      </div>
    </div>
  );
};

export default CousrseLeftImage;
