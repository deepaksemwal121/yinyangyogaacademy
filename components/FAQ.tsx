import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdArrowDownward } from "react-icons/md";
import FAQCard from "./FAQCard";

const faqData = [
  {
    ques: "Q: Which Airport Should I Choose To Fly To?",
    ans: "Ans:The closest and most convenient airport to fly to is New Delhi. Cheap hotels can be found in Delhi (Main Bazaar, Paharganj area) for $10~20. From Delhi airport, Paharganj is 20 minutes away by the airport metro express which costs less than $2. From Delhi you will have to travel to Dehradun (the closest city to Rishikesh). In case you are visiting India for the first time, it would be better to fly to Dehradun from Delhi (there will generally be a waiting time of 4 hours before a local flight to Dehradun) after which you can reach Rishikesh in 30 minutes by car.",
  },
  {
    ques: "Q: Will You Handle Travel Arrangements For Me Once I Arrive In India?",
    ans: "Ans: Yes, with advance notice we will arrange transportation for you to Rishikesh directly from the airport, bus or train station. Upon arriving in Rishikesh we will help you with directions for walking the short distance to our school.",
  },
  {
    ques: "Q: Do You Suggest Coming By Taxi, Bus, Train Or Flight From Delhi?",
    ans: "Ans: If it’s your first time in Rishikesh, we would recommend that you take a flight from Delhi to Dehradun. Normally the price of the flight will be similar to that of a taxi and it will be quicker rather than travelling 7 hours by car. A bus is convenient when it comes to saving money. It is very cheap but you also need to consider travelling to the bus station from the airport which will require you to take either a taxi to or the subway to the bus station.",
  },
  {
    ques: "Q: Will I Receive Certification After This Course?",
    ans: "Ans: No, you need to complete 200 hours of training to earn a certificate accredited by Yoga Alliance, USA.",
  },
  {
    ques: "Q: Do I Need To Come Back To Your School To Finish The Other 100 Hours? Is There A Deadline?",
    ans: "Ans: Yes, you need to come back to the school to complete the remaining 100 hours and this needs to be completed within one year.",
  },
  {
    ques: "Q: What Is The Difference Between A 100 And 200 Hours Course",
    ans: "Ans: The topics covered in both courses are the same, however in 100 hours you are only attending the first part of the course. As such you will not be eligible to teach yet. In the 200 hour course, after a written and oral examination, you will receive a certificate accredited by Yoga Alliance, USA that enables you to teach worldwide.",
  },
];

const FAQ = () => {
  return (
    <div className="space-y-4">
      <h2 className="flex flex-col text-center text-[30px] font-bold md:text-[40px]">
        Frequently Asked Questions By Students
        <span>
          <Image
            src="/line-decor.png"
            width={550 / 2}
            height={63 / 2}
            alt="line-decor"
          />
        </span>
      </h2>

      <div className="mx-auto space-y-2">
        {faqData.map((item: any, index: number) => {
          return <FAQCard key={index} ques={item.ques} ans={item.ans} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
