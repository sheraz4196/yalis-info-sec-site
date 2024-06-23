import React from "react"
import Boxes from "../common/Boxes"

export default function DataProtectionSection({ cardsData, title }) {
  return (
    <section className="bg-white py-[30px] md:py-[60px] my-[10px] md:my-[20px]">
      <Boxes data={cardsData} title={title} />
    </section>
  )
}
