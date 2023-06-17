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
import { FaWpforms } from "react-icons/fa";

type Props = {};

interface ToolsForProfessional {
  icon: IconType;
  size: number;
  text: string;
}

const ServiceCompany = (props: Props) => {
  const [selectedTool, setSelectedTool] = useState<string>("");
  const swiperRef = useRef<SwiperClass | undefined>();

  const ProductArray: ToolsForProfessional[] = useMemo(
    () => [
      { icon: RiToolsFill, size: 24, text: "Repair Orders" },
      { icon: TfiAlarmClock, size: 24, text: "Products" },
      { icon: BsGear, size: 24, text: "Dispatching" },
      { icon: HiOutlineBuildingOffice2, size: 24, text: "Merchandising Tools" },
      { icon: FcInspection, size: 24, text: "Dealer Integration" },
      { icon: VscChecklist, size: 24, text: "2-Way SMS" },
      { icon: TfiDashboard, size: 24, text: "Invoice & Payments" },
      { icon: FaWpforms, size: 24, text: "Lead Forms" },
    ],
    []
  );

  const AddedDivArray = (array: ToolsForProfessional[]) => {
    const rows = [];
    for (let i = 0; i < array.length; i++) {
      const div = array[i];
      rows.push(
        <div
          className="flex"
          key={i}
          onClick={() => handleToolSelect(div.text)}
        >
          <div className="lg:flex hidden hover:scale-105 w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl">
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
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [ProductArray, setSelectedTool]);

  return (
    <section className="relative isolate w-full max-w-7xl mx-auto p-2 h-screen">
      <div className="flex justify-center w-full flex-col">
        <div className="p-10"></div>
        <h2 className="font-semibold mx-auto text-2xl text-center">
          Tools for All Auto Professionals
        </h2>
        <div className="p-2"></div>
        <div className="flex justify-center space-x-2">
          {AddedDivArray(ProductArray)}
        </div>
      </div>
      <div className="lg:p-4"></div>
      <div className="h-auto">
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
              <div className="flex border justify-center w-full rounded-2xl h-[400px]">
                <p className="mt-40 w-24">Image here</p>
                <p className="mt-40 w-24">Slide {index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceCompany;
