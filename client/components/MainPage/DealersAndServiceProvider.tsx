"use client";

import { IntegrationData } from "@/utils/types/types";
import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

type Props = {
  integration: IntegrationData;
};

const DealersAndServiceProvider = ({ integration }: Props) => {
  console.log(integration.img?.data.attributes.url);
  return (
    <section className="bg-white min-h-screen">
      <div className="relative isolate sm:mt-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm">
              {integration.img?.data && (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_WEBSITE_URL +
                    integration.img?.data.attributes.url!
                  }
                  width={integration.img?.data.attributes.width}
                  height={integration.img?.data.attributes.height}
                  alt={integration.img?.data.attributes.url!}
                  className="w-full inset-0 h-full rounded-2xl bg-gray-50 object-cover"
                />
              )}
            </div>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl">
                {integration.title}
              </h2>
              <ul
                role="list"
                className="mt-10 grid gap-x-8 gap-y-3 text-base leading-7 text-neutral-900"
              >
                {integration.integrationChecklist.map((benefit) => (
                  <li key={benefit.id} className="flex text-xl gap-x-3">
                    <AiFillCheckCircle
                      className="h-7 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {benefit.title}
                  </li>
                ))}
              </ul>
              <div className="mt-10 sm:flex w-full sm:space-x-8 justify-start">
                {integration.integrationLinks.map((link) => (
                  <div className="flex space-x-4" key={link.title}>
                    <p>{link.title}</p>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-red-400"
                    >
                      {link.link} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealersAndServiceProvider;
