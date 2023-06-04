import Hero from "@/components/MainPage/Hero";

type PageProps = {
  children: React.ReactNode;
};

export default function Home({ children }: PageProps) {
  return (
    <main className="flex w-full">
      {children}
      <Hero />
    </main>
  );
}
