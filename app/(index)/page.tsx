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

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Tools />
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
