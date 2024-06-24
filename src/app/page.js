import { getPagesData } from "@/lib/api";
import Hero from "@/components/Home/Hero";
import SecureSection from "@/components/Home/SecureSection";
import ThreatManagementSection from "@/components/Home/ThreatManagementSection";
import DataProtectionSection from "@/components/Home/DataProtectionSection";
import DetailsSection from "@/components/Home/DetailsSection";
import QuoteFormSection from "@/components/Home/QuoteFormSection";
import QualificationsSection from "@/components/common/QualificationsSection";
import { notFound } from "next/navigation";
import GetSection from "@/components/Service/GetSection";

export async function generateMetadata() {
  const homeData = await getPagesData("home");
  const { seo } = homeData?.items?.[0]?.fields || {};
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

export default async function Home() {
  const homeData = await getPagesData("home");
  if (!homeData?.items?.[0]?.fields) {
    notFound();
  }
  const {
    heroBgImage,
    heroTitle,
    heroDescription,
    heroFormTitle,
    heroFormButtonText,
    secureImage,
    secureTitle,
    secureDescription,
    quoteFormImage,
    quoteFormTitle,
    quoteFormDescription,
    quoteFormButtonText,
    // threatManagementTitle,
    // threatManagementCards,
    // dataProtectionTitle,
    // dataProtectionCards,
    detailsSection,
  } = homeData?.items?.[0]?.fields || {};
  const qualificationSectionData = {
    title: homeData?.items[0]?.fields?.qualificationSectionTitle,
    description: homeData?.items[0]?.fields?.qualificationSectionDescription,
    images1: homeData?.items[0]?.fields?.qualificationSectionImages1,
    images2: homeData?.items[0]?.fields?.qualificationSectionImages2,
    images3: homeData?.items[0]?.fields?.qualificationSectionImages3,
  };
  const getSectionData = {
    title: homeData?.items?.[0]?.fields?.getSectionTitle,
    list: homeData?.items?.[0]?.fields?.getSectionList,
  };

  return (
    <>
      <main>
        <Hero
          data={{
            title: heroTitle,
            description: heroDescription,
            formTitle: heroFormTitle,
            formButtonText: heroFormButtonText,
            bgImage: heroBgImage,
          }}
        />
        <SecureSection
          data={{
            image: secureImage,
            title: secureTitle,
            description: secureDescription,
          }}
        />
        {(getSectionData?.title || getSectionData?.list?.length > 0) && (
          <GetSection data={getSectionData} />
        )}
        {/* <ThreatManagementSection
          title={threatManagementTitle}
          cardsData={threatManagementCards}
        />
        <hr class="text-gray-medium" />
        <DataProtectionSection
          title={dataProtectionTitle}
          cardsData={dataProtectionCards}
        /> */}
        <hr class="text-gray-medium" />
        <DetailsSection data={detailsSection} />
        <QualificationsSection data={qualificationSectionData} />
        <QuoteFormSection
          data={{
            formImage: quoteFormImage,
            formTitle: quoteFormTitle,
            formDescription: quoteFormDescription,
            formButtonText: quoteFormButtonText,
          }}
        />
      </main>
    </>
  );
}
