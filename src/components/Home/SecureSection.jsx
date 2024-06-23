import Image from "next/image";
import React from "react";

export default function SecureSection({ data }) {
  return (
    <section className="max-container py-[30px] md:py-[60px] my-[10px] md:my-[20px] flex flex-col md:flex-row items-center justify-between gap-[20px] xl:gap-[60px]">
      <div className="w-full">
        <Image
          src={"https:" + data?.image?.fields?.file?.url || ""}
          alt={data?.image?.fields?.title || "image"}
          width={500}
          height={320}
          className="rounded-[5px] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)] max-w-full w-full md:w-auto"
        />
      </div>
      <div className="w-full">
        <h2 className="mb-[30px] text-primary2">{data?.title}</h2>
        <p className="leading-[1.5]">{data?.description}</p>
      </div>
    </section>
  );
}
