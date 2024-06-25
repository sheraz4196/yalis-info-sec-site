export function copyToClipboard(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text", err);
      }
    );
  } else {
    console.error("Clipboard API not supported");
    return Promise.reject("Clipboard API not supported");
  }
}
