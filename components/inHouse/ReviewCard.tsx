import React from "react";
import Image from "next/image";

const ReviewCard = ({ ratings = 5 }: { ratings: Number }) => {
  const starsToShow = () => {
    switch (ratings) {
      case 1:
        return (
          <>
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
          </>
        );
      case 2:
        return (
          <>
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
          </>
        );
      case 3:
        return (
          <>
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
          </>
        );

      case 4:
        return (
          <>
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-unfilled.svg"} width={24} height={24} alt="filled star" />
          </>
        );
      case 5:
        return (
          <>
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
            <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="sm:w-[411px] w-full flex sm:flex-row flex-col sm:text-left text-center">
      <div className="sm:m-0 m-auto">
        <Image src={"/images/avatar.png"} width={48} height={48} alt="avatar image" className="max-w-[48px]" />
      </div>
      <div className="px-4 pb-4">
        <h5 className="text-[#6E7491] font-semibold">Yifei Chen</h5>
        <h5 className="text-[#6E7491]">Seoul, South Korea | April 2019</h5>
        <div className="flex sm:justify-start justify-center">{starsToShow()}</div>

        <p className="text-[#27273F]">
          What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had
          any issues. When I had to cancel a flight because of an emergency, Tripma support helped me{" "}
          <span className="text-primary-default cursor-pointer">read more...</span>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
