import Image from "next/image";
import React from "react";
// import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
import { ImQuotesLeft, ImStarFull } from "react-icons/im";

const testimonialData = [
  {
    name: "Marta, Italy",
    image: "https://www.yogkulam.org/images/100-testi-1.JPG",
    testimonial: `I was looking for a Place in where to get in direct contact with the origins of yoga and all of the culture that It Is about It.
I was looking for a Place that could show me how yoga Is teached in the Place where It Is Born, taking advantage of the purity of this knowledge.
And the destiny gave me this beautiful gift to meet the incredible school Rishikesh Yogkulam :) the well prepared and so kind teachers are all young boys Who dedicated their Life to the subjects they're teaching, they are able to share their knowledge in such a complete way, going Deep in every argument, being incredibly able to make the study become funny and serious at the same time. They have been able to make all the group of students become One, especially in the moments of the sundays excursions all together.
We students, we all got in a true human relationship with our teachers and our group.
And the Hotel Laxmi Palace Is a beautiful Place, well located close to the Laxman Jula bridge. It offers good healthy food (prepared with love from beautiful and friendly people) and there everybody takes care of you. Also the rooms are nice, Wide and clean .
I have this experience printed in my Heart and I suggest to anybody who wants to do a Yoga Teacher Training to give a chance to him/herself to get  into this beautiful experience through this excellent school.
Special thanks to Ella (student coordinator and italian translator), Gitu Ji (our ashtanga yoga Teacher), Amit Ji (our Hatha yoga Teacher), Mandip Ji (our philosophy Teacher and the One that guided the beginning and ending ceremonies) ,  Nitin Ji (our Pranayama Teacher), Prem Ji (our meditation Teacher) and the unforgettable Manu (our Antony Teacher).
See you soon to do the 300 Yoga Teacher Training .`,
  },
  {
    name: "Dimitra Aba Cerriku, Netherlands",
    image: "https://www.yogkulam.org/images/100-testi-2.jpg",
    testimonial: `I remember myself stuck while searching for a good 200hr YTT. Picking the right YTT in Rishikesh is hard. This school was recommended to me by a friend and I’m so happy I decided to join the Yogkulam family.

    I couldn’t make a better choice!
    
    From the beginning I felt at home. We were in small groups, the teachers were young , very knowledgeable and open to share their knowledge with everyone.
    
    Can’t hide my two favorites:
    
    Mandeep, our philosophy teacher. A great human, with such a deep knowledge about yoga and Indian mythology, and of course Varsha, a beautiful soul, always teaching from her heart, something I love to see and Inspires me. I had been scared about meditation and stillness but she showed us other ways to meditate and made me understand that meditation practice is not that scary as I had it in my mind and is not only about stillness.
    
    In addition, we also had great excursions every Sunday and an awesome surprise from Amit(the owner of the school) that we are going to an Indian wedding (that was so fun and a lifetime experience), and something last but very important the food was just delicious from an always smiley chef!!!
    
    Thank you so much Yogkulam family for all the knowledge you shared! I’m very grateful to meet you all and hopefully to see you soon!💕
    
    z`,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="flex flex-col text-center text-2xl font-bold md:text-4xl">
        What Our Students say About Us
        <span>
          <Image
            src="/line-decor.png"
            width={550 / 2}
            height={63 / 2}
            alt="line-decor"
          />
        </span>
      </h2>
      <div>
        <Slider {...settings}>
          {testimonialData.map((item, index) => {
            return (
              <div key={index} className=" p-4 drop-shadow">
                <div className="relative rounded-tl-3xl bg-[#bd0006] p-4  text-center drop-shadow-md">
                  <ImQuotesLeft
                    size={90}
                    color="#f5f5f540"
                    className="absolute top-[40%]"
                  />
                  <Image
                    className=" rounded-full object-cover"
                    src={item.image}
                    alt="testimonial-1"
                    width={130}
                    height={130}
                  />
                  <div className="flex w-full justify-center space-x-1">
                    {[1, 2, 3, 4].map((item, index) => {
                      return <ImStarFull key={index} color="#fbb404" />;
                    })}
                  </div>

                  <h3 className="text-lg text-white md:text-xl">{item.name}</h3>
                  <p className="text-sm text-gray-200 md:text-base">
                    {item.testimonial.substring(0, 300)}...
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
