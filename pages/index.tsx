import Head from "next/head";
import Image from "next/image";
import SliderHero from "./components/SliderHero";
import yogapose from "../public/yoga-pose.png";
import Button from "./components/Button";
import LeftImageCard from "./components/LeftImageCard";
import { data } from "./static/data";
import CourseHomepage from "./sections/CourseHomepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yin Yang Yoga Academy</title>
        <meta name="description" content="Yin yang yoga academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main Index Pages starts from Here  */}
      {/* Slider Component will go here */}
      <SliderHero />
      <div className="flex w-full items-center space-x-4 px-32 py-16">
        <div className="w-1/2">
          <Image src={yogapose} alt="yoga-pose" width={666} height={666} />
        </div>
        <div className="w-1/2">
          <p>ONE DESTINATION, MANY PATHS, ONE JOURNEY</p>
          <h2 className="text-[40px] font-semibold">
            YOGA TEACHER TRAINING IN RISHIKESH, INDIA
          </h2>
          <p>
            With each passing day, people are getting more and more engaged
            towards a better peaceful life. Amidst all the chaos all that
            everyone wants is a little time for oneself so that it leads them t
            grow. Thus comes yoga in the scene which is one short formula for
            such a life that gives one such peace and balances one’s life.{" "}
          </p>
          <br />
          <p>
            Today yoga teacher trainers are spread worldwide wide and a maximum
            of them are trained from Rishikesh.
          </p>
          <br />
          <Button title="Enroll Now" url="/" />
        </div>
      </div>
      {/* Section 2 Starts from here  */}
      <div className="flex w-full items-center space-x-4 px-32 py-16">
        <div className="w-1/2">
          <p>ONE DESTINATION, MANY PATHS, ONE JOURNEY</p>
          <h2 className="text-[40px] font-semibold">
            Why Yoga Teacher Training Programs And Retreats?
          </h2>
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
        <div className="w-1/2">
          <Image
            src="/../public/yoga-pose.png"
            alt="yoga-pose"
            height={666}
            width={666}
          />
        </div>
      </div>
      {/* Course Section on Homepage Starts from Here */}
      <CourseHomepage />
      {/* Best Teacher Section */}
      <div className="w-full px-32 py-16">
        <h2 className="text-center text-[45px] font-bold">
          BEST ONLINE YOGA TEACHER TRAINING INDIA
        </h2>
        <p className="text-center text-lg">
          There are online classes that are also there. There is no stop to
          spreading knowledge as thus like the entire world the yoga world has
          also chosen and taken part in online tutoring. From hatha yoga to the
          process of relaxation, breathing both active and passive, meditation,
          and other asanas everything is been taught. All the problems have been
          kept in mind and the classes are being conducted.
        </p>
        <br />
        <p className="text-center text-lg">
          All these classes are taken by none other than experienced teachers
          who have the experience of teaching both offline as well as online.
          Yes, these teachers are capable to teach online also as they are
          internationally renowned personalities in this field. All the
          faculties have their sort of achievement and are renowned
          professionals having deep knowledge in yoga.
        </p>
        <div className="my-8 grid grid-cols-3 gap-4">
          {data.onlineCards.map((value, index) => {
            return (
              <div key={index} className="bg-[#f9d3af] p-8">
                <Image
                  src={value.image}
                  alt={value.title}
                  width={80}
                  height={80}
                />
                <h2 className="text-[30px] font-semibold text-gray-700">
                  {value.title}
                </h2>
                <p>{value.content}</p>
              </div>
            );
          })}
        </div>
        <p>
          All the classes that are taking place are almost similar to the
          offline classes only with full-on excitement and interaction. The
          bonds are still strong and as it was earlier only the distance has
          increased. People are still enjoying each class and the variety that
          each course provides to enrich the body, soul, and mind.
          <br />
          This is the only institute that provides something for everyone
          whether you are a beginner, intermediate, advance, or seeking a change
          in life. All the courses here are designed in such a way that it has
          innovation as well as experience. Here everyone will get something or
          the other and everyone will take away a lot more than what they have
          given.
        </p>
      </div>
    </div>
  );
}
