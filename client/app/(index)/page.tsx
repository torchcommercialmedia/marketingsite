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
  const [hero, tools] = await Promise.all([
    fetchDataFromApi("/main-pages?populate[hero][populate]=*"),
    fetchDataFromApi(
      "/main-pages?populate[professional][populate]=professionalTools.img"
    ),
  ]);
  return (
    <main className="flex w-full flex-col">
      <Suspense fallback={<p>Loading hero...</p>}>
        <Hero hero={hero.data[0].attributes.hero!} />
      </Suspense>
      <Suspense fallback={<p>Loading tools...</p>}>
        <Tools tools={tools.data[0].attributes.professional!} />
      </Suspense>
      <DealersAndServiceProvider />
      <ToolsForDealers />
      <ServiceCompany />
      <Uses />
      <BuiltWithAi />
      <Integration />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}
