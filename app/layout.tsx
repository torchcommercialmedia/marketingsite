import "./globals.css";
import { Figtree } from "next/font/google";
import Navbar from "@/components/MainPage/Navbar";

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
    <html lang="en">
      <body className={font.className}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
