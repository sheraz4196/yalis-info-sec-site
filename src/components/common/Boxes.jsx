import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Boxes({ title, data }) {
  return (
    <div className="max-container my-2.5 md:my-5">
      <h2 className="text-secondary text-center pb-5 mb-16">{title}</h2>
      <div className="flex flex-wrap gap-8">
        {data?.map((item, i) => {
          return (
            <Link
              key={i}
              href={item?.fields?.buttonLink || ""}
              target={item?.fields?.buttonTarget}
              className="box"
            >
              <div className="box-icon-circle">
                <Image
                  src={item?.fields?.icon?.fields?.file?.url || ""}
                  alt={item?.fields?.icon?.fields?.title || "icon"}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="box-title">{item?.fields?.title}</h3>
              <p className="box-sub-title">{item?.fields?.subTitle}</p>
              <p className="box-description">{item?.fields?.description}</p>
              <button className="box-btn">{item?.fields?.buttonText}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
