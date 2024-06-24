import React from "react";
import Richtext from "../common/Richtext";

export default function InnovatingSection({ title, description }) {
  return (
    <section class="max-container py-10 md:py-24">
      <h2 class="text-primary2 text-center">{title}</h2>
      <div className="about-description">
        <Richtext data={description} />
      </div>
    </section>
  );
}
