import React from "react"
import Richtext from "../common/Richtext"

export default function CyberSecuritySection({ title, description }) {
  return (
    <section class="max-container py-[40px] md:py-[100px] bg-[#fafafa]">
      <div class="max-w-[776px] mx-auto">
        <h2 class="text-blue text-center mb-[10px]">{title}</h2>
        <div className="about-description">
          <Richtext data={description} />
        </div>
      </div>
    </section>
  )
}
