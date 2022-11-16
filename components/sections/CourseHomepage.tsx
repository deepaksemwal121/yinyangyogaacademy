import Image from "next/image";
import CourseCard from "./CourseCard";

const CourseHomepage = () => {
  return (
    <div className="w-full space-y-2  py-4 text-gray-600 md:py-16 ">
      <div className=" px-8  md:px-32">
        <p className="sloka text-center text-[40px] text-orange-600 ">
          &ldquo; समत्वं योग उच्यते &rdquo;
        </p>
        <h2 className="flex flex-col text-center text-[30px] md:text-[40px]">
          YOGA TEACHER TRAINING IN RISHIKESH, INDIA
          <span>
            <Image
              src="/underline.svg"
              width={2500 / 12}
              height={346 / 12}
              alt="line-decor"
            />{" "}
          </span>
        </h2>
        <p className="text-center">
          There are four types of courses as per your level. All these courses
          are hourly and change as per the person and his expertise in the
          subject. Thus the four different types of curses are as follows :-
        </p>
      </div>
      <div className="space-y-12 py-8  "></div>
      <CourseCard />
    </div>
  );
};

export default CourseHomepage;
