import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import SliderHero from "../components/HeroSlider";
import CourseSlider from "../components/sections/CourseSlider";
import LeftImageCard from "../components/sections/LeftImageCard";
import Teacherprofile from "../components/sections/Teacherprofile";
import TestimonialCarousel from "../components/sections/TestimonialCarousel";
import TrustPilotReview from "../components/sections/TrustPilotReview";
import data from "../data/data";
import CourseAdBanner from "../widgets/reusable/CourseAdBanner";
import Gallery from "../widgets/reusable/Gallery";
import ShadowCard from "../widgets/reusable/ShadowCard";

const cardData = [
  {
    title: "Certified Yoga Teacher Training Course",
    description: `Yin Yang Yoga School is the top choice for authentic and traditional Yoga Teacher Training in Rishikesh, India, certified by Yoga Alliance USA. Our unique program combines the benefits of both yin and yang styles of yoga in one practice. Join us and discover the balance of these relative qualities in your yoga journey.`,
  },
  {
    title: "6+ Years of Experience in Yoga Teacher Training ",
    description: `Welcome to our Yoga Teacher Training program with over 6 years of experience. Our team of certified instructors will guide you through a comprehensive training program to become a skilled and confident yoga teacher. Our program includes both in-person and online components. Join us on your journey to become a yoga instructor`,
  },
  {
    title: "Want to be a certified Yoga Teacher?",
    description: `To become a certified yoga instructor, you will need to complete a teacher training program that meets your goals and needs. Programs vary in intensity and focus, so it is important to research and choose one that aligns with your personal goals and preferences. By completing a teacher training program, you will gain the skills and knowledge needed to effectively teach yoga to others.`,
  },
];

