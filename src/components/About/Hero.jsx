import React from "react";
// import bgImg from "../../../public/images/about-hero-bg.jpg";
import Link from "next/link";

export default function Hero({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${data?.bgImage?.fields?.file?.url})` }}
      class={`bg-center bg-no-repeat bg-cover bg-[#324450]`}
    >
      <div class="max-container pt-[80px] md:pt-[100px] lg:pt-[70px]">
        <div class="pt-[20px] pb-[50px] md:py-[150px] relative text-center">
          <h1 class="text-white">{data?.title}</h1>
          <p class="text-[#a2b7c5] mb-[30px]">{data?.description}</p>
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
