import Header from "@src/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@src/components/navigation/Navigation";
import Register from "@src/components/register/Register";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Spotify",
  description: "Fake spotify for educational purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-2">
          <Navigation />
          <div className="w-full flex flex-col">
            <Header />
            <main className="bg-[#121212] h-screen">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
