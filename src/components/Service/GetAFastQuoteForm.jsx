"use client";
import React, { useEffect, useState } from "react";
import Richtext from "../common/Richtext";
import Link from "next/link";
import { handleSubmit } from "../common/handleSubmit";
import GoogleRecaptcha from "../common/GoogleRecaptcha";

export default function GetAFastQuoteForm({ data }) {
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
          {data?.showForm && (
            <div class="w-full p-8">
              <div class="m-2.5">
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
                  class="flex flex-wrap gap-5"
                >
                  <input
                    type="text"
                    placeholder="Your name *"
                    required
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                    class="w-full"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Email address *"
                    class="w-full"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    class="w-full"
                    name="company"
                    value={formData?.company}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    placeholder="Telephone *"
                    required
                    name="phone"
                    value={formData?.phone}
                    onChange={handleChange}
                    class="w-full"
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
                    rows="4"
                    class="w-full"
                    required
                    value={formData?.info}
                    onChange={handleChange}
                    placeholder="Comments *"
                  ></textarea>
                  <label class="text-sm text-brown-40">
                    {/* <span class="w-max inline-block">
                      <input
                        class="w-max mr-2.5"
                        type="checkbox"
                        name="check"
                        required
                        value={formData?.check}
                        checked={formData?.check}
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
                    <Link target="_blank" href="/privacy" class="underline">
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
                      style={{ backgroundColor: "#1ba1e6" }}
                      type="button"
                      disabled
                      class="btn3 bg-blue min-w-[197px] flex items-center justify-center"
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
                      value="Get my quote"
                      class="cursor-pointer btn3"
                      style={{ backgroundColor: "#1ba1e6" }}
                    />
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
