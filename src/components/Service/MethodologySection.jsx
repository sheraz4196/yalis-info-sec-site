"use client";
import React, { useRef, useState } from "react";
import Richtext from "../common/Richtext";
import Image from "next/image";

export default function MethodologySection({ data }) {
  const liRefs = useRef([]);
  const [isVisible, setIsVisible] = useState([]);
  const handleIntersection = (entries) => {
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
  const setRef = (element, index) => {
    if (element) {
      liRefs.current[index] = element;
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  };

  return (
    <section className="max-container py-8 md:py-16">
      <h2 className="text-primary-dark mb-8 lg:mb-16 text-center">
        {data?.title}
      </h2>
      {data?.list?.length > 0 && (
        <div className="methodology-list relative px-5 lg:px-0">
          <ol>
            {data?.list?.map((item, index) => (
              <li
                ref={(el) => setRef(el, index)}
                key={index}
                className={`${isVisible[index] ? "on" : ""}`}
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
