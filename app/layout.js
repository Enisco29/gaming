import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Gaming",
  description: "Gaming website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} mx-[50px]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
