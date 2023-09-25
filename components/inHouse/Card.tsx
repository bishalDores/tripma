import Image from "next/image";
import React from "react";

const Card = ({
  img,
  description,
  price,
  title,
  titleColor,
}: {
  img: string;
  description: string;
  price: string | undefined;
  title: string;
  titleColor: string;
}) => {
  return (
    <div className="sm:w-[411px] w-[300px] min-h-[397px] rounded-xl card bg-white">
      <div className="sm:w-[411px] w-[300px] h-[320px] relative rounded-xl ">
        <Image src={img} layout="fill" alt="blog image" />
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h4 className="text-[#6E7491] font-semibold">
            {title.substring(0, title.lastIndexOf(" "))} <span className={titleColor}>{title.split(" ")[title.split(" ").length - 1]}</span>
          </h4>
          <p className="text-[14px] text-primary-inactive">{description}</p>
        </div>
        {price && <div className="text-[#6E7491] font-semibold">{price}</div>}
      </div>
    </div>
  );
};

export default Card;
