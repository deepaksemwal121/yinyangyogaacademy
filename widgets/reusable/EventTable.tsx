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
    <div>
      <div className="flex w-full justify-between rounded-t-lg bg-[#bd0006] p-4 text-center text-lg font-bold text-white">
        <div className="w-1/6 border-r-[2px] border-dashed">Start Date</div>
        <div className="w-1/6  border-r-[2px] border-dashed">End Date</div>
        <div className="w-1/6 border-r-[2px] border-dashed">Availability</div>
        <div className="w-1/6 border-r-[2px] border-dashed">Shared</div>
        <div className="w-1/6 border-r-[2px] border-dashed">Private</div>
        <div className="w-1/6">Booking</div>
      </div>
      {seatAvailability.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "bg-slate-50" : "bg-slate-100"
            } w-full justify-between   p-4 text-center text-lg font-medium`}
          >
            <div className="w-1/6 border-r-[2px] border-dashed">
              {item.start}
            </div>
            <div className="w-1/6  border-r-[2px] border-dashed">
              {item.end}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed">
              {item.availability}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed">
              {item.shared}
            </div>
            <div className="w-1/6 border-r-[2px] border-dashed">
              {item.private}
            </div>
            <div className="w-1/6">{item.booking}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EventTable;
