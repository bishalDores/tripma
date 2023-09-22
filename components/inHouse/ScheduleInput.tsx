import React from "react";
import Image from "next/image";

import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ScheduleInput = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[252px] justify-start text-left font-normal h-[48px] rounded-l-none border border-[#CBD4E6] input_shadow pl-0 hover:bg-white",
              !date && "text-muted-foreground"
            )}
          >
            <Image src="/images/calendar.svg" width={32} height={32} alt="flight" className="mx-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span className="text-base text-primary-inactive">Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 rounded-xl border border-[#CBD4E6] input_shadow" align="end" sideOffset={-50}>
          <div className="py-4 border-b border-[#CBD4E6]">
            <div className="px-4">
              <RadioGroup defaultValue="round-trip" onValueChange={(val) => console.log(val)} className="flex">
                <div className="flex items-center space-x-2 mr-5">
                  <RadioGroupItem value="round-trip" id="round-trip" className="border-[#6E7491] " />
                  <Label htmlFor="round-trip" className="text-primary-inactive font-semibold capitalize text-base">
                    Round trip
                  </Label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="one-way" id="one-way" className="border-[#6E7491]" />
                  <Label htmlFor="one-way" className="text-primary-inactive font-semibold capitalize text-base">
                    One way
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ScheduleInput;
