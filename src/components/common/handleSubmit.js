import { createContetnful } from "./createContentful";

export const handleSubmit = async (
  setLoading,
  setShowRegexError,
  formData,
  setFormData,
  initialFormData
) => {
  setLoading(true);
  var validEmailRegex =
    /^([a-z A-Z 0-9 . _]+)@([a-z A-Z]{2,15}).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;
  var validPhoneRegex = /^[0-9]{10}$/;
  if (formData.recaptcha) {
    if (!validEmailRegex.test(formData.email)) {
      setShowRegexError("Please provide correct Email Address");
    } else if (!validPhoneRegex.test(formData.phone)) {
      setShowRegexError("Please provide correct Phone Number");
    } else {
      setShowRegexError(null);
      const entries = {
        fields: {
          name: { "en-US": formData?.name || "" },
          phoneNumber: { "en-US": formData?.phone || "" },
          companyName: { "en-US": formData?.company || "" },
          email: { "en-US": formData?.email || "" },
          requiredService: { "en-US": formData?.service || "" },
          howDidYouHear: { "en-US": formData?.howDidYouHear || "" },
          information: { "en-US": formData?.info || "" },
        },
      };
      const formSubmitted = await createContetnful(entries, "form");
      if (formSubmitted) {
        setFormData(initialFormData);
        window?.grecaptcha.reset();
      }
      setLoading(false);
    }
  } else {
    setShowRegexError(
      "Please complete the security verification (reCAPTCHA) to proceed."
    );
    setLoading(false);
  }
};
