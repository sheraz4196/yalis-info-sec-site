import React from "react";
import Richtext from "../common/Richtext";
import GetSectionList from "./GetSectionList";
import Link from "next/link";

export default function GetSection({ data }) {
  return (
    <section class="max-container py-[30px] md:py-[60px] my-[10px] md:my-[20px]">
      <h2 class="text-secondary text-center pb-[20px] mb-[60px]">
        {data?.title}
      </h2>
      {data?.list?.length > 0 && (
        <div class="hidden md:block">
          <GetSectionList data={data?.list} />
        </div>
      )}
      {data?.list?.length > 0 && (
        <div class="flex flex-col-reverse gap-[40px] md:hidden get-section-list">
          {data?.list?.map((item) => {
            return (
              <div class="get-section-list-item">
                {item?.fields?.icon?.fields?.file?.url && (
                  <img
                    src={item?.fields?.icon?.fields?.file?.url}
                    alt="icon"
                    width={140}
                    height={140}
                    class="mx-auto mb-[30px]"
                  />
                )}
                <h3 class="text-blue text-[24px] leading-[1.4] text-center">
                  {item?.fields?.title}
                </h3>
                <p class="text-[#324450] text-[24px] mb-[10px] leading-[1.4] font-[800] text-center">
                  {item?.fields?.subHeading}
                </p>
                <div class="rich-text mb-[10px] text-[18px]">
                  <Richtext data={item?.fields?.description} />
                </div>
                {item?.fields?.list?.length > 0 && (
                  <ul class="list-checked types-list mb-[20px]">
                    {item?.fields?.list?.map((listItem, i) => {
                      return (
                        <li class="text-[18px] leading-[2.0]">{listItem}</li>
                      );
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
