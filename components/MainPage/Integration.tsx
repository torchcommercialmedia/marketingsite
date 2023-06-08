"use client";
import React, { useState } from "react";

type Props = {};

const Integration = (props: Props) => {
  const [index, setIndex] = useState<number>(0);
  const total = 5;

  const slide = (offset: number) => {
    const newIndex = Math.min(Math.max(index + offset, 0), total - 1);
    setIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto h-auto mt-24 mb-24 justify-center items-center max-w-7xl text-center sm:mt-0">
      <h2 className="font-bold text-2xl">Integrations</h2>
      <p>Native Integrations with the tools you already use</p>
      <div className="sm:p-8 p-4"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            Image Here
          </div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            Image Here
          </div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            Image Here
          </div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            Image Here
          </div>
          <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            Image Here
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span className="hidden md:inline">
              Transistor saves up to $40,000 per year, per employee by working
              with us.
            </span>
            <a href="#" className="font-semibold text-red-600">
              <span className="absolute inset-0" aria-hidden="true" /> Read our
              case study <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integration;
