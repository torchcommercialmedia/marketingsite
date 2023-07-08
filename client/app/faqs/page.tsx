import React from "react";
import FAQs from "@/components/Faqs/FAQs";
import { fetchDataFromApi } from "@/utils/fetch/fetchIndex";
import { fetchFAQfromApi } from "@/utils/fetch/fetchFAQs";

type Props = {};

const page = async (props: Props) => {
  const params = "populate=deep";
  const data = await fetchFAQfromApi("/faq-pages?", params);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-black/50">
          <FAQs data={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
