"use client";
import React, { useState } from "react";
import Richtext from "../common/Richtext";

export default function FaqSection({ data }) {
  const [showQuestion, setShowQuestion] = useState(null);

  const handleShowQuestion = (id) => {
    setShowQuestion(showQuestion === id ? null : id);
  };

  const midIndex = Math.ceil(data?.faqs?.length / 2);

  return (
    <section className="max-container py-8 md:py-16 my-2.5 md:my-5">
      <h2 className="text-primary-dark text-center pb-5 mb-16">
        {data?.title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {Array.from({ length: 2 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-5">
            {data?.faqs
              ?.slice(
                colIndex === 0 ? 0 : midIndex,
                colIndex === 0 ? midIndex : data?.faqs?.length
              )
              .map((item, index) => {
                const actualIndex = colIndex === 0 ? index : index + midIndex;
                return (
                  <div className="faq" key={actualIndex}>
                    <h4
                      className="faq-question"
                      onClick={() => handleShowQuestion(actualIndex)}
                    >
                      {item?.fields?.question}
                    </h4>
                    <div
                      className={`faq-answer ${
                        showQuestion === actualIndex ? "show-answer" : ""
                      }`}
                    >
                      <Richtext data={item?.fields?.answer} />
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </section>
  );
}
