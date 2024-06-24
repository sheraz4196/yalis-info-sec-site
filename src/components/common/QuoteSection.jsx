"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { handleSubmit } from "./handleSubmit";
import ContactForm from "../contact/contact-form";

export default function QuoteSection({ title, description }) {
  return (
    <section class="bg-[#31373c]" id="getQuote">
      <div class="max-container py-[40px] md:py-[70px]">
        <h2 class="text-white text-center mb-[10px]">{title}</h2>
        <p class="text-[#8e9fa9] text-[18px] mb-[10px] text-center">
          {description}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
