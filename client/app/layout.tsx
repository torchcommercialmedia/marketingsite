import "./globals.css";
import { Figtree } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainPage/Footer";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Chrome Lot - Next-Gen Vehicle Merchandising & Recon Management",
  description: "Vehicle photos, reconditioning and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-white/50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
