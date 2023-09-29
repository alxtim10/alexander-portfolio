
import { Outfit } from "next/font/google";
const mont = Outfit({ subsets: ["latin"] });

export default function ShopLayout({ children }) {
    return (
      <>
        <main className={mont.className}>
          {children}
        </main>
      </>
    );
  }
  