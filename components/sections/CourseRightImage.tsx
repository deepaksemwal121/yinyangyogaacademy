import Image from "next/image";
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
  reverse: boolean;
}

const CourseRightImage: React.FC<DataProps> = ({
  title,
  image,
  desc,
  levels,
  shortdesc,
  highlights,
  reverse,
}) => {
  return (
    <div
      className={`my-4 grid w-full items-center gap-4 px-8 py-8 md:flex md:space-x-12 md:px-32 ${
        reverse ? "flex-row-reverse bg-white" : "bg-orange-100"
      }`}
    >
      <div className="relative flex items-center justify-center md:w-1/2">
        <Image src={image} alt={shortdesc} width={480} height={720} />
        <div className="absolute  top-3">
          {levels.map((i: string, index: number) => {
            return (
              <div
                key={index}
                className="badge badge-accent mx-4 inline-flex items-center px-3 py-2  text-white"
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-[25px] md:text-[30px]">{title}</h2>
        <p className="text-gray-600">{desc.para1}</p>
        <br />
        {/* <p>{desc.para2}</p> */}
        {/* <br /> */}
        <div className="space-y-4">
          {highlights.map((value, index) => {
            return (
              <div key={index} className="flex items-center space-x-4 ">
                <Image src={value.icons} width={50} height={50} alt="astangh" />
                <div>
                  <h2 className="text-orange-600">{value.name}</h2>

                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga ipsam ducimus tempore, est ipsum mollitia.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          title="Enroll Now"
          url="/ell"
          style="text-lg text-orange-600 px-6 py-3  border-orange-600 border-2 hover:bg-orange-500 hover:text-white"
        />
      </div>
    </div>
  );
};

export default CourseRightImage;
