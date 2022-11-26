import Image from "next/image";
import React from "react";
import Text from "../../components/Text";
import { BsArrowRight, BsPatchCheck } from "react-icons/bs";
import Button from "../../components/Button";
import Teacherprofile from "../../components/sections/Teacherprofile";
import { MdHome } from "react-icons/md";
import Head from "next/head";
import EventTable from "../../widgets/reusable/EventTable";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";

const Retreat = () => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className=" text-xl font-semibold tracking-wide text-gray-200">
            Come and join us for the unforgettable experience of a lifetime
          </p>
          <h2 className=" fancy-font text-5xl leading-[4rem] text-white drop-shadow">
            10 Day Yoga Retreat in Rishikesh
          </h2>
          <div className="breadcrumbs text-lg text-white">
            <ul>
              <li>
                <a className="">
                  <MdHome size={20} />
                </a>
              </li>
              <li>
                <a>Yoga Retreat </a>
              </li>
              <li>
                <a>10 Day Yoga Retreat</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className="text-center text-xl font-semibold text-[#bd0006] ">
          Know More About Yoga Retreat
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          10 Day Yoga Retreat in Rishikesh
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <div className="space-y-4">
          <p>
            Away from the metropolitan lifestyle, our school - Rishikesh
            Yogkulam, serves as a sanctuary for your soul, mind and body.
            Nestled in the lap of the majestic Himalayas and on the banks of the
            holy river Ganga, it is the perfect place to leave your inhibitions
            behind and focus on centering and grounding yourself. Our 5-day
            Retreat in Rishikesh is the perfect amalgamation of Yoga and
            meditation, giving seekers a break from their daily routine and
            helping them to connect with their inner selves.
          </p>
          <p>
            This holistic retreat includes learning and practicing Yoga asanas,
            pranayama and meditation, nature excursions and a tour of the
            Himalayas! The simplest of Yoga asanas when performed with the right
            intention, hand in hand with meditation, lead to a calmer and
            quieter mind, not to mention the numerous health benefits
            contributing to one&apos;s overall well-being.
          </p>
          <p>
            The gushing water and gentle breeze around our humble abode is a
            refreshing change for the mind, body, and soul and is an experience
            in itself. Moreover, you can even pursue various adventurous
            activities like white water river rafting, forest walks, trekking,
            cliff jumping, and local sightseeing.
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <div className="w-1/2 space-y-4">
            <div className=" rounded-lg border-2 bg-white p-4 shadow-lg ">
              <BsPatchCheck color="#bd0006" size={25} />
              <h3 className="text-[30px]">Eligibility</h3>
              <p>
                Backed by millennia of experience, this retreat is intricately
                designed to be beneficial to all, beginners and regular
                practitioners alike. It has no age or skill restriction and is
                ideal for anyone looking for the perfect opportunity to take a
                step back and reconnect with their true self.
              </p>
            </div>
            <div className="border-l-4 border-[#bd0006] p-4">
              <p className="font-semibold italic">
                Come join us for our{" "}
                <span className="text-[#bd0006]">
                  10 day Yoga Retreat in Rishikesh
                </span>{" "}
                to unfold the treasures that lie within. We promise to make it a
                memorable and enriching experience for you.
              </p>
            </div>
            <div className="flex justify-center">
              <p className="mt-6 flex w-1/3 items-center justify-center space-x-4 rounded bg-[#bd0006] p-4 text-lg font-semibold text-white ">
                <span>Apply Now</span>
                <BsArrowRight />
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <Image
              className="rounded-lg drop-shadow"
              src="/10days-retreat.jpg"
              height={400}
              width={600}
              alt="aboutus "
            />
          </div>
        </div>
      </section>
      {/* Cost Section */}
      <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className="text-center text-xl font-semibold text-[#bd0006] ">
          Know More About Yoga Retreat
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Get Your 10 Days Yoga Retreat
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          provident minus ex aspernatur voluptatibus qui autem dicta, blanditiis
          aliquid, recusandae vero saepe nobis consectetur fugiat deserunt,
          facilis quasi perspiciatis amet?
        </p>
        <div className="mt-4 border-b-2 border-dashed"></div>
        <div className="mt-4 flex items-center justify-between rounded-lg border-2 border-[#bd0006] bg-white p-4 shadow-lg">
          <div className="text-2xl font-semibold">
            Book Your Yoga Retreat for 10 Days at Yin Yang Yoga Academy at{" "}
            <span className="font-bold text-[#bd0006]"> $500</span>
          </div>
          <div className="flex justify-center">
            <p className="mt-6 flex  items-center justify-center space-x-4 rounded bg-[#bd0006] p-4 text-lg font-semibold text-white ">
              <span>Apply Now</span>
              <BsArrowRight />
            </p>
          </div>
        </div>
      </section>
      {/* pricing section */}

      <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className="text-center text-lg font-bold text-[#bd0006]">
          Upcoming Events
        </p>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Available Seats for 10 Days Yoga Retreat
          <span>
            <Image
              src="/line-decor.png"
              width={550 / 2}
              height={63 / 2}
              alt="line-decor"
            />
          </span>
        </h2>
        <EventTable />
      </section>
      <section className=" mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <TestimonialCarousel />
      </section>
      <section className=" mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <TrustPilotReview />
      </section>
      <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <Teacherprofile />
      </section>
    </main>
  );
};

export default Retreat;
