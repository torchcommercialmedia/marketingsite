"use client";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { IconType } from "react-icons";
import { BsInfoCircle } from "react-icons/bs";

type Props = {
  name: string;
  tooltip: {
    icon: IconType;
    name: string;
  }[];
};

const InfoPopover = ({ name, tooltip }: Props) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const timeoutDuration = 2000;
  let timeout = useRef<any>(null);

  const onMouseEnter = () => {
    setIsTooltipVisible(false);
    clearTimeout(timeout.current);
    if (isTooltipVisible) return;
    setIsTooltipVisible(true);
  };

  const onMouseLeave = () => {
    timeout.current = setTimeout(
      () => setIsTooltipVisible(false),
      timeoutDuration
    );
  };

  return (
    <Popover className="relative items-center flex">
      <div
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        className="inline-block cursor-pointer"
      >
        <BsInfoCircle className="w-4 h-4 text-neutral-500" />
      </div>

      <Transition
        show={isTooltipVisible}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="flex-auto rounded-3xl bg-white text-sm leading-6 w-[300px] px-4 py-8 shadow-lg ring-1 ring-gray-900/5">
            <h3 className="font-bold text-lg text-red-600">{name}</h3>
            {tooltip.map((list, index) => (
              <div key={index} className="flex items-center space-x-2">
                <list.icon />
                <p>{list.name}</p>
              </div>
            ))}

            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default InfoPopover;
