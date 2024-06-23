import React from "react";
import Richtext from "../common/Richtext";

export default function WhyNeedSection({ data }) {
  return (
    <section class="max-container py-[30px] md:py-[60px] my-[30px] md:my-[60px]">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-[30px] lg:gap-[4%]">
        <div class="w-full text-center md:text-left">
          <h2 class="text-primary2 mb-[30px]">{data?.title}</h2>
          {data?.description && (
            <div class="rich-text list-checked">
              <Richtext data={data?.description} />
            </div>
          )}
        </div>
        {data?.image?.fields?.file?.url && (
          <div class="w-full lg:max-w-[41%]">
            <img
              src={data?.image?.fields?.file?.url}
              alt={"logo"}
              width={430}
              height={200}
              class={"w-full max-h-[700px]"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
