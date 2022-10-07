import Image from "next/image";
import React from "react";
import Text from "../../components/Text";
import { BsPatchCheck } from "react-icons/bs";
import Button from "../../components/Button";
import Teacherprofile from "../../components/sections/Teacherprofile";
import Head from "next/head";
import { url } from "inspector";

const Retreat = () => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-[95vh] items-center justify-center bg-orange-200 px-8 py-4 md:px-32 md:py-16">
        <div className="md:w-1/2">
          {/* BreadCrumbs */}
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Yoga Retreat</a>
              </li>
              <li className="text-orange-600">5 Days Yoga Retreat</li>
            </ul>
          </div>
          <h3 className="text-[34px] md:text-[45px]">
            5 Day Yoga Retreat in Rishikesh
          </h3>
          <p className="text-18px md:text-[24px]">
            Come and join us for the unforgettable experience of a lifetime
          </p>
          <Button
            title="Book Now"
            url="/"
            style="border-2 border-orange-600 px-4 md:px-6 py-2 text-orange-600 text-[16px] md:text-[24px] hover:bg-orange-600 hover:text-white"
          />
        </div>
        <div
          className="hidden pt-8 md:block md:w-1/2"
          style={{
            backgroundImage:
              "url(https://cdn-icons-png.flaticon.com/512/5130/5130878.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "revert",
          }}
        >
          <Image
            src={require("../../public/yoga-retreat-5.png")}
            height={1000}
            width={877}
            alt="image"
          />
        </div>
      </div>
      {/* About Yoga Retreat */}
      <div className="w-full items-center space-y-4 px-8 py-4 md:flex md:space-y-0 md:space-x-8 md:px-32 md:py-16">
        <div className="w-full md:w-1/2">
          <p className="text-orange-600">Know More About Yoga Retreat </p>
          <div className="h-1 w-[10%] bg-orange-500"></div>
          <h2 className="text-[26px] md:text-[30px] lg:text-[45px] ">
            What is 5 Days Yoga Retreat
          </h2>
          <p className="text-justify">
            Away from the metropolitan lifestyle, our school - Rishikesh
            Yogkulam, serves as a sanctuary for your soul, mind and body.
            Nestled in the lap of the majestic Himalayas and on the banks of the
            holy river Ganga, it is the perfect place to leave your inhibitions
            behind and focus on centering and grounding yourself. Our 5-day
            Retreat in Rishikesh is the perfect amalgamation of Yoga and
            meditation, giving seekers a break from their daily routine and
            helping them to connect with their inner selves. <br /> This
            holistic retreat includes learning and practicing Yoga asanas,
            pranayama and meditation, nature excursions and a tour of the
            Himalayas! The simplest of Yoga asanas when performed with the right
            intention, hand in hand with meditation, lead to a calmer and
            quieter mind, not to mention the numerous health benefits
            contributing to one&apos;s overall well-being.
          </p>
          {/* Eligiblity Criteria  */}
          <div className=" mt-4 bg-orange-200 p-4">
            <BsPatchCheck color="darkorange" size={25} />
            <h3 className="text-[30px]">Eligibility</h3>
            <p>
              Backed by millennia of experience, this retreat is intricately
              designed to be beneficial to all, beginners and regular
              practitioners alike. It has no age or skill restriction and is
              ideal for anyone looking for the perfect opportunity to take a
              step back and reconnect with their true self.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="w-full">
            <Image
              className="rounded"
              src="https://www.yogkulam.org/images/5-days-retreat.jpg"
              height={500}
              width={800}
              alt="aboutus "
            />
          </div>
          <div className=" h-auto w-full bg-orange-600 p-8 md:absolute md:top-[80%] md:left-[10%] md:h-[200px] md:w-[80%]">
            <h3 className="text-[20px] text-white  md:text-[30px]">
              5 Days Yoga Retreat At Rishikesh
            </h3>
            <p className="text-[#f1f1f1]">
              Come join us for our 5 day Yoga Retreat in Rishikesh to unfold the
              treasures that lie within. We promise to make it a memorable and
              enriching experience for you.
            </p>
          </div>
        </div>
      </div>
      {/* Cost Section */}
      <div className="my-12 grid w-full grid-cols-1  md:h-[300px]  md:grid-cols-4">
        <div
          className="relative h-[350px]  p-4  md:h-auto "
          style={{
            backgroundImage:
              "url(https://www.yogkulam.org/images/about_us.jpg)",
            backgroundPosition: "center",
            opacity: 0.8,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3 className="absolute bottom-4 bg-white p-4 text-lg text-orange-600 md:text-[25px]">
            Gushing water and gentle breeze around
          </h3>
        </div>
        <div
          className="relative  h-[350px] p-4 md:h-auto "
          style={{
            backgroundImage:
              "url(https://www.yogkulam.org/images/200-hour-new.jpg)",
            backgroundPosition: "center",
            opacity: 0.8,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3 className="absolute bottom-4 bg-white p-4 text-lg text-orange-600 md:text-[25px]">
            Amazing Treks and Forest Walks
          </h3>
        </div>
        <div
          className="relative h-[350px] p-4 md:h-auto "
          style={{
            backgroundImage: "url(https://www.yogkulam.org/images/chakra.jpg)",
            backgroundPosition: "center",
            opacity: 0.8,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h3 className="absolute bottom-4 bg-white p-4 text-lg text-orange-600 md:text-[25px]">
            Adventure Sports and local sightseeing.
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center bg-orange-600 p-4 ">
          <h3 className="text-[35px] text-white ">Retreat Cost</h3>
          <p className="text-lg text-white">USD 300</p>
        </div>
      </div>
      {/* pricing section */}
      <section className="my-32 w-full md:px-32 ">
        <div className="w-full px-8 text-center md:px-32">
          <Text.Secondary size="lg">Timetable</Text.Secondary>
          <h3 className="text-[30px] md:text-[40px]">Upcoming Events</h3>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="table-zebra my-4 table w-full">
            <thead className="h-16 rounded bg-orange-100">
              <tr className="w-full font-medium text-orange-600">
                <td className="w-[300px]">Start Date</td>
                <td className="w-[300px]">Start End</td>
                <td className="w-[300px]">Availability</td>
                <td className="w-[300px]">Shared</td>
                <td className="w-[300px]">Private</td>
                <td className="text-center">Booking</td>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  start: "23 Jul 2022",
                  end: "29 Jul 2022",
                  availability: "Available",
                  shared: "499 USD",
                  private: "599 USD",
                  booking: "Apply Now",
                },
                {
                  start: "23 Jul 2022",
                  end: "29 Jul 2022",
                  availability: "Available",
                  shared: "499 USD",
                  private: "599 USD",
                  booking: "Apply Now",
                },
                {
                  start: "23 Jul 2022",
                  end: "29 Jul 2022",
                  availability: "Available",
                  shared: "499 USD",
                  private: "599 USD",
                  booking: "Apply Now",
                },
                {
                  start: "23 Jul 2022",
                  end: "29 Jul 2022",
                  availability: "Available",
                  shared: "499 USD",
                  private: "599 USD",
                  booking: "Apply Now",
                },
                {
                  start: "23 Jul 2022",
                  end: "29 Jul 2022",
                  availability: "Available",
                  shared: "499 USD",
                  private: "599 USD",
                  booking: "Apply Now",
                },
                {
                  start: "23 Jul 2022",
                  end: "29 Jul 2022",
                  availability: "Available",
                  shared: "499 USD",
                  private: "599 USD",
                  booking: "Apply Now",
                },
              ].map((item, i) => {
                return (
                  <tr
                    key={i}
                    className={`h-16 text-sm text-gray-600 ${
                      i % 2 !== 0 ? "bg-orange-100" : ""
                    } `}
                  >
                    <td>{item.start}</td>
                    <td>{item.end}</td>
                    <td>{item.availability}</td>
                    <td>{item.shared}</td>
                    <td>{item.private}</td>
                    <td>
                      <Button
                        title={item.booking}
                        url="/"
                        style="bg-orange-600 md:px-6 md:py-3 px-3 py-1 mx-auto text-white rounded"
                      />
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </section>
      <Teacherprofile />
    </main>
  );
};

export default Retreat;
