import React from "react"

export default function PoliciesHero({ title, lastUpdated }) {
  return (
    <section class="bg-[#324450]">
      <div class="max-container pt-[80px] md:pt-[100px] lg:pt-[120px]">
        <div class="pt-[20px] pb-[50px] md:py-[150px] relative text-center">
          <h1 class="text-white">{title}</h1>
          <p class="mb-[30px] text-[#a2b7c5] text-[18px]">
            Last updated {lastUpdated}
          </p>
        </div>
      </div>
    </section>
  )
}
