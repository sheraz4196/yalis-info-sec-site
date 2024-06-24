import Image from "next/image";
import React from "react";

export default function DetailsSection({ data }) {
  return (
    <section className="max-container py-8 md:py-16 my-2.5 md:my-5 flex flex-col gap-8 md:gap-16">
      {data?.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col-reverse md:flex-row even:md:flex-row-reverse items-center justify-between gap-8 md:gap-16"
          >
            <div className="w-full md:max-w-[50%]">
              <h2 className="mb-8 text-primary2">{item?.fields?.title}</h2>
              <p>{item?.fields?.description}</p>
            </div>
            {item?.fields?.image?.fields?.file?.url && (
              <div className="w-full md:max-w-[42%]">
                <Image
                  src={"https:" + item?.fields?.image?.fields?.file?.url || ""}
                  alt={item?.fields?.image?.fields?.title || "image"}
                  width={480}
                  height={320}
                  className={"w-full md:w-auto max-w-full"}
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
