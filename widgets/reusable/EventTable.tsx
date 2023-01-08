import React from "react";

const EventTable = () => {
  const seatAvailability = [
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
    {
      start: "23 Jul 2022",
      end: "29 Jul 2022",
      availability: "Available",
      shared: "499 USD",
      private: "599 USD",
      booking: "Apply Now",
    },
  ];
  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex w-[850px] justify-between overflow-x-auto rounded-t-lg bg-[#de4c11] p-4 text-center text-lg font-bold text-white md:w-full">
        <div className="w-1/6 border-r-[2px]  border-dashed text-sm md:text-base">
          Start Date
        </div>
        <div className="w-1/6 border-r-[2px]  border-dashed  text-sm md:text-base">
          End Date
        </div>
        <div className="w-1/6 border-r-[2px] border-dashed text-sm md:text-base">
          Availability
        </div>
        <div className="w-1/6 border-r-[2px] border-dashed text-sm md:text-base">
          Shared
        </div>
        <div className="w-1/6 border-r-[2px] border-dashed text-sm md:text-base">
          Private
        </div>
        <div className="text-sm md:w-1/6 md:text-base">Booking</div>
      </div>
      {seatAvailability.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "bg-slate-50" : "bg-slate-100"
            } w-[850px] justify-between p-4   text-center text-lg font-medium md:w-full`}
          >
            <div className="w-1/6 border-r-[2px] border-dashed text-sm">
              {item.start}
            </div>
            <div className="w-1/6 border-r-[2px]  border-dashed text-sm">
              {item.end}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed text-sm">
              {item.availability}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed text-sm">
              {item.shared}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed text-sm">
              {item.private}
            </div>
            <div className="text-sm md:w-1/6">{item.booking}</div>
          </div>
        );
      })}
      <p className="text-sm italic md:hidden">Please Scroll Horizontally</p>
    </div>
  );
};

export default EventTable;
