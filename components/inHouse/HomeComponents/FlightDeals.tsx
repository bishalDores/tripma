"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "../Card";
import { useScroll, motion } from "framer-motion";

const FlightDeals = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.section ref={ref} style={{ scale: scrollYProgress, opacity: scrollYProgress }}>
      <div className="flex items-center justify-between mb-6 lg:flex-row flex-col">
        <h2 className="text-[24px] text-[#6E7491] font-bold">
          Find your next adventure with these{" "}
          <span className="text-primary-default">
            <Link href={"/"}>flight deals</Link>
          </span>
        </h2>

        <h2 className="text-[24px] text-[#6E7491]">
          <Link href={"/"} className="flex items-center">
            All
            <Image src={"/images/arrowRight.svg"} width={32} height={33} alt="arrow right" />
          </Link>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10 justify-items-center lg:justify-items-start">
        <Card
          img="/images/sanghai.jpg"
          description="China’s most international city"
          price="$598"
          title="The Bund, Shanghai"
          titleColor="text-primary-default"
        />
        <Card
          img="/images/sydney.jpg"
          description="Take a stroll along the famous harbor"
          price="$981"
          title="Sydney Opera House, Sydney"
          titleColor="text-primary-default"
        />
        <Card
          img="/images/kyoto.jpg"
          description="Step back in time in the Gion district"
          price="$633"
          title="Kōdaiji Temple, Kyoto"
          titleColor="text-primary-default"
        />
      </div>
    </motion.section>
  );
};

export default FlightDeals;
