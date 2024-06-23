import React from "react"
import Boxes from "../common/Boxes"

export default function ThreatManagementSection({ title, cardsData }) {
  return (
    <section class="bg-light py-[30px] md:py-[60px]">
      <Boxes data={cardsData} title={title} />
    </section>
  )
}
