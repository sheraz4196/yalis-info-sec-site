import React from "react";
import bgImg from "../../../public/images/bg-dots.svg";
import Richtext from "./Richtext";
import Image from "next/image";

export default function QualificationsSection({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg.src})` }}
      class="bg-light bg-[center_bottom] bg-no-repeat py-[30px] md:py-[60px]"
    >
      <div class="max-container my-2.5 md:my-5 text-center">
        <h2 class="mb-8 text-primary2">{data?.title}</h2>
        <div class="pb-5 mb-16 text-xl font-[300]">
          <div class="rich-text">
            <Richtext data={data?.description} />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-[30px]">
        {data?.images1?.length > 0 && (
          <div class="horizontal-scrolling">
            <div class="horizontal-scrolling-inner">
              {data?.images1?.map((item) => {
                return (
                  <div>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
              {data?.images1?.map((item) => {
                return (
                  <div>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {data?.images2?.length > 0 && (
          <div class="horizontal-scrolling horizontal-scrolling-reverse">
            <div class="horizontal-scrolling-inner">
              {data?.images2?.map((item) => {
                return (
                  <div>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
              {data?.images2?.map((item) => {
                return (
                  <div>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {data?.images3?.length > 0 && (
          <div class="horizontal-scrolling">
            <div class="horizontal-scrolling-inner">
              {data?.images3?.map((item) => {
                return (
                  <div>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
              {data?.images3?.map((item) => {
                return (
                  <div>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
