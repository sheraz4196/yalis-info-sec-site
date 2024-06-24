import Seo from "@/components/common/seo";
import Link from "next/link";
import bgImg from "../../public/images/home-hero-bg.jpg";
import * as React from "react";

const NotFoundPage = () => (
  <>
    <Seo title={"404 | Yalis"} />
    <section
      style={{ backgroundImage: `url(${bgImg?.src})` }}
      className={`bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center`}
    >
      <main className="max-container text-center py-24 md:pt-[150px] text-white">
        <h1 className="mb-5">The page you were looking for doesn't exist</h1>
        <p className="text-[#93ABBB] mb-2.5 text-lg md:text-2xl">
          You may have mistyped the address or the page may have moved.
        </p>
        <p className="text-[#93ABBB] mb-2.5 text-lg md:text-2xl">
          Choose a link below to get to back Yalis.
        </p>
        <div className="flex items-center justify-center w-full gap-10 text-lg md:text-2xl underline my-5">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="text-[#93ABBB]">© Yalis.com. All rights reserved.</p>
      </main>
    </section>
  </>
);

export default NotFoundPage;
