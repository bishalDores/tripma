"use client";
import React from "react";
import DestinationInput from "@/components/inHouse/DestinationInput";
import ScheduleInput from "./ScheduleInput";
import { Button } from "@/components/ui/button";

const FlightStatus = () => {
  return (
    <>
      <DestinationInput type="departure" />
      <DestinationInput type="arrival" />
      <ScheduleInput />
      <Button className="bg-primary-default hover:bg-primary-hover text-base transition-all duration-1000 w-[96px] h-[48px] ml-[-6px]">
        Search
      </Button>
    </>
  );
};

export default FlightStatus;
