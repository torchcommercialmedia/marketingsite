"use client";
import React, { RefObject } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

type Props = {
  innerRef: RefObject<HTMLDivElement>;
};

type Feature = {
  name: string;
  serviceToolkit: boolean;
  dealerToolkit: boolean;
  completeToolkit: boolean;
};

type Features = {
  name: string;
  feature: Feature[];
};

const FullFeature = (props: Props) => {
  const features: Features[] = [
    {
      name: "Task Management System",
      feature: [
        {
          name: "Manage Task Types",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
        {
          name: "Manage Task by User",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
        {
          name: "Track User Payout",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
      ],
    },
    {
      name: "Parts",
      feature: [
        {
          name: "Order Parts",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
        {
          name: "Manage Parts Inventory",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
      ],
    },
    {
      name: "Repair Orders",
      feature: [
        {
          name: "Send Repair Orders",
          serviceToolkit: true,
          dealerToolkit: false,
          completeToolkit: true,
        },
        {
          name: "Request Estimates from Vendors",
          serviceToolkit: false,
          dealerToolkit: true,
          completeToolkit: true,
        },
      ],
    },
    {
      name: "Support",
      feature: [
        {
          name: "Respond to Helpdesk Tickets",
          serviceToolkit: true,
          dealerToolkit: false,
          completeToolkit: true,
        },
        {
          name: "Send Helpdesk Tickets",
          serviceToolkit: false,
          dealerToolkit: true,
          completeToolkit: true,
        },
      ],
    },
    {
      name: "Merchandising Add On",
      feature: [
        {
          name: "Mobile App Capture Flow",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
        {
          name: "AI-Editing",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
        {
          name: "Advanced Window Stickers",
          serviceToolkit: true,
          dealerToolkit: true,
          completeToolkit: true,
        },
      ],
    },
    {
      name: "Advanced Service Add-On",
      feature: [
        {
          name: "Bidirectional SMS",
          serviceToolkit: true,
          dealerToolkit: false,
          completeToolkit: true,
        },
        {
          name: "Mobile Dispatch",
          serviceToolkit: true,
          dealerToolkit: false,
          completeToolkit: true,
        },
      ],
    },
  ];

  return (
    <section
      ref={props.innerRef}
      className="min-h-screen w-full py-8"
      id="full-feature"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-semibold leading-6 text-gray-900 text-center">
              Full Feature Comparison
            </h2>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 space-y-8">
              {features?.map((feature: Features, index: number) => (
                <table
                  className="min-w-full divide-y divide-gray-300"
                  key={index}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-[300px]"
                      >
                        {feature.name}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      >
                        Service Toolkit
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      >
                        Dealer Toolkit
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                      >
                        Complete Toolkit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {feature.feature.map((feat) => (
                      <tr key={feat.name}>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="flex items-center">
                            <div className=" text-gray-900">{feat.name}</div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                          {feat.serviceToolkit ? (
                            <BsCheck2Circle className="h-8 w-8 mx-auto text-green-500" />
                          ) : (
                            <div className="text-gray-500">-</div>
                          )}
                        </td>
                        <td className="whitespace-nowrap py-4 text-center text-sm">
                          {feat.dealerToolkit ? (
                            <BsCheck2Circle className="h-8 w-8 mx-auto text-green-500" />
                          ) : (
                            <div className="text-gray-500">-</div>
                          )}
                        </td>
                        <td className="whitespace-nowrap py-4 text-center text-sm">
                          {feat.completeToolkit ? (
                            <BsCheck2Circle className="h-8 w-8 mx-auto text-green-500" />
                          ) : (
                            <div className="text-gray-500">-</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullFeature;
