"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { motion } from "framer-motion";
import { HeroData, HeroList } from "@/utils/types/types";
import { IconType } from "react-icons";

interface Props {
  hero: HeroData;
}

const Hero = ({ hero }: Props) => {
  const getIconComponent = (iconName: string): IconType | null => {
    switch (iconName) {
      case "IoCarSportSharp":
        return IoCarSportSharp;
      case "BsCameraFill":
        return BsCameraFill;
      case "VscTools":
        return VscTools;
      case "MdMiscellaneousServices":
        return MdMiscellaneousServices;
      default:
        return null;
    }
  };

  return (
    <div className="relative isolate w-full h-[calc(100vh-100px)]">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#9089fc] to-[ff729a] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-10 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl sm:mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold tracking-tight flex text-gray-900 sm:text-4xl md:text-left text-center"
              >
                <span className=" mr-2">{hero.title}</span>
              </motion.h1>
              <div className="p-4"></div>
              <div className="sm:flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="gap-2 grid grid-cols-2 sm:grid-cols-4 items-center"
                >
                  {hero.listHeroIcon.map((item: HeroList) => {
                    const IconComponent = getIconComponent(item.icon);
                    if (IconComponent) {
                      return (
                        <div
                          className="flex text-center hover:scale-105 mx-auto w-32 sm:w-[120px] items-center justify-center flex-col hover:cursor-pointer rounded-2xl"
                          key={item.title}
                        >
                          <div className="flex col-span-1">
                            {React.createElement(IconComponent, {
                              size: 42,
                              className: "flex sm:hidden",
                            })}
                            {React.createElement(IconComponent, {
                              size: 52,
                              className: "hidden sm:block",
                            })}
                          </div>
                          <p className="h-12 flex text-xs sm:text-md items-center">
                            {item.title}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </motion.div>
              </div>
              <div className="p-2"></div>
              <div className="flex text-xl">{hero?.desc}</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <Link
                  href="/"
                  className="rounded-md bg-red-500 px-3.5 py-2.5 mx-auto sm:mx-0 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  {hero?.btn}
                </Link>
              </motion.div>
            </div>
            {/* To Change */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className=""
              >
                <Image
                  src={"http://localhost:1337" + hero.img.data.attributes.url}
                  alt={""}
                  width={1920}
                  height={1080}
                  className="object-contain"
                />
                {/* <Image
                  width={1920}
                  height={1080}
                  src={landingImage1}
                  alt={""}
                  className="object-contain"
                /> */}
                <div className="" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
