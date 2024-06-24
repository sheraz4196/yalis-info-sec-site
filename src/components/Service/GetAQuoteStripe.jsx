import React from "react";
import bgImg from "../../../public/images/home-hero-bg.jpg";
import Link from "next/link";

export default function GetAQuoteStripe({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg.src})` }}
      class="bg-center bg-cover bg-no-repeat py-[30px]"
    >
      <div class="max-container flex flex-col md:flex-row items-center justify-center gap-5">
        <h3 class="text-white text-center md:text-left">{data?.title}</h3>
        {data?.button?.title && (
          <Link
            href={data?.button?.link || ""}
            target={data?.button?.target}
            class="btn2"
          >
            {data?.button?.title}
          </Link>
        )}
      </div>
    </section>
  );
}
