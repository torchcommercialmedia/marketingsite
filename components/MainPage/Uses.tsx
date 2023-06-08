"use client";

import React from "react";

type Props = {};

const Uses = (props: Props) => {
  return (
    <section id="uses" className="w-full">
      <div className="min-h-screen w-full flex justify-center items-center flex-col mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-bold text-3xl">Example Uses</h2>
        <div className="p-4"></div>
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-8 sm:max-w-xl sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 sm:gap-y-10 lg:mx-0 lg:max-w-none">
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Independent Dealers
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Auto Photography Companies
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Classic & Exotic Dealers
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Mobile Detail
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Wrap Shops
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Wheel Refinishing
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Independent Dealers
            </p>
          </div>
          <div className="rounded-xl border h-52 w-52 flex flex-col">
            <p className="flex-1 mx-auto mt-14">Image Here</p>
            <p className="h-12 border-t-2 text-center font-semibold">
              Independent Dealers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;