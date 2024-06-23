"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./Footer";

export default function Layout({ children, headerData, serviceEntries }) {
  const pathname = usePathname();
  const hideHeaderAndFotter = pathname === "/error";

  const serviceLinks = serviceEntries.map((item) => ({
    text: item?.fields?.heroTitle,
    link: `/${item?.fields?.slug}`,
  }));

  const headerLinks = headerData?.links || [];
  const logo = headerData?.logo?.fields?.file?.url || "";
  const topNavButton = {
    buttonLink: headerData?.buttonLink,
    buttonTarget: headerData?.buttonTarget,
    buttonText: headerData?.buttonText,
  };
  const topNavLinks = headerData?.topBarLinks;
  return (
    <>
      {!hideHeaderAndFotter && (
        <Navbar
          headerList={headerLinks?.links}
          serviceLinks={serviceLinks}
          button={topNavButton}
        />
      )}
      {!hideHeaderAndFotter && (
        <Header
          logo={logo}
          headerList={headerLinks?.links}
          serviceLinks={serviceLinks}
        />
      )}
      {children}
      {!hideHeaderAndFotter && <Footer serviceLinks={serviceLinks} />}
    </>
  );
}
