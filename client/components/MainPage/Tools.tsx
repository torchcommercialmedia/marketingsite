"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { icons, IconType } from "react-icons";
import { BsGear } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiToolsFill } from "react-icons/ri";
import { TfiAlarmClock, TfiDashboard } from "react-icons/tfi";
import { FcInspection } from "react-icons/fc";
import { VscChecklist } from "react-icons/vsc";
import Image from "next/image";
import { Professional, ProfessionalData } from "@/utils/types/types";

interface Props {
  tools: ProfessionalData;
}

const Tools = ({ tools }: Props) => {
  const swiperRef = useRef<SwiperClass | undefined>();

  const ProductArray: Professional[] = useMemo(
    () => tools.professionalTools,
    [tools.professionalTools]
  );

  const [selectedTool, setSelectedTool] = useState<string>(
    tools.professionalTools[0].title
  );

  // const ProductArray: ToolsForProfessional[] = useMemo(
  //   () => [
  //     { icon: RiToolsFill, size: 24, text: "Task Management" },
  //     { icon: TfiAlarmClock, size: 24, text: "Time Tracking" },
  //     { icon: BsGear, size: 24, text: "Parts Procurement" },
  //     { icon: HiOutlineBuildingOffice2, size: 24, text: "Multi-Rooftop" },
  //     { icon: FcInspection, size: 24, text: "QA Inspections" },
  //     { icon: VscChecklist, size: 24, text: "Vehicle Inspections" },
  //     { icon: TfiDashboard, size: 24, text: "Dashboard & Reports" },
  //   ],
  //   []
  // );

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
    for (let i = 0; i < array.length; i++) {
      const div = array[i];
      const IconComponent = getIconComponent(array[i].icon);
      if (IconComponent) {
        rows.push(
          <div
            className="flex"
            key={i}
            onClick={() => handleToolSelect(div.title)}
          >
            <div className="lg:flex hidden hover:scale-105 w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl">
              <div className="flex">
                {React.createElement(IconComponent, {
                  size: 42,
                  className: `${
                    selectedTool === div.title ? "text-red-500" : ""
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

  console.log(ProductArray);

  return (
    <section
      id="tools"
      className="relative isolate w-full p-4 max-w-7xl mx-auto"
    >
      <div className="flex justify-center w-full flex-col">
        <div className="p-10"></div>
        <h2 className="font-semibold mx-auto text-2xl text-center">
          Tools for All Auto Professionals
        </h2>
        <div className="p-2"></div>
        <div className="flex justify-center space-x-4">
          {AddedDivArray(ProductArray)}
        </div>
      </div>
      <div className="lg:p-4"></div>
      <div className="h-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].title;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ProductArray.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="flex border justify-center w-full rounded-2xl h-[400px]">
                {tool?.img?.data?.attributes?.url && (
                  <Image
                    src={
                      "http://localhost:1337" + tool.img?.data?.attributes?.url
                    }
                    width={500}
                    height={500}
                    alt=""
                  />
                )}
                <p className="mt-40 w-24">Slide {index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tools;
