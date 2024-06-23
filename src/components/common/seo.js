"use client";
import React from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";

export default function Seo({ data }) {
  return (
    <Helmet>
      <title>{data?.title}</title>
      <meta name="description" content={data?.description} />
      <meta property="og:title" content={data?.title} />
      <meta property="og:description" content={data?.description} />
      {data?.keywords && <meta name="keywords" content={data?.keywords} />}
      {data?.canonicalUrl && <link rel="canonical" href={data?.canonicalUrl} />}
      {data?.image?.fields?.file?.url && (
        <meta property="og:image" content={data?.image?.fields?.file?.url} />
      )}
      <meta property="og:url" content="https://astro-stefan-ade.vercel.app" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
