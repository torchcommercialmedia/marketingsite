// "use client";
import BuiltWithAi from "@/components/MainPage/BuiltWithAi";
import DealersAndServiceProvider from "@/components/MainPage/DealersAndServiceProvider";
import Uses from "@/components/MainPage/Uses";
import Hero from "@/components/MainPage/Hero";
import Integration from "@/components/MainPage/Integration";
import Testimonials from "@/components/MainPage/Testimonials";
import ServiceCompany from "@/components/MainPage/ServiceCompany";
import Tools from "@/components/MainPage/Tools";
import ToolsForDealers from "@/components/MainPage/ToolsForDealers";
import { fetchDataFromApi } from "@/utils/fetch/fetchIndex";
import ContactUs from "@/components/MainPage/ContactUs";
import { Suspense } from "react";

export default async function Home() {
  const params = "populate=deep";
  const data = await fetchDataFromApi("/main-pages?", params);

  const hero = data?.data[0]?.attributes?.hero;
  const tools = data?.data[0]?.attributes?.professional;
  const integration = data?.data[0]?.attributes?.integration;
  const dealers = data?.data[0]?.attributes.dealers;
  const uses = data?.data[0]?.attributes?.uses;
  const ai = data?.data[0]?.attributes?.ai;
  const nativeIntegration = data?.data[0]?.attributes?.nativeIntegration;
  const testimonial = data?.data[0]?.attributes?.testimonials;

  return (
    <main className="flex w-full flex-col">
      <Suspense fallback={<p>Loading hero...</p>}>
        {hero && <Hero hero={hero} />}
      </Suspense>
      <Suspense fallback={<p>Loading tools...</p>}>
        {tools && <Tools tools={tools} />}
      </Suspense>
      <Suspense fallback={<p>Loading integration...</p>}>
        {integration && <DealersAndServiceProvider integration={integration} />}
      </Suspense>
      <Suspense fallback={<p>Loading dealers...</p>}>
        {dealers && <ToolsForDealers dealers={dealers} />}
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <ServiceCompany />
      </Suspense>
      <Suspense fallback={<p>Loading uses...</p>}>
        {uses && <Uses uses={uses} />}
      </Suspense>
      <Suspense fallback={<p>Loading ai...</p>}>
        {ai && <BuiltWithAi ai={ai} />}
      </Suspense>
      <Suspense fallback={<p>Loading native integration...</p>}>
        {nativeIntegration && (
          <Integration nativeIntegration={nativeIntegration} />
        )}
      </Suspense>
      <Suspense fallback={<p>Loading testimonial...</p>}>
        {testimonial && <Testimonials testimonial={testimonial} />}
      </Suspense>
    </main>
  );
}
