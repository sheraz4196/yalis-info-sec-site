import React from "react";
import ContactForm from "../contact/contact-form";

export default function QuoteSection({ title, description }) {
  return (
    <section className="bg-muted-red-brown" id="getQuote">
      <div className="max-container py-10 md:py-16">
        <h2 className="text-white text-center mb-2.5">{title}</h2>
        <p className="text-gray-light text-lg mb-2.5 text-center">
          {description}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
