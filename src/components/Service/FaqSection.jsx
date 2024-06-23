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
    <section class="max-container py-[30px] md:py-[60px] my-[10px] md:my-[20px]">
      <h2 class="text-primary2 text-center pb-[20px] mb-[60px]">
        {data?.title}
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <div className="flex flex-col gap-[20px]">
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
        <div className="flex flex-col gap-[20px]">
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
