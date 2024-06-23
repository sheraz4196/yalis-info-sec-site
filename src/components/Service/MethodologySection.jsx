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
    <section class="max-container py-[30px] md:py-[60px]">
      <h2 class="text-primary2 mb-[30px] lg:mb-[60px] text-center">
        {data?.title}
      </h2>
      {data?.list?.length > 0 && (
        <div className="methodology-list relative px-[20px] lg:px-0">
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
                        className="max-w-[70px] lg:max-w-[130px] mx-auto"
                      />
                    )}
                    <h3 className="text-[1.125rem] text-blue mb-[5px]">
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
