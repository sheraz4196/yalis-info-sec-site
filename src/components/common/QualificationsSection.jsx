import React from "react";
import bgImg from "../../../public/images/bg-dots.svg";
import Richtext from "./Richtext";
import Image from "next/image";

export default function QualificationsSection({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-light bg-[center_bottom] bg-no-repeat py-8 md:py-16"
    >
      <div className="max-container my-2.5 md:my-5 text-center">
        <h2 className="mb-8 text-primary2">{data?.title}</h2>
        <div className="pb-5 mb-16 text-xl font-light">
          <div className="rich-text">
            <Richtext data={data?.description} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {data?.images1?.length > 0 && (
          <div className="horizontal-scrolling">
            <div className="horizontal-scrolling-inner">
              {data?.images1?.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
              {data?.images1?.map((item, index) => {
                return (
                  <div key={index}>
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
          <div className="horizontal-scrolling horizontal-scrolling-reverse">
            <div className="horizontal-scrolling-inner">
              {data?.images2?.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
              {data?.images2?.map((item, index) => {
                return (
                  <div key={index}>
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
          <div className="horizontal-scrolling">
            <div className="horizontal-scrolling-inner">
              {data?.images3?.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={"https:" + item?.fields?.file?.url}
                      alt={item?.fields?.title || "image"}
                      width={200}
                      height={120}
                    />
                  </div>
                );
              })}
              {data?.images3?.map((item, index) => {
                return (
                  <div key={index}>
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
