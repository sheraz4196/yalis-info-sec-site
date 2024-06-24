"use client";
import React, { useState } from "react";
import Richtext from "../common/Richtext";

export default function FaqSection({ data }) {
  const [showQuestion, setShowQuestion] = useState(null);
  const handleShowQuestion = (id) => {
    if (showQuestion === id) {
      setShowQuestion(null);
    } else {
      setShowQuestion(id);
    }
  };
  return (
    <section className="max-container py-8 md:py-16 my-2.5 md:my-5">
      <h2 className="text-primary2 text-center pb-5 mb-16">{data?.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          {data?.faqs?.map((item, i) => {
            if (i <= Math.ceil((data?.faqs?.length - 1) / 2))
              return (
                <div className={`faq`}>
                  <h4
                    className="faq-qestion"
                    onClick={() => handleShowQuestion(i)}
                  >
                    {item?.fields?.question}
                  </h4>
                  <div
                    className={`faq-answer ${
                      showQuestion === i ? "show-answer" : ""
                    }`}
                  >
                    <Richtext data={item?.fields?.answer} />
                  </div>
                </div>
              );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {data?.faqs?.map((item, i) => {
            if (i > Math.ceil((data?.faqs?.length - 1) / 2))
              return (
                <div className={`faq`}>
                  <h4
                    className="faq-qestion"
                    onClick={() => handleShowQuestion(i)}
                  >
                    {item?.fields?.question}
                  </h4>
                  <div
                    className={`faq-answer ${
                      showQuestion === i ? "show-answer" : ""
                    }`}
                  >
                    <Richtext data={item?.fields?.answer} />
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </section>
  );
}
