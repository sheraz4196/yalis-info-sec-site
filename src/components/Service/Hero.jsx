import FastQuoteForm from "./forms/fast-quote-form";

export default function Hero({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${data?.bgImage?.fields?.file?.url})` }}
      class="bg-slate-40 bg-[center_100px] bg-no-repeat bg-cover py-5 lg:py-16"
    >
      <div class="max-container pt-20 md:pt-24 lg:pt-5">
        <div class="py-16 flex flex-col lg:flex-row items-start justify-between gap-12">
          <div class="w-full lg:w-[55%]">
            <h1 class="mb-5 text-white">{data?.title}</h1>
            <p class="text-gray-cement text-2xl mb-8 leading-[1.5]">
              {data?.description}
            </p>
          </div>
          <div class="w-full lg:w-[44%]">
            <div class="bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg p-5 md:p-8">
              <h3 class="text-primary2 font-extrabold leading-[1.3] text-center mb-5">
                {data?.formTitle}
              </h3>
              <FastQuoteForm data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
