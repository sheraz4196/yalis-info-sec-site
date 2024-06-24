import React from "react";
// import bgImg from "../../../public/images/about-hero-bg.jpg";
import Link from "next/link";

export default function Hero({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${data?.bgImage?.fields?.file?.url})` }}
      class={`bg-center bg-no-repeat bg-cover bg-gray-cement`}
    >
      <div class="max-container pt-20 md:pt-24 lg:pt-16">
        <div class="pt-5 pb-12 md:py-36 relative text-center">
          <h1 class="text-white">{data?.title}</h1>
          <p class="text-gray-cement mb-8">{data?.description}</p>
          {data?.buttonText && (
            <Link
              href={data?.buttonLink || ""}
              target={data?.buttonTarget}
              class="btn1"
            >
              {data?.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
