import React from "react";

const FAQ = () => {
  return (
    <div className="space-y-4">
      <div
        tabIndex={0}
        className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">
          Q: Which Airport Should I Choose To Fly To?
        </div>
        <div className="collapse-content">
          <p>
            Ans:The closest and most convenient airport to fly to is New Delhi.
            Cheap hotels can be found in Delhi (Main Bazaar, Paharganj area) for
            $10~20. From Delhi airport, Paharganj is 20 minutes away by the
            airport metro express which costs less than $2. From Delhi you will
            have to travel to Dehradun (the closest city to Rishikesh). In case
            you are visiting India for the first time, it would be better to fly
            to Dehradun from Delhi (there will generally be a waiting time of 4
            hours before a local flight to Dehradun) after which you can reach
            Rishikesh in 30 minutes by car.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100"
      >
        <div className="collapse-title text-xl font-medium">
          Q: Will You Handle Travel Arrangements For Me Once I Arrive In India?
        </div>
        <div className="collapse-content">
          <p>
            Ans: Yes, with advance notice we will arrange transportation for you
            to Rishikesh directly from the airport, bus or train station. Upon
            arriving in Rishikesh we will help you with directions for walking
            the short distance to our school.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
