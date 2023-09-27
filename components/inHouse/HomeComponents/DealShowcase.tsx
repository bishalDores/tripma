"use client";

import React from "react";
import Image from "next/image";

const DealShowcase = () => {
  return (
    <>
      <div className="w-full h-[480px] mt-10 mb-20 rounded-xl card bg-white">
        <div className="w-full h-[397px] relative rounded-xl ">
          <Image src="/images/showcase.jpg" layout="fill" alt="blog image" />
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <h4 className="text-[#6E7491] font-semibold">
              Tsavo East National Park, <span className="text-primary-default">Kenya</span>
            </h4>
            <p className="text-[14px] text-primary-inactive">
              Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks
              in Kenya. It is located in the semi-arid Taru Desert.
            </p>
          </div>
          <div className="text-[#6E7491] font-semibold">$1,248</div>
        </div>
      </div>
    </>
  );
};

export default DealShowcase;
