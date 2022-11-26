import Image from "next/image";
import React from "react";
import { MdHome } from "react-icons/md";
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
          <div className="breadcrumbs text-lg text-white">
            <ul>
              <li>
                <a className="">
                  <MdHome size={20} />
                </a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Our Teachers </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12  py-8 px-4 text-center md:px-6 lg:px-8 xl:px-32">
        <p className=" sloka text-[30px] text-[#bd0006]">विद्यां ददाति विनयं</p>
        <h2 className="flex flex-col text-[30px] font-bold md:text-[40px]">
          Teaching Faculty - Yin Yang Yoga Academy
          <span>
            <Image
              src="/line-decor.png"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />
          </span>
        </h2>
        <p>
          Maestros in their respective fields of Yoga, all our teachers are
          extensively trained and have a lifetime of experience to share with
          you. They go above and beyond to train each student on a professional
          and personal level.
        </p>
      </section>
      {/* Gurus Section  */}
      <section className=" grid gap-4 py-8 px-4 text-center  md:px-6 lg:grid-cols-2 lg:px-8 xl:px-32  ">
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
      <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <TestimonialCarousel />
      </section>
      <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className=" text-center font-medium uppercase tracking-wide text-[#bd0006]">
          our social reviews
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Why We are the First Choice For YTTC
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
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
