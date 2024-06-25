import CyberSecuritySection from "@/components/About/CyberSecuritySection";
import Hero from "@/components/About/Hero";
import React from "react";
// import InnovatingSection from "@/components/About/InnovatingSection";
// import SecuritySection from "@/components/About/SecuritySection";
import TargetDefenceSection from "@/components/About/TargetDefenceSection";
import QuoteSection from "@/components/common/QuoteSection";
import { getPagesData } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const data = await getPagesData("about");
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

export default async function About() {
  const data = await getPagesData("about");
  if (!data?.items[0]?.fields) {
    notFound();
  }
  const aboutData = data?.items[0]?.fields;
  const heroData = {
    bgImage: aboutData?.heroBgImage,
    title: aboutData?.heroTitle,
    description: aboutData?.heroDescription,
    buttonLink: aboutData?.heroButtonLink,
    buttonTarget: aboutData?.heroButtonTarget,
    buttonText: aboutData?.heroButtonText,
  };
  const targetDefenceData = {
    title: aboutData?.targetDefenceTitle,
    description: aboutData?.targetDefenceDescription,
    targetDefenceList: aboutData?.targetDefenceList,
    staffList: aboutData?.staffList,
    staffCertificateImage: aboutData?.staffCertificateImage,
  };
  return (
    <>
      <main>
        <Hero data={heroData} />
        <TargetDefenceSection data={targetDefenceData} />
        {/* <hr className="text-gray-medium" /> */}
        {/* <SecuritySection
          title={aboutData?.securitySectionTitle}
          description={aboutData?.securitySectionDescription}
        /> */}
        {/* <hr className="text-gray-medium" />
        <InnovatingSection
          title={aboutData?.innovatingSectionTitle}
          description={aboutData?.innovatingSectionDescription}
        /> */}
        {/* <hr className="text-gray-medium" /> */}
        <CyberSecuritySection
          title={aboutData?.cyberSecuritySectionTitle}
          description={aboutData?.cyberSecuritySectionDescription}
        />
        <QuoteSection
          title={aboutData?.quoteSectionTitle}
          description={aboutData?.quoteSectionDescription}
        />
      </main>
    </>
  );
}
