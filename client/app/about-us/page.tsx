import HeroAbout from "@/components/AboutUs/HeroAbout";
import SinceThen from "@/components/AboutUs/SinceThen";
import TheTeam from "@/components/AboutUs/TheTeam";
import Footer from "@/components/MainPage/Footer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <HeroAbout />
      <SinceThen />
      <TheTeam />
      <Footer />
    </div>
  );
};

export default page;
