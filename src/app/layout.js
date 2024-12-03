import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "DateOnDemand.in | Your Perfect Date, Anytime",
  description:
    "DateOnDemand.in is your go-to platform for hiring a professional companion or date, available on-demand for any occasion. Experience personalized, memorable moments at your convenience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
