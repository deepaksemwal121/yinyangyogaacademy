import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface FAQQuestion {
  ques: string;
  ans: string;
}

const FAQCard = ({ ques, ans }: FAQQuestion) => {
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          onClick={() => setIsAccordianOpen(!isAccordianOpen)}
          type="button"
          className="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        >
          <span className="text-sm md:text-base"> {ques}</span>
          {isAccordianOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </h2>
      {isAccordianOpen && (
        <div id="accordion-collapse-body-1">
          <div className="border border-b-0 border-gray-200 p-5 font-light dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">
              {ans}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
