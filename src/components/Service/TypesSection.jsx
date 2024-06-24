"use client";
import React from "react";
import Richtext from "../common/Richtext";
import TypesList from "./TypesList";
import Link from "next/link";

export default function TypesSection({ data }) {
  return (
    <section class="max-container py-8 md:py-16 mb-16 mt-2.5 md:mt-5">
      <h2 class="text-center text-primary2 pb-2.5 mb-8">{data?.title}</h2>
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
      <div class="flex flex-col md:hidden gap-10">
        {data?.list?.map((item) => {
          return (
            <div class="type-list-item-wrap">
              <h3 class="text-2xl text-center text-blue leading-[1.4] mb-2.5">
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
