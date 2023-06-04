import Hero from "@/components/MainPage/Hero";
import Tools from "@/components/MainPage/Tools";

interface IndexProp {
  children: React.ReactNode;
}

export default function Home({ children }: IndexProp) {
  return (
    <main className="flex w-full flex-col">
      {children}
      <Hero />
      <Tools />
    </main>
  );
}
