import React from "react";
import Richtext from "../common/Richtext";

export default function WhatSection({ data }) {
  return (
    <section class="bg-light py-[30px] md:py-[60px]">
      <div class="max-container my-[10px] md:my-[20px] flex flex-col md:flex-row items-center justify-between gap-[50px]">
        {data?.image?.fields?.file?.url && (
          <div class="w-full md:w-[calc(41%-25px)]">
            <img
              src={data?.image?.fields?.file?.url}
              alt={data?.image?.fields?.title}
              width={500}
              height={320}
              class={"rounded-[5px]"}
            />
          </div>
        )}
        <div class="w-full md:w-[calc(59%-25px)]">
          <h2 class="text-primary2 mb-[30px]">{data?.title}</h2>
          {data?.description && (
            <div class="rich-text">
              <Richtext data={data?.description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
