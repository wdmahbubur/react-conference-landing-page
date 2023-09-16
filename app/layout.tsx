import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Conference",
  description: "The official website of React Conference",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative">
          <Navbar />
        </header>
        <main className="container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
