import React from "react";

export default function TargetDefenceSection({ data }) {
  return (
    <section class="max-container py-10 md:py-[70px]">
      <div class="mb-5">
        <h2 class="text-primary2 text-center">{data?.title}</h2>
        <p class="">{data?.description}</p>
      </div>
      <div class="flex flex-col md:flex-row items-start">
        {/* <div class="w-full lg:w-[31.25%] mr-[3.125%]">
          <h4 class="text-primary2">Yalis is:</h4>
          <ul class="pl-[2rem] mb-[1rem] list-disc">
            {data?.targetDefenceList?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div> */}
        <div class="w-full lg:w-1/2">
          <h4 class="text-primary2">Our staff are:</h4>
          <ul class="pl-[2rem] mb-[1rem] list-disc">
            {data?.staffList?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div class="w-full lg:w-1/2">
          {data?.staffCertificateImage?.fields?.file?.url && (
            <img
              src={data?.staffCertificateImage?.fields?.file?.url}
              alt="Image"
              className="w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
