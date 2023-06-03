"use client";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import {
  MdWrongLocation,
  MdOutlinePayments,
  MdOutlineInventory,
} from "react-icons/md";
import { BsArrowLeftRight, BsTools, BsFillCameraFill } from "react-icons/bs";
import { GiAutoRepair, GiCarWheel } from "react-icons/gi";
import { RiStoreFill, RiToolsFill } from "react-icons/ri";
import { IoCarSportSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscWand } from "react-icons/vsc";
import { IconType } from "react-icons";

type NavigationProps = {
  children: React.ReactNode;
  label: string;
  active: boolean;
  href: string;
};

type DivArray = {
  icon: IconType;
  size: number;
  text: string;
};

type PopoverContent = {
  [key: string]: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({
  children,
  label,
  active,
  href,
}) => {
  const ProductArray: DivArray[] = [
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

  const UsesProduct: DivArray[] = [
    { icon: IoCarSportSharp, size: 24, text: "Classic & Exotic Dealers" },
    { icon: RiToolsFill, size: 24, text: "Mobile Repair Shops" },
    { icon: VscWand, size: 24, text: "Wrap Shop" },
    { icon: BsFillCameraFill, size: 24, text: "Auto Photography" },
    { icon: IoMdInformationCircleOutline, size: 24, text: "Mobile Detail" },
    { icon: GiCarWheel, size: 24, text: "Wheel Refinishing" },
  ];

  const AboutUs: DivArray[] = [
    { icon: AiOutlinePaperClip, size: 24, text: "Classic & Exotic Dealers" },
    { icon: AiOutlinePaperClip, size: 24, text: "Mobile Repair Shops" },
    { icon: AiOutlinePaperClip, size: 24, text: "Wrap Shop" },
    { icon: AiOutlinePaperClip, size: 24, text: "Auto Photography" },
    { icon: IoMdInformationCircleOutline, size: 24, text: "Mobile Detail" },
    { icon: GiCarWheel, size: 24, text: "Wheel Refinishing" },
  ];

  const addedDivArray = (array: DivArray[]) => {
    const rows = [];
    for (let i = 0; i < array.length; i += 2) {
      const div1 = array[i];
      const div2 = array[i + 1];
      rows.push(
        <div key={i} className="flex">
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
    product: (
      <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 justify-between lg:max-w-lg">
        {addedDivArray(ProductArray)}
      </div>
    ),
    uses: (
      <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 justify-between lg:max-w-lg">
        {addedDivArray(UsesProduct)}
      </div>
    ),
    pricing: <div className="flex">{/* Content for Pricing */}</div>,
    aboutus: <div className="flex">{/* Content for About Us */}</div>,
  };

  const popoverContentToShow = popoverContent[href.replace("/", "")];

  return (
    <Popover
      key={label}
      // href={href}
      // className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      className="relative"
    >
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
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
          <div className="flex">{popoverContentToShow}</div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navigation;
