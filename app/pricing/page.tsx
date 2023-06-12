"use client";
import AddOnToggle from "@/components/Pricing/AddOnToggle";
import FullFeature from "@/components/Pricing/FullFeature";
import InfoPopover from "@/components/Pricing/InfoPopover";
import Toogle from "@/components/Pricing/Toogle";
import { Tier } from "@/utils/types/types";
import React, { useRef, useState } from "react";
import { BsCamera, BsRobot } from "react-icons/bs";
import { FaRegImages } from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { SiInteractiondesignfoundation } from "react-icons/si";

type Props = {};

const Pricing = (props: Props) => {
  const [annualSavingsEnabled, setAnnualSavingsEnabled] =
    useState<boolean>(true);
  const [showAdditionalFeatures, setShowAdditionalFeatures] =
    useState<boolean>(false);
  const [dealerkitMerchToolsToggle, setDealerKitMerchToolsToggle] =
    useState(false);
  const [servkitMercTools, setServkitMerchtools] = useState(false);
  const [servkitAdvServicePackage, setServkitAdvServPackage] = useState(false);
  const [fullkitDealerMerchToolsToggle, setFullkitDealerMerchToolsToggle] =
    useState(false);
  const [fullkitServMerchToolsToggle, setFullkitServMerchToolsToggle] =
    useState(false);
  const [fullkitAdvServPackage, setFullkitAdvServPackage] = useState(false);

  const [tiers, setTiers] = useState<Tier[]>([
    {
      name: "Dealer Toolkit",
      id: "delear-toolkit",
      href: "#",
      priceMonthly: 199,
      description: "Includes 5 users, additional users at " + "$19" + "/month",
      initialFeatures: [
        "Vehicle Management",
        "Reconditioning",
        "Vendor Integration",
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
      addOnsFeature: [
        {
          name: "Merchandising Tools",
          isChecked: false,
          tooltip: [
            {
              icon: BsCamera,
              name: "In App Photography",
            },
            {
              icon: BsRobot,
              name: "AI Editing",
            },
            {
              icon: SiInteractiondesignfoundation,
              name: "Advanced window stickers",
            },
            {
              icon: FaRegImages,
              name: "Dynamic Insert Images",
            },
          ],
        },
      ],
      mostPopular: false,
    },
    {
      name: "Service Toolkit",
      id: "service-toolkit",
      href: "#",
      priceMonthly: 199,
      description: "Includes 5 users, additional users at " + "$19" + "/month",
      initialFeatures: [
        "Repair Order Management",
        "Reconditioning System",
        "Custom Inspection Forms",
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
      addOnsFeature: [
        {
          name: "Merchandising Tools",
          isChecked: false,
          tooltip: [
            {
              icon: BsCamera,
              name: "In App Photography",
            },
            {
              icon: BsRobot,
              name: "AI Editing",
            },
            {
              icon: SiInteractiondesignfoundation,
              name: "Advanced window stickers",
            },
            {
              icon: FaRegImages,
              name: "Dynamic Insert Images",
            },
          ],
        },
        {
          name: "Advance Service Package",
          isChecked: false,
          tooltip: [
            {
              icon: BsCamera,
              name: "Dispatching",
            },
            {
              icon: BsRobot,
              name: "Bidirectional SMS",
            },
            {
              icon: SiInteractiondesignfoundation,
              name: "Lead Forms",
            },
          ],
        },
      ],
      mostPopular: true,
    },
    {
      name: "Full ToolKit",
      id: "full-toolkit",
      href: "#",
      priceMonthly: 299,
      description: "Includes 5 users, additional users at " + "$29" + "/month",
      initialFeatures: [
        "All Dealer Features",
        "All Service Features",
        "One Integrated Features",
      ],
      addOnsFeature: [
        {
          name: "Dealer Merchandising Tools",
          isChecked: false,
          tooltip: [
            {
              icon: BsCamera,
              name: "In App Photography",
            },
            {
              icon: BsRobot,
              name: "AI Editing",
            },
            {
              icon: SiInteractiondesignfoundation,
              name: "Advanced window stickers",
            },
            {
              icon: FaRegImages,
              name: "Dynamic Insert Images",
            },
          ],
        },
        {
          name: "Service Merchandising Tools",
          isChecked: false,
          tooltip: [
            {
              icon: BsCamera,
              name: "Dispatching",
            },
            {
              icon: BsRobot,
              name: "Bidirectional SMS",
            },
            {
              icon: SiInteractiondesignfoundation,
              name: "Lead Forms",
            },
          ],
        },
        {
          name: "Advance Service Package",
          isChecked: false,
          tooltip: [
            {
              icon: BsCamera,
              name: "Dispatching",
            },
            {
              icon: BsRobot,
              name: "Bidirectional SMS",
            },
            {
              icon: SiInteractiondesignfoundation,
              name: "Lead Forms",
            },
          ],
        },
      ],
      mostPopular: false,
    },
  ]);

  const handleAddOnToggle = (tierIdx: number, addOnIdx: number) => {
    const updatedTiers = [...tiers];
    tiers[tierIdx].addOnsFeature[addOnIdx].isChecked =
      !tiers[tierIdx].addOnsFeature[addOnIdx].isChecked;
    if (tierIdx === 0) {
      if (dealerkitMerchToolsToggle) {
        updatedTiers[tierIdx].priceMonthly -= 100;
      } else {
        updatedTiers[tierIdx].priceMonthly += 100;
      }
      setDealerKitMerchToolsToggle(!dealerkitMerchToolsToggle);
    } else if (tierIdx === 1) {
      if (addOnIdx === 0) {
        if (servkitMercTools) {
          updatedTiers[tierIdx].priceMonthly -= 100;
        } else {
          updatedTiers[tierIdx].priceMonthly += 100;
        }
        setServkitMerchtools(!servkitMercTools);
      } else {
        if (servkitAdvServicePackage) {
          updatedTiers[tierIdx].priceMonthly -= 100;
        } else {
          updatedTiers[tierIdx].priceMonthly += 100;
        }
        setServkitAdvServPackage(!servkitAdvServicePackage);
      }
    } else if (tierIdx === 2) {
      if (addOnIdx === 0) {
        if (fullkitDealerMerchToolsToggle) {
          updatedTiers[tierIdx].priceMonthly -= 100;
        } else {
          updatedTiers[tierIdx].priceMonthly += 100;
        }
        setFullkitDealerMerchToolsToggle(!fullkitDealerMerchToolsToggle);
      } else if (addOnIdx === 1) {
        if (fullkitServMerchToolsToggle) {
          updatedTiers[tierIdx].priceMonthly -= 100;
        } else {
          updatedTiers[tierIdx].priceMonthly += 100;
        }
        setFullkitServMerchToolsToggle(!fullkitServMerchToolsToggle);
      } else {
        if (fullkitAdvServPackage) {
          updatedTiers[tierIdx].priceMonthly -= 100;
        } else {
          updatedTiers[tierIdx].priceMonthly += 100;
        }
        setFullkitAdvServPackage(!fullkitAdvServPackage);
      }
    }
  };

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const additionalFeaturesRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    setShowAdditionalFeatures(true);
    if (additionalFeaturesRef.current) {
      additionalFeaturesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto justify-center">
      <div className="bg-white lg:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              Pricing
            </h2>
          </div>
          <div className="p-4"></div>
          <hr />

          <div className="flex justify-center items-center mx-auto flex-col">
            <div className="p-2"></div>
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
                <div className="flex-1">
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
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      $
                      {annualSavingsEnabled
                        ? tier.priceMonthly
                        : Math.round(
                            tier.priceMonthly + tier.priceMonthly * 0.15
                          )}
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
                  <p className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    Add-Ons:
                  </p>
                  <ul
                    role="list"
                    className="space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.addOnsFeature?.map((addOn, index) => (
                      <div className="flex space-x-2 items-center" key={index}>
                        <AddOnToggle
                          isChecked={addOn.isChecked}
                          toggleOnOff={() => handleAddOnToggle(tierIdx, index)}
                        />
                        <p className="text-sm">{addOn.name}</p>
                        <InfoPopover
                          name={addOn.name}
                          tooltip={addOn.tooltip}
                        />
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="p-4"></div>
                {!showAdditionalFeatures && (
                  <div className="text-center">
                    <button
                      className="text-red-600 text-xs font-semibold underline"
                      onClick={() => {
                        handleLinkClick();
                      }}
                    >
                      View Full Feature Comparison
                    </button>
                  </div>
                )}
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
        {showAdditionalFeatures && <FullFeature ref={additionalFeaturesRef} />}
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
