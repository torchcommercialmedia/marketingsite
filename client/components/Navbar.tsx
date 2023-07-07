"use client";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import {
  HiBars3,
  HiXMark,
  HiChevronDown,
  HiOutlineBuildingOffice2,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";
import { AiOutlinePaperClip } from "react-icons/ai";
import Navigation from "./Navigation";
import Link from "next/link";
import { GiAutoRepair, GiCarWheel, GiGraduateCap } from "react-icons/gi";
import {
  MdOutlineHomeRepairService,
  MdOutlineInventory,
  MdOutlinePayments,
  MdOutlineReviews,
  MdWrongLocation,
} from "react-icons/md";
import { BsArrowLeftRight, BsTools, BsFillCameraFill } from "react-icons/bs";
import { RiStoreFill, RiToolsFill } from "react-icons/ri";
import { IoCarSportSharp } from "react-icons/io5";
import { VscWand } from "react-icons/vsc";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TbHelp } from "react-icons/tb";
import { FaBlog, FaUserCog } from "react-icons/fa";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [selectedMenu, setSelectedMenu] = useState<string>(null || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Features",
      active: pathname === "/search",
      href: "/features",
      subMenuItems: [
        {
          icon: AiOutlinePaperClip,
          size: 18,
          label: "Repair Orders",
          href: "#",
        },
        { icon: GiAutoRepair, size: 18, label: "2 Way SMS", href: "#" },
        {
          icon: MdWrongLocation,
          size: 18,
          label: "Mobile Dispatch",
          href: "#",
        },
        {
          icon: BsArrowLeftRight,
          size: 18,
          label: "Vendor/Dealer Integration",
          href: "#",
        },
        {
          icon: BsTools,
          size: 18,
          label: "Reconditioning Management",
          href: "#",
        },
        {
          icon: MdOutlinePayments,
          size: 18,
          label: "Invoice & Payments",
          href: "#",
        },
        {
          icon: RiStoreFill,
          size: 18,
          label: "Merchandising Tools",
          href: "#",
        },
        {
          icon: MdOutlineInventory,
          size: 18,
          label: "Inventory Management",
          href: "#",
        },
        { icon: BsTools, size: 18, label: "Parts Procurement", href: "#" },
        {
          icon: MdOutlinePayments,
          size: 18,
          label: "Dashboard & Reporting",
          href: "#",
        },
      ],
    },
    {
      label: "Uses",
      active: pathname === "/search",
      href: "/uses",
      subMenuItems: [
        {
          icon: IoCarSportSharp,
          size: 18,
          label: "Classic & Exotic Dealers",
          href: "#",
        },
        {
          icon: RiToolsFill,
          size: 18,
          label: "Mobile Repair Shops",
          href: "#",
        },
        {
          icon: VscWand,
          size: 18,
          label: "Wrap Shops",
          href: "#",
        },
        {
          icon: BsFillCameraFill,
          size: 18,
          label: "Auto Photography",
          href: "#",
        },
        {
          icon: IoMdInformationCircleOutline,
          size: 18,
          label: "Mobile Detail",
          href: "#",
        },
        {
          icon: GiCarWheel,
          size: 18,
          label: "Wheel Refinishing",
          href: "#",
        },
        {
          icon: MdOutlineHomeRepairService,
          size: 18,
          label: "Dent Repair",
          href: "#",
        },
        {
          icon: FaUserCog,
          size: 18,
          label: "Independent Dealers",
          href: "#",
        },
      ],
    },
    {
      label: "Pricing",
      active: pathname === "/search",
      href: "/pricing",
      subMenuItems: [],
    },
    {
      label: "About Us",
      active: pathname === "/search",
      href: "/about-us",
      subMenuItems: [
        {
          icon: GiGraduateCap,
          size: 18,
          label: "Careers",
          href: "/careers",
        },
        {
          icon: HiOutlineBuildingOffice2,
          size: 18,
          label: "Agency Services",
          href: "#",
        },
        {
          icon: TbHelp,
          size: 18,
          label: "Help Center",
          href: "#",
        },
        {
          icon: MdOutlineReviews,
          size: 18,
          label: "Reviews",
          href: "#",
        },
        {
          icon: HiOutlineBuildingOffice,
          size: 18,
          label: "About Us",
          href: "#",
        },
        {
          icon: FaBlog,
          size: 18,
          label: "Blog",
          href: "/blog",
        },
      ],
    },
  ];
  const routes = useMemo(
    () => [
      {
        label: "Features",
        active: pathname === "/search",
        href: "/features",
      },
      {
        label: "Uses",
        active: pathname === "/search",
        href: "/uses",
      },
      {
        label: "Pricing",
        active: pathname === "/",
        href: "/pricing",
      },
      {
        label: "About Us",
        active: pathname === "/search",
        href: "/aboutus",
      },
    ],
    [pathname]
  );
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Chromelot</span>
          <Image
            src={"/logo/turbogear.svg"}
            className="h-6 w-auto sm:h-10"
            width={100}
            height={100}
            alt={""}
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <HiBars3 className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {routes.map((item) => {
          if (item.href === "/pricing")
            return (
              <Link
                href={item.href}
                key={item.label}
                className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none"
              >
                Pricing
              </Link>
            );
          return (
            <Navigation
              label={item.label}
              active={item.active}
              href={item.href}
              key={item.label}
            />
          );
        })}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
        <Link
          href="https://app.chromelot.com/signin"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-red-500 text-white"
        >
          Request a Demo
        </Link>
        <Link
          href="https://app.chromelot.com/signin"
          className="-mx-3 block rounded-lg px-2 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Log In
        </Link>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Chrome Lot</span>
              <Image
                src={"/logo/chromelotlogo.png"}
                className="h-8 w-auto"
                width={100}
                height={100}
                alt={""}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className=" py-6 justify-between flex flex-col">
                <div className="space-y-2 py-6">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      <button
                        type="button"
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-semibold leading-7 text-gray-900 ${
                          selectedMenu === item.label
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          setSelectedMenu(
                            selectedMenu === item.label ? "" : item.label
                          )
                        }
                      >
                        {item.label === "Pricing" ? (
                          <Link href="/pricing">
                            <span>{item.label}</span>
                          </Link>
                        ) : (
                          item.label
                        )}
                        {item.subMenuItems.length > 0 && (
                          <HiChevronDown
                            className={`h-6 w-6 transform ${
                              selectedMenu === item.label ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        )}
                      </button>
                      {selectedMenu === item.label && (
                        <div className="pl-6 mt-2">
                          {item.subMenuItems.map((subItem) => (
                            <div
                              key={subItem.label}
                              className="flex items-center space-x-1"
                            >
                              <subItem.icon size={subItem.size} />
                              <Link
                                href={subItem.href}
                                className="-mx-3 block rounded-lg px-3 py-2.5 font-normal text-base leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {subItem.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Request a Demo
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Navbar;
