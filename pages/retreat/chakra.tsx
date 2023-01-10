import Head from "next/head";
import Slider from "react-slick";
import Image from "next/image";
import Teacherprofile from "../../components/sections/Teacherprofile";
import { BsArrowRight, BsPatchCheck } from "react-icons/bs";
import TestimonialCarousel from "../../components/sections/TestimonialCarousel";
import TrustPilotReview from "../../components/sections/TrustPilotReview";

import ApplyButton from "../../widgets/reusable/ApplyButton";
import EventTable from "../../widgets/reusable/EventTable";

const template = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Head>
        <title>Yoga Retreat</title>
        <meta name="description" content="Yin yang yoga academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* hero section */}
        <section className=" hero-section flex h-[60vh] items-center  rounded-bl-[80px] py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32 ">
          <div className=" space-y-2 py-2">
            <p className=" text-lg font-semibold tracking-wide text-gray-200 md:text-xl">
              Come and join us for the unforgettable experience of a lifetime
            </p>
            <h2 className=" fancy-font text-2xl   text-white drop-shadow md:text-3xl lg:text-4xl xl:text-5xl">
              7 Day Chakra Yoga Retreat in Rishikesh
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
                      7 Days Chakra Yoga Retreat
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* chakra retreat section */}
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <p className="text-center text-xl font-semibold text-[#de4c11] ">
            Know More About Yoga Retreat
          </p>
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            7 Day Chakra Yoga Retreat in Rishikesh
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
              Have you ever woken up in the morning with a feeling of not being
              grounded, of being somewhere you don&apos;t belong, feeling
              restless with constant worries and frustration? Do you look at the
              future with anxiety and at the past with regret? These feelings
              arise from the need to be efficient and functional machines even
              at the cost of our mental and physical health! Fear, guilt, shame,
              grief, lies, illusion, attachment: these are the demons of our
              souls. We need to eradicate them to be balanced, centered and
              present in our bodies; receptive and aware of our nature.
            </p>
            <p className="text-sm md:text-base">
              This{" "}
              <b className="fancy-font text-lg text-[#de4c11]">7 day retreat</b>{" "}
              is a journey through the chakras to restore the balance in our
              systems, to learn how to deal with the negative feelings, to
              increase awareness of the body and release the blockages.
              Together, we will work on building a firm and steady resolve. Just
              like a sequoia needs a strong and deep ground, we will work on
              your foundations, making your roots steady and strong.
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center space-y-4 space-x-4 lg:flex-row">
            <div className="space-y-4 lg:w-1/2">
              <div className=" rounded-lg border-2 bg-white p-4 shadow-lg ">
                <BsPatchCheck color="#de4c11" size={25} />
                <h3 className="text-lg md:text-xl">Eligibility</h3>
                <p className="text-sm md:text-base">
                  This retreat is designed to be beneficial to everyone. Neither
                  do you need to have a background in Yoga to participate nor is
                  there any restriction on age. You don&apos;t need flexibility
                  or strength to do this retreat. This retreat is ideal for
                  anyone looking to recharge their battery, take a break from
                  the stress of daily life and learn more about yourself. The
                  only requirement is a keen interest in learning and a
                  determination to work on your body and mind.
                </p>
              </div>
              <div className="border-l-4 border-[#de4c11] p-4">
                <p className="font-semibold italic">
                  Come join us for our{" "}
                  <span className="text-[#de4c11]">
                    7 day Chakra Yoga Retreat in Rishikesh
                  </span>{" "}
                  to unfold the treasures that lie within. We promise to make it
                  a memorable and enriching experience for you.
                </p>
              </div>
              <div className="flex justify-center">
                <ApplyButton text="Join Yoga Retreat" url="/apply" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <Image
                className="rounded-lg drop-shadow"
                src="https://www.yogkulam.org/images/chakra.jpg"
                height={500}
                width={800}
                alt="aboutus "
              />
            </div>
          </div>
        </section>
        <section className="greyFloral mt-6 py-16  px-4 md:px-6 lg:px-8 xl:px-32">
          <p className="text-center text-xl font-semibold text-[#de4c11] ">
            Practicing Yoga
          </p>
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Understanding Chakras & Their Functioning
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <div className="space-y-2">
            <p className="text-sm md:text-base">
              Chakras are the energy centers within the human body. They help to
              regulate all the body&apos;s processes, right from organ function
              to the immune system and emotion control.
            </p>
            <p className="text-sm md:text-base">
              If one or more of these energy centers are blocked, we may
              unconsciously be impeding the body&apos;s energy flow. When we
              suppress feelings like anger or sorrow for example, these chakras
              get blocked and in the long run, start to affect the body.
              Whenever we fall sick or experience low emotional levels, it is
              because a chakra is imbalance or is being blocked. On the other
              hand, if we endeavor to work on our physical, emotional, mental
              and spiritual health, we promote an easy flow of energy throughout
              our chakras. This retreat will help you in restoring the balance
              and energy flow throughout the body.
            </p>
          </div>
          <div className="my-6">
            <Slider {...settings}>
              {[
                {
                  name: "Sahasrara Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/shahsrachakra.png"),
                },
                {
                  name: "Ajna Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/ajnachakra.png"),
                },
                {
                  name: "Vishuddha Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/vishuddhachakra.png"),
                },
                {
                  name: "Anhata Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/anhatachakra.png"),
                },
                {
                  name: "Manipura Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/manipura.png"),
                },
                {
                  name: "Swadhistana Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/swadhisthana.png"),
                },
                {
                  name: "Muladhara Chakra",
                  desc: "Have you ever woken up in the morning with a feeling of not being grounded, of being somewhere you don’t belong, feeling restless with constant worries and frustration",
                  image: require("../../public/muladhara.png"),
                },
              ].map((item, i) => {
                return (
                  <div key={i} className="p-4">
                    <div className=" rounded-lg bg-white p-4 drop-shadow">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={100}
                        width={100}
                      />
                      <div className="px-4">
                        <h3 className="text-lg md:text-3xl">{item.name}</h3>
                        <div className="my-2 text-sm md:text-base">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
        <section className="mt-6 py-16  px-4 md:px-6 lg:px-8 xl:px-32">
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            About 7 Day Chakra Yoga Retreat Highlights
            <span>
              <Image
                src="/line-decor.png"
                width={550 / 2}
                height={63 / 2}
                alt="line-decor"
              />
            </span>
          </h2>
          <p className="text-sm md:text-base">
            While there are many kinds of Yoga retreats, the Chakra retreat is
            primarily different in its focus. The subject of the retreat, as the
            name suggests, is the Chakras of the body. We learn about the
            obstacles blocking each chakra and the best way to deal with these
            issues effectively. Keeping this in mind, all the activities that we
            do will be focused on the chakras. Even the excursion that we
            undertake will be connected to the topic of the day! You get to
            experience a full-immersion Chakra Healing Program while discovering
            Yoga, The italian mountains and most importantly yourself.
          </p>
          <p className="mt-2 text-sm md:text-base">
            This retreat will recharge and boost you and your energy levels.
            Unlike other retreats, it gives you multiple tools that you can
            effectively use from home and even continue to develop each practice
            on your own. It enables you to become more peaceful and less
            stressed, helping you see things in a new perspective and replacing
            your old patterns with more productive ones. It is perfect in
            helping you understand your needs and feelings and in teaching you
            to take the time to nurture yourself.
          </p>
          <div className="mt-6 flex justify-evenly ">
            <Image
              src="/retreat-1.jpg"
              height={300}
              width={300}
              className="rounded-full object-cover drop-shadow-md "
              alt="retreat-1"
            />
            <Image
              src="/retreat-2.jpg"
              height={300}
              width={300}
              className="rounded-full object-cover drop-shadow-md "
              alt="retreat-1"
            />
            <Image
              src="/retreat-3.jpg"
              height={300}
              width={300}
              className="rounded-full object-cover drop-shadow-md "
              alt="retreat-1"
            />
          </div>
        </section>
        <section className="mt-6 py-16  px-4 md:px-6 lg:px-8 xl:px-32">
          <div className="items-center justify-around space-x-4 lg:flex">
            <div className="text-center lg:w-1/2">
              <Image
                className="rounded-lg object-cover drop-shadow"
                src="/retreat-4.jpg"
                width={600}
                height={400}
                alt="yoga-lady"
              />
              <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-[#de4c11] bg-white p-4 shadow-lg">
                <div className="text-center text-lg font-semibold md:text-2xl">
                  Book Your Chakra Yoga Retreat for 7 Days at Yin Yang Yoga
                  Academy at
                  <span className="font-bold text-[#de4c11]"> $499</span>
                </div>
                <div className="flex justify-center">
                  <ApplyButton text="Apply Now" url="/apply" />
                </div>
              </div>
            </div>
            <div className=" lg:w-1/2">
              <div className="space-y-2 rounded-lg bg-white p-4  drop-shadow-lg">
                <h2 className="fancy-font mb-2 text-xl md:text-3xl ">
                  What&apos;s Included In Retreat
                </h2>

                {[
                  { title: " 2 yoga classes daily (one morning, one evening)" },
                  {
                    title: " Daily pranayama class (breath awareness practice)",
                  },
                  { title: " Daily mantra recitations and relaxations" },
                  {
                    title:
                      " Daily meditation class (active and passive meditations)",
                  },
                  {
                    title:
                      " Daily outdoor excursions or satsang (caves, temples, waterfalls, or local mountain, villages)",
                  },
                  { title: " Daily discussion group and journaling sessions" },
                  { title: " One vedic astrology session" },
                  { title: " One reiki healing session" },
                  { title: " 6 nights accommodation" },
                  {
                    title:
                      " 3 organic vegetarian or vegan delicious meals per day, plus morning herbal tea",
                  },
                  { title: " Pick up from Jolly Grant Airport (DED)" },
                  { title: " Filtered water" },
                  { title: " Use of campus facilities such as free Wi-Fi" },
                  { title: " School notebook and pen" },
                  { title: " 1 mala (Indian mantra necklace)" },
                  { title: " Yogic cleansing kit" },
                  { title: " One kirtan or sound healing session" },
                ].map((item, i) => {
                  return (
                    <li key={i} className="flex items-center space-x-4">
                      <Image
                        src="/icons-home/001-chakra.png"
                        width={30}
                        height={30}
                        alt="bullet"
                        className="w-1/6"
                      />
                      <span className="w-5/6 text-sm md:text-base">
                        {item.title}
                      </span>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <p className="text-center text-lg font-bold text-[#de4c11]">
            Upcoming Events
          </p>
          <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
            Available Seats for 7 Days Chakra Yoga Retreat
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
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <TestimonialCarousel />
        </section>
        <section className="mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <TrustPilotReview />
        </section>
        <section className="patternBg mt-6 py-8 px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <Teacherprofile />
        </section>
      </main>
    </div>
  );
};

export default template;
