import Image from "next/image";
import Slider from "react-slick";
import Button from "../Button";

const SliderHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autolay: true,
    autoplaySpeed: 500,
  };

  return (
    <div className="w-full overflow-x-hidden md:h-[90vh] ">
      <Slider {...settings}>
        <div className="w-full   bg-gray-300 md:flex ">
          <div className="h-[80vh] w-full  items-stretch justify-center md:flex">
            <div className="flex flex-col justify-center p-8 md:w-1/2">
              <h2 className="pt-8 text-[26px] text-black md:text-[40px]">
                Yoga is The Art Of
                <em> Self Realisation</em>
              </h2>
              <p className="text-base font-medium md:text-lg">
                Yoga cultivates the ways of maintaining a balanced attitude in
                day-to-day <br /> life and endows skill in the performance of
                one&apos;s actions
              </p>
              <Button
                title="Enroll Now"
                style=" inline-block text-center px-6 py-4 my-4 text-orange-600 border-[2px] border-orange-600 md:w-[20%]"
                url="/"
              />
            </div>
            <div className="slide-1 flex items-stretch justify-items-stretch md:w-1/2">
              <Image
                src={require("/public/slider-1.jpg")}
                objectFit="cover"
                height={500}
                width={800}
                alt="slider"
              />
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-full  items-stretch justify-center md:flex">
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <h2 className="pt-8 text-[26px] text-black md:text-[40px]">
              Yoga is The Art Of
              <em> Self Realisation</em>
            </h2>
            <p className="text-base font-medium md:text-lg">
              Yoga cultivates the ways of maintaining a balanced attitude in
              day-to-day <br /> life and endows skill in the performance of
              one&apos;s actions
            </p>
            <Button
              title="Enroll Now"
              style=" inline-block text-center px-6 py-4 my-4 text-orange-600 border-[2px] border-orange-600 md:w-[20%]"
              url="/"
            />
          </div>
          <div className="slide-1 flex items-stretch justify-items-stretch md:w-1/2">
            <Image
              src={require("/public/slider-1.jpg")}
              objectFit="cover"
              height={500}
              width={800}
              alt="slider"
            />
          </div>
        </div>{" "}
        <div className="h-[80vh] w-full  items-stretch justify-center md:flex">
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <h2 className="pt-8 text-[26px] text-black md:text-[40px]">
              Yoga is The Art Of
              <em> Self Realisation</em>
            </h2>
            <p className="text-base font-medium md:text-lg">
              Yoga cultivates the ways of maintaining a balanced attitude in
              day-to-day <br /> life and endows skill in the performance of
              one&apos;s actions
            </p>
            <Button
              title="Enroll Now"
              style=" inline-block text-center px-6 py-4 my-4 text-orange-600 border-[2px] border-orange-600 md:w-[20%]"
              url="/"
            />
          </div>
          <div className="slide-1 flex items-stretch justify-items-stretch md:w-1/2">
            <Image
              src={require("/public/slider-1.jpg")}
              objectFit="cover"
              height={500}
              width={800}
              alt="slider"
            />
          </div>
        </div>{" "}
        <div className="h-[80vh] w-full  items-stretch justify-center md:flex">
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <h2 className=" pt-8 text-[26px] text-black md:text-[40px]">
              Yoga is The Art Of
              <em> Self Realisation</em>
            </h2>
            <p className="text-base font-medium md:text-lg">
              Yoga cultivates the ways of maintaining a balanced attitude in
              day-to-day <br /> life and endows skill in the performance of
              one&apos;s actions
            </p>
            <Button
              title="Enroll Now"
              style=" inline-block text-center px-6 py-4 my-4 text-orange-600 border-[2px] border-orange-600 md:w-[20%]"
              url="/"
            />
          </div>
          <div className="slide-1 flex items-stretch justify-items-stretch md:w-1/2">
            <Image
              src={require("/public/slider-1.jpg")}
              objectFit="cover"
              height={500}
              width={800}
              alt="slider"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderHero;
