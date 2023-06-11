import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

type Props = {};

const HeroAbout = (props: Props) => {
  return (
    <div className="relative isolate w-full h-[calc(100vh-100px)] border">
      <div className="w-full p-24 max-w-7xl mx-auto">
        <h1 className="font-bold tracking-tight text-gray-900 text-xl md:text-left text-center">
          About Us
        </h1>
        <h3 className="text-6xl mt-10">
          we exist to help{" "}
          <span className="text-red-500 font-semibold">
            automotive professionals
          </span>{" "}
          succeed in their business, and react their dreams.
        </h3>
        <div className="mt-14 flex items-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-red-500 px-3.5 py-2.5 mx-auto sm:mx-0 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
