import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Squadron Data | Enterprise Data Migration & Optimization',
  description = 'Squadron Data is a North American data services company that specializes in migrating and optimizing enterprise data platforms, particularly transitioning legacy systems to Snowflake, to help organizations become data-centric and analytics-driven.',
  canonical = 'https://squadrondata.com',
  ogImage = '/og-image.jpg'
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Squadron Data",
    "url": canonical,
    "logo": `${canonical}/logo.png`,
    "description": description,
    "address": [{
      "@type": "PostalAddress",
      "streetAddress": "7415 W. 130th Street, Suite 290",
      "addressLocality": "Overland Park",
      "addressRegion": "KS",
      "postalCode": "66213",
      "addressCountry": "US"
    }, {
      "@type": "PostalAddress",
      "streetAddress": "90 Burnhmthorpe Rd W, Suite 1400",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5B 3C3",
      "addressCountry": "CA"
    }],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1-888-556-7693",
      "contactType": "customer service",
      "email": "info@squadrondata.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/squadron-data"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Squadron Data"
    },
    "serviceType": "Data Migration and Analytics",
    "areaServed": ["US", "CA"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Platform Migrations",
            "description": "Automated lift and shift from legacy platforms to Snowflake with >80% ETL migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Engineering Toolkit",
            "description": "Automated migration of Ab Initio, Oozie, DataStage, and Informatica workflows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enhanced Customer 360",
            "description": "Transform omnichannel presence with deep audience understanding"
          }
        }
      ]
    }
  };

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "member": [
      {
        "@type": "Person",
        "name": "James Dinkel",
        "jobTitle": "President and CEO",
        "image": "/James-Dinkel-CEO.jpeg",
        "sameAs": "https://www.linkedin.com/in/james-dinkel-3a46647/"
      },
      {
        "@type": "Person",
        "name": "Chak Somaraju",
        "jobTitle": "Vice President of Technology",
        "image": "/Chak-Somaraju.jpeg",
        "sameAs": "https://www.linkedin.com/in/chak-somaraju-81b8004/"
      },
      {
        "@type": "Person",
        "name": "Chris Horbelt",
        "jobTitle": "Vice President of Professional Services",
        "image": "/Chris-Horbelt.jpeg",
        "sameAs": "https://www.linkedin.com/in/chris-horbelt-6509797/"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What data migration services does Squadron Data offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Squadron Data specializes in automated lift and shift from legacy platforms to Snowflake with >80% ETL migration and continuous data validation."
        }
      },
      {
        "@type": "Question",
        "name": "How experienced is Squadron Data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Squadron Data has over 15 years of excellence, serving 130+ enterprise clients including 21 Fortune 100 companies."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Squadron Data" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="data migration, snowflake, enterprise data, data platform, data analytics, data transformation, data engineering, ETL migration, data warehouse, business intelligence" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(teamSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;