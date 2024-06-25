"use client";
import React, { useEffect, useRef, useState } from "react";
import Richtext from "../common/Richtext";
import Image from "next/image";

export default function MethodologySection({ data }) {
  const liRefs = useRef([]);
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    const observers = [];

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const index = liRefs.current.indexOf(entry.target);
        if (entry.isIntersecting && !isVisible[index]) {
          setIsVisible((prevState) => {
            const updatedVisibility = [...prevState];
            updatedVisibility[index] = true;
            return updatedVisibility;
          });
        }
      });
    };

    liRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        });
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [data?.list, isVisible]);

  return (
    <section className="max-container py-8 md:py-16">
      <h2 className="text-primary2 mb-8 lg:mb-16 text-center">{data?.title}</h2>
      {data?.list?.length > 0 && (
        <div className="methodology-list relative px-5 lg:px-0">
          <ol>
            {data?.list?.map((item, i) => (
              <li
                ref={(el) => (liRefs.current[i] = el)}
                key={i}
                className={`${isVisible[i] ? "on" : ""}`}
              >
                <div>
                  {item?.fields?.icon?.fields?.file?.url && (
                    <Image
                      src={item.fields.icon.fields.file.url}
                      alt="icon"
                      width={130}
                      height={130}
                      className="max-w-16 lg:max-w-[130px] mx-auto"
                    />
                  )}
                  <h3 className="text-lg text-blue mb-1.5">
                    {item?.fields?.title}
                  </h3>
                  <div className="rich-text">
                    <Richtext data={item?.fields?.description} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
