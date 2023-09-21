import React from "react";
import Image from "next/image";

const ScheduleInput = () => {
  return (
    <div className="input_wrapper border border-[#CBD4E6] leading-[48px] text-primary-inactive flex items-center cursor-pointer bg-white w-[252px]">
      <Image src="/images/calendar.svg" width={32} height={32} alt="flight" className="mx-2" />
      <span className="cursor-pointer">Depart - Return</span>
    </div>
  );
};

export default ScheduleInput;
