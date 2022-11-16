import Image from "next/image";
import React, { useState } from "react";

interface CourseData {
  title: string;
  desc: string;
  featureImg: string;
  syllabus: {
    icons: string;
    name: string;
  }[];
}

const CourseCardLayout = ({
  title,
  desc,
  featureImg,
  syllabus,
}: CourseData) => {
  const [showCourse, setShowCourse] = useState(false);

  return (
    <div className=" p-4">
      <div className="relative rounded-lg bg-white shadow-lg">
        <div>
          <Image
            className="rounded-tl-lg rounded-tr-lg"
            src={featureImg}
            height={371 * 2}
            width={556 * 2}
            alt="card1"
          />

          <h3 className="clipText text-[18px] drop-shadow-lg">{title}</h3>
        </div>
        <p
          className={`${
            showCourse ? "hidden" : "block p-4 duration-200 ease-in-out "
          }`}
        >
          {desc}
        </p>
        <div
          className={` ${
            showCourse ? "grid  duration-200 ease-in-out  " : "hidden"
          }   p-4`}
        >
          {syllabus.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full space-x-4 px-2 py-1 md:px-4 md:py-2"
              >
                <Image
                  src={item.icons}
                  height={30}
                  width={30}
                  alt={item.name}
                />
                <p> {item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="p-4">
          <div
            onClick={() => setShowCourse(!showCourse)}
            className="rounded border-[1.5px] border-[#bd0006] p-2 text-center font-semibold text-[#bd0006] "
          >
            {showCourse ? "About Course" : "Course Syllabus"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardLayout;