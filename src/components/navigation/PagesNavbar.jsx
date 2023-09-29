import Link from "next/link";
import React from "react";

const PagesNavbar = () => {
  return (
    <section className="p-10 lg:p-20 font-outfit tracking-wider">
      <Link href="/">
        <h1 className="font-semibold text-lg cursor-pointer text-center lg:text-left">
          alexander timotius crespo sitompul
        </h1>
      </Link>
      <h1 className="lg:hidden text-center mt-10 text-2xl">Projects</h1>
    </section>
  );
};

export default PagesNavbar;
