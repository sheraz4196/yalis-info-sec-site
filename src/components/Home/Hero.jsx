"use client";
import React, { useState } from "react";
// import bgImg from "../../../public/images/home-hero-bg.jpg";
import Link from "next/link";
import { handleSubmit } from "../common/handleSubmit";
import Image from "next/image";
import GoogleRecaptcha from "../common/GoogleRecaptcha";

export default function Hero({ data }) {
  function onChange(value) {
    setFormData({ ...formData, recaptcha: value });
  }
  const [loadRecaptcha, setLoadReptcha] = useState(false);
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    info: "",
    check: false,
    recaptcha: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [showRegexError, setShowRegexError] = useState(null);

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setLoadReptcha(true);
  };

  return (
    <section
      // style={{
      //   backgroundImage: `url(${data?.bgImage?.fields?.file?.url})`,
      // }}
      className={`bg-[#324450] relative`}
    >
      {data?.bgImage?.fields?.file?.url && (
        <picture>
          <Image
            src={"https:" + data?.bgImage?.fields?.file?.url}
            alt="background-image"
            width={1500}
            height={1500}
            priority
            unoptimized
            className="absolute z-0 top-0 object-cover object-center w-full h-full"
          />
        </picture>
      )}
      <div className="relative z-[1] max-container pt-[80px] md:pt-[100px] lg:pt-[20px]">
        <div className="py-[60px] my-[20px] lg:my-[60px] flex flex-col lg:flex-row items-start justify-between gap-[50px]">
          <div className="w-full lg:w-[55%]">
            <h1 className="mb-[20px] text-white">{data?.title}</h1>
            <p className="text-[#a2b7c5] text-[1.5rem] mb-[30px] leading-[1.5]">
              {data?.description}
            </p>
          </div>
          <div className="w-full lg:w-[44%]">
            <div className="bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-[8px] p-[20px] md:p-[30px]">
              <h3 className="text-primary2 font-extrabold leading-[1.3] text-center mb-[20px]">
                {data?.formTitle}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(
                    setLoading,
                    setShowRegexError,
                    formData,
                    setFormData,
                    initialFormData
                  );
                }}
                className="flex flex-wrap gap-2.5"
              >
                <input
                  type="text"
                  placeholder="Your name *"
                  required
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                  className="w-full md:w-[calc(50%-5px)]"
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                  className="w-full md:w-[calc(50%-5px)]"
                />
                <input
                  type="text"
                  placeholder="Company name *"
                  required
                  name="company"
                  value={formData?.company}
                  onChange={handleChange}
                  className="w-full md:w-[calc(50%-5px)]"
                />
                <input
                  type="tel"
                  placeholder="Telephone"
                  required
                  name="phone"
                  value={formData?.phone}
                  onChange={handleChange}
                  className="w-full md:w-[calc(50%-5px)]"
                />
                <select
                  className="w-full"
                  required
                  name="service"
                  id="required service"
                  aria-label="service"
                  onChange={handleChange}
                  value={formData?.service}
                >
                  <option value="">Required service *</option>
                  <option value="Penetration Testing">
                    Penetration Testing
                  </option>
                  <option value="Vulnerability Scanning">
                    Vulnerability Scanning
                  </option>
                  <option value="Cyber Security Consulting">
                    Cyber Security Consulting
                  </option>
                </select>
                <textarea
                  name="info"
                  id=""
                  cols="30"
                  rows="3"
                  className="w-full"
                  placeholder="Comments"
                  value={formData?.info}
                  onChange={handleChange}
                ></textarea>
                <label
                  for="check-box"
                  className="text-[14px] text-[rgba(34,39,42,1)]"
                >
                  {/* <span className="w-max inline-block">
                    <input
                      className="mr-[10px] w-max"
                      type="checkbox"
                      value={formData?.check}
                      checked={formData?.check}
                      required
                      id="check-box"
                      onChange={(e) =>
                        setFormData({ ...formData, check: e.target.checked })
                      }
                    />
                  </span> */}
                  <span>
                    {/* I agree to receive sales and marketing communication. */}
                    For more information about how we collect, process and
                    retain your personal data, please see our{" "}
                  </span>
                  <Link target="_blank" href="/privacy" className="underline">
                    privacy policy
                  </Link>
                  .
                </label>
                <div className="w-full">
                  {loadRecaptcha && <GoogleRecaptcha onChange={onChange} />}
                </div>
                {showRegexError && (
                  <p className="text-primary2">{showRegexError}</p>
                )}
                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="w-full flex items-center justify-center text-xl py-3 px-8 bg-blue text-white rounded-sm font-extrabold"
                  >
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                          className="fill-blue"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                ) : (
                  <input
                    type="submit"
                    value={data?.formButtonText}
                    className="text-xl py-3 px-8 bg-blue text-white rounded-sm font-extrabold cursor-pointer"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
