import Head from "next/head";
import Image from "next/image";
import SliderHero from "../components/sections/SliderHero";
import LeftImageCard from "../components/sections/LeftImageCard";
import CourseHomepage from "../components/sections/CourseHomepage";
import { BsArrowRight } from "react-icons/bs";
import Teacherprofile from "../components/sections/Teacherprofile";
import data from "../data/data";
import Slider from "../components/HeroSlider";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Yin Yang Yoga Academy</title>
        <meta name="description" content="Yin yang yoga academy" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Quicksand:wght@400;500;600;700&display=swap`}
          rel="stylesheet"
        />
      </Head>
      {/* Main Index Pages starts from Here  */}
      {/* Slider Component will go here */}
      <Slider />
      {/* <section
        className="flex  h-screen flex-col justify-between text-white"
        style={{
          backgroundImage: `url(/landing_hero.jpg)`,
          backgroundPositionY: "bottom",
          backgroundPositionX: "center",
        }}
      >
        <div className="my-16 grid px-8 sm:grid-cols-2 sm:px-32">
          <div className="items-center space-y-6">
            <p className="text-orange-600">Know Yourself</p>
            <h2 className="text-xl text-white sm:text-4xl">
              Yoga Teacher Training
              <br />
              the art of self realization
            </h2>
            <p className=" text-gray-200">
              Yoga cultivates the ways of maintaining a balanced attitude in
              day-to-day <br /> life and endows skill in the performance of
              one&apos;s actions
            </p>
            <div className="flex flex-col items-center justify-center space-x-2 sm:flex-row sm:justify-start">
              <IoChevronForwardCircle
                color="orange"
                className="hidden sm:block"
                size={40}
              />
              <p className="text-center text-white sm:text-left">
                Discover yoga teacher training courses now
              </p>
              <Button
                title="View All Courses"
                style="bg-orange-600 rounded-full px-12 py-2 block sm:hidden"
                url="/courses"
              />
            </div>
          </div>
          <div className=" hidden items-end sm:block ">
            <ul className="flex cursor-pointer flex-col items-end space-y-4 font-semibold">
              <li className="flex items-center hover:text-orange-600">
                About
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
              <li className="flex items-center hover:text-orange-600 ">
                Our Teachers
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
              <li className="flex items-center hover:text-orange-600">
                Accommodation
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
              <li className="flex items-center hover:text-orange-600">
                Blogs
                <div className="mx-2 h-1 w-10 bg-white" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden justify-between px-32 py-12 sm:flex">
          <div className="grid w-4/5 grid-cols-4 space-x-8 border-t border-gray-50 pt-4">
            <div className="space-y-2">
              <h3 className="text-xl text-white">Teacher Training</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="cursor-pointer space-y-1">
                <li className="hover:text-orange-600">
                  100 hours training course
                </li>
                <li className="hover:text-orange-600">
                  200 hours training course
                </li>
                <li className="text-orange-600">View More</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl text-white">Ayurveda Courses</h3>
              <div className="h-[1px]  w-1/4 bg-white" />
              <ul className="cursor-pointer space-y-1 text-base">
                <li className="hover:text-orange-600">100 hours training </li>
                <li className="hover:text-orange-600">100 hours training</li>
                <li className="text-orange-600">View More</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl text-white">Yoga Retreats</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="cursor-pointer space-y-1">
                <li className="hover:text-orange-600">5 day yoga retreat</li>
                <li className="hover:text-orange-600">7 day yoga retreat</li>
                <li className="text-orange-600">View More</li>
              </ul>
            </div>
            <div className="space-y-2 ">
              <h3 className="text-xl text-white">Social</h3>
              <div className="h-[1px] w-1/4 bg-white" />
              <ul className="flex items-center space-y-1 space-x-4">
                <li className="text-blue-600">
                  <IoLogoFacebook size={28} />
                </li>
                <li className="text-pink-600">
                  <IoLogoInstagram size={25} />
                </li>
                <li className="text-blue-600">
                  <IoLogoTwitter size={28} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="rounded-full bg-orange-600 p-5 text-white hover:bg-white hover:text-orange-600">
              <IoCall size={25} />
            </div>
          </div>
        </div>
      </section> */}
      <div className="w-full items-center px-8 md:flex md:space-x-4 md:px-32  ">
        <div className=" relative md:w-1/2">
          <Image
            src="/yoga-retreat-5.png"
            alt="yoga-pose"
            width={666}
            height={666}
            className="relative z-[2]"
          />
          <div className="absolute top-0 opacity-40 md:left-[70px]">
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
          <p className="text-lg font-medium text-orange-600">
            One Destination, Many Paths, One Journey
          </p>
          <h2 className="flex flex-col text-[30px] font-bold md:text-[40px]">
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
          <p className="text-gray-600">
            With each passing day, people are getting more and more engaged
            towards a better peaceful life. Amidst all the chaos all that
            everyone wants is a little time for oneself so that it leads them t
            grow. Thus comes yoga in the scene which is one short formula for
            such a life that gives one such peace and balances one’s life.{" "}
          </p>
          <br />
          <p className="text-gray-600">
            Today yoga teacher trainers are spread worldwide wide and a maximum
            of them are trained from Rishikesh.
          </p>
          <br />
          <blockquote cite="https://www.google.com">
            <em>
              &ldquo; We are committed to creating a safer, nurturing space to
              share the wisdom of yoga and meditation. Our students are able to
              explore their self-yoga practice and self-transformation in a
              comfortable and non-judgemental environment. &rdquo;
            </em>
          </blockquote>
        </div>
      </div>
      {/* Section 2 Starts from here  */}
      <div className="mt-8 w-full  text-center md:px-32 md:py-16">
        <p className="text-base font-medium text-orange-600 md:text-lg">
          ONE DESTINATION, MANY PATHS, ONE JOURNEY
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
              className="z-10 rounded"
              alt="yoga-pose"
              height={400}
              width={564}
            />
            <div className="up-down absolute left-3 top-3 h-[220px] w-[311px] rounded bg-[#bd0007] md:h-[400px] md:w-[564px] "></div>
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
            />{" "}
          </span>
        </h2>

        <p className="text-center text-base text-gray-600 sm:text-lg">
          There are online classes that are also there. There is no stop to
          spreading knowledge as thus like the entire world the yoga world has
          also chosen and taken part in online tutoring. From hatha yoga to the
          process of relaxation, breathing both active and passive, meditation,
          and other asanas everything is been taught. All the problems have been
          kept in mind and the classes are being conducted.
        </p>
        {/* <br />
        <p className="text-center text-lg text-gray-600">
          All these classes are taken by none other than experienced teachers
          who have the experience of teaching both offline as well as online.
          Yes, these teachers are capable to teach online also as they are
          internationally renowned personalities in this field. All the
          faculties have their sort of achievement and are renowned
          professionals having deep knowledge in yoga.
        </p> */}
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
      <div className="relative w-full px-8 py-4 md:px-32 md:py-16">
        <div className="absolute left-0 opacity-25 ">
          <Image src="/bg-mandala.png" height={500} width={500} alt="bg" />
        </div>
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
        <p className="-z-10 text-center text-[24px] font-black italic opacity-50 md:text-[45px] ">
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
                  <Image
                    src={value.image}
                    alt={value.title}
                    height={160}
                    width={160}
                  />
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
    </div>
  );
}
