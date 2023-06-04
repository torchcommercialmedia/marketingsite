"use client";
import Link from "next/link";
import React from "react";
import { BsCameraFill } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

const Hero: React.FC = () => {
  return (
    <div className="relative isolate w-full h-[calc(100vh-100px)]">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#9089fc] to-[ff729a] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-10 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl sm:mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-left text-center">
                Next Generation{" "}
                <span className="text-red-500">Business Management</span>{" "}
                Platform For:
              </h1>
              <div className="p-4"></div>
              <div className="sm:flex">
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 items-center">
                  <div className="flex hover:scale-105 mx-auto w-32 border sm:w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl hover:bg-gray-100/50">
                    <div className="flex col-span-1">
                      <IoCarSportSharp size={42} className="flex sm:hidden" />
                      <IoCarSportSharp size={52} className="hidden sm:block" />
                    </div>
                    <p className="h-12 flex text-xs sm:text-md items-center">
                      Dealers
                    </p>
                  </div>
                  <div className="flex hover:scale-105 mx-auto w-32 border sm:w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl hover:bg-gray-100/50 text-center">
                    <div className="flex col-span-1">
                      <BsCameraFill size={42} className="flex sm:hidden" />
                      <BsCameraFill size={52} className="hidden sm:block" />
                    </div>
                    <p className="h-12 flex text-xs sm:text-md items-center">
                      Automotive Merchandising
                    </p>
                  </div>
                  <div className="flex hover:scale-105 mx-auto w-32 border sm:w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl hover:bg-gray-100/50 text-center">
                    <div className="flex col-span-1">
                      <VscTools size={42} className="flex sm:hidden" />
                      <VscTools size={52} className="hidden sm:block" />
                    </div>
                    <p className="h-12 flex text-xs sm:text-md items-center">
                      Shops
                    </p>
                  </div>
                  <div className="flex hover:scale-105 mx-auto w-32 border sm:w-[120px] items-center justify-center p-4 flex-col hover:cursor-pointer rounded-2xl hover:bg-gray-100/50 text-center">
                    <div className="flex col-span-1">
                      <MdMiscellaneousServices
                        size={42}
                        className="flex sm:hidden"
                      />
                      <MdMiscellaneousServices
                        size={52}
                        className="hidden sm:block"
                      />
                    </div>
                    <p className="h-12 flex text-xs sm:text-md items-center">
                      Mobile Service
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/"
                  className="rounded-md bg-red-500 px-3.5 py-2.5 mx-auto sm:mx-0 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* To Change */}
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
