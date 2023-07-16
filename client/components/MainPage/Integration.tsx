"use client";
import { NativeIntegration } from "@/utils/types/types";
import Image from "next/image";
import { list } from "postcss";
import React, { useState } from "react";

type Props = {
  nativeIntegration: NativeIntegration;
};

const Integration = ({ nativeIntegration }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const total = 5;

  const slide = (offset: number) => {
    const newIndex = Math.min(Math.max(index + offset, 0), total - 1);
    setIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto h-auto pt-24 pb-24 justify-center items-center max-w-7xl text-center sm:mt-0">
      <h2 className="font-bold text-2xl">Integrations</h2>
      <p>Native Integrations with the tools you already use</p>
      <div className="sm:p-8 p-4"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
          {nativeIntegration.nativeIntContent.map((imge) => (
            <div
              className="col-span-1 max-h-12 w-full object-contain lg:col-span-1 flex justify-center items-center h-full"
              key={imge.id}
            >
              {imge.img.data && (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_WEBSITE_URL +
                    imge.img?.data.attributes.url
                  }
                  width={imge.img?.data.attributes.width}
                  height={400}
                  alt={imge.img?.data.attributes.url!}
                  className="object-contain my-auto h-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integration;
