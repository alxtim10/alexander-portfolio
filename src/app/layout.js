import "./globals.css";
import { NTR } from "next/font/google";

const mont = NTR({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Alexander's Portfolio",
  description: "Alexander Sitompul Portfolio Website",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    images: 'https://cdn.discordapp.com/attachments/782122613929148436/1157318953203413032/ogImage.png?ex=65182cc4&is=6516db44&hm=48fd63e62be5b3b638c0a91a7e422342a9e3e06cd83b6aee8a5f018b2a1d7942&',
    url: 'https://imotioes.netlify.app',
    type: 'website',
    title: "Alexander's Portfolio",
    description: "Alexander Sitompul Portfolio Website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexander's Portfolio",
    description: "Alexander Sitompul Portfolio Website",
    images: ['https://cdn.discordapp.com/attachments/782122613929148436/1157318953203413032/ogImage.png?ex=65182cc4&is=6516db44&hm=48fd63e62be5b3b638c0a91a7e422342a9e3e06cd83b6aee8a5f018b2a1d7942&'],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        {children}
      </body>
    </html>
  );
}
