import React from "react";
import BlogCards from "./BlogCards";
import Richtext from "../common/Richtext";
import Link from "next/link";
import { calculateReadingTime } from "../common/calculateReadingTime";

export default function BlogDetails({ data, relatedBlogs, slug }) {
  const date = data?.sys?.createdAt;
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const author = data?.fields?.author;
  const pathname = `/blog/${slug}`;
  const siteUrl = "https://astro-stefan-ade.vercel.app";

  return (
    <div>
      <section class="bg-light py-[30px] md:py-[60px]">
        <div class="max-w-[1024px] mx-auto my-[10px] md:my-[20px] px-[20px]">
          {data?.fields?.image?.fields?.file?.url && (
            <img
              src={data?.fields?.image?.fields?.file?.url}
              alt={data?.fields?.image?.fields?.title}
              class="max-h-[100%] md:max-h-[500px] w-full mb-[30px] object-cover"
            />
          )}
          <div className="flex items-center gap-4 mb-[10px]">
            <p class="">
              <i class="fa-regular fa-calendar mr-1"></i>
              {formattedDate}
            </p>
            <p className="">
              <i class="fa-solid fa-stopwatch mr-1"></i>{" "}
              {calculateReadingTime(data?.fields?.description?.content)} min
              read
            </p>
          </div>
          <div class="rich-text blog-description">
            <Richtext data={data?.fields?.description} />
          </div>
          <div class="mt-[30px] flex items-center gap-4">
            <h4>Share Post:</h4>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `${siteUrl}${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              class="share-button-facebook text-[24px] hover:text-link-hover"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `${siteUrl}${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              class="share-button-twitter text-[24px] hover:text-link-hover"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                `${siteUrl}${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              class="share-button-linkedin text-[24px] hover:text-link-hover"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          {data?.fields?.tag?.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 mt-[30px]">
              {data?.fields?.tag?.map((item, i) => {
                return (
                  <Link
                    href={`/tag/${item?.fields?.slug}`}
                    className="bg-primary2 hover:bg-[#ef1532] text-white font-[700] px-[20px] py-[5px] rounded-full"
                    key={i}
                  >
                    {item?.fields?.title}
                  </Link>
                );
              })}
            </div>
          )}
          {author && (
            <div class="flex flex-col mt-[30px] gap-[20px]">
              {author?.fields?.avatar?.fields?.file?.url && (
                <img
                  src={author?.fields?.avatar?.fields?.file?.url}
                  alt="avatar"
                  class="w-[100px] rounded-full"
                />
              )}
              <div>
                <h3>{author?.fields?.name}</h3>
                <p>{author?.fields?.bio}</p>
                {author?.fields?.socialMedia && (
                  <div className="flex items-center gap-3 mt-3">
                    {author?.fields?.socialMedia?.map((item) => {
                      return (
                        <a
                          href={item?.link}
                          target="_blank"
                          className="hover:text-link-hover"
                        >
                          <i className={`${item?.icon} text-[24px]`} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      {relatedBlogs && <BlogCards data={relatedBlogs} relatedBlogs={true} />}
    </div>
  );
}
