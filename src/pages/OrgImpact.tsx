import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Calendar } from 'lucide-react';

const OrgImpact: React.FC = () => {
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
        title="Organizational Impact Analysis: Spark vs Snowflake | Squadron Data Insights"
        description="A comprehensive case study comparing the organizational impact and total cost of ownership between Spark-based SaaS solutions and Snowflake."
        canonical="https://squadrondata.com/insights/spark-snowflake-comparison"
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
              <time dateTime="2024-01-25">January 25th, 2024</time>
              <span className="mx-2">•</span>
              <span>By James Dinkel</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-4">
              Organizational Impact Analysis
            </h1>
            <h2 className="font-heading text-2xl text-text-secondary mb-8">
              Spark based SaaS vs. Snowflake: A Case Study in Managed Service vs. Software as a Service
            </h2>

            <img 
              src="/role.png"
              alt="Organizational Impact Analysis"
              className="w-full rounded-2xl shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="font-heading text-xl font-semibold mb-4">Budget Allocation in Most Organizations</h3>
              <ul className="space-y-2">
                <li><strong>HSC (Hardware, Software, Cloud):</strong> 30% of organization's budget</li>
                <li><strong>IL/VL (Internal Labor, Vendor Labor):</strong> 70% of organization's budget</li>
              </ul>
            </div>

            <p>
              Yet, when people compare Spark based SaaS vs. Snowflake, they tend to only look at 
              price-performance and fail to recognize the impact to their organization. The decision 
              on the software vendor will provide a savings on impact to your org that is larger than 
              your total spend to either one of the software vendors.
            </p>

            <p>
              As it relates to performance, out of the box, Snowflake beats Spark based SaaS's 
              substantially. Snowflake is self-optimized. With a bit of tuning, you can get the 
              Spark based SaaS pretty close to Snowflake. Stay tuned, we will devote an entire 
              case study to price performance in late 1Q24, but our experience and the benchmarks 
              we and others have done so far show a roughly 30% price performance improvement in 
              Snowflake over Spark based SaaS's platforms.
            </p>

            <h2>Functional Analysis</h2>
            <p>
              While price performance is better with Snowflake, from an impact perspective this 
              functional stuff is the stuff that really matters. Here at Squadron Data, we spent 
              our first 7 years as a Hadoop SI (Cloudera PS #1 Partner in North America) and the 
              last year as a Snowflake Select SI Partner.
            </p>

            <blockquote className="border-l-4 border-accent pl-4 italic">
              We continually heard "but Snowflake is so much easier".
            </blockquote>

            <p>
              But how is it so much easier? Where is it so much easier? We took a look at a typical 
              40 person data and analytics org and looked at the different personas and the functions 
              they performed. Here are the results:
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm my-8">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Mid-sized Data Analytics Organization (40 people) Comparative Impact Analysis Results
              </h3>
              <p className="text-sm text-text-secondary italic mb-4">
                Please note: There will be variance in your organizational savings by moving to 
                Snowflake instead of a Spark based SaaS. Not all companies will have the same 
                savings, but all companies will have savings – and it will be significant. Your 
                savings on impact to your org is larger than your spend to either one of them.
              </p>
              <p className="font-medium">
                The total difference in the above mid-sized organization is 33 heads vs. 43 heads.
              </p>
            </div>

            <p>
              The obvious difference is in the platform administrator and the job optimization. 
              Snowflake there is no platform administrator and no job optimization. But there are 
              large savings beyond these roles.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-8">
              <h3 className="font-heading text-xl font-semibold mb-4">Resource Cost Estimates</h3>
              <ul className="space-y-2">
                <li>All estimates use $80/hr (50% onshore, 50% offshore)</li>
                <li>Exception: Data science roles use $120/hr</li>
                <li>Numbers shown are annual costs</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="font-heading text-xl font-semibold mb-4">Recommendation</h3>
              <p>
                We do not recommend removing the 10 heads – good people are hard to find. We recommend 
                placing those folks into the higher value work (delivering answers to the business).
              </p>
              <p className="mt-4">
                Here is how the work delivery of low (platform admin roles), medium (data engineer roles) 
                and high (citizen roles) value roles differ between Spark based SaaS and Snowflake for 
                a mid-sized organization:
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default OrgImpact;