import React from "react";
import Richtext from "../common/Richtext";

export default function CyberSecuritySection({ title, description }) {
  return (
    <section className="max-container py-10 md:py-24 bg-zinc-50">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-blue text-center mb-2.5">{title}</h2>
        <div className="about-description">
          <Richtext data={description} />
        </div>
      </div>
    </section>
  );
}
