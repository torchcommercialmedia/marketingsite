import DealersAndServiceProvider from "@/components/MainPage/DealersAndServiceProvider";
import Hero from "@/components/MainPage/Hero";
import Tools from "@/components/MainPage/Tools";
import ToolsForDealers from "@/components/MainPage/ToolsForDealers";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Tools />
      <DealersAndServiceProvider />
      <ToolsForDealers />
    </main>
  );
}
