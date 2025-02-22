import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 // Adjust path based on location

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Better.com Clone",
  description: "A replica of Better.com website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
