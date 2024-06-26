import Link from "next/link";
import { calculateReadingTime } from "../common/calculateReadingTime";
import React from "react";
import { convertDate } from "@/utils/convert-data";
export default function BlogCards({ data, relatedBlogs }) {
  return (
    <section className={`${relatedBlogs ? "pb-8 md:pb-16" : "py-8 md:py-16"}`}>
      <div className={`max-container ${relatedBlogs ? "" : "my-2.5 md:my-5"}`}>
        {relatedBlogs && (
          <h2 className="text-primary-dark mb-8">Related Posts</h2>
        )}
        <div className="blogs-cards">
          {data?.map((item, index) => {
            const date = item?.sys?.createdAt;
            const dateObject = new Date(date);
            const formattedDate = convertDate(dateObject);
            return (
              <Link href={`/blog/${item?.fields?.slug}`} key={index}>
                {item?.fields?.image?.fields?.file?.url && (
                  <img
                    src={item?.fields?.image?.fields?.file?.url}
                    alt={item?.fields?.image?.fields?.title}
                  />
                )}
                <div>
                  <h3 className="text-primary-dark mb-2.5">
                    {item?.fields?.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <p>
                      <i className="fa-regular fa-calendar mr-1" />{" "}
                      {formattedDate}
                    </p>
                    <p>
                      <i className="fa-solid fa-stopwatch mr-1"></i>{" "}
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
