import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Calendar, Snowflake } from 'lucide-react';

const Lakehouse: React.FC = () => {
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
        title="Build your Lakehouse in the Data Cloud with Snowflake | Squadron Data Insights"
        description="Discover how Snowflake's Data Cloud simplifies lakehouse architecture, offering near-zero maintenance, superior performance, and enhanced security for modern data solutions."
        canonical="https://squadrondata.com/insights/lakehouse-data-cloud"
      />
      
      <article 
        ref={sectionRef}
        className="min-h-screen pt-32 pb-20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
        style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center text-text-secondary mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <time dateTime="2023-05-02">May 2nd, 2023</time>
              <span className="mx-2">•</span>
              <span>By Tim Fox, CTO</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-8">
              Build your Lakehouse in the Data Cloud with Snowflake
            </h1>

            <img 
              src="/lakehouse.png"
              alt="Snowflake Data Cloud Lakehouse"
              className="w-full rounded-2xl shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              I've spent the past 6 years living in data lakes and transitioning to lake houses. 
              The move to Data Cloud with Snowflake makes a bunch of sense to me for many reasons. 
              Here are a few notable ones:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Snowflake className="h-6 w-6 text-accent mr-2" />
                  <h2 className="font-heading text-xl font-semibold">Simplified Architecture</h2>
                </div>
                <p className="text-text-secondary">
                  Lakehouse are inherently complex. Snowflake does an excellent job simplifying 
                  architecture so you spend more time gaining value from data. The go to market 
                  is incredibly faster because of this.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Snowflake className="h-6 w-6 text-accent mr-2" />
                  <h2 className="font-heading text-xl font-semibold">Near-zero maintenance</h2>
                </div>
                <p className="text-text-secondary">
                  Maintaining data lakes and lake houses is a real cross-industry issue that I see 
                  all the time. This is obvious value that I see Snowflake deliver.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Snowflake className="h-6 w-6 text-accent mr-2" />
                  <h2 className="font-heading text-xl font-semibold">Performance</h2>
                </div>
                <p className="text-text-secondary">
                  With data engineering pipelines you often see performance degradation and instability. 
                  Snowflake gets you the best performance and dependability on the market. This also 
                  includes best-in-class instant scaling and concurrency handling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Snowflake className="h-6 w-6 text-accent mr-2" />
                  <h2 className="font-heading text-xl font-semibold">Security and Accessibility</h2>
                </div>
                <p className="text-text-secondary">
                  Snowflake excels in making all data secure and easily accessible – regardless of 
                  type, structure or if data lives outside of an organization. This is essential 
                  for machine learning.
                </p>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-semibold mt-12 mb-6">Key Components</h2>

            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Data Engineering and Machine Learning: Snowpark
                </h3>
                <p>
                  With Snowpark, data engineers and data scientists can take advantage of familiar 
                  programming languages and tools to develop and deploy custom data pipelines and 
                  machine learning models, reducing the need for specialized skills and increasing 
                  productivity. Snowpark also integrates seamlessly with Snowflake's ecosystem of 
                  tools and services, enabling users to easily move data between Snowflake and other 
                  platforms and to take advantage of Snowflake's advanced security and governance features.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Data Warehouse
                </h3>
                <p>
                  Snowflake's cloud-based data warehouse provides numerous benefits, including the 
                  ability to quickly and easily scale compute resources up or down as needed, pay 
                  only for what is used, and store and analyze structured and semi-structured data 
                  in a single platform. Additionally, Snowflake's built-in security and governance 
                  features enable organizations to confidently store and analyze sensitive data while 
                  maintaining compliance with industry regulations.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Ingestion: Snowpipe
                </h3>
                <p>
                  With Snowpipe, data can be ingested and made immediately available for analysis, 
                  providing faster access to insights and enabling timely decision-making.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Object Cloud Storage
                </h3>
                <p>
                  Internal Snowflake Tables – used by Snowflake to efficiently manage and optimize 
                  queries and operations within its cloud-based data warehouse. External Iceberg 
                  Tables – allow for efficient querying and analysis of large datasets without 
                  leaving the object stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Lakehouse;