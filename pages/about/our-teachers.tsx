import Image from "next/image";
import React, { useState } from "react";
import TeacherCard from "../../components/TeacherCard";
import data from "../../data/data";

const Teachers = () => {
  return (
    <>
      <div className="mountain relative  w-full justify-end bg-gray-50 px-8  py-16 md:flex md:px-32 ">
        <div className="absolute right-0  w-full">
          <Image
            className="cloud1 absolute top-0"
            src="/cloud1.png"
            height={783}
            width={1636}
            alt="maestro"
          />
        </div>
        <div className=" flex flex-col justify-center  md:w-1/2">
          {/* BreadCrumbs */}
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li className="text-orange-600">Our Teachers</li>
            </ul>
          </div>
          {/* Headers -Hero */}
          <h2 className="text-[20px] md:text-[40px]">
            &quot; A good teacher doesn&apos;t teach from the book. A good
            teacher teaches from the heart &quot;
          </h2>
        </div>
        <div className=" relative text-right md:w-1/2">
          <Image
            className="absolute top-0 z-40 rounded-full shadow-md"
            src="/our.jpg"
            height={350}
            width={350}
            alt="maestro"
          />
        </div>
      </div>
      <div className="wave relative w-full items-center space-x-8 bg-orange-200 px-8 py-24 md:flex md:px-32">
        <div className="md:w-1/2">
          <Image
            className="rounded shadow-md"
            src="/ourteachers.jpg"
            height={423}
            width={752}
            alt="maestro"
          />
        </div>
        <div className="md:w-1/2">
          <p className=" sloka text-[30px] text-orange-600">
            विद्यां ददाति विनयं
          </p>
          <h2 className="flex flex-col text-[30px] font-bold md:text-[40px]">
            Teaching Faculty - Yin Yang Yoga Academy
            <span>
              <Image
                src="/underline.svg"
                width={2500 / 12}
                height={346 / 12}
                alt="line-decor"
              />{" "}
            </span>
          </h2>
          <p>
            Maestros in their respective fields of Yoga, all our teachers are
            extensively trained and have a lifetime of experience to share with
            you. They go above and beyond to train each student on a
            professional and personal level.
          </p>
        </div>
      </div>
      {/* Gurus Section  */}
      <div className="px-8 pt-16 md:px-32">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Meet The Guru&apos;s
          <span>
            <Image
              src="/underline.svg"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />{" "}
          </span>
        </h2>
      </div>
      <div className=" lotuschakra grid gap-4 py-8 px-8 md:grid-cols-2 md:px-32">
        {data.guruProfile.map((item, index) => {
          return (
            <TeacherCard
              key={index}
              image={item.image}
              name={item.name}
              expertise={item.expertise}
              desc={item.desc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Teachers;
