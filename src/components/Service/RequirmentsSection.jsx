import React from "react";
import Richtext from "../common/Richtext";

export default function RequirmentsSection({ data }) {
  return (
    <section className="bg-light py-8 md:py-16">
      <div className="max-container my-2.5 md:my-5 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-[4%]">
        {data?.image?.fields?.file?.url && (
          <div className="w-full lg:w-[41%]">
            <img
              src={data?.image?.fields?.file?.url}
              alt={"image"}
              width={500}
              height={320}
              className={"rounded-md w-full lg:w-auto"}
            />
          </div>
        )}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="mb-8 text-primary-dark">{data?.title}</h2>
          {data?.description && (
            <div className="rich-text list-checked types-list two-column-ul">
              <Richtext data={data?.description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
