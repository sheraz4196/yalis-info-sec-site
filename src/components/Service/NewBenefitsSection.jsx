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
    <section ref={ref} className="max-container py-8 md:py-16 my-2.5 md:my-5">
      <h2 className="text-blue text-center pb-5 mb-16">{data?.title}</h2>
      <div className={`flex flex-wrap bemefits-list ${isVisible ? "on" : ""}`}>
        {data?.cardsData?.map((item, index) => (
          <div
            className="benefits-list-item"
            key={index}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div>
              <h5 className="text-brown-40 mb-1.5">{item?.title}</h5>
              <p>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
