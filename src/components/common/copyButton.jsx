"use client";
import React, { useState } from "react";
import { copyToClipboard } from "@/utils/copyToClipboard";
export default function CopyButton({ text, className }) {
  const [buttonText, setButtonText] = useState("Copy Text");

  const handleCopy = () => {
    copyToClipboard(text).then(() => {
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Copy Text");
      }, 3000);
    });
  };

  return (
    <div className={className}>
      <button onClick={handleCopy}>{buttonText}</button>
    </div>
  );
}
