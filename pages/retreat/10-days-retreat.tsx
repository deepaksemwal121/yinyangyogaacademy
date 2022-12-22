import Image from "next/image";
import React from "react";
import { BsArrowRight, BsPatchCheck } from "react-icons/bs";
import Teacherprofile from "../../components/sections/Teacherprofile";
import Head from "next/head";
import EventTable from "../../widgets/reusable/EventTable";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";
import ApplyButton from "../../widgets/reusable/ApplyButton";

const Retreat = () => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4  md:px-6 lg:px-8 xl:px-32 ">
        <div className=" space-y-2 py-2">
          <p className=" font-semibold tracking-wide text-gray-200 md:text-lg ">
            Come and join us for the unforgettable experience of a lifetime
          </p>
          <h2 className=" fancy-font text-2xl text-white drop-shadow md:text-3xl lg:text-4xl xl:text-5xl">
            10 Day Yoga Retreat in Rishikesh
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
                    Yoga Retreat
                  </a>
                </div>
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
                    10 Days Yoga Retreat
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className="text-center text-base font-semibold text-[#bd0006] md:text-lg ">
          Know More About Yoga Retreat
        </p>
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
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
          <p className="text-sm md:text-base">
            Away from the metropolitan lifestyle, our school - Rishikesh
            Yogkulam, serves as a sanctuary for your soul, mind and body.
            Nestled in the lap of the majestic Himalayas and on the banks of the
            holy river Ganga, it is the perfect place to leave your inhibitions
            behind and focus on centering and grounding yourself. Our 5-day
            Retreat in Rishikesh is the perfect amalgamation of Yoga and
            meditation, giving seekers a break from their daily routine and
            helping them to connect with their inner selves.
          </p>
          <p className="text-sm md:text-base">
            This holistic retreat includes learning and practicing Yoga asanas,
            pranayama and meditation, nature excursions and a tour of the
            Himalayas! The simplest of Yoga asanas when performed with the right
            intention, hand in hand with meditation, lead to a calmer and
            quieter mind, not to mention the numerous health benefits
            contributing to one&apos;s overall well-being.
          </p>
          <p className="text-sm md:text-base">
            The gushing water and gentle breeze around our humble abode is a
            refreshing change for the mind, body, and soul and is an experience
            in itself. Moreover, you can even pursue various adventurous
            activities like white water river rafting, forest walks, trekking,
            cliff jumping, and local sightseeing.
          </p>
        </div>
        <div className="mt-4 flex flex-col items-center space-y-4 space-x-4 lg:flex-row">
          <div className="space-y-4 lg:w-1/2">
            <div className=" rounded-lg border-2 bg-white p-4 shadow-lg ">
              <BsPatchCheck color="#bd0006" size={25} />
              <h3 className="text-lg md:text-xl">Eligibility</h3>
              <p className="text-sm md:text-base">
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
              <ApplyButton />
            </div>
          </div>

          <div className="lg:w-1/2">
            <Image
              className="rounded-lg drop-shadow"
              src="https://www.yogkulam.org/images/5-days-retreat.jpg"
              height={500}
              width={800}
              alt="aboutus "
            />
          </div>
        </div>
      </section>
      {/* Cost Section */}
      <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className="text-center text-lg font-semibold text-[#bd0006] md:text-xl ">
          Know More About Yoga Retreat
        </p>
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
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
        <p className="text-center text-sm md:text-base">
          A 10-day yoga retreat in Rishikesh, India is a truly transformative
          experience that combines the ancient practice of yoga with the
          peaceful and spiritual atmosphere of this holy city. Located in the
          foothills of the Himalayas, Rishikesh is considered to be the
          birthplace of yoga and is home to many renowned yoga schools and
          ashrams.
        </p>
        <div className="mt-4 border-b-2 border-dashed"></div>
        <div className="mt-4 flex flex-col items-center justify-between rounded-lg border-2 border-[#bd0006] bg-white p-4 shadow-lg lg:flex-row">
          <div className="text-center text-xl font-semibold md:text-2xl">
            Book Your Yoga Retreat for 10 Days at Yin Yang Yoga Academy at
            <span className="font-bold text-[#bd0006]"> $500</span>
          </div>
          <div className="flex justify-center">
            <ApplyButton />
          </div>
        </div>
      </section>
      {/* pricing section */}

      <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
        <p className="text-center text-lg font-bold text-[#bd0006]">
          Upcoming Events
        </p>
        <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
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
