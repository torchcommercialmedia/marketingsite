"use client";

import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Navigation from "./Navigation";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Product",
        active: pathname === "/search",
        href: "/product",
      },
      {
        label: "Uses",
        active: pathname === "/search",
        href: "/uses",
      },
      {
        label: "Pricing",
        active: pathname === "/search",
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
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Chromelot</span>
          <Image
            src={"/logo/chromelotlogo.png"}
            className="h-8 w-auto"
            width={100}
            height={100}
            alt={""}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <HiBars3 className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {routes.map((item) => (
          <Navigation
            label={item.label}
            active={item.active}
            href={item.href}
            key={item.label}
          ></Navigation>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
        <a
          href="#"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Request a Demo
        </a>
        <a
          href="#"
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Sign Up
        </a>
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={"/logo/chromelotlogo.png"}
                className="h-8 w-auto"
                width={100}
                height={100}
                alt={""}
              />
            </a>
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
              <div className="space-y-2 py-6">
                {routes.map((item) => (
                  <Navigation
                    label={item.label}
                    active={item.active}
                    href={item.href}
                    key={item.label}
                  ></Navigation>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Navbar;
