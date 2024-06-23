import React from "react"

export default function WhyChoose({ data }) {
  return (
    <section class="bg-primary-rgb py-[30px] md:py-[60px]">
      <div class="max-container my-[10px] md:my-[20px]">
        <h2 class="text-white text-center pb-[10px] md:pb-[20px] mb-[30px] md:mb-[60px]">
          {data?.title}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {data?.cards?.map(item => {
            return (
              <div class="w-full bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-[8px] text-center p-[30px] h-full">
                {item?.fields?.image?.fields?.file?.url && (
                  <img
                    src={item?.fields?.image?.fields?.file?.url}
                    alt="icon"
                    width={100}
                    height={100}
                    class={"mx-auto mb-[20px]"}
                  />
                )}
                <h3 class="mb-[20px]">{item?.fields?.title}</h3>
                <p class="text-[rgb(34,39,42)]">{item?.fields?.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
