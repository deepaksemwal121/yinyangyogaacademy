import Image from "next/image";
import React, { useState } from "react";
import TeacherCard from "../../components/TeacherCard";
import { data } from "../../static/data";

const Teachers = () => {
  return (
    <>
      <div className="flex w-full justify-end bg-orange-200 px-32 py-16">
        <div className=" flex w-1/2 flex-col  justify-center">
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
          <h2 className="text-[40px] ">
            &quot; A good teacher doesn&apos;t teach from the book. A good
            teacher teaches from the heart &quot;
          </h2>
        </div>
        <div className="w-1/2 text-right">
          <Image
            src="/../public/about-teacher.png"
            height={735 / 2}
            width={430}
            alt="teacher"
          />
        </div>
      </div>
      <div className=" flex w-full items-center px-32 py-8">
        <div className="w-1/2">
          <Image
            src="/../public/guruji.png"
            height={500}
            width={500}
            alt="maestro"
          />
        </div>
        <div className="w-1/2">
          <h1 className="my-4 text-[30px]">
            Teaching Faculty - Yin Yang Yoga Academy
            <div className="h-1 w-[30%] bg-orange-500"></div>
          </h1>
          <p>
            Maestros in their respective fields of Yoga, all our teachers are
            extensively trained and have a lifetime of experience to share with
            you. They go above and beyond to train each student on a
            professional and personal level.
          </p>
        </div>
      </div>
      {/* Gurus Section  */}
      <div className="px-32 pt-16">
        <h3 className="text-[40px]">Meet The Guru&apos;s</h3>
        <div className="h-1 w-[20%] bg-orange-500"></div>
      </div>
      <div className=" grid grid-cols-2 gap-4 py-8 px-32">
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
