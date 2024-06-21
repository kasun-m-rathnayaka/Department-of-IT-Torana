import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USJ Department of IT Thorana",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <main className="dark">{children}</main>
      </body>
    </html>
  );
}
