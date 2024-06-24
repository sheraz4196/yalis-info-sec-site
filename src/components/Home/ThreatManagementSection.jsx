import React from "react";
import Boxes from "../common/Boxes";

export default function ThreatManagementSection({ title, cardsData }) {
  return (
    <section className="bg-light py-8 md:py-16">
      <Boxes data={cardsData} title={title} />
    </section>
  );
}
