import React from "react";
import Richtext from "../common/Richtext";
import GetSectionList from "./GetSectionList";
import Link from "next/link";
import Image from "next/image";

export default function GetSection({ data }) {
  const hasList = data?.list?.length > 0;

  if (!data || !hasList) {
    return null;
  }
  console.log();
  return (
    <section className="max-container py-8 md:py-16 my-2.5 md:my-5">
      <h2 className="text-secondary text-center pb-5 mb-16">{data?.title}</h2>

      {hasList && (
        <>
          <div className="hidden md:block">
            <GetSectionList data={data.list} />
          </div>
          <div className="flex flex-col-reverse gap-10 md:hidden get-section-list">
            {data.list.map((item, index) => (
              <React.Fragment key={index}>
                {item.fields && (
                  <div className="get-section-list-item">
                    {item?.fields?.icon?.fields?.file?.url && (
                      <Image
                        src={item.fields.icon.fields.file.url}
                        alt="icon"
                        width={140}
                        height={140}
                        className="mx-auto mb-8"
                      />
                    )}
                    <h3 className="text-blue text-2xl text-center">
                      {item?.fields?.title}
                    </h3>
                    <p className="text-slate-40 text-2xl mb-2.5 font-extrabold text-center">
                      {item?.fields?.subHeading}
                    </p>
                    <div className="rich-text mb-2.5 text-lg">
                      <Richtext data={item?.fields?.description} />
                    </div>
                    {item?.fields?.list?.length > 0 && (
                      <ul className="list-checked types-list mb-5">
                        {item.fields.list.map((listItem, listIndex) => (
                          <li className="text-lg" key={listIndex}>
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item?.buttonText && (
                      <div className="text-center">
                        <Link
                          href={item?.buttonLink || ""}
                          target={item?.buttonTarget || "_self"}
                          className="btn1"
                        >
                          {item?.buttonText}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
