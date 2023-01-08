import Image from "next/image";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

interface Syllabus {
  title: string;
  desc: string;
  classes: string[];
}

const CourseAccordian: React.FC<Syllabus> = ({ title, desc, classes }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="mx-auto flex items-center justify-between rounded-t-lg bg-white p-4 text-[#bd0006] shadow-lg">
        <div className="text-gray-500">
          <span className="font-semibold md:text-lg">{title}:</span>
          <span className="text-sm md:text-base">
            {!open && desc.substring(0, 77) + "..."}
          </span>
        </div>
        <div
          className="cursor-pointer rounded-full   border-[#bd0006]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiMinus size={24} /> : <BsPlus size={24} />}
        </div>
      </div>
      <div className={` bg-slate-50 p-4 ${open ? "" : "hidden"}`}>
        <p className="text-sm md:text-base">{desc}</p>
        <ul className="mt-4 grid gap-5 text-sm md:grid-cols-3 md:text-base">
          {classes.map((item, index) => {
            return (
              <li key={index} className="flex items-center space-x-4">
                <Image
                  src="/list-icon.png"
                  width={30}
                  height={30}
                  alt="bullet"
                  className="w-1/6"
                />
                <span className="w-5/6">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseAccordian;
