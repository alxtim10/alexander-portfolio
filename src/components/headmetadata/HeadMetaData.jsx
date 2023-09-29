import React from "react";
import Head from "next/head";

const HeadMetaData = () => {
  const defaultTitle = "Alexander's Portofolio";
  const ogImageUrl =
    "https://cdn.discordapp.com/attachments/782122613929148436/1157318953203413032/ogImage.png?ex=65182cc4&is=6516db44&hm=48fd63e62be5b3b638c0a91a7e422342a9e3e06cd83b6aee8a5f018b2a1d7942&";
  const baseUrl = "https://imotioes.netlify.app";
  const metaDescription = "Alexander's Portfolio";

  const pageUrl = new URL("", baseUrl).toString();

  return (
    <Head>
      <title>{defaultTitle}</title>

      {/* metadata */}
      <meta name="title" content={defaultTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:url" content={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
}

export default HeadMetaData;
