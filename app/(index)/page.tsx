import BuiltWithAi from "@/components/MainPage/BuiltWithAi";
import DealersAndServiceProvider from "@/components/MainPage/DealersAndServiceProvider";
import ExampleUses from "@/components/MainPage/ExampleUses";
import Hero from "@/components/MainPage/Hero";
import ServiceCompany from "@/components/MainPage/ServiceCompany";
import Tools from "@/components/MainPage/Tools";
import ToolsForDealers from "@/components/MainPage/ToolsForDealers";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Tools />
      <DealersAndServiceProvider />
      <ToolsForDealers />
      <ServiceCompany />
      <ExampleUses />
      <BuiltWithAi />
    </main>
  );
}
