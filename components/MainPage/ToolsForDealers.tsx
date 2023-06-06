"use client";
import React, { useMemo, useRef, useState } from "react";
import { IconType } from "react-icons";
import { SwiperClass } from "swiper/react";

//Icons
import { BsGear } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiToolsFill } from "react-icons/ri";
import { TfiAlarmClock, TfiDashboard } from "react-icons/tfi";
import { FcInspection } from "react-icons/fc";
import { VscChecklist } from "react-icons/vsc";

type Props = {};

interface ToolsForProfessional {
  icon: IconType;
  size: number;
  text: string;
}

const ToolsForDealers = (props: Props) => {
  const [selectedTool, setSelectedTool] = useState<string>("");
  const swiperRef = useRef<SwiperClass | undefined>();

  const ProductArray: ToolsForProfessional[] = useMemo(
    () => [
      { icon: RiToolsFill, size: 24, text: "Task Management" },
      { icon: TfiAlarmClock, size: 24, text: "Time Tracking" },
      { icon: BsGear, size: 24, text: "Ports Procurement" },
      { icon: HiOutlineBuildingOffice2, size: 24, text: "Multi-Rooftop" },
      { icon: FcInspection, size: 24, text: "QA Inspection" },
      { icon: VscChecklist, size: 24, text: "Vehicle Inspections" },
      { icon: TfiDashboard, size: 24, text: "Dashboard & Reports" },
    ],
    []
  );
  return (
    <div className="min-h-screen max-w-7xl w-full mx-auto border">
      ToolsForDealers
    </div>
  );
};

export default ToolsForDealers;
