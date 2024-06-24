import React from "react";
import Richtext from "../common/Richtext";
import GetSectionList from "./GetSectionList";
import Link from "next/link";

export default function GetSection({ data }) {
  return (
    <section class="max-container py-[30px] md:py-[60px] my-2.5 md:my-5">
      <h2 class="text-secondary text-center pb-5 mb-16">{data?.title}</h2>
      {data?.list?.length > 0 && (
        <div class="hidden md:block">
          <GetSectionList data={data?.list} />
        </div>
      )}
      {data?.list?.length > 0 && (
        <div class="flex flex-col-reverse gap-10 md:hidden get-section-list">
          {data?.list?.map((item) => {
            return (
              <div class="get-section-list-item">
                {item?.fields?.icon?.fields?.file?.url && (
                  <img
                    src={item?.fields?.icon?.fields?.file?.url}
                    alt="icon"
                    width={140}
                    height={140}
                    class="mx-auto mb-8"
                  />
                )}
                <h3 class="text-blue text-2xl leading-[1.4] text-center">
                  {item?.fields?.title}
                </h3>
                <p class="text-[#324450] text-2xl mb-2.5 leading-[1.4] font-extrabold text-center">
                  {item?.fields?.subHeading}
                </p>
                <div class="rich-text mb-2.5 text-lg">
                  <Richtext data={item?.fields?.description} />
                </div>
                {item?.fields?.list?.length > 0 && (
                  <ul class="list-checked types-list mb-5">
                    {item?.fields?.list?.map((listItem, i) => {
                      return <li class="text-lg leading-[2.0]">{listItem}</li>;
                    })}
                  </ul>
                )}
                {item?.buttonText && (
                  <div class="text-center">
                    <Link
                      href={item?.buttonLink || ""}
                      target={item?.buttonTarget || "_self"}
                      class="btn1"
                    >
                      {item?.buttonText}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
