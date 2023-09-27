import Card from "@/components/inHouse/Card";
import FlightStatus from "@/components/inHouse/FlightStatus";
import DealShowcase from "@/components/inHouse/HomeComponents/DealShowcase";
import FlightDeals from "@/components/inHouse/HomeComponents/FlightDeals";
import ReviewCard from "@/components/inHouse/ReviewCard";
import Image from "next/image";
import Link from "next/link";

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
        <div className="fligth_search flex justify-center items-center lg:flex-row flex-col">
          <FlightStatus />
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4 md:px-4 lg:px-0">
        <FlightDeals />
        <DealShowcase />

        <div className="flex items-center justify-between mb-6 lg:flex-row flex-col">
          <h2 className="text-[24px] text-[#6E7491] font-bold">
            Explore unique{" "}
            <span className="text-[#5CD6C0]">
              <Link href={"/"}>places to stay</Link>
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
            img="/images/maldives.jpg"
            description="From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
            price={undefined}
            title="Stay among the atolls in Maldives"
            titleColor="text-[#5CD6C0]"
          />
          <Card
            img="/images/moroco.jpg"
            description="Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
            price={undefined}
            title="Experience the Ourika Valley in Morocco"
            titleColor="text-[#5CD6C0]"
          />
          <Card
            img="/images/mongolia.jpg"
            description="Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
            price={undefined}
            title="Live traditionally in Mongolia"
            titleColor="text-[#5CD6C0]"
          />
        </div>
        <div className="text-center my-10">
          <Link href={"/"} className="py-3 px-5 bg-primary-default text-white rounded text-[14px]">
            Explore more stays
          </Link>
        </div>

        {/* user review */}
        <h2 className="mt-16 mb-6 text-center text-[24px] font-bold text-[#6E7491]">
          What <span className="text-primary-default">Tripma</span> users are saying
        </h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10 justify-items-center lg:justify-items-start">
          <ReviewCard ratings={4} />
          <ReviewCard ratings={5} />
          <ReviewCard ratings={2} />
        </div>
      </div>
    </main>
  );
}
