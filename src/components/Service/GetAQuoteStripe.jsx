import React from "react";
import bgImg from "../../../public/images/home-hero-bg.jpg";
import Link from "next/link";

export default function GetAQuoteStripe({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-center bg-cover bg-no-repeat py-8"
    >
      <div className="max-container flex flex-col md:flex-row items-center justify-center gap-5">
        <h3 className="text-white text-center md:text-left">{data?.title}</h3>
        {data?.button?.title && (
          <Link
            href={data?.button?.link || ""}
            target={data?.button?.target}
            className="btn2"
          >
            {data?.button?.title}
          </Link>
        )}
      </div>
    </section>
  );
}
