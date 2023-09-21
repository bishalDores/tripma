"use client";
import React from "react";
import DestinationInput from "@/components/inHouse/DestinationInput";

const FlightStatus = () => {
  return (
    <>
      <DestinationInput type="departure" />
      <DestinationInput type="arrival" />
    </>
  );
};

export default FlightStatus;
