import FaqSection from "@/components/Service/FaqSection";
// import GetAFastQuoteForm from "@/components/Service/GetAFastQuoteForm";
// import GetSection from "@/components/Service/GetSection";
import GetAQuoteStripe from "@/components/Service/GetAQuoteStripe";
import Hero from "@/components/Service/Hero";
import MethodologySection from "@/components/Service/MethodologySection";
import BenefitsSection from "@/components/Service/NewBenefitsSection";
import PrioritizeSection from "@/components/Service/PrioritizeSection";
import QualificationsSection from "@/components/common/QualificationsSection";
// import QuoteFormSection from "@/components/Service/QuoteFormSection";
// import RequirmentsSection from "@/components/Service/RequirmentsSection";
// import TypesSection from "@/components/Service/TypesSection";
import WhatSection from "@/components/Service/WhatSection";
import WhyChoose from "@/components/Service/WhyChoose";
// import WhyNeedSection from "@/components/Service/WhyNeedSection";
import { getSlugPagData } from "@/lib/api";
import { notFound } from "next/navigation";
import PoliciesHero from "@/components/Privacy/PoliciesHero";
import DescriptionSection from "@/components/Privacy/DescriptionSection";

export async function generateMetadata({ params }) {
  const slug = params?.service;

  const data = await getSlugPagData("services", slug);
  const policiesData = await getSlugPagData("policies", slug);
  const { seo } = data[0]?.fields || policiesData[0]?.fields || {};
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

export default async function Service({ params }) {
  const slug = params?.service;
  const data = await getSlugPagData("services", slug);
  const policiesData = await getSlugPagData("policies", slug);
  if (!data[0]?.fields && !policiesData[0]?.fields) {
    notFound();
  }
  if (data[0]?.fields) {
    const serviceData = data[0]?.fields;

    const heroData = {
      bgImage: serviceData?.heroBgImage,
      title: serviceData?.heroTitle,
      description: serviceData?.heroDescription,
      formTitle: serviceData?.heroFormTitle,
      formButtonText: serviceData?.heroFormButtonText,
    };
    const whyChooseData = {
      title: serviceData?.whyChooseTitle,
      cards: serviceData?.whyChooseCards,
    };
    const whatSectionData = {
      title: serviceData?.whatSectionTitle,
      description: serviceData?.whatSectionDescription,
      image: serviceData?.whatSectionImage,
    };
    const benefitsSectionData = {
      title: serviceData?.benefitsSectionTitle,
      cardsData: serviceData?.benefitsSectionCardsData,
    };
    const stripeData = {
      title: serviceData?.stripeTitle,
      button: {
        title: serviceData?.stripeButton,
        link: serviceData?.stripeButtonLink,
        target: serviceData?.stripeButtonTarget,
      },
    };
    // const differentTypesSectionData = {
    //   title: serviceData?.differentTypesSectionTitle,
    //   description: serviceData?.differentTypesSectionDescription,
    //   list: serviceData?.differentTypesList,
    // };
    // const whyNeedSectionData = {
    //   title: serviceData?.whyNeedSectionTitle,
    //   description: serviceData?.whyNeedSectionDescription,
    //   image: serviceData?.whyNeedSectionImage,
    // };
    // const requirementSectionData = {
    //   title: serviceData?.requirmentSectionTitle,
    //   description: serviceData?.requirmentSectionDescription,
    //   image: serviceData?.requirmentSectionImage,
    // };
    // const getSectionData = {
    //   title: serviceData?.getSectionTitle,
    //   list: serviceData?.getSectionList,
    // };
    const prioritizeSectionData = {
      title: serviceData?.prioritizeSectionTitle,
      description: serviceData?.prioritizeSectionDescription,
      image: serviceData?.prioritizeSectionImage,
    };
    const faqData = {
      title: serviceData?.faqTitle,
      faqs: serviceData?.faqs,
    };
    const methodologyData = {
      title: serviceData?.methodologyTitle,
      list: serviceData?.methodologySectionList,
    };
    // const quoteSectionData = {
    //   title: serviceData?.quoteSectionTitle,
    //   description: serviceData?.quoteSectionDescription,
    //   button: serviceData?.quoteSectionButton,
    //   image: serviceData?.quoteSectionImage,
    //   showQuoteSectionForm: serviceData?.showQuoteSectionForm,
    // };
    const qualificationSectionData = {
      title: serviceData?.qualificationSectionTitle,
      description: serviceData?.qualificationSectionDescription,
      images1: serviceData?.qualificationSectionImages1,
      images2: serviceData?.qualificationSectionImages2,
      images3: serviceData?.qualificationSectionImages3,
    };
    // const formData = {
    //   title: serviceData?.formTitle,
    //   description: serviceData?.formDescription,
    //   showForm: serviceData?.showForm,
    // };

    return (
      <>
        <main>
          {heroData && <Hero data={heroData} />}
          {(whatSectionData?.title ||
            whatSectionData?.description ||
            whatSectionData?.image) && <WhatSection data={whatSectionData} />}
          {(benefitsSectionData?.title ||
            benefitsSectionData?.cardsData?.length > 0) && (
            <BenefitsSection data={benefitsSectionData} />
          )}
          {(stripeData?.title || stripeData?.button?.title) && (
            <GetAQuoteStripe data={stripeData} />
          )}
          {/* {(differentTypesSectionData?.title ||
            differentTypesSectionData?.description ||
            differentTypesSectionData?.list?.length > 0) && (
            <TypesSection data={differentTypesSectionData} />
          )} */}
          {/* {(whyNeedSectionData?.title ||
            whyNeedSectionData?.description ||
            whyNeedSectionData?.image) && (
            <WhyNeedSection data={whyNeedSectionData} />
          )} */}
          {/* {(requirementSectionData?.title ||
            requirementSectionData?.description ||
            requirementSectionData?.image) && (
            <RequirmentsSection data={requirementSectionData} />
          )} */}
          {/* {(getSectionData?.title || getSectionData?.list?.length > 0) && (
            <GetSection data={getSectionData} />
          )} */}
          {(prioritizeSectionData?.title ||
            prioritizeSectionData?.description ||
            prioritizeSectionData?.image) && (
            <PrioritizeSection data={prioritizeSectionData} />
          )}
          {(methodologyData?.title || methodologyData?.list?.length > 0) && (
            <MethodologySection data={methodologyData} />
          )}
          {(faqData?.title || faqData?.faqs?.length > 0) && (
            <FaqSection data={faqData} />
          )}
          {whyChooseData && <WhyChoose data={whyChooseData} />}
          {(stripeData?.title || stripeData?.button?.title) && (
            <GetAQuoteStripe data={stripeData} />
          )}
          {/* {(quoteSectionData?.title ||
            quoteSectionData?.showQuoteSectionForm ||
            quoteSectionData?.image ||
            quoteSectionData?.button ||
            quoteSectionData?.description) && (
            <QuoteFormSection data={quoteSectionData} />
          )} */}
          {(qualificationSectionData?.title ||
            qualificationSectionData?.description ||
            qualificationSectionData?.images1?.length > 0 ||
            qualificationSectionData?.images2?.length > 0 ||
            qualificationSectionData?.images3?.length > 0) && (
            <QualificationsSection data={qualificationSectionData} />
          )}
          {/* {(formData?.title || formData?.description || formData?.showForm) && (
            <GetAFastQuoteForm data={formData} />
          )} */}
        </main>
      </>
    );
  } else if (policiesData[0]?.fields) {
    const policyData = policiesData[0]?.fields;
    const createOrUpdated =
      policiesData[0]?.sys?.updatedAt || policiesData[0]?.sys?.createdAt || "";
    const dateObject = new Date(createOrUpdated);

    const formattedDate = dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return (
      <>
        <main>
          <PoliciesHero
            title={policyData?.heroTitle}
            lastUpdated={formattedDate}
          />
          <DescriptionSection
            title={policyData?.descriptionTitle}
            description={policyData?.description}
          />
        </main>
      </>
    );
  } else {
    return null;
  }
}
