import React from "react";

type Props = {};

const ExampleUses = (props: Props) => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center flex-col mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="font-bold text-3xl">Example Uses</h2>
      <div className="p-4"></div>
      <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-10 lg:mx-0 lg:max-w-none">
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Independent Dealers
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Auto Photography Companies
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Classic & Exotic Dealers
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Mobile Detail
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Wrap Shops
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Wheel Refinishing
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Independent Dealers
          </p>
        </div>
        <div className="rounded-xl border h-52 w-52 flex flex-col">
          <p className="flex-1 mx-auto mt-14">Image Here</p>
          <p className="h-12 border-t-2 text-center font-semibold">
            Independent Dealers
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
          <span className="hidden md:inline">
            Company saves up to $40,000 per year, per employee by working with
            us.
          </span>
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" /> Read our
            case study <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default ExampleUses;
