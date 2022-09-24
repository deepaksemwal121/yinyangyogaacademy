import Image from "next/image";
import React, { useState } from "react";
import { data } from "../static/data";

const Teachers = () => {
  const [showMore, setShowMore] = useState(false);
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
          <h2 className="text-[30px] font-semibold">
            A good teacher doesn&apos;t teach from the book.
            <br /> A good teacher teaches from the heart
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
          <h1 className="my-4 text-[30px] font-[600]">
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
        <h3 className="text-[40px] font-bold">Meet The Guru&apos;s</h3>
        <div className="h-1 w-[20%] bg-orange-500"></div>
      </div>
      <div className=" grid grid-cols-2 gap-4 py-8 px-32">
        {data.guruProfile.map((item, index) => {
          return (
            <div key={index} className="relative rounded-sm bg-orange-100">
              <div className="relative flex items-center space-x-4 p-4">
                <div>
                  <Image
                    className="rounded-full"
                    src={item.image}
                    height={250}
                    width={250}
                    alt="yoga-teacher"
                  />
                </div>
                <div>
                  <h2 className="text-[26px] font-semibold text-orange-800">
                    {item.name}
                  </h2>
                  <p className="text-lg text-orange-600">{item.expertise}</p>
                </div>
                <div
                  onClick={() => setShowMore(!showMore)}
                  className="readMore absolute bottom-0 right-0 cursor-pointer bg-orange-600 p-4 text-white"
                >
                  Read More
                </div>
              </div>
              <div
                className={`${
                  showMore ? "" : "hidden"
                } absolute top-0 h-full bg-orange-600 p-4 text-white ease-linear`}
              >
                <div
                  onClick={() => setShowMore(!showMore)}
                  className=" float-right flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black"
                >
                  x
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Teachers;
