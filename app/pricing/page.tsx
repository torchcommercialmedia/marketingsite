"use client";
import FullFeature from "@/components/Pricing/FullFeature";
import Toogle from "@/components/Pricing/Toogle";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BiMessageCheck } from "react-icons/bi";
import { BsCamera, BsCamera2, BsRobot, BsSendCheck } from "react-icons/bs";
import { FaRegImages } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdCheckCircleOutline } from "react-icons/md";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { VscTools } from "react-icons/vsc";

type Props = {};

const Pricing = (props: Props) => {
  const [annualSavingsEnabled, setAnnualSavingsEnabled] =
    useState<boolean>(true);
  const [showAdditionalFeatures, setShowAdditionalFeatures] =
    useState<boolean>(false);
  const [merchandisingSelected, setMerchandisingSelected] =
    useState<boolean>(true);
  const [serviceToolsSelected, setServiceToolsSelected] =
    useState<boolean>(true);

  const tiers = [
    {
      name: "Dealer Toolkit",
      id: "delaer-toolkit",
      href: "#",
      priceMonthly:
        merchandisingSelected && serviceToolsSelected
          ? 299
          : merchandisingSelected && !serviceToolsSelected
          ? 249
          : !merchandisingSelected && serviceToolsSelected
          ? 249
          : 199,
      description:
        "Includes 5 users, additional users at " +
        (merchandisingSelected && serviceToolsSelected
          ? "$29"
          : merchandisingSelected && !serviceToolsSelected
          ? "$24"
          : !merchandisingSelected && serviceToolsSelected
          ? "$24"
          : "$19") +
        "/month",
      initialFeatures: [
        "Inventory Management System",
        "Reconditioning System",
        "Custom Inspection Forms",
        "Time Tracking",
        "Task Tracking",
      ],
      additionalFeatures: [
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
      name: "Service Toolkit",
      id: "service-toolkit",
      href: "#",
      priceMonthly:
        merchandisingSelected && serviceToolsSelected
          ? 299
          : merchandisingSelected && !serviceToolsSelected
          ? 249
          : !merchandisingSelected && serviceToolsSelected
          ? 249
          : 199,
      description:
        "Includes 5 users, additional users at " +
        (merchandisingSelected && serviceToolsSelected
          ? "$29"
          : merchandisingSelected && !serviceToolsSelected
          ? "$24"
          : !merchandisingSelected && serviceToolsSelected
          ? "$24"
          : "$19") +
        "/month",
      initialFeatures: [
        "Inventory Management System",
        "Reconditioning System",
        "Custom Inspection Forms",
        "Time Tracking",
        "Task Tracking",
      ],
      additionalFeatures: [
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
      mostPopular: true,
    },
    {
      name: "Full ToolKit",
      id: "full-toolkit",
      href: "#",
      priceMonthly:
        merchandisingSelected && serviceToolsSelected
          ? 499
          : merchandisingSelected && !serviceToolsSelected
          ? 399
          : !merchandisingSelected && serviceToolsSelected
          ? 399
          : 299,
      description:
        "Includes 5 users, additional users at " +
        (merchandisingSelected && serviceToolsSelected
          ? "$49"
          : merchandisingSelected && !serviceToolsSelected
          ? "$39"
          : !merchandisingSelected && serviceToolsSelected
          ? "$39"
          : "$29") +
        "/month",
      initialFeatures: [
        "All Dealer Features",
        "All Service Features",
        "One Integrated Features",
      ],
      mostPopular: false,
    },
  ];

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const toggleMerchandising = () => {
    setMerchandisingSelected(!merchandisingSelected);
  };

  const toggleServiceTools = () => {
    setServiceToolsSelected(!serviceToolsSelected);
  };

  console.log(tiers);

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto justify-center">
      <div className="bg-white py-24 lg:py-8 xl:py-32">
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
                className="border-green-500 h-auto rounded-xl p-4 cursor-pointer"
                onClick={() => toggleMerchandising()}
              >
                <div
                  className={`border h-56 rounded-xl p-4 ${
                    merchandisingSelected
                      ? "border-green-500"
                      : "border-gray-500"
                  }`}
                >
                  <BsCamera2 className="h-12 w-12" />
                  <h3 className="font-bold text-lg text-red-600">
                    Merchandising Tools
                  </h3>
                  <div className="flex items-center space-x-2">
                    <BsCamera width={20} height={20} />
                    <p className="text-sm">In App Photography</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BsRobot width={20} height={20} />
                    <p className="text-sm">AI Editing</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SiInteractiondesignfoundation width={20} height={20} />
                    <p className="text-sm">Advanced window stickers</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegImages width={20} height={20} />
                    <p className="text-sm">Dynamic Insert Images</p>
                  </div>
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
                className="border-green-500 h-auto rounded-xl p-4 cursor-pointer"
                onClick={() => toggleServiceTools()}
              >
                <div
                  className={`border h-56 rounded-xl p-4 ${
                    serviceToolsSelected
                      ? "border-green-500"
                      : "border-neutral-500"
                  }`}
                  onClick={() => toggleServiceTools()}
                >
                  <VscTools className="h-12 w-12" />
                  <h3 className="font-bold text-lg text-red-600">
                    Advance Service Tools
                  </h3>
                  <div className="flex items-center space-x-2">
                    <BsSendCheck width={20} height={20} />
                    <p className="text-sm">Dispatching</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BiMessageCheck width={20} height={20} />
                    <p className="text-sm">Bidrectional SMS</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoNewspaperOutline width={20} height={20} />
                    <p className="text-sm">Lead Forms</p>
                  </div>
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
              <Toogle
                setAnnualSavingsEnabled={setAnnualSavingsEnabled}
                annualSavingsEnabled={annualSavingsEnabled}
              />
              {annualSavingsEnabled ? (
                <p>Annual Savings</p>
              ) : (
                <p>Monthly Pricing</p>
              )}
            </div>
          </div>
          <div className="isolate mx-auto mt-4 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        "text-gray-900",
                        "text-lg font-semibold leading-8"
                      )}
                    >
                      {tier.name}
                    </h3>
                    {/* {tier.mostPopular ? (
                        <p className="rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                          Most popular
                        </p>
                      ) : null} */}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $
                      {annualSavingsEnabled
                        ? tier.priceMonthly
                        : (tier.priceMonthly +=
                            tier.priceMonthly * 0.15).toFixed()}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier?.initialFeatures?.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <MdCheckCircleOutline
                          className="h-6 w-5 flex-none text-red-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tier.additionalFeatures &&
                    tier.additionalFeatures.length > 0 &&
                    !showAdditionalFeatures && (
                      <div className="mt-24 text-center">
                        <Link
                          href="/pricing#full-feature"
                          className="text-red-600 text-xs font-semibold underline"
                          onClick={() => {
                            setShowAdditionalFeatures(true);
                          }}
                        >
                          View Full Feature Comparison
                        </Link>
                      </div>
                    )}

                  {/* {showAdditionalFeatures && tier.additionalFeatures && (
                      <>
                        <ul
                          role="list"
                          className={`mt-4 space-y-3 text-sm leading-6 text-gray-600`}
                        >
                          {tier.additionalFeatures.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <MdCheckCircleOutline
                                className="h-6 w-5 flex-none text-red-600"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 text-center">
                          <button
                            className="text-red-600 font-semibold underline"
                            onClick={() => setShowAdditionalFeatures(false)}
                          >
                            Hide
                          </button>
                        </div>
                      </>
                    )} */}
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
        </div>
        {showAdditionalFeatures && <FullFeature />}
        {!annualSavingsEnabled && (
          <div className="text-center py-8">
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
        )}
      </div>
    </div>
  );
};

export default Pricing;
