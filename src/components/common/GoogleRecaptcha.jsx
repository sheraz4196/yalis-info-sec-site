import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

export default function GoogleRecaptcha({ onChange }) {
  return (
    <div className="w-max mx-auto recaptcha">
      <ReCAPTCHA
        // sitekey="6Lfhwp4pAAAAAMG1qc3I8vRn1psTUDexB_UBHzFa"
        sitekey="6Lem2bspAAAAAPGMzs06TKvpbXDspXUuGUg7PPtK"
        onChange={onChange}
        scriptProps={{
          defer: true,
        }}
      />
    </div>
  );
}
