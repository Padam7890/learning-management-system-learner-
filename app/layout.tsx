import type { Metadata } from "next";
//google font import
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "LMS Systen",
  description: "Learning platfrom",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  //variable 
  variable: "--poppins-font",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
