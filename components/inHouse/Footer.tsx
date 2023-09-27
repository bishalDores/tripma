import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto mt-10 px-4 md:px-4 lg:px-0 pt-[60px] pb-[24px] flex justify-around md:flex-wrap flex-nowrap md:flex-row flex-col md:text-left text-center">
        <div className="logo">
          <Image src={"/images/logo.png"} width={131} height={54} alt="tripma logo" className="md:ml-0 mx-auto" />
        </div>
        {footerMenu.map((menu, id) => (
          <div>
            <h6 className="text-[18px] text-[#6E7491] mb-2 font-bold">{menu.title}</h6>
            <ul>
              {menu.sub.map((menu, id) => (
                <li className="mb-2">
                  <Link href={menu.route} className="text-primary-inactive ">
                    {menu.title}
                  </Link>
                </li>
              ))}
              {menu.ios_link.image && menu.google_play_link.image && (
                <div className="md:text-right text-center">
                  <li className="mb-3">
                    <Link href={menu.google_play_link.route}>
                      <Image
                        src={menu.google_play_link.image}
                        width={135}
                        height={40}
                        alt=""
                        className="md:ml-0 mx-auto"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={menu.ios_link.route}>
                      <Image src={menu.ios_link.image} width={135} height={40} alt="" className="md:ml-0 mx-auto" />
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#CBD4E6]">
        <div className="container mx-auto mt-10 px-4 md:px-4 lg:px-0 mb-10 flex justify-between flex-col sm:flex-row sm:items-start items-center">
          <div className="flex sm:mb-0 mb-2">
            <Image src={"/images/twitter.svg"} alt="twitter" width={20} height={20} className="mr-5" />
            <Image src={"/images/instagram.svg"} alt="twitter" width={20} height={20} className="mr-5" />
            <Image src={"/images/facebook.svg"} alt="twitter" width={20} height={20} />
          </div>
          <p className="text-[#7C8DB0]">© 2023 Tripma incorporated</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

const footerMenu = [
  {
    title: "About",
    sub: [
      {
        title: "About tripma",
        route: "/",
      },
      {
        title: "How it works",
        route: "/",
      },
      {
        title: "Careers",
        route: "/",
      },
      {
        title: "Press",
        route: "/",
      },
      {
        title: "Blog",
        route: "/",
      },
      {
        title: "Forum",
        route: "/",
      },
    ],
    ios_link: {
      route: "/",
      image: "",
    },
    google_play_link: {
      route: "/",
      image: "",
    },
  },
  {
    title: "Partner with us",
    sub: [
      {
        title: "Partnership programs",
        route: "/",
      },
      {
        title: "Affiliate program",
        route: "/",
      },
      {
        title: "Connectivity partners",
        route: "/",
      },
      {
        title: "Promotions and events",
        route: "/",
      },
      {
        title: "Integrations",
        route: "/",
      },
      {
        title: "Community",
        route: "/",
      },
    ],
    ios_link: {
      route: "/",
      image: "",
    },
    google_play_link: {
      route: "/",
      image: "",
    },
  },
  {
    title: "Support",
    sub: [
      {
        title: "Help Center",
        route: "/",
      },
      {
        title: "Contact us",
        route: "/",
      },
      {
        title: "Privacy policy",
        route: "/",
      },
    ],
    ios_link: {
      route: "/",
      image: "",
    },
    google_play_link: {
      route: "/",
      image: "",
    },
  },
  {
    title: "Get the app",
    sub: [
      {
        title: "Tripma for Android",
        route: "/",
      },
      {
        title: "Tripma for iOS",
        route: "/",
      },
      {
        title: "Mobile site",
        route: "/",
      },
    ],
    ios_link: {
      route: "/",
      image: "/images/app-store.png",
    },
    google_play_link: {
      route: "/",
      image: "/images/google-play.png",
    },
  },
];
