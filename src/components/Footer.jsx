import Richtext from "./common/Richtext";
import { getPagesData } from "../lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer({ logo, serviceLinks }) {
  const [data, setData] = useState(null);
  const [policiesData, setPolociesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const d = await getPagesData("footer");
        setData(d?.items?.[0]?.fields);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchData();
    const fetchPoliciesData = async () => {
      try {
        const policies = await getPagesData("policies");
        setPolociesData(policies?.items);
      } catch (error) {
        console.error("Error fetching Policies data:", error);
      }
    };
    fetchPoliciesData();
  }, []);

  if (!data) {
    return null;
  }

  const {
    image,
    description,
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
              {image?.fields?.file.url && (
                <Link href="/">
                  <Image
                    src={"https:" + image?.fields?.file.url}
                    alt="logo"
                    width={350}
                    height={100}
                    className="max-w-52 md:max-w-full"
                  />
                </Link>
              )}
              {/* <p className="mt-5 text-white text-sm">{description}</p> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between w-full lg:w-[calc(65%-15px)] max-w-full lg:max-w-[calc(65%-15px)]">
            {links?.map((item) => {
              return (
                <div className="w-full">
                  <h5>{item?.title}</h5>
                  <div className="flex flex-col max-w-full">
                    {(item?.title === "Services"
                      ? serviceLinks
                      : item?.links
                    )?.map((link, index) => {
                      return (
                        <Link
                          href={link?.link || ""}
                          target={link?.target || "_self"}
                          className="w-full md:max-w-64 block"
                          key={index}
                        >
                          {link?.text}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {policiesData?.length > 0 && (
              <div className="w-full">
                <h5>Policies</h5>
                <div className="flex flex-col max-w-full">
                  {policiesData?.map((item, index) => {
                    return (
                      <Link
                        href={item?.fields?.slug || ""}
                        className="w-full md:max-w-64 block"
                        key={index}
                      >
                        {item?.fields?.heroTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="w-full text-white">
              <h5>{addressTitle}</h5>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mt-3">
                  {socialMedia?.map((item, index) => {
                    return (
                      <Link
                        href={item?.link}
                        target="_blank"
                        aria-label={item?.icon || "social media link"}
                        key={index}
                      >
                        <i className={`${item?.icon} text-2xl`} />
                      </Link>
                    );
                  })}
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
