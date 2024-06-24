import React from "react";

export default function PoliciesHero({ title, lastUpdated }) {
  return (
    <section className="bg-slate-40">
      <div className="max-container pt-20 md:pt-24 lg:pt-[120px]">
        <div className="pt-5 pb-12 md:py-36 relative text-center">
          <h1 className="text-white">{title}</h1>
          <p className="mb-8 text-gray-cement text-lg">
            Last updated {lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
}
