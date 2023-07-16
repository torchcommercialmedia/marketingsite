"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { icons, IconType } from "react-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsBookmark, BsGear, BsPen } from "react-icons/bs";
import {
  HiAdjustmentsHorizontal,
  HiEllipsisHorizontal,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { RiToolsFill } from "react-icons/ri";
import { TfiAlarmClock, TfiDashboard } from "react-icons/tfi";
import { FcInspection } from "react-icons/fc";
import { VscChecklist } from "react-icons/vsc";
import Image from "next/image";
import { Professional, ProfessionalData } from "@/utils/types/types";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  tools: ProfessionalData;
}

const Tools = ({ tools }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | undefined>();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const handleMobileSlide = (direction: "prev" | "next") => {
    if (swiperRef.current) {
      if (direction === "prev") {
        swiperRef.current.slidePrev();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const repairOrders = [
    {
      icon: BsPen,
      content:
        "Write repaird orders, look up parts and labor, and calculate profitability before you send an estimate.",
    },
    {
      icon: HiAdjustmentsHorizontal,
      content:
        "Use custom parts and labor matrixes to manage pricing for bulk customers",
    },
    {
      icon: BsBookmark,
      content:
        "Save canned services, to quickly add frequent services to repair orders",
    },
    {
      icon: IoMdEye,
      content: "Publish estimate links, and get approvals in-app or via SMS",
    },
    {
      icon: IoCartOutline,
      content:
        "Order parts for repair orders from providers like Nexpart and Worldpac",
    },
  ];

  const xTransform = useTransform(scrollYProgress, [0, 0.1, 2], [0, 0, 800]);

  const ProductArray: Professional[] = useMemo(
    () => tools.professionalTools,
    [tools.professionalTools]
  );

  const [selectedTool, setSelectedTool] = useState<string>(
    tools.professionalTools[0].title
  );

  const getIconComponent = (iconName: string): IconType | null => {
    switch (iconName) {
      case "RiToolsFill":
        return RiToolsFill;
      case "TfiAlarmClock":
        return TfiAlarmClock;
      case "BsGear":
        return BsGear;
      case "HiOutlineBuildingOffice2":
        return HiOutlineBuildingOffice2;
      case "FcInspection":
        return FcInspection;
      case "VscChecklist":
        return VscChecklist;
      case "TfiDashboard":
        return TfiDashboard;
      default:
        return null;
    }
  };

  const AddedDivArray = (array: Professional[]) => {
    const rows = [];
    for (let i = 0; i < array?.length; i++) {
      const div = array[i];
      const IconComponent = getIconComponent(array[i].icon);
      if (IconComponent) {
        rows.push(
          <div>
            <div
              className="flex sm:hidden"
              key={i}
              onClick={() => handleToolSelect(div.title)}
              style={{ transform: `translateX(${xTransform}px)` }}
            >
              {div.title === selectedTool && (
                <div className="flex hover:scale-105 w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl">
                  <div className="hidden sm:flex mx-auto w-auto">
                    {React.createElement(IconComponent, {
                      size: 42,
                      className: `${
                        selectedTool === div.title
                          ? "text-red-500"
                          : "text-gray-600"
                      }`,
                    })}
                  </div>

                  <div className="flex sm:hidden">
                    {React.createElement(IconComponent, {
                      size: 24,
                      className: `${
                        selectedTool === div.title
                          ? "text-red-500"
                          : "text-gray-600 hidden"
                      }`,
                    })}
                  </div>
                  <div className="p-2"></div>
                  <p
                    className={`h-12 flex items-start text-center ${
                      selectedTool === div.title ? "text-red-500" : "hidden"
                    }`}
                  >
                    {div.title}
                  </p>
                </div>
              )}
            </div>
            <div
              className="hidden sm:flex"
              key={Math.random() * i * 12}
              onClick={() => handleToolSelect(div.title)}
              style={{ transform: `translateX(${xTransform}px)` }}
            >
              <div className="flex hover:scale-105 w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl">
                <div className="flex">
                  {React.createElement(IconComponent, {
                    size: 24,
                    className: `${
                      selectedTool === div.title
                        ? "text-red-500"
                        : "text-gray-600"
                    }`,
                  })}
                </div>
                <div className="p-2"></div>
                <p
                  className={`h-12 flex items-start text-center ${
                    selectedTool === div.title ? "text-red-500" : ""
                  }`}
                >
                  {div.title}
                </p>
              </div>
            </div>
          </div>
        );
      }
    }
    return rows;
  };

  const handleToolSelect = (toolText: string) => {
    setSelectedTool(toolText);
    const toolIndex = ProductArray.findIndex((tool) => tool.title === toolText);
    if (swiperRef.current) {
      swiperRef.current.slideTo(toolIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        const swiper: SwiperClass = swiperRef.current;
        if (swiper) {
          const nextIndex = (swiper.activeIndex + 1) % ProductArray.length;
          swiper.slideTo(nextIndex);
          setSelectedTool(ProductArray[nextIndex].title);
        }
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [ProductArray, setSelectedTool]);

  return (
    <section
      id="tools"
      className="relative isolate w-full p-4 max-w-7xl mx-auto"
    >
      <div className="flex justify-center w-full flex-col" ref={scrollRef}>
        <div className="p-10"></div>
        <motion.h2
          className="text-3xl relative font-bold tracking-tight text-neutral-700 sm:text-4xl text-center mx-auto"
          // style={{
          //   translateX: xTransform,
          // }}
        >
          {tools?.title}
        </motion.h2>
        <div className="p-2"></div>
        <div className="flex space-x-4 overflow-hidden justify-between">
          <div className="flex justify-between w-full items-center">
            <BiChevronLeft
              size={32}
              className="text-gray-600 flex-1 cursor-pointer block sm:hidden"
              onClick={() => handleMobileSlide("prev")}
            />
            <div className="sm:overflow-x-auto flex-1 flex justify-center">
              {AddedDivArray(ProductArray)}
            </div>

            <BiChevronRight
              size={32}
              className="text-gray-600 cursor-pointer flex-1 block sm:hidden"
              onClick={() => handleMobileSlide("next")}
            />
          </div>
        </div>
      </div>
      <div className="lg:p-4"></div>
      <div className="h-auto border-2 border-neutral-400 py-8 rounded-2xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          // slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          slidesPerView={1.1}
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].title;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ProductArray.map((tool, index) => (
            <SwiperSlide key={index} className="border-2 rounded-2xl">
              <div className="flex w-full rounded-2xl h-[400px]">
                {tool?.img?.data && (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_WEBSITE_URL +
                      tool.img?.data?.attributes?.url
                    }
                    width={tool.img?.data.attributes.width}
                    height={500}
                    alt=""
                    className="w-1/2 inset-0 h-full rounded-2xl object-cover bg-clip-custom clip-custom hidden sm:block"
                  />
                )}
                <div className="p-4 sm:p-8 bg-white rounded-2xl flex justify-between flex-col space-y-4">
                  <h3 className="text-lg font-semibold">REPAIR ORDERS</h3>
                  <div className="space-y-2 mt-2 flex-1 overflow-y-auto">
                    {repairOrders?.map((item, index) => (
                      <div
                        className="flex items-center space-x-2"
                        key={item.content + Math.random() * index}
                      >
                        <item.icon size={34} className="w-14" />
                        <p className="text-sm sm:text-base">{item.content}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="flex justify-end text-red-500 hover:cursor-pointer"
                  >
                    <p className="flex justify-center items-center">
                      Learn More{" "}
                      <span>
                        <BiArrowToRight height={12} width={12} />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tools;
