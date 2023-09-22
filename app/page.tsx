import Card from "@/components/inHouse/Card";
import FlightStatus from "@/components/inHouse/FlightStatus";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero_banner h-[calc(100vh-96px)] flex flex-col pt-24 items-center">
        <Image src={"/images/hero-text.png"} width={756} height={265} alt="its more than just a trip" className="mb-12" />
        <div className="fligth_search flex justify-center items-center">
          <FlightStatus />
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex items-center justify-between mb-6">
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
          <Card img="/images/sanghai.jpg" />
          <Card img="/images/sydney.jpg" />
          <Card img="/images/kyoto.jpg" />
        </div>
      </div>
    </main>
  );
}
