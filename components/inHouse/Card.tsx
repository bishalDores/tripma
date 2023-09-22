import Image from "next/image";
import React from "react";

const Card = ({ img }: { img: string }) => {
  return (
    <div className="sm:w-[411px] w-[300px] h-[397px] rounded-xl card bg-white">
      <div className="sm:w-[411px] w-[300px] h-[320px] relative rounded-xl ">
        <Image src={img} layout="fill" alt="blog image" />
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h4 className="text-[#6E7491] font-semibold">
            The Bund, <span className="text-primary-default">Shanghai</span>
          </h4>
          <p className="text-[14px] text-primary-inactive">China’s most international city</p>
        </div>
        <div className="text-[#6E7491] font-semibold">$598</div>
      </div>
    </div>
  );
};

export default Card;
