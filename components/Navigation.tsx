"use client";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import {
  MdWrongLocation,
  MdOutlinePayments,
  MdOutlineInventory,
  MdOutlineReviews,
  MdOutlineHomeRepairService,
} from "react-icons/md";
import { BsArrowLeftRight, BsTools, BsFillCameraFill } from "react-icons/bs";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";
import { GiAutoRepair, GiCarWheel, GiGraduateCap } from "react-icons/gi";
import { RiStoreFill, RiToolsFill } from "react-icons/ri";
import { IoCarSportSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscWand } from "react-icons/vsc";
import { TbHelp } from "react-icons/tb";
import { FaBlog, FaUserCog } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

interface NavigationProps {
  label: string;
  active: boolean;
  href: string;
}

interface DivArray {
  icon: IconType;
  size: number;
  text: string;
}

interface PopoverContent {
  [key: string]: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ label, active, href }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutDuration = 200;
  let timeout: any;

  const Features: DivArray[] = [
    { icon: AiOutlinePaperClip, size: 24, text: "Repair Orders" },
    { icon: GiAutoRepair, size: 24, text: "2 Way SMS" },
    { icon: MdWrongLocation, size: 24, text: "Mobile Dispatch" },
    { icon: BsArrowLeftRight, size: 22, text: "Vendor/Dealer Integration" },
    { icon: BsTools, size: 22, text: "Reconditioning Management" },
    { icon: MdOutlinePayments, size: 24, text: "Invoice & Payments" },
    { icon: RiStoreFill, size: 22, text: "Merchandising Tools" },
    { icon: MdOutlineInventory, size: 24, text: "Inventory Management" },
    { icon: BsTools, size: 24, text: "Parts Procurement" },
    { icon: MdOutlinePayments, size: 24, text: "Dashboard & Reporting" },
  ];

  const Uses: DivArray[] = [
    { icon: IoCarSportSharp, size: 24, text: "Classic & Exotic Dealers" },
    { icon: RiToolsFill, size: 24, text: "Mobile Repair Shops" },
    { icon: VscWand, size: 24, text: "Wrap Shop" },
    { icon: BsFillCameraFill, size: 24, text: "Auto Photography" },
    { icon: IoMdInformationCircleOutline, size: 24, text: "Mobile Detail" },
    { icon: GiCarWheel, size: 24, text: "Wheel Refinishing" },
    {
      icon: MdOutlineHomeRepairService,
      size: 24,
      text: "Dent Repair",
    },
    {
      icon: FaUserCog,
      size: 24,
      text: "Independent Dealers",
    },
  ];

  const AboutUs: DivArray[] = [
    { icon: GiGraduateCap, size: 24, text: "Careers" },
    { icon: HiOutlineBuildingOffice2, size: 24, text: "Agency Services" },
    { icon: TbHelp, size: 24, text: "Help Center" },
    { icon: MdOutlineReviews, size: 24, text: "Customer Reviews" },
    { icon: HiOutlineBuildingOffice, size: 24, text: "About the Company" },
    { icon: FaBlog, size: 24, text: "Blog" },
  ];

  const addedDivArray = (array: DivArray[]) => {
    const rows = [];
    for (let i = 0; i < array.length; i += 2) {
      const div1 = array[i];
      const div2 = array[i + 1];
      rows.push(
        <div key={i} className="flex hover:cursor-pointer ">
          <div className="relative flex-1 rounded-lg p-4 hover:bg-gray-50 flex space-x-4">
            <div1.icon size={div1.size} />
            <div className="text-gray-900">
              {div1.text}
              <span className="absolute inset-0" />
            </div>
          </div>
          {div2 && (
            <div className="relative flex-1 rounded-lg p-4 hover:bg-gray-50 flex space-x-4">
              <div2.icon size={div2.size} />
              <div className="text-gray-900">
                {div2.text}
                <span className="absolute inset-0" />
              </div>
            </div>
          )}
        </div>
      );
    }
    return rows;
  };

  const popoverContent: PopoverContent = {
    features: (
      <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 justify-between lg:max-w-lg">
        {addedDivArray(Features)}
      </div>
    ),
    uses: (
      <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 justify-between lg:max-w-lg">
        {addedDivArray(Uses)}
      </div>
    ),
    pricing: (
      <Link href="/pricing">
        {/* <a className="flex">Content for Pricing</a> */}
      </Link>
    ),
    aboutus: (
      <div className="w-screen max-w-sm rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl lg:flex block divide-x">
        <div className="justify-between flex-1 pr-8">
          {addedDivArray(AboutUs)}
        </div>
        <div className="flex-1 space-x-4 pl-12 flex">
          <div className="h-[200px]">
            <p className="mb-4">Recent Blogs</p>
            <div className="flex space-x-4">
              <div className="flex flex-col h-[150px]">
                <div className="border border-neutral-900 rounded-lg px-8 py-2 flex-1">
                  <p className="mb-4">Blog post 1</p>
                  {/* <Image /> */}
                </div>
              </div>
              <div className="flex flex-col h-[150px]">
                <div className="border border-neutral-900 rounded-lg px-8 py-2 flex-1">
                  <p className="mb-4">Blog post 2</p>
                  {/* <Image /> */}
                </div>
              </div>
            </div>
            <p className="flex justify-end text-bl">View All...</p>
          </div>
        </div>
      </div>
    ),
  };

  const popoverContentToShow = popoverContent[href.replace("/", "")];

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout);
    if (open) return;
    buttonRef.current?.click();
  };

  const onMouseLeave = (open: boolean) => {
    if (!open) return;
    return (timeout = setTimeout(() => closePopover(), timeoutDuration));
  };

  return (
    <Popover key={label} className="relative">
      {({ open }) => {
        return (
          <div>
            <Popover.Button
              ref={buttonRef}
              className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <span>{label}</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div
                  className="flex"
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  {popoverContentToShow}
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        );
      }}
    </Popover>
  );
};

export default Navigation;
