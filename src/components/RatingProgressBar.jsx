import React from "react";
import {  StarFilled } from "@ant-design/icons";
const RatingProgressBar = ({ label, rating, maxRating, color }) => {
  const percentage = Math.round((rating / maxRating) * 100);
  const formattedRating = rating >= 1000 ? (rating / 1000).toFixed(1) + "k" : rating;

  return (
    <div className="flex w-full items-center mb-1 group">
      <div className="mr-2  flex items-center">
      <StarFilled style={{color: "#E4E4E4"}}
          className="w-3 h-3 transition-transform transform group-hover:scale-125"
        />
        <p className="font-[500] text-[14px] ml-2">{label}</p>
      </div>
      <div className="w-full h-5 flex items-center rounded-full overflow-hidden relative">
        <div
          className={`${color} rounded-full h-2 transition-all duration-300 ease-out group-hover:w-full`}
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="w-1/5 flex-shrink-0 text-[14px] font-[500] ml-2">
        {formattedRating}
      </div>
      </div>
      
    </div>
  );
};

export default RatingProgressBar;
