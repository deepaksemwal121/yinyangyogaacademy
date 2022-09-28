import CousrseLeftImage from "./CousrseLeftImage";
import { coursesHome } from "../../data/coursesData";
import CourseRightImage from "./CourseRightImage";

const CourseHomepage = () => {
  return (
    <div className="w-full space-y-2  py-4 text-gray-600 md:py-16 ">
      <div className=" px-8  md:px-32">
        <p className="text-center text-sm font-semibold text-orange-600 sm:text-lg">
          FOUR TYPES OF COURSES
        </p>
        <h1 className="text-center text-[22px] md:text-3xl">
          YOGA TEACHER TRAINING IN RISHIKESH, INDIA
        </h1>
        <p className="text-center">
          There are four types of courses as per your level. All these courses
          are hourly and change as per the person and his expertise in the
          subject. Thus the four different types of curses are as follows :-
        </p>
      </div>
      <div className="space-y-12 py-8  ">
        <CourseRightImage
          title={coursesHome._100hour.title}
          desc={coursesHome._100hour.desc}
          image={coursesHome._100hour.image}
          highlights={coursesHome._100hour.highlights}
          shortdesc={coursesHome._100hour.shortdesc}
          levels={coursesHome._100hour.levels}
          reverse={true}
        />
        <CourseRightImage
          title={coursesHome._200hour.title}
          desc={coursesHome._200hour.desc}
          image={coursesHome._200hour.image}
          highlights={coursesHome._200hour.highlights}
          shortdesc={coursesHome._200hour.shortdesc}
          levels={coursesHome._200hour.levels}
          reverse={false}
        />
        <CourseRightImage
          title={coursesHome._300hour.title}
          desc={coursesHome._300hour.desc}
          image={coursesHome._300hour.image}
          highlights={coursesHome._300hour.highlights}
          shortdesc={coursesHome._300hour.shortdesc}
          levels={coursesHome._300hour.levels}
          reverse={true}
        />
        <CourseRightImage
          title={coursesHome._300hour.title}
          desc={coursesHome._300hour.desc}
          image={coursesHome._300hour.image}
          highlights={coursesHome._300hour.highlights}
          shortdesc={coursesHome._300hour.shortdesc}
          levels={coursesHome._300hour.levels}
          reverse={false}
        />
      </div>
    </div>
  );
};

export default CourseHomepage;
