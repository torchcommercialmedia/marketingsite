import Hero from "@/components/MainPage/Hero";
import Tools from "@/components/MainPage/Tools";

type PageProps = {
  children: React.ReactNode;
};

export default function Home({ children }: PageProps) {
  return (
    <main className="flex w-full flex-col">
      {children}
      <Hero />
      <Tools />
    </main>
  );
}
