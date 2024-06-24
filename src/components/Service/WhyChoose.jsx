import React from "react";
import Image from "next/image";
export default function WhyChoose({ data }) {
  return (
    <section className="bg-primary-rgb py-8 md:py-16">
      <div className="max-container my-2.5 md:my-5">
        <h2 className="text-white text-center pb-2.5 md:pb-5 mb-8 md:mb-16">
          {data?.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.cards?.map((item) => {
            return (
              <div className="w-full bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg text-center p-8 h-full">
                {item?.fields?.image?.fields?.file?.url && (
                  <Image
                    src={item?.fields?.image?.fields?.file?.url}
                    alt="icon"
                    width={100}
                    height={100}
                    className={"mx-auto mb-5"}
                  />
                )}
                <h3 className="mb-5">{item?.fields?.title}</h3>
                <p className="text-brown-40">{item?.fields?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
