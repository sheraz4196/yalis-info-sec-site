import ServiceQuoteForm from "./forms/service-quote-form";

export default function QuoteFormSection({ data }) {
  return (
    <section id="getQuote" class="bg-zinc-50 py-8 md:py-16">
      <div class="max-container my-2.5 md:my-5">
        <div class="flex bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg my-8">
          {data?.image?.fields?.file?.url && (
            <div
              style={{
                backgroundImage: `url(${data?.image?.fields?.file?.url})`,
              }}
              class="w-full min-h-full bg-cover bg-no-repeat bg-center hidden lg:block"
            ></div>
          )}
          <div class="w-full h-full">
            <div class="bg-white p-8 md:p-16">
              <h2 class="text-primary2">{data?.title}</h2>
              <p class="my-8">{data?.description}</p>
              {data?.showQuoteSectionForm && <ServiceQuoteForm data={data} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
