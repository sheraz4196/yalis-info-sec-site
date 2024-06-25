import Richtext from "./common/Richtext";
import { getPagesData } from "../lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer({ serviceLinks }) {
  const [data, setData] = useState(null);
  const [policiesData, setPoliciesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const footerData = await getPagesData("footer");
        setData(footerData?.items?.[0]?.fields || null);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    const fetchPoliciesData = async () => {
      try {
        const policies = await getPagesData("policies");
        setPoliciesData(policies?.items || []);
      } catch (error) {
        console.error("Error fetching Policies data:", error);
      }
    };

    fetchData();
    fetchPoliciesData();
  }, []);

  if (!data) {
    return null;
  }

  const {
    image,
    links,
    addressTitle,
    address,
    phoneNumber,
    mailId,
    socialMedia,
    copyright,
  } = data;

  return (
    <footer className="bg-neutral-900 py-8 md:pt-16 md:pb-10">
      <div className="max-container">
        <div className="footer flex items-start flex-wrap justify-between gap-8 max-w-full w-full">
          <div className="w-full lg:w-[calc(30%-15px)] max-w-full lg:max-w-[calc(30%-15px)]">
            <div className="max-w-80">
              {image?.fields?.file?.url && (
                <Link href="/">
                  <Image
                    src={"https:" + image.fields.file.url}
                    alt="logo"
                    width={350}
                    height={100}
                    className="max-w-52 md:max-w-full"
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between w-full lg:w-[calc(65%-15px)] max-w-full lg:max-w-[calc(65%-15px)]">
            {links?.map((item, index) => (
              <div className="w-full" key={index}>
                <h5>{item?.title}</h5>
                <div className="flex flex-col max-w-full">
                  {(item?.title === "Services"
                    ? serviceLinks
                    : item?.links
                  )?.map((link, index) => (
                    <Link
                      href={link?.link || ""}
                      target={link?.target || "_self"}
                      className="w-full md:max-w-64 block"
                      key={index}
                    >
                      {link?.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {policiesData.length > 0 && (
              <div className="w-full">
                <h5>Policies</h5>
                <div className="flex flex-col max-w-full">
                  {policiesData.map((item, index) => (
                    <Link
                      href={item?.fields?.slug || ""}
                      className="w-full md:max-w-64 block"
                      key={index}
                    >
                      {item?.fields?.heroTitle}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="w-full text-white">
              <h5>{addressTitle}</h5>
              <div className="flex flex-col gap-2">
                {address && <p>{address}</p>}
                {phoneNumber && <p>{phoneNumber}</p>}
                {mailId && <p>{mailId}</p>}
                <div className="flex items-center gap-3 mt-3">
                  {socialMedia?.map((item, index) => (
                    <Link
                      href={item?.link}
                      target="_blank"
                      aria-label={item?.icon || "social media link"}
                      key={index}
                    >
                      <i className={`${item?.icon} text-2xl`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 copyright text-gray-dark text-xs">
          <Richtext data={copyright} />
        </div>
      </div>
    </footer>
  );
}
