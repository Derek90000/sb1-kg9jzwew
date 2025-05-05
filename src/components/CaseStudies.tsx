import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, industry, challenge, solution, results }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <span className="inline-block text-text-secondary text-sm font-medium mb-4">{industry}</span>
      <h3 className="font-heading text-xl font-semibold mb-4 text-text">{title}</h3>
      
      <div className="mb-4">
        <h4 className="font-heading text-sm font-medium mb-2 text-text-secondary">Challenge</h4>
        <p className="text-text leading-relaxed text-sm">{challenge}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="font-heading text-sm font-medium mb-2 text-text-secondary">Solution</h4>
        <p className="text-text leading-relaxed text-sm">{solution}</p>
      </div>
      
      <div className="mb-6">
        <h4 className="font-heading text-sm font-medium mb-2 text-text-secondary">Results</h4>
        <p className="text-text leading-relaxed text-sm">{results}</p>
      </div>
      
      <a 
        href="#contact" 
        className="inline-flex items-center text-accent hover:text-text-secondary font-medium text-sm transition-colors"
      >
        <span>Read Full Case Study</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const CaseStudies: React.FC = () => {
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
    <section
      id="case-studies"
      ref={sectionRef}
      className="py-20 w-full bg-secondary bg-opacity-20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">Success Stories</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover how we've helped organizations transform their data infrastructure 
            and unlock new business insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudy
            industry="Financial Services"
            title="Global Bank's Legacy Migration"
            challenge="A global bank with petabytes of critical data stored across multiple legacy systems needed to consolidate and modernize their data platform."
            solution="We implemented a phased Snowflake migration with custom data pipelines, ensuring zero downtime and maintaining strict compliance requirements."
            results="70% reduction in operational costs, 85% faster query performance, and new analytics capabilities that generated $15M in business value within one year."
          />
          <CaseStudy
            industry="Healthcare"
            title="Healthcare Provider Data Transformation"
            challenge="A healthcare network struggled with siloed data across 12 systems, limiting their ability to provide cohesive patient care and analyze outcomes."
            solution="Designed and implemented a comprehensive Snowflake-based data platform with secure sharing capabilities and real-time analytics dashboards."
            results="Unified patient records across all facilities, reduced reporting time from days to minutes, and enabled predictive analytics for patient care optimization."
          />
          <CaseStudy
            industry="Manufacturing"
            title="Supply Chain Optimization"
            challenge="A global manufacturer needed to improve supply chain visibility and efficiency by consolidating data from IoT devices, ERP systems, and supplier networks."
            solution="Created a scalable data architecture in Snowflake with real-time data ingestion pipelines and advanced analytics capabilities."
            results="25% reduction in inventory costs, 30% improvement in forecast accuracy, and near-real-time visibility into global operations."
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;