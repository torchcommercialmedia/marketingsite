import Hero from "@/components/MainPage/Hero";
import Tools from "@/components/MainPage/Tools";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Tools />
    </main>
  );
}
