import BlogCards from "@/components/Blogs/BlogCards";
import Hero from "@/components/Blogs/Hero";
import { getFilteredBlogsData, getSlugPagData } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  const data = await getSlugPagData("tag", slug);
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

  const data = await getSlugPagData("tag", slug);
  if (!data[0]?.fields) {
    notFound();
  }
  const blogs = await getFilteredBlogsData(data[0]?.sys?.id);

  return (
    <>
      <main>
        <Hero
          title={data[0]?.fields?.title}
          bgImg={data[0]?.fields?.heroBgImage}
        />
        <BlogCards data={blogs} />
      </main>
    </>
  );
}
