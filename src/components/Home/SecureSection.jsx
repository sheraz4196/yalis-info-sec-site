import Image from "next/image";
import React from "react";

export default function SecureSection({ data }) {
  return (
    <section className="max-container py-8 md:py-16 my-2.5 md:my-5 flex flex-col md:flex-row items-center justify-between gap-5 xl:gap-16">
      <div className="w-full">
        <Image
          src={"https:" + data?.image?.fields?.file?.url || ""}
          alt={data?.image?.fields?.title || "image"}
          width={500}
          height={320}
          className="rounded-md shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)] max-w-full w-full md:w-auto"
        />
      </div>
      <div className="w-full">
        <h2 className="mb-8 text-primary2">{data?.title}</h2>
        <p className="leading-[1.5]">{data?.description}</p>
      </div>
    </section>
  );
}
