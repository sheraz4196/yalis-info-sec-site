import React from "react";
import Richtext from "../common/Richtext";

export default function CyberSecuritySection({ title, description }) {
  return (
    <section class="max-container py-10 md:py-24 bg-[#fafafa]">
      <div class="max-w-[776px] mx-auto">
        <h2 class="text-blue text-center mb-2.5">{title}</h2>
        <div className="about-description">
          <Richtext data={description} />
        </div>
      </div>
    </section>
  );
}
