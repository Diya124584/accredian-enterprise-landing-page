import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Accredian | Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Accredian delivers customized training programs in Data Science, Product Management, AI, and Leadership.",
  keywords: [
    "Corporate Training",
    "Enterprise Learning",
    "Data Science Courses",
    "Product Management Training",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise Learning",
    description: "Expert training solutions tailored for your organization's success.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
