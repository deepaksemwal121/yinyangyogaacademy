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
    <div className="">
      <Slider {...settings}></Slider>
    </div>
  );
};

export default SliderHero;
