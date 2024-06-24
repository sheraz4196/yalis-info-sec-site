"use client";
import Link from "next/link";
import React from "react";
import { calculateReadingTime } from "../common/calculateReadingTime";

export default function BlogCards({ data, relatedBlogs }) {
  return (
    <section
      class={`bg-light ${
        relatedBlogs ? "pb-[30px] md:pb-[60px]" : "py-[30px] md:py-[60px]"
      }`}
    >
      <div class={`max-container ${relatedBlogs ? "" : "my-2.5 md:my-5"}`}>
        {relatedBlogs && <h2 class="text-primary2 mb-8">Related Posts</h2>}
        <div class="blogs-cards">
          {data?.map((item) => {
            const date = item?.sys?.createdAt;
            const dateObject = new Date(date);
            const formattedDate = dateObject.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
            return (
              <Link href={`/blog/${item?.fields?.slug}`} class="">
                {item?.fields?.image?.fields?.file?.url && (
                  <img
                    src={item?.fields?.image?.fields?.file?.url}
                    alt={item?.fields?.image?.fields?.title}
                  />
                )}
                <div>
                  <h3 class="text-primary2 mb-2.5">{item?.fields?.title}</h3>
                  <div className="flex items-center gap-4">
                    <p>
                      <i class="fa-regular fa-calendar mr-1" /> {formattedDate}
                    </p>
                    <p>
                      <i class="fa-solid fa-stopwatch mr-1"></i>{" "}
                      {calculateReadingTime(item?.fields?.description?.content)}{" "}
                      min read
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
