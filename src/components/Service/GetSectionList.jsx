"use client";
import React, { useState } from "react";
import Richtext from "../common/Richtext";
import Link from "next/link";
import Image from "next/image";

export default function GetSectionList({ data }) {
  const [selectedId, setSelectedId] = useState(0);
  const [content, setContent] = useState(data?.[0] || {});

  const handleSelectId = (id) => {
    setSelectedId(id);
    setContent(data?.[id]);
  };

  return (
    <>
      <div className="flex flex-row-reverse gap-1.5">
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            {item.fields && (
              <div
                className={`${
                  selectedId === index
                    ? "bg-blue cursor-default"
                    : "cursor-pointer bg-zinc-50"
                } w-full text-white rounded-t flex flex-col justify-center items-center text-lg min-h-16 p-2.5 text-center transition-[background-color_0.15s_ease-out]`}
                style={{
                  boxShadow:
                    "0 5px 15px 0 rgba(160,160,160,0.2), 0 15px 35px 0 rgba(50,50,93,0.2)",
                }}
                onClick={() => handleSelectId(index)}
              >
                {item?.fields?.service && (
                  <div
                    className={`w-max mx-auto rounded-[50px] text-xs mb-2 py-0.5 px-2.5 transition-[all_0.15s_ease-in-out]`}
                    style={{
                      backgroundColor:
                        selectedId === index
                          ? item?.fields?.serviceActiveBgColor ||
                            item?.fields?.serviceBgColor
                          : item?.fields?.serviceBgColor,
                      color:
                        selectedId === index
                          ? item?.fields?.serviceActiveColor || "white"
                          : "white",
                    }}
                  >
                    {item?.fields?.service}
                  </div>
                )}
                {item?.fields?.shortTitle && (
                  <p
                    className={`text-lg leading-[1.3] ${
                      selectedId === index ? "text-white" : "text-blue"
                    }`}
                  >
                    {item?.fields?.shortTitle}
                  </p>
                )}
                {item?.fields?.shortSubHeading && (
                  <p className="text-slate-40 text-lg">
                    {item?.fields?.shortSubHeading}
                  </p>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        className="rounded-b-sm bg-white py-16 w-full z-10 relative"
        style={{
          boxShadow:
            "0 5px 15px 0 rgba(0,0,0,0.07), 0 15px 35px 0 rgba(0,0,0,0.07)",
        }}
      >
        <div className="mb-5 w-4/5 mx-auto flex items-center justify-between gap-10">
          <div className="w-full">
            <h3 className="text-blue text-3xl">{content?.fields?.title}</h3>
            <p className="text-slate-40 text-2xl mb-2.5 font-extrabold">
              {content?.fields?.subHeading}
            </p>
            <div className="rich-text">
              <Richtext data={content?.fields?.description} />
            </div>
          </div>
          {content?.fields?.icon?.fields?.file?.url && (
            <div className="flex-shrink-0">
              <Image
                src={content?.fields?.icon?.fields?.file?.url}
                alt="icon"
                width={140}
                height={140}
              />
            </div>
          )}
        </div>
        <div className="w-[90%] mx-auto">
          {content?.fields?.list?.length > 0 && (
            <ul className="list-checked types-list mb-5 columns-2">
              {content?.fields?.list?.map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {content?.fields?.buttonText && (
            <Link
              href={content?.fields?.buttonLink || ""}
              target={content?.fields?.buttonTarget || "_self"}
              className="btn1"
            >
              {content?.fields?.buttonText}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
