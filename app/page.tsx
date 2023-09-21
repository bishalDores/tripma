import DestinationInput from "@/components/inHouse/DestinationInput";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="hero_banner h-[calc(100vh-96px)] flex flex-col pt-24 items-center">
        <Image
          src={"/images/hero-text.png"}
          width={756}
          height={265}
          alt="its more than just a trip"
          className="mb-12"
        />
        <div className="fligth_search flex justify-center items-center">
          <DestinationInput type="departure" />
          <DestinationInput type="arrival" />
        </div>
      </div>
    </main>
  );
}
