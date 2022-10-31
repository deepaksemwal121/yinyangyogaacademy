import Image from "next/image";
import React from "react";
import Button from "../Button";

interface DataProps {
  title: string;
  desc: {
    para1: string;
    para2: string;
  };
  featuredImg: string;
  image: string[];
  shortdesc: string;
  highlights: {
    icons: string;
    name: string;
  }[];
  reverse: boolean;
}

const CourseRightImage: React.FC<DataProps> = ({
  title,
  image,
  desc,
  shortdesc,
  highlights,
  reverse,
  featuredImg,
}) => {
  return (
    <div className="relative">
      <div
        className={` grid w-full items-center gap-4 py-8 px-8 md:flex md:space-x-12 md:py-[140px] md:px-32 ${
          reverse
            ? "bgCourses-left flex-row-reverse bg-white"
            : " bgCourses-right"
        }`}
      >
        <div className="relative flex flex-col space-y-3 md:w-1/2">
          <Image
            className="rounded"
            src={featuredImg}
            alt={shortdesc}
            width={600}
            height={400}
          />
          {/* <div className="grid grid-cols-2 gap-3">
            {image.map((item, index) => {
              return (
                <Image
                  className="rounded"
                  src={item}
                  key={index}
                  alt={shortdesc}
                  width={600}
                  height={400}
                />
              );
            })}
          </div> */}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-[25px] md:text-[30px]">{title}</h2>
          <p className="text-gray-600">{desc.para1}</p>
          <br />
          <p>{desc.para2}</p>
          <br />
          <div className="grid grid-cols-2 space-y-4">
            {highlights.map((value, index) => {
              return (
                <div key={index} className="flex items-center space-x-3 ">
                  <Image
                    src={value.icons}
                    width={40}
                    height={40}
                    alt="astangh"
                  />
                  <h2 className="text-orange-600">{value.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRightImage;
