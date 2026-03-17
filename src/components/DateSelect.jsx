import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import toast from "react-hot-toast";
const DateSelect = ({ dateTime, id }) => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const onBookHandler = () => {
    if (!selected) {
      return toast("Please Select a date");
    }
    navigate(`/booking/${id}/${selected}`);
    window.scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" left="-100px" />
        <div className="">
          <p className="text-lg font-semibold">Choose Date</p>
          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon width={28} />
            <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4 ">
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date}
                  onClick={()=>setSelected(date)}
                  className={` cursor-pointer flex flex-col items-center p-3 rounded-lg hover:border-primary transition ${selected===date? 'bg-red-500 text-white':'border'}`}
                >
                  <span className="text-lg font-semibold">
                    {new Date(date).getDate()}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                    })}
                  </span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} />
          </div>
        </div>
        <button
          onClick={onBookHandler}
          className="bg-red-500 text-white px-8 py-2 mt-6 rounded hover:bg-red-600/90 transition-all cursor-pointer"
        >
          Book Now{" "}
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
