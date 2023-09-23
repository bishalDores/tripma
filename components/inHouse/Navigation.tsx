"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="h-[96px]">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="logo">
          <Image src={"/images/logo.png"} width={131} height={54} alt="tripma logo" />
        </div>
        <div className="nav_menu">
          <ul className="lg:flex items-center hidden">
            {menu.map((item, id) => {
              return (
                <li key={id} className="capitalize p-4">
                  <Link href={item.route} className="text-base text-primary-inactive hover:text-primary-default transition-all duration-1000">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <Button className="text-base mr-4 bg-transparent border border-primary-default text-primary-inactive hover:bg-secondary-hover hover:text-primary-default transition-all duration-1000 py-3 px-5">
              Sign in
            </Button>
            <Button className="bg-primary-default hover:bg-primary-hover text-base transition-all duration-1000 py-3 px-5">Sign up</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

const menu = [
  { title: "flights", route: "/" },
  { title: "hotels", route: "/" },
  { title: "packages", route: "/" },
];
