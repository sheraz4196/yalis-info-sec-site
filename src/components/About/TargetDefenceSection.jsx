import React from "react";

export default function TargetDefenceSection({ data }) {
  return (
    <section className="max-container py-10 md:py-16">
      <div className="mb-5">
        <h2 className="text-primary2 text-center">{data?.title}</h2>
        <p className="">{data?.description}</p>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        {/* <div className="w-full lg:w-[31.25%] mr-[3.125%]">
          <h4 className="text-primary2">Yalis is:</h4>
          <ul className="pl-8 mb-4 list-disc">
            {data?.targetDefenceList?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div> */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-primary2">Our staff are:</h4>
          <ul className="pl-8 mb-4 list-disc">
            {data?.staffList?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
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
