import React, { useEffect, useRef } from 'react';
import { Award, Users, Globe, ArrowRight } from 'lucide-react';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
      <div className="text-4xl font-bold text-accent mb-2">{number}</div>
      <div className="text-text-secondary">{label}</div>
    </div>
  );
};

interface FlowCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FlowCard: React.FC<FlowCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative flex items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mr-6">
        <div className="bg-secondary/30 p-4 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-2 text-text">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 w-full bg-secondary/20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
            Your Path to Data Excellence
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From fragile legacy stacks to cloud‑native analytics, we lead enterprises through the entire data‑transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <StatCard number="130+" label="Enterprise Clients" />
          <StatCard number="21" label="Fortune 100 Companies" />
          <StatCard number="15+" label="Years of Proven Results" />
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <FlowCard
            icon={<Award className="h-6 w-6 text-accent" />}
            title="Strategic Assessment"
            description="We analyze your current data infrastructure and create a tailored transformation roadmap."
          />
          <FlowCard
            icon={<Users className="h-6 w-6 text-accent" />}
            title="Expert Implementation"
            description="Our team of specialists executes the migration with minimal disruption to your operations."
          />
          <FlowCard
            icon={<Globe className="h-6 w-6 text-accent" />}
            title="Continuous Innovation"
            description="We ensure your data platform evolves with your business needs and industry trends."
          />
        </div>

        <div className="text-center">
          <a 
            href="#services" 
            className="inline-flex items-center justify-center bg-accent hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;