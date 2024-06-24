import React from "react";
import Richtext from "../common/Richtext";

export default function DescriptionSection({ title, description }) {
  return (
    <section class="max-container py-16 mb-5 privacy-description">
      <h2 class="text-center mb-2.5">{title}</h2>
      <div>
        <Richtext data={description} />
      </div>
    </section>
  );
}
