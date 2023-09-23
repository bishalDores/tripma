"use client";

import React from "react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const DestinationInput = ({ type }: { type: string }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className={`input_wrapper mb-5 lg:mb-0 border border-[#CBD4E6] leading-[48px] text-primary-inactive flex items-center cursor-pointer bg-white ${
              type === "departure" ? "rounded-l" : ""
            }`}
          >
            <Image
              src={type === "departure" ? "/images/departure.svg" : "/images/arrival.svg"}
              width={32}
              height={32}
              alt="flight"
              className="mx-2"
            />
            <span className="cursor-pointer">{type === "departure" ? "From where" : "Where to"}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px]">
          <DropdownMenuItem
            className="cursor-pointer focus:bg-primary-default focus:text-white text-[##27273F] uppercase px-4 py-2"
            onClick={() => console.log("Profile")}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer focus:bg-primary-default focus:text-white text-[##27273F] uppercase px-4 py-2"
            onClick={() => console.log("Billing")}
          >
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer focus:bg-primary-default focus:text-white text-[##27273F] uppercase px-4 py-2">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer focus:bg-primary-default focus:text-white text-[##27273F] uppercase px-4 py-2">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DestinationInput;
