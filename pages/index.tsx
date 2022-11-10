import Head from "next/head";
import Image from "next/image";
import React from "react";
import SliderHero from "../components/HeroSlider";
import CourseSlider from "../components/sections/CourseSlider";
import LeftImageCard from "../components/sections/LeftImageCard";
import data from "../data/data";
import ShadowCard from "../widgets/reusable/ShadowCard";

const index = () => {
  return (
    <div>
      <Head>
        <title>Yin Yang Yoga Academy</title>
        <meta name="description" content="Yin yang yoga academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Slider Section */}
        <SliderHero />
        {/* Section 1 */}
        <section className=" mb-20 grid w-full grid-cols-1 gap-4 px-4 sm:px-24 md:-mt-4 md:grid-cols-3 md:px-6 lg:-mt-20  lg:px-8 xl:-mt-32 xl:px-32">
          <ShadowCard />
          <ShadowCard />
          <ShadowCard />
        </section>
        <section className="py-8 px-4 md:px-6 lg:px-8 xl:px-32 ">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            Yoga Teacher Training In Rishikesh, INDIA
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />{" "}
            </span>
          </h2>
          <div className="w-full items-center justify-center px-8 md:flex md:space-x-4  ">
            <div className=" relative flex flex-col items-center justify-center md:w-1/2">
              <Image
                src="/500hr-3.jpg"
                alt="yoga-pose"
                width={300}
                height={300}
                className="relative z-[2] rounded-full object-cover shadow-lg"
              />
              <div className="absolute  object-cover opacity-40">
                <Image
                  src="/bg-mandala.png"
                  width={400}
                  height={400}
                  alt="bg"
                  className="spin-mandala"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600">
                With each passing day, people are getting more and more engaged
                towards a better peaceful life. Amidst all the chaos all that
                everyone wants is a little time for oneself so that it leads
                them t grow. Thus comes yoga in the scene which is one short
                formula for such a life that gives one such peace and balances
                one’s life.{" "}
              </p>
              <br />
              <p className="text-gray-600">
                Today yoga teacher trainers are spread worldwide wide and a
                maximum of them are trained from Rishikesh.
              </p>
              <br />
              <blockquote cite="https://www.google.com">
                <em className="sloka text-[20px]">
                  &ldquo; योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन।{" "}
                  <br />
                  योSपाकरोत्तं प्रवरं मुनीनां पतञ्जलिं
                  प्राञ्जलिरानतोSस्मि।।&rdquo;
                </em>
                <br />
                <i>
                  Who gave Yoga for serenity and sanctity of mind, grammar for
                  clarity and purity of speech, and medicine for perfection of
                  health, let us bow before the noblest of sages, Patanjali.
                </i>
              </blockquote>
            </div>
          </div>
        </section>
        <section className=" patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
            About Yin Yang Yoga Academy - Best Yoga School In Rishikesh INDIA
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="flex w-full flex-col md:space-x-4 lg:flex-row">
            <div className="w-full text-center lg:w-1/2">
              <Image
                src="/home-about.jpg"
                width={1192 / 2}
                height={795 / 2}
                className="rounded-lg drop-shadow"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p>
                To say the yoga capital of this world it is one of the best Yoga
                schools which is situated at the heart of the city. Here
                practices or forms of yoga are found in one of the purest forms.
                The history, origin, and every aspect of yoga are covered.
                People from different parts like the UK, the USA, Australia, New
                Zealand come here and enroll themselves in their famous
                <b> Yoga Teacher Training Course </b>. This YTTC course is a
                little different from any other course and the main reason is
                its beautiful blend of all the aspects covering yoga.
                <br /> The center here provides courses for beginners as well as
                for people who want to pursue this as a profession. The center I
                accredited by the <b>Yoga Alliance USA </b>and has different
                variety of courses which we shall discuss. The only aim of this
                institute is to provide refined yoga teachers and trainers. Thus
                they have different forms of it in form of{" "}
                <b>
                  yoga anatomy, alignment, and adjustment yoga philosophy
                  meditation, pranayam, etc
                </b>
                . Also if you are someone who does not want to be a part of yoga
                for a lifetime but takes it as an escape this place is perfect.
                The reason is they provide 5,7, 10 days programs which one can
                avail. The best part about it is that this school creates an
                atmosphere where you will feel family having the best
                environment, food, bonds, and warmth.
              </p>
            </div>
          </div>
        </section>
        {/* Sub Section of About Yin Yang */}
        <section className="-mt-12 py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <div className="flex flex-col items-center justify-between rounded-lg bg-white p-4 shadow-lg lg:flex-row">
            <div>
              <em className="sloka text-[1.5rem]">
                &ldquo; मनः प्रशमनोपायो योग इत्यभिधीयते। &rdquo;
              </em>
              <h3 className="text-[1.5rem] italic text-gray-400">
                The recourse to pacify the mind is called yoga.
              </h3>
            </div>
            <div className="rounded-lg border-2 border-[#bd0006] p-4 ">
              <p>Join Yoga Retreat</p>
            </div>
          </div>
        </section>
        <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-32">
          <div className="relative w-full">
            <div className="absolute right-0 top-0 opacity-25 ">
              <Image
                src="/bg-chakra-mool.png"
                height={500}
                width={500}
                alt="bg"
              />
            </div>
            <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
              Best Yoga Teacher Training India
              <span>
                <Image
                  src="/line-decor.png"
                  width={550 / 2}
                  height={63 / 2}
                  alt="line-decor"
                />
              </span>
            </h2>

            <p className="sloka text-center text-[30px] leading-10 text-[#bd0006]   ">
              योगः कर्मसु कौशलम्।
            </p>
            <p className="mb-4 text-center text-[24px] italic text-gray-400">
              Yoga is excellence in action.
            </p>

            <p className="text-center text-base text-gray-600 sm:text-lg">
              There are online classes that are also there. There is no stop to
              spreading knowledge as thus like the entire world the yoga world
              has also chosen and taken part in online tutoring. From hatha yoga
              to the process of relaxation, breathing both active and passive,
              meditation, and other asanas everything is been taught. All the
              problems have been kept in mind and the classes are being
              conducted.
            </p>
            <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {data.onlineCards.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="best-bg relative rounded-lg bg-white p-6 shadow-lg"
                  >
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={80}
                      height={80}
                    />
                    <h2 className="text-[20px] text-[#bd0006] md:text-[25px]">
                      {value.title}
                    </h2>
                    <p className="text-base text-gray-600 md:text-lg">
                      {value.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="greyFloral py-10 px-4 md:px-6 lg:px-8 xl:px-32">
          <div className=" w-full text-center">
            <p className=" sloka text-[30px] text-[#bd0006]">
              योगश्चित्तवृत्तिनिरोधः
            </p>
            <h2 className="flex flex-col text-[30px] font-bold md:text-[40px]">
              Why Yoga Teacher Training Programs And Retreats?
              <span>
                <Image
                  src="/line-decor.png"
                  width={550 / 2}
                  height={63 / 2}
                  alt="line-decor"
                />
              </span>
            </h2>
          </div>
          <div className="flex-col-reverse items-center md:flex md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              {data.cardData.map((i, index) => {
                return (
                  <LeftImageCard
                    key={index}
                    title={i.title}
                    description={i.description}
                    icon={i.icon}
                  />
                );
              })}
            </div>
            <div className="relative md:w-1/2">
              <Image
                src="/home-3.jpg"
                className="absolute z-10 rounded-lg drop-shadow-lg"
                alt="yoga-pose"
                height={400}
                width={564}
              />
            </div>
          </div>
        </section>
        <section className=" px-4 md:px-6 lg:px-8 xl:px-32">
          <CourseSlider />
        </section>
      </main>
    </div>
  );
};

export default index;
