"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IconType } from "react-icons";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { DealersData, ImageData } from "@/utils/types/types";
import Image from "next/image";
import { BiArrowFromLeft, BiArrowFromRight, BiStore } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import {
  MdOutlineInventory2,
  MdOutlineSell,
  MdOutlineSwapHorizontalCircle,
} from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";

type Props = {
  dealers: DealersData;
};

interface ToolsForProfessional {
  id: number;
  icon: string;
  // size: number;
  img?: ImageData;
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

  const getIconComponent = (iconName: string): IconType | null => {
    switch (iconName) {
      case "GiAutoRepair":
        return GiAutoRepair;
      case "MdOutlineInventory2":
        return MdOutlineInventory2;
      case "MdOutlineSell":
        return MdOutlineSell;
      case "RiServiceLine":
        return RiServiceLine;
      case "BiStore":
        return BiStore;
      case "MdOutlineSwapHorizontalCircle":
        return MdOutlineSwapHorizontalCircle;
      default:
        return null;
    }
  };

  const swiperRefTool = useRef<SwiperClass | undefined>();
  const swiperRefToolGate = useRef<SwiperClass | undefined>();
  const AddedDivArray = (array: ToolsForProfessional[]) => {
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
                  selectedTool === div.title ? "text-red-500" : "text-gray-600"
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
    if (swiperRefTool.current) {
      swiperRefTool.current.slideTo(toolIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRefTool.current) {
        const swiper: SwiperClass = swiperRefTool.current;
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
    <section className="relative isolate w-full max-w-7xl mx-auto p-2 h-screen">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full -z-10"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
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
          // spaceBetween={50}
          // slidesOffsetAfter={100}
          // slidesOffsetBefore={100}
          // width={1080}
          slidesPerView={2}
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
              <div className="flex shadow-md border-white border-8 justify-center w-full rounded-2xl h-[400px]">
                {tool.img?.data && (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_WEBSITE_URL +
                      tool.img?.data.attributes.url!
                    }
                    width={tool.img?.data.attributes.width}
                    height={400}
                    alt={tool.img?.data.attributes.url!}
                    className="w-full inset-0 h-full rounded-2xl bg-gray-50 object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-auto w-full block lg:hidden p-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
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
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          watchOverflow
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].title;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRefToolGate.current = swiper;
          }}
          pagination={{ clickable: true }}
        >
          {ProductArray.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="flex shadow-md border-8 border-white flex-shrink justify-center rounded-2xl h-[400px]">
                {tool.img?.data && (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_WEBSITE_URL +
                      tool.img?.data.attributes.url!
                    }
                    width={tool.img?.data.attributes.width}
                    height={400}
                    alt={tool.img?.data.attributes.url!}
                    className="w-full inset-0 h-full rounded-2xl bg-gray-50 object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ToolsForDealers;
