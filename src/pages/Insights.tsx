import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import InsightCard from '../components/InsightCard';

const insights = [
  {
    title: "The Better Data Warehouse",
    date: "April 2nd, 2025",
    slug: "better-data-warehouse",
    image: "/warehouse.png"
  },
  {
    title: "Snowflake DWH Migrations – Success where others failed!",
    date: "October 14th, 2024",
    slug: "snowflake-dwh-migrations",
    image: "/migration.png"
  },
  {
    title: "Organizational Impact between Spark based SaaS and Snowflake Case Study",
    date: "January 25th, 2024",
    slug: "spark-snowflake-comparison",
    image: "/role.png"
  },
  {
    title: "Can Databricks close the gap with Snowflake on Authorization Controls?",
    date: "May 17th, 2023",
    slug: "databricks-snowflake-auth",
    image: "/databricks.png"
  },
  {
    title: "Snowpark!",
    date: "May 5th, 2023",
    slug: "snowpark-overview",
    image: "/snowpark.png"
  },
  {
    title: "Build your Lakehouse in the Data Cloud with Snowflake",
    date: "May 2nd, 2023",
    slug: "lakehouse-data-cloud",
    image: "/lakehouse.png"
  }
];

const Insights: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <SEO 
        title="Insights | Squadron Data"
        description="Stay updated with the latest insights, trends, and best practices in data migration, analytics, and enterprise data platforms from Squadron Data's experts."
        canonical="https://squadrondata.com/insights"
      />
      
      <div 
        ref={sectionRef}
        className="min-h-screen pt-32 pb-20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
        style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-6">
              Latest Insights
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Stay ahead of the curve with our expert analysis and insights on data migration,
              analytics, and enterprise data platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <InsightCard
                key={insight.slug}
                title={insight.title}
                date={insight.date}
                image={insight.image}
                slug={insight.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;