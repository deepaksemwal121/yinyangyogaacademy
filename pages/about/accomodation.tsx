import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Button from "../../components/Button";
import Teacherprofile from "../../components/sections/Teacherprofile";

const accomodation = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
  };
  return (
    <>
      <div className="flex w-full items-center bg-orange-200 px-32 py-16">
        <div className="w-1/2">
          {/* BreadCrumbs */}
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li className="text-orange-600">Accomodation</li>
            </ul>
          </div>
          {/* Hero Text */}
          <h3 className="text-[40px]">
            Yin Yang Yoga Academy
            <br /> Rishikesh
          </h3>

          <Button
            title="Book Now"
            url="/"
            style="bg-orange-600 px-4 py-2 text-white hover:bg-orange-400 btn"
          />
        </div>
        <div className="relative w-1/2 ">
          <h3 className="absolute top-[10%] z-20 text-[100px] font-black mix-blend-overlay">
            Accomodation
          </h3>
          <Image
            className=""
            src="/../public/accomodate.png"
            height={500}
            width={500}
            alt="accomodation"
          />
        </div>
      </div>
      <div className="flex w-full items-center space-x-4 px-32 py-16">
        <div className="relative w-1/2">
          <Image
            src="https://www.yogkulam.org/images/acc/ryk-2.jpg"
            height={450}
            width={600}
            alt="accomadate"
            className="rounded"
          />
          <div className="absolute top-[80%]  h-[150px] w-[80%] bg-orange-600 p-8">
            <h3 className="text-[30px] text-white">Yin Yang Yoga Academy</h3>
            <p className="text-[#f1f1f1]">
              We Provide the Best Acommodation in Rishikesh with All Faciliies
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-orange-500">What You Get</p>
          <h3 className="mb-4 text-[45px]">
            With Yin Yang Yoga Academy
            <div className="h-1 w-[30%] bg-orange-500"></div>
          </h3>
          <p>
            At Rishikesh Yogkulam, we understand the importance of a conducive
            environment for a healthy mind, body and soul. In the lap of the
            Himalayas, on the banks of the river Ganga, our school is ideally
            located to help you embrace a yogic lifestyle. Accommodation is
            available on private as well as shared basis while the food is
            prepared in-house itself, specially designed to nurture your body
            allowing you to focus on your practice. All in all, we strive to
            provide the best possible accommodation facilities and delicious,
            satvik food to ensure that everyone feels absolutely comfortable,
            warm and as homely as possible.
          </p>
        </div>
      </div>
      <div className="w-full px-32 py-16 ">
        <h3 className="text-[40px]">Facilites We Provide</h3>
        <div className="mb-4 h-1 w-[20%] bg-orange-500"></div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/489/489401.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>
              Simple and clean accommodation.Accommodation comprises of single
              rooms and double shared rooms.
            </p>
          </div>
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1027/1027993.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>
              All rooms have attached bathrooms. The bathrooms are equipped with
              western toilet seats and cold showers. Hot water is also available
              during winter season
            </p>
          </div>{" "}
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2975/2975977.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>
              Three pure vegetarian meals per day (breakfast, lunch, dinner) and
              herbal tea.
            </p>
          </div>
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4613/4613882.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>RO filtered safe drinking water</p>
          </div>{" "}
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2847/2847502.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>Course material is provided.</p>
          </div>{" "}
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3059/3059158.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>
              24/7 free WiFi available.Fast Internet for better connectivity
            </p>
          </div>
          <div className="bg-orange-100 p-4 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/709/709043.png"
              height={100}
              width={100}
              alt="icon-1"
            />
            <p>Doctor on call facility.</p>
          </div>
        </div>
      </div>
      <div className="px-32">
        <h3 className="text-[34px] ">At a Glance</h3>{" "}
        <div className="h-1 w-[10%] bg-orange-500"></div>
      </div>
      <div className="overflow-x-hidden py-16 px-4">
        <Slider {...settings}>
          {[
            "https://www.yogkulam.org/images/acc/ryk-1.jpg",
            "https://www.yogkulam.org/images/acc/ryk-4.jpg",
            "https://www.yogkulam.org/images/acc/ryk-5.jpg",
            "https://www.yogkulam.org/images/acc/ryk-2.jpg",
            "https://www.yogkulam.org/images/acc/ryk-1.jpg",
            "https://www.yogkulam.org/images/acc/ryk-4.jpg",
            "https://www.yogkulam.org/images/acc/ryk-5.jpg",
            "https://www.yogkulam.org/images/acc/ryk-2.jpg",
          ].map((item, index) => {
            return (
              <div key={index}>
                <Image src={item} height={400} width={300} alt={item} />
              </div>
            );
          })}
        </Slider>
      </div>
      <Teacherprofile />
    </>
  );
};

export default accomodation;
