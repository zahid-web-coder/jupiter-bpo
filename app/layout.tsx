import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Jupiter BPO Services | Quality, Efficiency, Innovation",
    template: "%s | Jupiter BPO Services",
  },
  description:
    "Jupiter BPO Services — Premium BPO outsourcing, customer support, IT helpdesk, back office, and data management solutions from Bangalore & Gulbarga, Karnataka.",
  keywords: [
    "BPO services Bangalore",
    "outsourcing Karnataka",
    "customer support outsourcing",
    "IT helpdesk BPO",
    "back office services India",
    "data management BPO",
    "Jupiter BPO",
  ],
  authors: [{ name: "Jupiter BPO Services" }],
  openGraph: {
    title: "Jupiter BPO Services | Quality, Efficiency, Innovation",
    description:
      "Premium BPO outsourcing solutions — customer support, IT helpdesk, back office & data management from Karnataka.",
    type: "website",
    locale: "en_IN",
    siteName: "Jupiter BPO Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jupiter BPO Services",
    description: "Outsource smarter with Jupiter BPO Services.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
