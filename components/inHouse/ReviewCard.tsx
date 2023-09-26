import React from "react";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <div className="w-[411px]">
      <div>
        <Image src={"/images/avatar.png"} width={48} height={48} alt="avatar image" />
      </div>
      <div className="px-4 pb-4">
        <h5>Yifei Chen</h5>
        <h5>Seoul, South Korea | April 2019</h5>
        <Image src={"/images/star-filled.svg"} width={24} height={24} alt="filled star" />
        <p>
          What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had
          any issues. When I had to cancel a flight because of an emergency, Tripma support helped me
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
