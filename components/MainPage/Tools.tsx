"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { icons, IconType } from "react-icons";
import { BsGear } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiToolsFill } from "react-icons/ri";
import { TfiAlarmClock, TfiDashboard } from "react-icons/tfi";
import { FcInspection } from "react-icons/fc";
import { VscChecklist } from "react-icons/vsc";

type Props = {};

type ToolsForProfessional = {
  icon: IconType;
  size: number;
  text: string;
};

const Tools = (props: Props) => {
  const [selectedTool, setSelectedTool] = useState<string>("");
  const swiperRef = useRef<SwiperClass | undefined>();

  const ProductArray: ToolsForProfessional[] = [
    { icon: RiToolsFill, size: 42, text: "Task Management" },
    { icon: TfiAlarmClock, size: 42, text: "Time Tracking" },
    { icon: BsGear, size: 42, text: "Ports Procurement" },
    { icon: HiOutlineBuildingOffice2, size: 42, text: "Multi-Rooftop" },
    { icon: FcInspection, size: 42, text: "QA Inspection" },
    { icon: VscChecklist, size: 42, text: "Vehicle Inspections" },
    { icon: TfiDashboard, size: 42, text: "Dashboard & Reports" },
  ];

  const AddedDivArray = (array: ToolsForProfessional[]) => {
    const rows = [];
    for (let i = 0; i < array.length; i++) {
      const div = array[i];
      rows.push(
        <div
          className="flex space-x-4"
          key={i}
          onClick={() => handleToolSelect(div.text)}
        >
          <div className="flex hover:scale-105 w-[150px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl hover:bg-gray-100/50">
            <div className="flex">
              <div.icon
                size={div.size}
                className={selectedTool === div.text ? "text-red-500" : ""}
              />
            </div>
            <div className="p-2"></div>
            <p
              className={`h-12 flex items-start text-center ${
                selectedTool === div.text ? "text-red-500" : ""
              }`}
            >
              {div.text}
            </p>
          </div>
        </div>
      );
    }
    return rows;
  };

  const handleToolSelect = (toolText: string) => {
    setSelectedTool(toolText);
    const toolIndex = ProductArray.findIndex((tool) => tool.text === toolText);
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
          setSelectedTool(ProductArray[nextIndex].text);
        }
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative isolate w-full max-w-screen-2xl mx-auto p-2 h-screen overflow-x-auto">
      <div className="flex justify-center w-full flex-col">
        <div className="p-10"></div>
        <h2 className="font-semibold mx-auto text-4xl">
          Tools for All Auto Professionals
        </h2>
        <div className="p-6"></div>
        <div className="flex justify-center">{AddedDivArray(ProductArray)}</div>
      </div>
      <div className="p-4"></div>
      <div className="h-auto border">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].text;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ProductArray.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center w-full border">
                <p>Slide to go to the nextslide</p>
                Slide {index + 1}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tools;
