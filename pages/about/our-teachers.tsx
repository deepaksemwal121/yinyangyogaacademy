import Image from "next/image";
import React from "react";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";
import TeacherCard from "../../components/TeacherCard";
import data from "../../data/data";

const Teachers = () => {
  return (
    <main>
      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className=" font-semibold tracking-wide text-gray-200 md:text-xl">
            A good teacher doesn&apos;t teach from the book. A good teacher
            teaches from the heart
          </p>
          <h2 className=" fancy-font text-2xl  text-white drop-shadow md:text-3xl md:leading-[6rem] lg:text-4xl xl:text-5xl">
            Meet The Gurus For This <br className="md:hidden" /> Spritual
            Journey
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-white md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium "
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <a href="#" className="ml-1 text-sm font-medium  md:ml-2">
                    About
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium   md:ml-2">
                    Our Teachers
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="mt-12  py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <p className=" sloka text-center text-2xl text-[#de4c11]">
          विद्यां ददाति विनयं
        </p>
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Teaching Faculty - Yin Yang Yoga Academy
          <span>
          <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <p className="text-sm md:text-base">
          Maestros in their respective fields of Yoga, all our teachers are
          extensively trained and have a lifetime of experience to share with
          you. They go above and beyond to train each student on a professional
          and personal level.
        </p>
      </section>
      {/* Gurus Section  */}
      <section className=" grid gap-4 py-8 px-4 text-center  md:px-6 lg:grid-cols-2 lg:px-8   xl:px-16 2xl:px-32  ">
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
      </section>
      <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <TestimonialCarousel />
      </section>
      <section className="py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <p className=" text-center font-medium uppercase tracking-wide text-[#bd0006]">
          our social reviews
        </p>
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
          Why We are the First Choice For YTTC
          <span>
            <Image
              src="/line-decor.png"
              width={568 / 2}
              height={94 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <TrustPilotReview />
      </section>
    </main>
  );
};

export default Teachers;
