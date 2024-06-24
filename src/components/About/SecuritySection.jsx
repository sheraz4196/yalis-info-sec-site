import React from "react";
import Richtext from "../common/Richtext";

export default function SecuritySection({ title, description }) {
  return (
    <section className="max-container py-10 md:py-24">
      <h2 className="text-primary2 text-center">{title}</h2>
      <div className="about-description">
        <Richtext data={description} />
      </div>
    </section>
  );
}
