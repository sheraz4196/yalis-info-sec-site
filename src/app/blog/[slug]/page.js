import BlogDetails from "@/components/Blogs/BlogDetails";
import Hero from "@/components/Blogs/Hero";
import { getPagesData, getSlugPagData } from "@/lib/api";
import { notFound } from "next/navigation";
import React from "react";
export async function generateMetadata({ params }) {
  const slug = params?.slug;

  const data = await getSlugPagData("post", slug);
  const { seo } = data[0]?.fields || {};
  return {
    title: seo?.fields?.title,
    description: seo?.fields?.description,
    keywords: seo?.fields?.keywords,
    openGraph: {
      images: [seo?.fields?.image?.fields?.file?.url],
      url: "https://astro-stefan-ade.vercel.app",
    },
    robots: "index, follow",
  };
}

export default async function Blog({ params }) {
  const slug = params?.slug;

  const data = await getSlugPagData("post", slug);
  const blogs = await getPagesData("post");
  if (!data[0]?.fields) {
    notFound();
  }
  const filteredBlogs = blogs?.items?.filter(
    (item) => item?.fields?.slug != slug
  );
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    const dateA = new Date(a.sys.createdAt);
    const dateB = new Date(b.sys.createdAt);
    return dateB - dateA;
  });
  const relatedBlogs = sortedBlogs.slice(0, 3);
  return (
    <>
      <main>
        <Hero
          title={data[0]?.fields?.title}
          bgImg={data[0]?.fields?.heroBgImage}
        />
        <BlogDetails data={data[0]} relatedBlogs={relatedBlogs} slug={slug} />
      </main>
    </>
  );
}
