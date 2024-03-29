"use client";

import { UsesData } from "@/utils/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  uses: UsesData;
};

const Uses = ({ uses }: Props) => {
  return (
    <section id="uses" className="w-full mt-24">
      <div className="min-h-auto w-full flex justify-center items-center flex-col mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-bold text-3xl">Example Uses</h2>
        <div className="p-4"></div>
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-8 sm:max-w-xl sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 sm:gap-y-10 lg:mx-0 lg:max-w-none">
          {uses.usesList.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border h-52 w-52 flex flex-col p-2 justify-between"
            >
              <Image
                src={
                  process.env.NEXT_PUBLIC_WEBSITE_URL +
                  item.img.data[0].attributes.url
                }
                width={item.img.data[0].attributes.width}
                height={item.img.data[0].attributes.height}
                alt={item.img.data[0].attributes.url}
                className="flex-1 object-cover"
              />
              <p className="border-t-2 text-center font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uses;
