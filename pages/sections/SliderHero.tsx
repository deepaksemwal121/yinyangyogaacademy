import Image from "next/image";
import Slider from "react-slick";
import Button from "../components/Button";

const SliderHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div className="m-0 h-[100vh] overflow-x-hidden ">
      <Slider {...settings}>
        <div className="flex h-[80vh]  bg-gray-300 ">
          <div className="w-fullitems-stretch flex h-full justify-center">
            <div className="flex w-1/2 flex-col justify-center p-8">
              <h2 className="text-[40px] font-semibold">
                Yoga is The Art Of
                <em> Self Realisation</em>
              </h2>
              <p className="text-lg font-medium">
                Yoga cultivates the ways of maintaining a balanced attitude in
                day-to-day <br /> life and endows skill in the performance of
                one&apos;s actions
              </p>
              <Button
                title="Enroll Now"
                style=" inline-block text-center px-6 py-4 my-4 text-orange-600 border-[2px] border-orange-600 w-[20%]"
                url="/"
              />
            </div>
            <div className="slide-1 w-1/2"></div>
          </div>
        </div>
        <div className="h-[80vh] bg-orange-600 text-white">1</div>
        <div className="h-[80vh] bg-orange-600">1</div>
        <div className="h-[80vh] bg-orange-600">1</div>
        <div className="h-[80vh] bg-orange-600">1</div>
        <div className="h-[80vh] bg-orange-600">1</div>
      </Slider>
    </div>
  );
};

export default SliderHero;