const whyChooseUs = [
  {
    image: "https://www.yogkulam.org/images/yoga_retreat.jpg",
    title: "Yoga retreats",
    description:
      "A Yoga retreat is an opportunity to shape your thoughts & being by aligning your mind, body and soul. A time apart from the hustle of humanity, with only nature to keep you company. It’s time to detach, to turn within and listen to your inner self.",
    url: "/retreat/5-days-retreat",
  },
  {
    image:
      "https://www.yogkulam.org/images/rishikesh-yogkulam-accommodation.jpg",
    title: "Accommodation",
    description:
      "We understand the importance of a conducive environment for a healthy mind, body and soul. Accommodation is available on private as well as shared basis to ensure that everyone feels absolutely comfortable, warm and as homely as possible.",
    url: "/retreat/5-days-retreat",
  },
  {
    image: "https://www.yogkulam.org/images/guru%20_homepage.jpg",
    title: "Gurus",
    description:
      "Maestros in their respective fields of Yoga, all our teachers are extensively trained and have a lifetime of experience to share with you. They go above and beyond to train each student on a professional and personal level.",
    url: "/retreat/5-days-retreat",
  },
  {
    image: "https://www.yogkulam.org/images/rishikesh-yogkulam-food.jpg",
    title: "Food",
    description:
      "Our meals are carefully prepared in-house at our school by skilled chefs, ensuring that every bite is both healthy and delicious. Every morning begins with a refreshing cup of herbal tea, setting the tone for a nourishing day ahead.",
    url: "/retreat/5-days-retreat",
  },
];
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
        <section className=" mb-20 grid w-full grid-cols-1 gap-4 px-4 sm:px-24  md:grid-cols-3 md:px-6  lg:px-8  xl:px-16 2xl:px-32">
          {cardData.map((item, index) => (
            <ShadowCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
        <section className="py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32 ">
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Yoga Teacher Training In Rishikesh, INDIA
            <span>
              <Image
                src="/line-decor.png"
                width={568 / 2}
                height={94 / 2}
                alt="line-decor"
              />{" "}
            </span>
          </h2>
          <div className="w-full items-center justify-center space-y-4 px-8 md:flex md:space-x-4   ">
            <div className=" relative flex flex-col items-center justify-center p-4 md:w-1/2">
              <Image
                src="/yoga-homepage.png"
                alt="yoga-pose"
                width={835}
                height={512}
                className="relative z-[2]"
              />
              <div className="absolute left-10 object-cover opacity-40">
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
              <p className="text-sm text-gray-600 md:text-base">
                With each passing day, people are getting more and more engaged
                towards a better peaceful life. Amidst all the chaos all that
                everyone wants is a little time for oneself so that it leads
                them t grow. Thus comes yoga in the scene which is one short
                formula for such a life that gives one such peace and balances
                one&apos;s life.{" "}
              </p>
              <br />
              <p className="text-gray-600">
                Today yoga teacher trainers are spread worldwide wide and a
                maximum of them are trained from Rishikesh.
              </p>
              <br />
              <p className="border-l-2 border-[#de4c11] pl-2">
                <em className="sloka ">
                  &ldquo; योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन।
                  <br />
                  योSपाकरोत्तं प्रवरं मुनीनां पतञ्जलिं
                  प्राञ्जलिरानतोSस्मि।।&rdquo;
                </em>
                <br />
                <i className="text-sm md:text-base">
                  Who gave Yoga for serenity and sanctity of mind, grammar for
                  clarity and purity of speech, and medicine for perfection of
                  health, let us bow before the noblest of sages, Patanjali.
                </i>
              </p>
            </div>
          </div>
        </section>
        <section className=" patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            About Yin Yang Yoga Academy - Best Yoga School In Rishikesh INDIA
            <span>
              <Image
                src="/line-decor.png"
                width={568 / 2}
                height={94 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="flex w-full flex-col items-center justify-center  md:space-x-4 lg:flex-row">
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
              <p className="text-sm md:text-base">
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
        <section className="-mt-12 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="flex flex-col items-center justify-between space-y-3 rounded-lg bg-white p-4 shadow-lg lg:flex-row">
            <div>
              <em className="sloka text-2xl md:text-4xl">
                &ldquo; मनः प्रशमनोपायो योग इत्यभिधीयते। &rdquo;
              </em>
              <h3 className="text-2xl italic text-gray-400 md:text-3xl">
                The recourse to pacify the mind is called yoga.
              </h3>
            </div>
            <div className="rounded-lg bg-[#de4c11] p-4 font-semibold text-white transition-all hover:border-2 hover:border-[#de4c11] hover:bg-white hover:text-[#de4c11] ">
              <Link href="/retreat/5-days-retreat">
                <p>Join Yoga Retreat</p>
              </Link>
            </div>
          </div>
        </section>
        <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <div className="relative w-full">
            <div className="absolute right-0 top-0 opacity-25 ">
              <Image
                src="/bg-chakra-mool.png"
                height={500}
                width={500}
                alt="bg"
              />
            </div>
            <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
              Best Yoga Teacher Training India
              <span>
                <Image
                  src="/line-decor.png"
                  width={568 / 2}
                  height={94 / 2}
                  alt="line-decor"
                />
              </span>
            </h2>

            <p className="sloka text-center text-2xl leading-10 text-[#de4c11] md:text-4xl   ">
              योगः कर्मसु कौशलम्।
            </p>
            <p className="mb-4 text-center text-[24px] italic text-gray-400">
              Yoga is excellence in action.
            </p>

            <p className="text-center text-sm text-gray-600 sm:text-lg md:text-base">
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
                    <h2 className="text-xl text-[#de4c11] md:text-[25px]">
                      {value.title}
                    </h2>
                    <p className="text-sm text-gray-600 md:text-base">
                      {value.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="greyFloral py-10 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <div className=" w-full text-center">
            <p className=" sloka text-2xl text-[#de4c11] md:text-4xl">
              योगश्चित्तवृत्तिनिरोधः
            </p>
            <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
              Why Yoga Teacher Training Programs And Retreats?
              <span>
                <Image
                  src="/line-decor.png"
                  width={568 / 2}
                  height={94 / 2}
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
        <section className="  py-4 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <CourseSlider />
        </section>
        <section className=" my-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Why To Choose Yin Yang Yoga Academy
            <span>
              <Image
                src="/line-decor.png"
                width={568 / 2}
                height={94 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              return (
                <div key={index} className="cardShadow">
                  <Image
                    className="rounded-bl-[40%] p-2 hover:scale-105"
                    src={item.image}
                    height={280}
                    width={400}
                    alt="retreat"
                  />
                  <div className="p-[1rem]">
                    <h2 className="rounded-tl-[20px] rounded-br-[20px] bg-[#de4c11] p-2 text-center text-lg text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-base">
                      {item.description}
                    </p>
                    <a
                      href={item.url}
                      className="mt-4 flex cursor-pointer items-center text-sm text-[#de4c11] hover:space-x-4 hover:duration-300 hover:ease-linear md:text-base"
                    >
                      <span className="tracking-wider">Learn More</span>
                      <BsArrowRight />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="greyFloral my-8 py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Learn From The Best Yoga School In Rishikesh
            <span>
              <Image
                src="/line-decor.png"
                width={568 / 2}
                height={94 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="py-8 text-center">
            <p className="mb-4 text-sm md:text-base">
              If you want to do the best yoga training and seeing this as your
              passion as well as a profession then there is no better place than
              this. <b>Rishikesh&apos;s Yoga Teacher Training </b> has all that
              you need to know as a teacher as well as a student. They are best
              known for the knowledge that they spread. There are so many
              reasons why it is the best <b>Yoga School in Rishikesh</b>. There
              are some other factors as well which are very important apart from
              just the advance and this is the only place that covers those as
              well They are established on grounds of <b>trust </b>and{" "}
              <b>credibility</b> and inspires people to get the best out of
              them. The gurus present here are experts and almost believe in
              yoga as their food, prayer, oxygen, and reason to live to give
              their best.
            </p>
            <Image
              src="/registered-yoga-school.webp"
              width={512}
              height={187}
              alt="Registered Yoga School"
            />
          </div>
        </section>
        <section className="my-8 py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <p className=" text-center font-medium uppercase tracking-wide text-[#de4c11]">
            Yin Yang Yoga Blogs
          </p>
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Know More About Yoga and Its Benefits
            <span>
              <Image
                src="/line-decor.png"
                width={568 / 2}
                height={94 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          {/* Blog Articles Component */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
            {[1, 2, 3].map((item, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="z-0 pl-8">
                    <Image
                      className="rounded-lg object-cover"
                      src="/100hr-2.jpg"
                      height={350}
                      width={470}
                      alt="Blog1"
                    />
                  </div>
                  <div className="z-20 -mt-20 bg-white p-4 shadow-lg">
                    <h3 className="text-base md:text-lg">
                      How To Do Anjali Mudra (Namaste Mudra) and its Benefits
                    </h3>
                    <p className="text-sm md:text-base">
                      How To Do Anjali Mudra (Namaste Mudra) and its Benefits
                      Anjali Mudra or the Namaste Mudra is one of the...
                    </p>
                    <a className="flex cursor-pointer items-center text-sm text-[#de4c11] hover:space-x-4 hover:duration-300 hover:ease-linear md:text-base">
                      <span className="tracking-wider">Read Full Article</span>
                      <BsArrowRight />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <p className=" text-center font-medium uppercase tracking-wide text-[#de4c11]">
            Surroundings
          </p>
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Experience the serene beauty and create mesmerizing memories at the
            Yin Yang Yoga Academy in Rishikesh
            <span>
              <Image
                src="/line-decor.png"
                width={568 / 2}
                height={94 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <p className="mb-4 text-center text-sm md:text-base">
            The <b> Yin Yang Yoga Academy in Rishikesh </b> offers a truly
            unique and immersive yoga experience amidst the spiritual and serene
            surroundings of the holy city. Nestled on the banks of the Ganges,
            the Academy offers breathtaking views of the majestic Himalayan
            Mountains and the holy river. The gentle sound of the river flowing
            and the distant chantings of the temple bells create a tranquil
            ambiance that is perfect for yoga practice. The Academy&apos;s
            traditional architecture blends seamlessly into the surrounding,
            creating a sense of harmony with the local culture and the spiritual
            atmosphere of Rishikesh. The open-air yoga shalas are the perfect
            place to reconnect with oneself and nature as you breathe in the
            fresh mountain air and soak in the natural light. The Academy is a
            sanctuary for the mind, body, and soul, and an ideal place to deepen
            your yoga practice and explore the rich cultural heritage of
            Rishikesh.
          </p>
          <Gallery />
          <CourseAdBanner
            offerTitle="200 Hour Hatha And Ashtanga Vinyasa Yoga Teacher Training Course"
            description="1st To 28th Of Every Month"
            price="$499"
            redirect1="/apply"
            redirect2="/100-hour-yttc"
          />
        </section>
        <section className="patternBg  py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <Teacherprofile />
        </section>
        <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <TestimonialCarousel />
        </section>
        <section className=" py-8 px-4 md:px-6 lg:px-8 xl:px-16  2xl:px-32">
          <p className=" text-center font-medium uppercase tracking-wide text-[#de4c11]">
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
    </div>
  );
};

export default index;
