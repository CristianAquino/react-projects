"use client";

import { Helmet } from "react-helmet";

export type SEOProps = {
  // types...
  title: string;
  description: string;
  children?: React.ReactNode;
};

const SEO = ({ title, description, children }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </Helmet>
  );
};

export default SEO;
