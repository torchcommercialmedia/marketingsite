"use client";
import BuiltWithAi from "@/components/MainPage/BuiltWithAi";
import DealersAndServiceProvider from "@/components/MainPage/DealersAndServiceProvider";
import Uses from "@/components/MainPage/Uses";
import Footer from "@/components/MainPage/Footer";
import Hero from "@/components/MainPage/Hero";
import Integration from "@/components/MainPage/Integration";
import Testimonials from "@/components/MainPage/Testimonials";
import ServiceCompany from "@/components/MainPage/ServiceCompany";
import Tools from "@/components/MainPage/Tools";
import ToolsForDealers from "@/components/MainPage/ToolsForDealers";
import { fetchDataFromApi } from "@/utils/fetch/fetchIndex";
import ContactUs from "@/components/MainPage/ContactUs";
import { ResponseData } from "@/utils/types/types";
import { Suspense } from "react";

export default async function Home() {
  const [
    hero,
    tools,
    integration,
    dealers,
    uses,
    ai,
    nativeIntegration,
    testimonial,
  ] = await Promise.all([
    fetchDataFromApi("/main-pages?populate[hero][populate]=*"),
    fetchDataFromApi(
      "/main-pages?populate[professional][populate]=professionalTools.img"
    ),
    fetchDataFromApi("/main-pages?populate[integration][populate]=*"),
    fetchDataFromApi("/main-pages?populate[dealers][populate]=*"),
    fetchDataFromApi("/main-pages?populate[uses][populate]=*"),
    fetchDataFromApi("/main-pages?populate[ai][populate]=*"),
    fetchDataFromApi("/main-pages?populate[nativeIntegration][populate]=*"),
    fetchDataFromApi("/main-pages?populate[testimonials][populate]=*"),
  ]);
  return (
    <main className="flex w-full flex-col">
      <Suspense fallback={<p>Loading hero...</p>}>
        <Hero hero={hero.data[0].attributes.hero!} />
      </Suspense>
      <Suspense fallback={<p>Loading tools...</p>}>
        <Tools tools={tools.data[0].attributes.professional!} />
      </Suspense>
      <Suspense fallback={<p>Loading integration...</p>}>
        <DealersAndServiceProvider
          integration={integration.data[0].attributes.integration!}
        />
      </Suspense>
      <Suspense fallback={<p>Loading dealers...</p>}>
        <ToolsForDealers dealers={dealers.data[0].attributes.dealers!} />
      </Suspense>
      <ServiceCompany />
      <Suspense fallback={<p>Loading uses...</p>}>
        <Uses uses={uses.data[0].attributes.uses!} />
      </Suspense>
      <Suspense fallback={<p>Loading ai...</p>}>
        <BuiltWithAi ai={ai.data[0].attributes.ai!} />
      </Suspense>
      <Suspense fallback={<p>Loading native integration...</p>}>
        <Integration
          nativeIntegration={
            nativeIntegration.data[0].attributes.nativeIntegration!
          }
        />
      </Suspense>
      <Suspense fallback={<p>Loading testimonial...</p>}>
        <Testimonials
          testimonial={testimonial.data[0].attributes.testimonials!}
        />
      </Suspense>
      <ContactUs />
      <Footer />
    </main>
  );
}
