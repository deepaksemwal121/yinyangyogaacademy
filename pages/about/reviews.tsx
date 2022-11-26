import React from "react";
import { MdHome } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { GiLaurelsTrophy } from "react-icons/gi";
import Image from "next/image";
import TrustPilotReview from "../../components/sections/TrustPilotReview";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import Teacherprofile from "../../components/sections/Teacherprofile";

const Testimonials = () => {
  return (
    <main>
      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className="font-semibold tracking-wide text-gray-200 md:text-xl">
            Trusted By Thousands of Yoga Students across the world
          </p>
          <h2 className=" fancy-font text-2xl  text-white drop-shadow md:text-3xl md:leading-[6rem] lg:text-4xl xl:text-5xl">
            What Our Students Say
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
              <li className="">Reviews</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="grid gap-4 py-8 px-4 md:grid-cols-3 md:px-6 lg:px-8 xl:px-32">
        <div className="cardShadow flex flex-col items-center space-x-3 bg-white p-4 shadow">
          <TbHeartHandshake size={50} color="#6f727b" />
          <h3 className="text-xl font-semibold text-[#bd0006] lg:text-3xl">
            1000+ Students
          </h3>
        </div>
        <div className="cardShadow  flex flex-col items-center space-x-3 bg-white p-4 shadow">
          <GiLaurelsTrophy size={50} color="#6f727b" />
          <h3 className="text-xl font-semibold text-[#bd0006] lg:text-3xl">
            #1 Ranked YTTC
          </h3>
        </div>
        <div className="cardShadow flex flex-col items-center space-x-3 bg-white p-4 shadow">
          <Image
            src="/alliance.png"
            height={50}
            width={50}
            alt="Yoga-alliance"
          />
          <h3 className="text-xl font-semibold text-[#bd0006] lg:text-3xl">
            Yoga Alliance
          </h3>
        </div>
      </section>
      <section className="space-y-3 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <div className="">
          <h2 className=" font-bold md:text-lg lg:text-2xl ">Testimonials</h2>
          <div className="h-1 w-[5%] bg-[#bd0006]"></div>
        </div>
        <p className=" fancy-font text-lg font-bold leading-snug md:text-3xl lg:text-5xl">
          Our Goal is to teach the best yogic practices <br /> to our students
          across the world
        </p>
      </section>
      <section className=" grid gap-4 bg-slate-100 py-8 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:px-8 xl:px-32">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div key={index} className="space-y-3 rounded-lg bg-white p-4 ">
              <p className="italic ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                eius molestias adipisci impedit iure obcaecati quam alias fuga
                officia laboriosam a earum eligendi, voluptatibus hic suscipit
                nihil animi temporibus cupiditate!
              </p>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src="/testimonial-one.jpg"
                  height={80}
                  width={80}
                  alt="Person-1"
                />
                <div className="">
                  <h2 className="text-xl font-semibold">Andrea Galpei Lopez</h2>
                  <p>Italy </p>
                </div>
              </div>
            </div>
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

      <section className="patternBg  py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <Teacherprofile />
      </section>
    </main>
  );
};

export default Testimonials;
