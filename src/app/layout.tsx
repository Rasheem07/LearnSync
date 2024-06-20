import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import SideNav from "@/components/sideNav";
import ReactqueryProvider from "@/components/providers/queryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learnsync - AI driven learning platform",
  description: "Learning platform with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactqueryProvider>
        <body className={inter.className}>
          <Navbar />
          <div className="font-sans w-full flex flex-row transition-transform bg-slate-100 min-h-screen max-screen">
            <SideNav />
            {children}
          </div>
        </body>
      </ReactqueryProvider>
    </html>
  );
}
