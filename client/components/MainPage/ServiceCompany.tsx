"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { icons, IconType } from "react-icons";
import { BsGear } from "react-icons/bs";
import {
  HiEllipsisHorizontal,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { RiToolsFill } from "react-icons/ri";
import { TfiAlarmClock, TfiDashboard } from "react-icons/tfi";
import { FcInspection } from "react-icons/fc";
import { VscChecklist } from "react-icons/vsc";
import { FaWpforms } from "react-icons/fa";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Image from "next/image";
import { ImageData } from "@/utils/types/types";
import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";

type Props = {};

interface ToolsForProfessional {
  icon: IconType;
  size: number;
  text: string;
  img?: any;
}

const ServiceCompany = (props: Props) => {
  const [selectedTool, setSelectedTool] = useState<string>("");
  const swiperRef = useRef<SwiperClass | undefined>();

  const ProductArray: ToolsForProfessional[] = useMemo(
    () => [
      {
        icon: RiToolsFill,
        size: 24,
        text: "Repair Orders",
        img: "/images/landing-page/Repair-Orders.jpg",
      },
      {
        icon: TfiAlarmClock,
        size: 24,
        text: "Products",
        img: "/images/landing-page/Products.jpg",
      },
      {
        icon: BsGear,
        size: 24,
        text: "Dispatching",
        img: "/images/landing-page/Dispatching.jpg",
      },
      {
        icon: HiOutlineBuildingOffice2,
        size: 24,
        text: "Merchandising Tools",
        img: "/images/landing-page/Merchandising-Tools.jpg",
      },
      {
        icon: FcInspection,
        size: 24,
        text: "Dealer Integration",
        img: "/images/landing-page/Dealer-Integration.jpg",
      },
      {
        icon: VscChecklist,
        size: 24,
        text: "2-Way SMS",
        img: "/images/landing-page/2-Way-SMS.jpg",
      },
      {
        icon: TfiDashboard,
        size: 24,
        text: "Invoice & Payments",
        img: "/images/landing-page/Invoice-Payments.jpg",
      },
      {
        icon: FaWpforms,
        size: 24,
        text: "Lead Forms",
        img: "/images/landing-page/Lead-Form.jpg",
      },
    ],
    []
  );
  const repairOrders = [
    {
      icon: HiEllipsisHorizontal,
      content:
        "Write repaird orders, look up parts and labor, and calculate profitability before you send an estimate.",
    },
    {
      icon: HiEllipsisHorizontal,
      content:
        "Use custom parts and labor matrixes to manage pricing for bulk customers",
    },
    {
      icon: HiEllipsisHorizontal,
      content:
        "Save canned services, to quickly add frequent services to repair orders",
    },
    {
      icon: HiEllipsisHorizontal,
      content: "Publish estimate links, and get approvals in-app or via SMS",
    },
    {
      icon: HiEllipsisHorizontal,
      content:
        "Order parts for repair orders from providers like Nexpart and Worldpac",
    },
  ];

  const AddedDivArray = (array: ToolsForProfessional[]) => {
    const rows = [];
    if (array.length < 1) return;
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
                className={
                  selectedTool === div.text ? "text-red-500" : "text-gray-600"
                }
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
    <section className="relative isolate w-full max-w-7xl mx-auto p-2 min-h-auto">
      <div className="flex justify-center w-full flex-col">
        <div className="p-10"></div>
        <h2 className="font-semibold mx-auto text-2xl text-center">
          Tools for Service Companies & Dealer Service Departments
        </h2>
        <div className="p-2"></div>
        <div className="flex justify-center space-x-2">
          {AddedDivArray(ProductArray)}
        </div>
      </div>
      <div className="lg:p-4"></div>
      <div className="h-auto border-2 border-neutral-400 py-8 rounded-2xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          slidesPerView={1.1}
          onSlideChange={(swiper) => {
            const toolText = ProductArray[swiper.activeIndex].text;
            setSelectedTool(toolText);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ProductArray.map((tool, index) => (
            <SwiperSlide key={index} className="border-2 rounded-2xl">
              <div className="flex w-full h-[400px] rounded-2xl">
                {tool.img && (
                  <Image
                    src={tool.img}
                    width={400}
                    height={400}
                    alt={tool.img}
                    className="w-1/2 inset-0 h-full rounded-2xl object-cover bg-clip-custom clip-custom"
                  />
                )}
                <div className="p-8 bg-white rounded-2xl flex justify-between flex-col">
                  <h3 className="text-2xl font-bold">REPAIR ORDERS</h3>
                  <div className="space-y-2 mt-2 flex-1">
                    {repairOrders?.map((item) => (
                      <div className="flex" key={item.content}>
                        <item.icon width={12} className="flex" />
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="#" className="flex justify-end text-red-500">
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

export default ServiceCompany;
