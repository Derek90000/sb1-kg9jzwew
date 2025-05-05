import React, { useEffect, useRef } from 'react';
import { Award, Database, Layers, FileCode, Code, Users, Shield, ArrowRight } from 'lucide-react';

interface ExpertiseItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="bg-secondary bg-opacity-30 p-3 rounded-full mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-2 text-text">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Expertise: React.FC = () => {
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
      id="expertise"
      ref={sectionRef}
      className="py-20 w-full bg-primary px-4 md:px-8 opacity-0 transition-opacity duration-1000"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">Leadership & Expertise</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Our leadership team brings decades of combined experience in data engineering and analytics,
              delivering exceptional results for Fortune 100 companies and beyond.
            </p>
            
            <div className="space-y-8 mb-8">
              <ExpertiseItem
                icon={<Users className="h-6 w-6 text-accent" />}
                title="Executive Leadership"
                description="Led by James Dinkel (CEO), with Chak Somaraju (VP Technology) and Chris Horbelt (VP Professional Services) bringing deep industry expertise."
              />
              <ExpertiseItem
                icon={<Database className="h-6 w-6 text-accent" />}
                title="Elite Snowflake Partnership"
                description="Former #1 Professional Services partner of Cloudera, now an elite Snowflake partner with deep platform expertise."
              />
              <ExpertiseItem
                icon={<Award className="h-6 w-6 text-accent" />}
                title="Industry Recognition"
                description="Trusted by 21 Fortune-100 companies, with over 130 successful enterprise implementations."
              />
            </div>

            <a 
              href="#team" 
              className="inline-flex items-center justify-center bg-accent hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="mb-8">
              <div className="inline-flex items-center bg-secondary bg-opacity-50 px-4 py-2 rounded-full mb-4">
                <Code className="h-5 w-5 text-accent mr-2" />
                <span className="text-text font-medium">Technical Excellence</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-text">Core Capabilities</h3>
            </div>
            
            <div className="space-y-8">
              <ExpertiseItem
                icon={<Layers className="h-6 w-6 text-accent" />}
                title="Data Platform Migration"
                description="Automated migration solutions with the Data Warehouse Migrator, ensuring seamless transitions to modern platforms."
              />
              <ExpertiseItem
                icon={<FileCode className="h-6 w-6 text-accent" />}
                title="Advanced Analytics"
                description="Comprehensive data science and analytics capabilities, from strategy to implementation and optimization."
              />
              <ExpertiseItem
                icon={<Shield className="h-6 w-6 text-accent" />}
                title="Enterprise Security"
                description="Robust data governance frameworks and security protocols ensuring compliance and protection."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;