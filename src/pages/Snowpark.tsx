import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Calendar, Phone, Mail } from 'lucide-react';

const Snowpark: React.FC = () => {
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
        title="Snowpark: The Future of Data Engineering | Squadron Data Insights"
        description="Discover why Squadron Data has fallen in love with Snowpark for data engineering, and how it compares to traditional Spark-based solutions."
        canonical="https://squadrondata.com/insights/snowpark-overview"
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
              <time dateTime="2023-05-05">May 5th, 2023</time>
              <span className="mx-2">•</span>
              <span>By James Dinkel</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-8">
              Snowpark!
            </h1>

            <img 
              src="/snowpark.png"
              alt="Snowpark Data Engineering"
              className="w-full rounded-2xl shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              We have migrated our Data Engineering Toolkit tooling to Snowpark and have absolutely 
              fallen in love with it. Realize we come from the Spark world and probably know Spark 
              as well or better than anyone in North America. The combination of Snowpark and 
              Airflow (orchestration) is the best in the business, being the simplest and most 
              cost effective way to do data engineering. And amazingly powerful!
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h2 className="font-heading text-xl font-semibold mb-4">Quick References</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Simple (quick reference start guide):</p>
                  <a 
                    href="https://docs.snowflake.com/en/developer-guide/snowpark/quick-start"
                    className="text-accent hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quick Reference Guide
                  </a>
                </div>
                <div>
                  <p className="font-medium mb-2">Powerful (API guide):</p>
                  <a 
                    href="https://docs.snowflake.com/en/developer-guide/snowpark/reference"
                    className="text-accent hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    API Guide
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mt-12">
              <h2 className="font-heading text-xl font-semibold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <a 
                  href="tel:1-888-556-7693" 
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  1-888-556-7693
                </a>
                <a 
                  href="mailto:info@squadrondata.com" 
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  info@squadrondata.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Snowpark;