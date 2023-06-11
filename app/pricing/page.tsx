"use client";
import Toogle from "@/components/Pricing/Toogle";
import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCamera2, BsTools } from "react-icons/bs";
import { MdCheckCircleOutline } from "react-icons/md";

type Props = {};

const Pricing = (props: Props) => {
  const [merchandisingSelected, setMerchandisingSelected] =
    useState<boolean>(false);
  const [serviceToolsSelected, setServiceToolsSelected] =
    useState<boolean>(false);

  const tiers = [
    {
      name: "Dealer Toolkit",
      id: "delaer-toolkit",
      href: "#",
      priceMonthly: "$299",
      description: "Includes 5 users, additional users at $29/month",
      features: [
        "Inventory Management System",
        "Reconditioning System",
        "Custom Inspection Forms",
        "Time Tracking",
        "Task Tracking",
        "User Pay Reports",
        "Schedule Builder",
        "Photo Sync",
        "White Labeled Application",
        "Connect with Vendors",
        "Order Ports",
        "Publish Estimate Request",
        "QA System",
        "Customizable Dashboard",
        "Full Reporting Features",
        "Multi-Rooftop Support",
      ],
      mostPopular: false,
    },
    {
      name: "Full ToolKit",
      id: "full-toolkit",
      href: "#",
      priceMonthly: "$499",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "All Dealer Features",
        "All Service Features",
        "One Integrated Features",
      ],
      mostPopular: true,
    },
    {
      name: "Service Toolkit",
      id: "service-toolkit",
      href: "#",
      priceMonthly: "$299",
      description: "Includes 5 users, additional users at $29/month.",
      features: [
        "Inventory Management System",
        "Reconditioning System",
        "Custom Inspection Forms",
        "Time Tracking",
        "Task Tracking",
        "User Pay Reports",
        "Schedule Builder",
        "Photo Sync",
        "White Labeled Application",
        "Connect with Vendors",
        "Order Ports",
        "Publish Estimate Request",
        "QA System",
        "Customizable Dashboard",
        "Full Reporting Features",
        "Multi-Rooftop Support",
      ],
      mostPopular: false,
    },
  ];

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const toggleMerchandising = () => {
    tiers[0].features = [];
    tiers[1].features = [];
    tiers[2].features = [];
    setMerchandisingSelected(!merchandisingSelected);
  };

  const toggleServiceTools = () => {
    setServiceToolsSelected(!serviceToolsSelected);
  };

  console.log(tiers);

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto justify-center">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              How much power do you need?
            </p>
          </div>
          <div className="flex justify-center items-center mx-auto flex-col">
            <div className="p-2"></div>
            <p className="text-sm">Click to toogle off advanced features</p>
            <div className="p-2"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div
                className={` ${
                  merchandisingSelected ? "border-green-500 border" : ""
                } border-green-500 h-auto rounded-xl p-4 `}
              >
                <div
                  className={`border h-56 rounded-xl p-4 ${
                    merchandisingSelected ? "border-red-500" : "border-gray-500"
                  }`}
                  onClick={() => toggleMerchandising()}
                >
                  <BsCamera2 className="h-12 w-12" />
                  <h3 className="font-bold text-lg">Merchandising Tools</h3>
                  <p className="text-sm">In App Photography</p>
                  <p className="text-sm">AI Editing</p>
                  <p className="text-sm">Advanced window stickers</p>
                  <p className="text-sm">Dynamic Insert Images</p>
                </div>
                <div className="p-2"></div>
                <div className="flex space-x-2 items-center justify-center">
                  {merchandisingSelected ? (
                    <AiOutlineCheckCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <AiOutlineCloseCircle className="h-8 w-8 text-red-500" />
                  )}
                  <p>{merchandisingSelected ? "Included" : "Not Included"}</p>
                </div>
              </div>

              <div
                className={` ${
                  serviceToolsSelected ? "border-green-500 border" : ""
                } border-green-500 h-auto rounded-xl p-4 `}
              >
                <div
                  className={`border h-56 rounded-xl p-4 ${
                    serviceToolsSelected
                      ? "border-red-500"
                      : "border-neutral-500"
                  }`}
                  onClick={() => toggleServiceTools()}
                >
                  <BsTools className="h-12 w-12" />
                  <h3 className="font-bold text-lg">Advance Service Tools</h3>
                  <p className="text-sm">Dispatching</p>
                  <p className="text-sm">Bidrectional SMS</p>
                  <p className="text-sm">Lead Forms</p>
                </div>
                <div className="p-2"></div>
                <div className="flex space-x-2 items-center justify-center">
                  {serviceToolsSelected ? (
                    <AiOutlineCheckCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <AiOutlineCloseCircle className="h-8 w-8 text-red-500" />
                  )}
                  <p>{serviceToolsSelected ? "Included" : "Not Included"}</p>
                </div>
              </div>
            </div>

            <div className="p-8"></div>
            <div className="p-2 flex space-x-2 justify-center">
              <Toogle />
              <p>Annual Savings</p>
            </div>
          </div>
          <div className="isolate mx-auto mt-4 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                  tierIdx === 0 ? "lg:rounded-r-none" : "",
                  tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                  "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.mostPopular ? "text-red-600" : "text-gray-900",
                        "text-lg font-semibold leading-8"
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.features?.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <MdCheckCircleOutline
                          className="h-6 w-5 flex-none text-red-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-red-600 text-white shadow-sm hover:bg-red-500"
                      : "text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  )}
                >
                  Request a Demo
                </a>
              </div>
            ))}
          </div>
          <div className="p-8"></div>
          <div className="text-center">
            <h3 className="font-semibold">Ready to Get Started?</h3>
            <p>
              Set up a call with us to learn about your business, and get you
              set up with a demo account
            </p>
            <div className="p-8"></div>
            <button className="rounded-xl border bg-red-600 text-white px-4 py-2">
              <span>Request a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
