import BlogCards from "@/components/Blogs/BlogCards";
import Hero from "@/components/Blogs/Hero";
import { getPagesData } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Blog | Yalis",
    robots: "index, follow",
  };
}

export default async function Blogs() {
  const [data, pageData] = await Promise.all([
    getPagesData("post"),
    getPagesData("mainBlogPage"),
  ]);

  if (!data?.items) {
    notFound();
  }
  const blogs = data?.items;
  const mainBlogPageData = pageData?.items[0]?.fields || {};
  return (
    <>
      <main>
        <Hero
          title={mainBlogPageData?.title || "Blog"}
          bgImg={mainBlogPageData?.heroBgImage}
        />
        {data && <BlogCards data={blogs} />}
      </main>
    </>
  );
}
