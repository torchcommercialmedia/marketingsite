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

export default async function Home() {
  const hero = await fetchDataFromApi("/main-pages?populate[hero][populate]=*");
  const tools = await fetchDataFromApi(
    "/main-pages?populate[professional][populate]=professionalTools.img"
  );

  return (
    <main className="flex w-full flex-col">
      {hero && <Hero hero={hero.data[0].attributes.hero!} />}
      {tools && <Tools tools={tools.data[0].attributes.professional!} />}
      <DealersAndServiceProvider />
      <ToolsForDealers />
      <ServiceCompany />
      <Uses />
      <BuiltWithAi />
      <Integration />
      <Testimonials />
      <Footer />
    </main>
  );
}
