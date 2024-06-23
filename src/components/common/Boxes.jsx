import Link from "next/link";
import React from "react";

export default function Boxes({ title, data }) {
  return (
    <div>
      <div class="max-container my-[10px] md:my-[20px]">
        <h2 class="text-secondary text-center pb-[20px] mb-[60px]">{title}</h2>
        <div class="flex flex-wrap gap-[30px]">
          {data?.map((item, i) => {
            return (
              <Link
                key={i}
                href={item?.fields?.buttonLink || ""}
                target={item?.fields?.buttonTarget}
                class="box"
              >
                <div class="box-icon-circle">
                  <img
                    src={item?.fields?.icon?.fields?.file?.url || ""}
                    alt={item?.fields?.icon?.fields?.title || "icon"}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 class="box-title">{item?.fields?.title}</h3>
                <p class="box-sub-title">{item?.fields?.subTitle}</p>
                <p class="box-description">{item?.fields?.description}</p>
                <button class="box-btn">{item?.fields?.buttonText}</button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
