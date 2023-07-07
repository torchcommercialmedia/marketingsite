import React from "react";
import FAQs from "@/components/Faqs/FAQs";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-black/50">
          <FAQs />
        </div>
      </div>
    </div>
  );
};

export default page;
