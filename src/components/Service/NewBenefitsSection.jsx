"use client";
import React, { useEffect, useRef, useState } from "react";

export default function BenefitsSection({ data }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} class="max-container py-8 md:py-16 my-2.5 md:my-5">
      <h2 class="text-[rgb(27,161,230)] text-center pb-5 mb-16">
        {data?.title}
      </h2>
      <div class={`flex flex-wrap bemefits-list ${isVisible ? "on" : ""}`}>
        {data?.cardsData?.map((item, i) => {
          return (
            <div
              class="benefits-list-item"
              key={i}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div>
                <h5 className="text-[#434343] mb-1.5">{item?.title}</h5>
                <p>{item?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
