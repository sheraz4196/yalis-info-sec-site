"use client";
import React from "react";
import Richtext from "../common/Richtext";
import TypesList from "./TypesList";
import Link from "next/link";

export default function TypesSection({ data }) {
  return (
    <section className="max-container py-8 md:py-16 mb-16 mt-2.5 md:mt-5">
      <h2 className="text-center text-primary-dark pb-2.5 mb-8">
        {data?.title}
      </h2>
      {data?.description && (
        <div className="rich-text different-types-description">
          <Richtext data={data?.description} />
        </div>
      )}
      {data?.TypesList?.length > 0 && (
        <div className="hidden md:block">
          <TypesList data={data?.list} />
        </div>
      )}
      <div className="flex flex-col md:hidden gap-10">
        {data?.list?.map((item, index) => {
          return (
            <div className="type-list-item-wrap" key={index}>
              <h3 className="text-2xl text-center text-blue mb-2.5">
                {item?.fields?.title}
              </h3>
              <div className="rich-text different-type-list-description">
                <Richtext data={item?.fields?.description} />
              </div>
              <Link href="#getQuote" className="btn1">
                Get a fast quote
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
