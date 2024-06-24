"use client";
import React, { useEffect, useRef, useState } from "react";
import Richtext from "../common/Richtext";

export default function MethodologySection({ data }) {
  const liRefs = useRef([]);
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    const liObservers = data?.list?.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          const updatedVisibility = [...isVisible];
          if (entry.isIntersecting && !isVisible[index]) {
            updatedVisibility[index] = true;
            setIsVisible(updatedVisibility);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        }
      );
    });

    data?.list?.forEach((_, index) => {
      if (liRefs.current[index]) {
        liObservers[index].observe(liRefs.current[index]);
      }
    });

    return () => {
      data?.list?.forEach((_, index) => {
        if (liRefs.current[index]) {
          liObservers[index].unobserve(liRefs.current[index]);
        }
      });
    };
  }, [data?.list, isVisible]);

  return (
    <section class="max-container py-8 md:py-16">
      <h2 class="text-primary2 mb-8 lg:mb-16 text-center">{data?.title}</h2>
      {data?.list?.length > 0 && (
        <div className="methodology-list relative px-5 lg:px-0">
          <ol>
            {data?.list?.map((item, i) => {
              const liRef = (element) => {
                liRefs.current[i] = element;
              };

              return (
                <li
                  ref={liRef}
                  key={i}
                  className={`${isVisible[i] ? "on" : ""}`}
                >
                  <div>
                    {item?.fields?.icon?.fields?.file?.url && (
                      <img
                        src={item?.fields?.icon?.fields?.file?.url}
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
              );
            })}
          </ol>
        </div>
      )}
    </section>
  );
}
