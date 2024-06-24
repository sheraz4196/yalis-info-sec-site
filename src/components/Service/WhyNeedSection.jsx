import React from "react";
import Richtext from "../common/Richtext";

export default function WhyNeedSection({ data }) {
  return (
    <section className="max-container py-8 md:py-16 my-8 md:my-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-[4%]">
        <div className="w-full text-center md:text-left">
          <h2 className="text-primary2 mb-8">{data?.title}</h2>
          {data?.description && (
            <div className="rich-text list-checked">
              <Richtext data={data?.description} />
            </div>
          )}
        </div>
        {data?.image?.fields?.file?.url && (
          <div className="w-full lg:max-w-[41%]">
            <img
              src={data?.image?.fields?.file?.url}
              alt={"logo"}
              width={430}
              height={200}
              className={"w-full max-h-[700px]"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
