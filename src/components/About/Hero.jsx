import React from "react";
// import bgImg from "../../../public/images/about-hero-bg.jpg";
import Link from "next/link";

export default function Hero({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${data?.bgImage?.fields?.file?.url})` }}
      className={`bg-center bg-no-repeat bg-cover bg-gray-cement`}
    >
      <div className="max-container pt-20 md:pt-24 lg:pt-16">
        <div className="pt-5 pb-12 md:py-36 relative text-center">
          <h1 className="text-white">{data?.title}</h1>
          <p className="text-gray-cement mb-8">{data?.description}</p>
          {data?.buttonText && (
            <Link
              href={data?.buttonLink || ""}
              target={data?.buttonTarget}
              className="btn1"
            >
              {data?.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
