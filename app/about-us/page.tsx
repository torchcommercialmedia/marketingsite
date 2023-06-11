import HeroAbout from "@/components/AboutUs/HeroAbout";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <HeroAbout />
    </div>
  );
};

export default page;
