"use client";
import React, { useEffect, useState } from "react";
// import bgImg from "../../../public/images/about-hero-bg.jpg";
import { usePathname } from "next/navigation";
import { searchBlogsData } from "@/lib/api";
import Link from "next/link";

export default function Hero({ title, bgImg }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [blogsList, setBlogsList] = useState([]);
  useEffect(() => {
    const handleSearch = async () => {
      const data = await searchBlogsData(search);
      setBlogsList(data);
    };
    if (search?.length > 0) {
      handleSearch();
    } else {
      setBlogsList([]);
    }
  }, [search]);
  return (
    <section
      style={{ backgroundImage: `url(${bgImg?.fields?.file?.url})` }}
      class={`bg-center bg-no-repeat bg-cover bg-gray-cement`}
    >
      <div class="max-container pt-20 md:pt-24 lg:pt-16">
        <div class="pt-5 pb-12 md:py-36 relative text-center">
          <h1 class="text-white lg:text-8xl">{title}</h1>
          {pathname === "/blog" && (
            <div className="relative max-w-lg mx-auto mt-8">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search"
                  style={{ paddingRight: "35px" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {(search?.length > 0 || blogsList?.length > 0) && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setBlogsList([]);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xl"
                  >
                    <i class="fa-solid fa-circle-xmark"></i>
                  </button>
                )}
              </div>
              {(blogsList?.length > 0 || search?.length > 0) && (
                <div className="absolute top-[45px] left-0 w-full bg-white h-max">
                  {search?.length > 0 && blogsList?.length === 0 ? (
                    <div className="w-full h-24 flex items-center justify-center">
                      <p>No search results found.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 px-5 py-1.5 max-h-64 overflow-y-auto">
                      {blogsList?.map((item, i) => {
                        return (
                          <Link
                            key={i}
                            onClick={() => {
                              setSearch("");
                              setBlogsList([]);
                            }}
                            href={`/blog/${item?.fields?.slug}`}
                            className="text-left py-1.5 border-b last:border-none hover:text-link-hover"
                          >
                            {item?.fields?.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
