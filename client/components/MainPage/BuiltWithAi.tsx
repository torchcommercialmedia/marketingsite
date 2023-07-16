"use client";
import { AIData } from "@/utils/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  ai: AIData;
};

const BuiltWithAi = ({ ai }: Props) => {
  return (
    <section className="mx-auto max-w-7xl min-h-auto flex h-auto items-center flex-col pt-24 pb-24 sm:mt-0">
      <h2 className="font-bold text-3xl">{ai.title}</h2>
      <h3>{ai.desc}</h3>
      <div className="sm:p-8"></div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ai.aiContents.map((list) => (
          <div className="col-span-1" key={list.id}>
            <h3 className="font-block h-16 font-semibold text-center text-lg mt-4">
              {list.title}
            </h3>
            <div className="h-[200px] w-full border mx-auto overflow-hidden">
              {process.env.NEXT_PUBLIC_WEBSITE_URL &&
                list.img?.data &&
                list.img?.data.attributes.width && (
                  <Image
                    width={list.img?.data.attributes.width}
                    height={300}
                    alt={list.img?.data.attributes.url}
                    src={
                      process.env.NEXT_PUBLIC_WEBSITE_URL +
                      list.img?.data.attributes.url
                    }
                    className="object-cover flex-1"
                  />
                )}

              <p className="text-center">{list.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuiltWithAi;
