import Image from "next/image";
import React from "react";
import Button from "../Button";
import { MdArrowForward } from "react-icons/md";
import ApplyButton from "../../widgets/reusable/ApplyButton";
import Link from "next/link";

const CourseCard = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map(() => {
        return (
          <div
            key={1}
            className="relative rounded-lg bg-gray-50 shadow drop-shadow-lg"
          >
            <Image
              src="/100-hours-yoga-teacher-training-in-rishikesh-india.jpg"
              width={400}
              height={250}
              alt="course"
              className="rounded-t-lg"
            />
            <Link href="#">
              <div className=" group m-0 w-[90%] cursor-pointer flex-wrap rounded-tr-[30px] bg-[#de4c11] px-4 py-2  hover:border-[1px] hover:border-dashed hover:border-[#de4c11] hover:bg-transparent ">
                <h3 className="text-lg text-white group-hover:text-[#de4c11]  md:text-xl">
                  100 Hours Yoga Teacher Training Course
                </h3>
              </div>
            </Link>

            <div className="p-4">
              <div className="flex justify-between border-b-2 py-1">
                <p className="text-sm font-medium md:text-base">Duration:</p>
                <p className="text-sm md:text-base">12 Days</p>
              </div>
              <div className="flex justify-between border-b-2 py-1">
                <p className="text-sm font-medium md:text-base">Module:</p>
                <p className="text-sm md:text-base">Residential With Meals</p>
              </div>
              <div className="flex justify-between border-b-2 py-1">
                <p className="text-sm font-medium md:text-base">
                  Private Room:
                </p>
                <p className="text-sm md:text-base">USD 1200</p>
              </div>
              <div className="flex justify-between border-b-2 py-1">
                <p className="text-sm font-medium md:text-base">Shared Room:</p>
                <p className="text-sm md:text-base">USD 1100</p>
              </div>
              <div className="flex justify-between border-b-2 py-1">
                <p className="text-sm font-medium md:text-base">
                  Certification:
                </p>
                <p className="text-sm md:text-base">Yoga Alliance</p>
              </div>
              <div className="mt-1 flex justify-between  space-x-4">
                <ApplyButton text="Apply" url="/apply" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseCard;
