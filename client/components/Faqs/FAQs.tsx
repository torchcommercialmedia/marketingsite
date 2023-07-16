"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiMagnifyingGlass, HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import qs from "qs";
import { ResponseFAQs } from "@/utils/types/types";
import { fetchFAQfromApi } from "@/utils/fetch/fetchFAQs";

type Props = {
  data: ResponseFAQs;
};

const FAQs = ({ data }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [faqsData, setFaqsData] = useState<ResponseFAQs>(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ search: string }>();

  if (!data?.data[0]) return <></>;
  const faqs = faqsData.data[0].attributes.faqList;

  const onSubmit: SubmitHandler<{ search: string }> = async ({ search }) => {
    setLoading(true);
    const query = qs.stringify(
      {
        // populate: ["faqList.faq"],
        filters: {
          faqs: {
            question: {
              $contains: "pictures",
            },
            answer: {
              $contains: "per car",
            },
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const onFetch = await fetchFAQfromApi("/faq-pages?", query);
    if (onFetch.data) {
      setFaqsData(onFetch);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          FAQs
        </h2>
        <form
          action="#"
          // method="POST"
          className="w-full max-w-lg lg:max-w-xs"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="search" className="sr-only">
            search
          </label>
          <div className="relative text-gray-400 focus-within:text-gray-900">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex">
              <input
                {...register("search")}
                id="search"
                className="block w-full rounded-md border bg-white py-1.5 pl-10 pr-3 text-gray-900 sm:text-sm sm:leading-6"
                placeholder="Search all FAQs"
                type="text"
                name="search"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-14 border-t border-black/50"></div>
      <div className="mt-10 space-y-20 divide-y divide-gray/50">
        {faqs.map((item) => (
          <div key={item.title}>
            <h2 className="text-2xl mt-8 font-bold leading-10 tracking-tight text-gray-900">
              {item.title}
            </h2>
            {item.faqs.map((next) => (
              <Disclosure as="div" key={next.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="text-base font-semibold leading-7 text-gray-900">
                          {next.question}
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
                      <p className="text-base leading-7 text-gray-500">
                        {next.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
