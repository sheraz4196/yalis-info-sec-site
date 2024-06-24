import React from "react";
import Boxes from "../common/Boxes";

export default function DataProtectionSection({ cardsData, title }) {
  return (
    <section className="bg-white py-[30px] md:py-[60px] my-2.5 md:my-5">
      <Boxes data={cardsData} title={title} />
    </section>
  );
}
