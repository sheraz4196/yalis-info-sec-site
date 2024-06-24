import Richtext from "../common/Richtext";
import ServiceForm from "./forms/service-form";

export default function GetAFastQuoteForm({ data }) {
  return (
    <section class="bg-slate-40 text-white py-8 md:py-16">
      <div class="max-container my-2.5 md:my-5">
        <div class="bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg flex flex-col md:flex-row items-stretch">
          {(data?.title || data?.description) && (
            <div class="w-full p-8 bg-neutral-800 rounded-l-[8px]">
              <div class="m-2.5">
                <h2 class="text-primary2 mb-2.5">{data?.title}</h2>
                <div class="rich-text penetration-testing-form-description list-target">
                  <Richtext data={data?.description} />
                </div>
              </div>
            </div>
          )}
          {data?.showForm && <ServiceForm />}
        </div>
      </div>
    </section>
  );
}
