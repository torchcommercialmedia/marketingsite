"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { ContactForm } from "@/utils/types/types";
import { postContactUs } from "@/utils/fetch/postContact";
import { useRouter } from "next/navigation";
import Router from "next/router";

type Props = {};

const ContactUs = (props: Props) => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setOnSubmit] = useState(false);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();
  const onSubmit: SubmitHandler<ContactForm> = (formData) => {
    setOnSubmit(true);

    try {
      postContactUs("/contact-uses?populate=*", formData);
      router.push("https://calendly.com/chromelot");
    } catch {
      throw new Error("Error");
    }
    // console.log('res', response);
    // window.location.href = `mailto:devjrl.programmer@gmail?subject=${formData.companyName}&body=Hi, my name is ${formData.firstName} ${formData.lastName}, ${formData.message} (${formData.email})`;
  };
  return (
    <section
      className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="contact-us"
    >
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-left">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Request a Demo
          </h2>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-10 max-w-2xl sm:mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  {...register("lastName")}
                  required
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ffocus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    disabled
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-2 pr-2 text-gray-400 sm:text-sm"
                  >
                    <option>US</option>
                  </select>
                </div>
                <input
                  {...register("phoneNumber")}
                  required
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-16 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company Name
              </label>
              <div className="mt-2.5">
                <input
                  {...register("companyName")}
                  required
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company Type
              </label>
              <div className="relative mt-2.5">
                <div className="block w-full rounded-md border-0 pr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6">
                  <label htmlFor="company-type" className="sr-only">
                    Company Type
                  </label>
                  <select
                    id="company-type"
                    name="company-type"
                    className="h-full rounded-md border-0 w-full bg-transparent py-2.5 bg-none pl-2 text-gray-900 outline-none sm:text-sm"
                    required
                  >
                    <option value="" disabled hidden>
                      Select Company Type
                    </option>
                    <option>Franchise Dealer</option>
                    <option>Independent Dealer</option>
                    <option>RV Dealer</option>
                    <option>Repair Shop</option>
                    <option>Tire Shop</option>
                    <option>Photography Company</option>
                    <option>Wrap Company</option>
                    <option>Mobile Detail Company</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register("message")}
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-red-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-red-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group> */}
          </div>
          <div className="mt-10">
            {!isSubmitting && (
              <button
                type="submit"
                className={classNames(
                  agreed ? "hover:bg-red-500 " : "bg-red-200",
                  "block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                )}
                disabled={!agreed}
              >
                Request a Demo
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
