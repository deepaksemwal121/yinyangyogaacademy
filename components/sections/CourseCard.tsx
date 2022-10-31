import Image from "next/image";
import React from "react";
import Button from "../Button";
import { MdArrowForward } from "react-icons/md";

const CourseCard = () => {
  return (
    <div className="px-8 py-16 md:px-32 ">
      <div className="grid gap-3 md:grid-cols-4">
        <div className="relative rounded bg-gray-50 shadow">
          <div className="flag absolute top-3 z-10 w-3/5  bg-orange-500 p-2 text-sm font-semibold text-white">
            <p className="break-all">Starting from 12 Oct</p>
          </div>
          <Image
            src="/100-hours-yoga-teacher-training-in-rishikesh-india.jpg"
            width={400}
            height={250}
            alt="course"
          />
          <div className="clipped m-0 w-[90%] flex-wrap bg-orange-500 px-4 py-2">
            <h3 className="text-[20px] text-white">
              100 Hours Yoga Teacher Training Course
            </h3>
          </div>
          <div className="p-4">
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Duration:</p>
              <p>12 Days</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Module:</p>
              <p>Residential With Meals</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Private Room:</p>
              <p>USD 1200</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Shared Room:</p>
              <p>USD 1100</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Certification:</p>
              <p>Yoga Alliance</p>
            </div>
            <div className="flex justify-between ">
              <Button
                style="bg-orange-600 px-4 py-2 text-white"
                title="Apply Now"
                url="/"
              />
              <div className="flex items-center justify-between text-orange-600">
                <p>About Course</p> <MdArrowForward />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded bg-gray-50 shadow">
          <div className="flag absolute top-3 z-10 w-3/5  bg-orange-500 p-2 text-sm font-semibold text-white">
            <p className="break-all">Starting from 12 Oct</p>
          </div>
          <Image
            src="/200-hour-yoga-teacher-training-in-rishikesh.jpg"
            width={400}
            height={250}
            alt="course"
          />
          <div className="clipped m-0 w-[90%] flex-wrap bg-orange-500 px-4 py-2">
            <h3 className="text-[20px] text-white">
              200 Hours Yoga Teacher Training Course
            </h3>
          </div>
          <div className="p-4">
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Duration:</p>
              <p>12 Days</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Module:</p>
              <p>Residential With Meals</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Private Room:</p>
              <p>USD 1200</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Shared Room:</p>
              <p>USD 1100</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Certification:</p>
              <p>Yoga Alliance</p>
            </div>
            <div className="flex justify-between ">
              <Button
                style="bg-orange-600 px-4 py-2 text-white"
                title="Apply Now"
                url="/"
              />
              <div className="flex items-center justify-between text-orange-600">
                <p>About Course</p> <MdArrowForward />{" "}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="relative rounded bg-gray-50 shadow">
          <div className="flag absolute top-3 z-10 w-3/5  bg-orange-500 p-2 text-sm font-semibold text-white">
            <p className="break-all">Starting from 12 Oct</p>
          </div>
          <Image
            src="/300-homepage.jpg"
            width={400}
            height={250}
            alt="course"
          />
          <div className="clipped m-0 w-[90%] flex-wrap bg-orange-500 px-4 py-2">
            <h3 className="text-[20px] text-white">
              300 Hours Yoga Teacher Training Course
            </h3>
          </div>
          <div className="p-4">
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Duration:</p>
              <p>12 Days</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Module:</p>
              <p>Residential With Meals</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Private Room:</p>
              <p>USD 1200</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Shared Room:</p>
              <p>USD 1100</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Certification:</p>
              <p>Yoga Alliance</p>
            </div>
            <div className="flex justify-between ">
              <Button
                style="bg-orange-600 px-4 py-2 text-white"
                title="Apply Now"
                url="/"
              />
              <div className="flex items-center justify-between text-orange-600">
                <p>About Course</p> <MdArrowForward />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded bg-gray-50 shadow">
          <div className="flag absolute top-3 z-10 w-3/5  bg-orange-500 p-2 text-sm font-semibold text-white">
            <p className="break-all">Starting from 12 Oct</p>
          </div>
          <Image
            src="/500-hrs-homepage.jpg"
            width={400}
            height={250}
            alt="course"
          />
          <div className="clipped m-0 w-[90%] flex-wrap bg-orange-500 px-4 py-2">
            <h3 className="text-[20px] text-white">
              500 Hours Yoga Teacher Training Course
            </h3>
          </div>
          <div className="p-4">
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Duration:</p>
              <p>12 Days</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Module:</p>
              <p>Residential With Meals</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Private Room:</p>
              <p>USD 1200</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Shared Room:</p>
              <p>USD 1100</p>
            </div>
            <div className="flex justify-between border-b-2 py-1">
              <p className="font-medium">Certification:</p>
              <p>Yoga Alliance</p>
            </div>
            <div className="flex justify-between ">
              <Button
                style="bg-orange-600 px-4 py-2 text-white"
                title="Apply Now"
                url="/"
              />
              <div className="flex items-center justify-between text-orange-600">
                <p>About Course</p> <MdArrowForward />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
