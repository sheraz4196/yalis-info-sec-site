"use client";
import React from "react";
import Richtext from "../common/Richtext";
import TypesList from "./TypesList";
import Link from "next/link";

export default function TypesSection({ data }) {
  return (
    <section class="max-container py-[30px] md:py-[60px] mb-[60px] mt-[10px] md:mt-[20px]">
      <h2 class="text-center text-primary2 pb-2.5 mb-[30px]">{data?.title}</h2>
      {data?.description && (
        <div class="rich-text different-types-description">
          <Richtext data={data?.description} />
        </div>
      )}
      {data?.TypesList?.length > 0 && (
        <div class="hidden md:block">
          <TypesList data={data?.list} />
        </div>
      )}
      <div class="flex flex-col md:hidden gap-[40px]">
        {data?.list?.map((item) => {
          return (
            <div class="type-list-item-wrap">
              <h3 class="text-[24px] text-center text-blue leading-[1.4] mb-[10px]">
                {item?.fields?.title}
              </h3>
              <div class="rich-text different-type-list-description">
                <Richtext data={item?.fields?.description} />
              </div>
              <Link href="#getQuote" class="btn1">
                Get a fast quote
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
