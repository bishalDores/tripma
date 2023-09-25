import Card from "@/components/inHouse/Card";
import FlightStatus from "@/components/inHouse/FlightStatus";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero_banner h-[calc(100vh-96px)] flex flex-col pt-24 items-center">
        <Image src={"/images/hero-text.png"} width={756} height={265} alt="its more than just a trip" className="mb-12" />
        <div className="fligth_search flex justify-center items-center lg:flex-row flex-col">
          <FlightStatus />
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <div className="flex items-center justify-between mb-6 lg:flex-row flex-col">
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10 justify-items-center md:justify-items-start">
          <Card
            img="/images/sanghai.jpg"
            description="China’s most international city"
            price="$598"
            title="The Bund, Shanghai"
            titleColor="text-primary-default"
          />
          <Card
            img="/images/sydney.jpg"
            description="Take a stroll along the famous harbor"
            price="$981"
            title="Sydney Opera House, Sydney"
            titleColor="text-primary-default"
          />
          <Card
            img="/images/kyoto.jpg"
            description="Step back in time in the Gion district"
            price="$633"
            title="Kōdaiji Temple, Kyoto"
            titleColor="text-primary-default"
          />
        </div>
        <div className="w-full h-[480px] mt-10 mb-20 rounded-xl card bg-white">
          <div className="w-full h-[397px] relative rounded-xl ">
            <Image src="/images/showcase.jpg" layout="fill" alt="blog image" />
          </div>
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h4 className="text-[#6E7491] font-semibold">
                Tsavo East National Park, <span className="text-primary-default">Kenya</span>
              </h4>
              <p className="text-[14px] text-primary-inactive">
                Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in
                the semi-arid Taru Desert.
              </p>
            </div>
            <div className="text-[#6E7491] font-semibold">$1,248</div>
          </div>
        </div>

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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10 justify-items-center md:justify-items-start">
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
      </div>
    </main>
  );
}
