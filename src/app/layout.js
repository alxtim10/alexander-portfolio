import MultiLayerParallax from "@/components/parallax/MultiLayerParallax";
import "./globals.css";
import { Outfit } from "next/font/google";

const mont = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Alexander Sitompul",
  description: "Alexander's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        {/* <MultiLayerParallax /> */}
        {children}
      </body>
    </html>
  );
}
