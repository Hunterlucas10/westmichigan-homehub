import { Helmet } from "react-helmet";

const SITE_URL = "https://westmichigan-homehub.com";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export const OrganizationSchema = ({ 
  name = "West Michigan Homebuyer Hub",
  url = SITE_URL,
  logo = `${SITE_URL}/logo.png`,
  description = "Connecting West Michigan homebuyers with trusted local lenders specializing in zero down, low down payment, and first-time buyer programs."
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grand Rapids",
      addressRegion: "MI",
      addressCountry: "US"
    },
    areaServed: {
      "@type": "State",
      name: "Michigan"
    },
    sameAs: []
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}

export const ArticleSchema = ({
  title,
  description,
  url,
  datePublished = "2024-01-15",
  dateModified = "2024-01-15",
  author = "West Michigan Homebuyer Hub",
  image = `${SITE_URL}/og-image-default.jpg`
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "West Michigan Homebuyer Hub",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`
      }
    },
    image
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  url?: string;
}

export const LocalBusinessSchema = ({
  name = "West Michigan Homebuyer Hub",
  description = "Connecting West Michigan homebuyers with trusted local lenders specializing in affordable loan programs.",
  address = "Grand Rapids, MI",
  phone = "(616) 555-1234",
  email = "info@wmhomebuyerhub.com",
  url = SITE_URL
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grand Rapids",
      addressRegion: "MI",
      addressCountry: "US"
    },
    telephone: phone,
    email,
    url,
    areaServed: {
      "@type": "State",
      name: "Michigan"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

