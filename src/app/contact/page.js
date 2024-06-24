import QuoteSection from "@/components/common/QuoteSection";
import { getPagesData } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const data = await getPagesData("contact");
  const { seo } = data?.items?.[0]?.fields || {};
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

export default async function Contact() {
  const data = await getPagesData("contact");
  if (!data?.items?.[0]?.fields) {
    notFound();
  }
  const contactData = data?.items[0]?.fields;
  return (
    <>
      <main class="bg-[#31373c] pt-[70px] lg:pt-24">
        <QuoteSection
          title={contactData?.formTitle}
          description={contactData?.formDescription}
        />
      </main>
    </>
  );
}
