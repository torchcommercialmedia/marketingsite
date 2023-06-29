"use client";
import React, { useMemo, useRef, useState } from "react";
import { IconType } from "react-icons";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//Icons
import { BiStore } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import {
  MdOutlineInventory2,
  MdOutlineSell,
  MdOutlineSwapHoriz,
} from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { DealersData } from "@/utils/types/types";

type Props = {
  dealers: DealersData;
};

interface ToolsForProfessional {
  id: number;
  icon: IconType;
  // size: number;
  title: string;
  content?: string;
}

const ToolsForDealers = ({ dealers }: Props) => {
  const ProductArray: ToolsForProfessional[] = useMemo(
    () => dealers.dealersTool,
    [dealers.dealersTool]
  );

  const [selectedTool, setSelectedTool] = useState<string>(
    ProductArray[0]?.title || ""
  );
  const swiperRefTool = useRef<SwiperClass | undefined>();
  const swiperRefToolGate = useRef<SwiperClass | undefined>();
  const AddedDivArray = (array: ToolsForProfessional[]) => {
    const rows = [];
    for (let i = 0; i < array.length; i++) {
      const div = array[i];
      rows.push(
        <div
          className="flex"
          key={i}
          onClick={() => handleToolSelect(div.title)}
        >
          <div className="lg:flex hidden hover:scale-105 w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl">
            <div className="flex">
              <div.icon
                size={24}
                className={selectedTool === div.title ? "text-red-500" : ""}
              />
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
    return rows;
  };

  const handleToolSelect = (toolText: string) => {
    setSelectedTool(toolText);
    const toolIndex = ProductArray.findIndex((tool) => tool.title === toolText);
    if (swiperRefTool.current) {
      swiperRefTool.current.slideTo(toolIndex);
    }
  };

  return (
    <section className="relative isolate w-full max-w-7xl mx-auto p-2 h-screen">
      <div className="flex justify-center w-full flex-col">
        <div className="p-10"></div>
        <h2 className="font-semibold mx-auto text-2xl text-center">
          {dealers.title}
        </h2>
        <div className="p-2"></div>
        <div className="flex justify-center space-x-4">
          {AddedDivArray(ProductArray)}
        </div>
      </div>
      <div className="lg:p-4"></div>
      <div className="h-auto w-full hidden lg:block">
        <Swiper
          spaceBetween={50}
          slidesOffsetAfter={100}
          slidesOffsetBefore={100}
          width={1080}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].title;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRefTool.current = swiper;
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
      <div className="h-auto w-full block lg:hidden p-4">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          watchOverflow
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].title;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRefToolGate.current = swiper;
          }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {ProductArray.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="flex border flex-shrink justify-center rounded-2xl h-[400px]">
                <p className="mt-40 w-24">Image Here</p>
                <p className="mt-40 w-24">Content Here, Slide: {index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ToolsForDealers;
