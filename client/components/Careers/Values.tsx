"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { Testimonial } from "./Testimonial";

type Props = {};

const Values = (props: Props) => {
  const faqs = [
    {
      question: "Treat People Well?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Treat People So Well?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Treat People Why Well?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ];
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Our Values
          </h2>
          <dl className="mt-10 space-y-6 divide-y flex justify-end divide-white/10">
            <div className="w-full sm:w-[50%] space-y-4 py-8">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="p-3 w-full border border-white/10 items-center"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <HiMinusSmall
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <HiPlusSmall
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </dl>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold text-end leading-10 tracking-tight text-white">
            Why Work Here
          </h2>
          <dl className="mt-10 space-y-6 divide-y flex justify-start divide-white/10">
            <div className="w-full sm:w-[50%] space-y-4 mt-8">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="p-3 w-full border border-white/10 items-center"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <HiMinusSmall
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <HiPlusSmall
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </dl>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            What People Say About Working Here
          </h2>
          <dl className="mt-10 space-y-6 divide-y flex justify-end divide-white/10">
            <div className="w-full sm:w-[50%] space-y-4 py-8">
              <Testimonial
                id="testimonial-from-tommy-stroman"
                author={{
                  name: "Tommy Stroman",
                  role: "Front-end developer",
                  image:
                    "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
                }}
              />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Values;
