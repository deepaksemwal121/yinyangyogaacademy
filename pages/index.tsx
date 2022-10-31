import Head from "next/head";
import Image from "next/image";
import SliderHero from "../components/sections/SliderHero";
import LeftImageCard from "../components/sections/LeftImageCard";
import CourseHomepage from "../components/sections/CourseHomepage";
import { BsArrowRight } from "react-icons/bs";
import Teacherprofile from "../components/sections/Teacherprofile";
import data from "../data/data";
import Slider from "../components/HeroSlider";
import TestimonialCarousel from "../components/sections/TestimonialCarousel";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Yin Yang Yoga Academy</title>
        <meta name="description" content="Yin yang yoga academy" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Quicksand:wght@400;500;600;700&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Main Index Pages starts from Here  */}
      {/* Slider Component will go here */}
      <Slider />

      <section className="py-8">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Yoga Teacher Training In Rishikesh, INDIA
          <span>
            <Image
              src="/underline.svg"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />{" "}
          </span>
        </h2>
        <div className="w-full items-center justify-center px-8 md:flex md:space-x-4 md:px-32  ">
          <div className=" relative flex flex-col items-center justify-center md:w-1/2">
            <Image
              src="/500hr-3.jpg"
              alt="yoga-pose"
              width={400}
              height={400}
              className="relative z-[2] rounded-full object-cover shadow-lg"
            />
            <div className="absolute left-7 object-cover opacity-40 md:left-[72px]">
              <Image
                src="/bg-mandala.png"
                width={500}
                height={500}
                alt="bg"
                className="spin-mandala"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600">
              With each passing day, people are getting more and more engaged
              towards a better peaceful life. Amidst all the chaos all that
              everyone wants is a little time for oneself so that it leads them
              t grow. Thus comes yoga in the scene which is one short formula
              for such a life that gives one such peace and balances one’s life.{" "}
            </p>
            <br />
            <p className="text-gray-600">
              Today yoga teacher trainers are spread worldwide wide and a
              maximum of them are trained from Rishikesh.
            </p>
            <br />
            <blockquote cite="https://www.google.com">
              <em className="sloka text-[26px]">
                &ldquo; योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन। <br />
                योSपाकरोत्तं प्रवरं मुनीनां पतञ्जलिं
                प्राञ्जलिरानतोSस्मि।।&rdquo;
              </em>
            </blockquote>
          </div>
        </div>
      </section>
      {/* Section 2 Starts from here  */}
      <div className="home-3bg mt-8  w-full text-center md:px-32 md:py-[140px]">
        <p className=" sloka text-[30px] text-orange-600">
          योगश्चित्तवृत्तिनिरोधः
        </p>
        <h2 className="flex flex-col text-[30px] font-bold md:text-[40px]">
          Why Yoga Teacher Training Programs And Retreats?
          <span>
            <Image
              src="/underline.svg"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />{" "}
          </span>
        </h2>
        <div className="flex-col-reverse items-center px-8 py-8 md:flex md:flex-row md:space-x-4">
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
              className="absolute z-10 rounded"
              alt="yoga-pose"
              height={400}
              width={564}
            />
            {/* <div className="up-down absolute left-3 top-3 h-[220px] w-[311px] rounded bg-[#bd0007] p-4 md:h-[400px] md:w-[564px] "></div> */}
          </div>
        </div>
      </div>
      {/* Course Section on Homepage Starts from Here */}
      <CourseHomepage />
      {/* Best Teacher Section */}
      <div className="relative w-full space-y-4 px-8 py-4 md:px-32 md:py-16">
        <div className="absolute right-0 top-0 opacity-25 ">
          <Image src="/bg-chakra-mool.png" height={500} width={500} alt="bg" />
        </div>
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          Best Yoga Teacher Training India
          <span>
            <Image
              src="/underline.svg"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />
          </span>
        </h2>

        <p className="sloka text-center text-[30px] leading-10 text-orange-600   ">
          मनः प्रशमनोपायो योग इत्यभिधीयते।
        </p>

        <p className="text-center text-base text-gray-600 sm:text-lg">
          There are online classes that are also there. There is no stop to
          spreading knowledge as thus like the entire world the yoga world has
          also chosen and taken part in online tutoring. From hatha yoga to the
          process of relaxation, breathing both active and passive, meditation,
          and other asanas everything is been taught. All the problems have been
          kept in mind and the classes are being conducted.
        </p>
        <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.onlineCards.map((value, index) => {
            return (
              <div
                key={index}
                className="best-bg relative rounded bg-[#f9d3af] p-6"
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  width={80}
                  height={80}
                />
                <h2 className="text-[20px] text-orange-600 md:text-[25px]">
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
      {/* What do we offer  Section starts  */}
      <div className="bg-retreat relative w-full px-8 py-4 md:px-32 md:py-16">
        <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
          What Do We Offer
          <span>
            <Image
              src="/underline.svg"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />{" "}
          </span>
        </h2>
        <p className="sloka -z-10 text-center  text-[30px] text-orange-600 ">
          &ldquo; लोकः समस्ताः सुखिनो भवन्तु &rdquo;
        </p>
        <div className="  grid grid-cols-1 gap-4 md:grid-cols-4">
          {data.offer.map((value, index) => {
            return (
              <div
                key={index}
                className="z-10 flex flex-col justify-between bg-gray-100 p-4 text-center "
              >
                <div className="space-y-1">
                  <div className="object-fit">
                    <Image
                      src={value.image}
                      alt={value.title}
                      height={160}
                      width={160}
                    />
                  </div>
                  <h3 className="text-[24px]">{value.title}</h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {value.content}
                  </p>
                </div>

                <a
                  className="float-right mt-4 flex items-center space-x-4 text-orange-600"
                  href={value.url}
                >
                  <BsArrowRight />
                  <span> Read More</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* Teachers Section  */}
      <Teacherprofile />
      {/* Video Reviews */}
      <TestimonialCarousel />
    </div>
  );
}
