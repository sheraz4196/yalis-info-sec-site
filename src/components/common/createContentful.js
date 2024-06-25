import { toast } from "react-toastify";

export const createContetnful = async (entryData, contentTypeId) => {
  try {
    // eslint-disable-next-line no-undef
    const contentful = require("contentful-management");
    const client = contentful.createClient({
      accessToken: "CFPAT-heLRj5SMpdOHozePkY0Ok5aMUHXUp2KJx788sFGiDUc",
    });

    // Get the space
    const space = await client.getSpace("2w209vrtahje");
    // Get the master environment
    const environment = await space.getEnvironment("master");

    // Get the content type
    const contentType = await environment.getContentType(contentTypeId);
    const entry = await environment.createEntry(contentType.sys.id, entryData);

    // console.log("Entry created", entry.sys.id);
    if (entry) {
      const pub = await entry.publish();
      toast.success("Form is submitted");
      return entry.sys.id;
    }
  } catch (error) {
    console.log("error:", error);
    toast.error("Form submission failed");
  }
};
