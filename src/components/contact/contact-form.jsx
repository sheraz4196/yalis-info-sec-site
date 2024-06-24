"use client";
import Link from "next/link";
import { useState } from "react";
import GoogleRecaptcha from "../common/GoogleRecaptcha";
import { handleSubmit } from "../common/handleSubmit";
import { sendMail } from "@/lib/sendMail";
import { toast } from "react-toastify";
export default function ContactForm() {
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
    howDidYouHear: "",
    info: "",
    check: false,
    recaptcha: true,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [showRegexError, setShowRegexError] = useState(null);
  async function submitForm() {
    setLoading(true);
    const mailText = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phone}\nCompany: ${formData.company}\nServices: ${formData.service}\nHow did you hear about us: ${formData.howDidYouHear}\nInfo: ${formData.info}\mCheck: ${formData.check}`;
    const res = await sendMail({
      subject: "New Form Submission",
      text: mailText,
    });
    if (res.messageId) {
      toast.success("Mail sent Successfully.");
    } else {
      toast.error("Error Sending Mail");
    }
  }
  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setLoadReptcha(true);
  };
  return (
    <form
      id="form"
      onSubmit={async (e) => {
        e.preventDefault();
        await submitForm();
        handleSubmit(
          setLoading,
          setShowRegexError,
          formData,
          setFormData,
          initialFormData
        );
      }}
      className="max-w-screen-md mx-auto mt-8 flex flex-wrap gap-5 about-quote-form"
    >
      <div className="w-full md:w-[calc(65%-10px)]">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formData?.name}
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-[calc(35%-10px)]">
        <label htmlFor="phone">Phone number</label>
        <input
          required
          type="number"
          id="phone"
          name="phone"
          value={formData?.phone}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <label htmlFor="company">Company Name</label>
        <input
          required
          type="text"
          id="company"
          name="company"
          value={formData?.company}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <label htmlFor="email">Email address</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData?.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <label htmlFor="service">Required service</label>
        <select
          required
          className="w-full"
          id="service"
          name="service"
          onChange={handleChange}
          value={formData?.service}
        >
          <option value="">Please select</option>
          <option value="Penetration Testing">Penetration Testing</option>
          <option value="Vulnerability Scanning">Vulnerability Scanning</option>
          <option value="Cyber Security Consulting">
            Cyber Security Consulting
          </option>
        </select>
      </div>
      <div className="w-full">
        <label htmlFor="howDidYouHear">How did you hear about us?</label>
        <input
          type="text"
          id="howDidYouHear"
          name="howDidYouHear"
          value={formData?.howDidYouHear}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <label htmlFor="info">Information on your inquiry</label>
        <textarea
          id="info"
          name="info"
          rows="4"
          value={formData?.info}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="w-full text-center">
        {/* <label htmlFor="check">
      <span className="w-max inline-block">
        <input
          className="mr-2.5 w-max"
          type="checkbox"
          id="check"
          name="check"
          required
          value={formData?.check}
          checked={formData?.check}
          onChange={(e) =>
            setFormData({ ...formData, check: e.target.checked })
          }
        />
      </span>
      <span>I agree to receive sales and marketing communication</span>
    </label> */}
        <p className="text-gray-light text-base mt-2.5 text-center">
          For more information about how we collect, process and retain your
          personal data, please see our{" "}
          <Link
            target="_blank"
            href="/privacy"
            className="underline hover:text-link-hover"
          >
            privacy policy
          </Link>
          .
        </p>
      </div>
      <div className="w-full">
        {loadRecaptcha && <GoogleRecaptcha onChange={onChange} />}
      </div>
      {showRegexError && <p className="text-primary2">{showRegexError}</p>}
      <div className="w-full text-center">
        {loading ? (
          <button
            type="button"
            disabled
            className="w-36 mx-auto flex items-center justify-center text-xl py-3 px-8 bg-primary2 hover:bg-muted-red text-white rounded-sm font-extrabold transition-[background-color 150ms ease-in-out]"
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
                  className="fill-primary2"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="text-xl py-3 px-8 bg-primary2 hover:bg-muted-red text-white rounded-sm font-extrabold transition-[background-color 150ms ease-in-out]"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
