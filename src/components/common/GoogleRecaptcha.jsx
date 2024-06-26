/* eslint-disable no-undef */
import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});
const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;
export default function GoogleRecaptcha({ onChange }) {
  return (
    <div className="w-max mx-auto recaptcha">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        scriptProps={{
          defer: true,
        }}
      />
    </div>
  );
}
