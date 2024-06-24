"use client";
import React, { useState } from "react";
import Richtext from "../common/Richtext";
import Link from "next/link";

export default function TypesList({ data }) {
  const [selectedId, setSelectedId] = useState(0);
  const [content, setContent] = useState(
    data?.find((item, index) => index === 0) || {}
  );

  const handleSelectId = (id) => {
    setSelectedId(id);
    setContent(data?.find((item, index) => index === id));
  };

  return (
    <>
      <div className="flex gap-1.5">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                selectedId === index
                  ? "bg-white"
                  : "bg-zinc-100 hover:bg-cyan-100"
              } w-full shadow-[0px_-8px_52px_rgba(50,68,80,0.1)] rounded-t-[8px] flex flex-col justify-center items-center cursor-pointer text-lg leading-[1.3] min-h-16 py-5 px-[15px] transition-[background-color 0.25s ease]`}
              onClick={() => handleSelectId(index)}
            >
              <div className="mb-5">
                <img
                  src={item?.fields?.icon?.fields?.file?.url}
                  alt="icon"
                  width={80}
                  height={80}
                />
              </div>
              <p className="font-extrabold text-xl text-blue">
                {item?.fields?.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="rounded-b-lg shadow-[0px_15px_52px_rgba(50,68,80,0.14)] bg-white py-16 w-full">
        <div className="w-[90%] mx-auto">
          <div className="mr-10">
            <h3 className="text-blue text-3xl mb-2.5">
              {content?.fields?.title}
            </h3>
            <div className="rich-text different-type-list-description">
              <Richtext data={content?.fields?.description} />
            </div>
            <Link href="#getQuote" className="btn1">
              Get a fast quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
