import "./globals.css";
import { Outfit } from "next/font/google";

const mont = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Alexander Sitompul",
  description: "Alexander's Portfolio",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
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
