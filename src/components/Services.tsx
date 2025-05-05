import React, { useEffect, useRef, useState } from 'react';
import {
  Database,
  Cloud,
  LineChart,
  Settings,
  Shield,
  Code,
  ArrowRight,
} from 'lucide-react';
import ServiceModal from './ServiceModal';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  onLearnMore,
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    <div className="bg-secondary bg-opacity-20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-heading text-xl font-semibold mb-4 text-text">{title}</h3>
    <p className="text-text-secondary leading-relaxed mb-6">{description}</p>
    <div className="mt-auto">
      <button
        onClick={onLearnMore}
        className="inline-flex items-center text-accent hover:text-text-secondary transition-colors"
      >
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Cloud className="h-8 w-8 text-accent" />,
      title: 'Platform Migrations',
      description:
        'Automated lift‑and‑shift powered by our Data Warehouse Migrator—over 80 % of ETL converted with zero‑miss validation.',
      modalContent: {
        description:
          'Our Platform Migration service provides a comprehensive solution for organizations looking to modernize their data infrastructure with minimal disruption to operations.',
        features: [
          'Automated schema and data migration',
          'Custom ETL conversion tools',
          'Real-time data validation',
          'Zero-downtime migration strategy',
          'Legacy system decommissioning support',
        ],
        benefits: [
          'Reduce migration time by up to 60%',
          'Minimize manual coding efforts',
          'Ensure data accuracy and completeness',
          'Lower operational costs',
          'Improve query performance',
        ],
        technologies: ['Data Warehouse Migrator', 'ETL Tools', 'Python', 'SQL', 'Java'],
      },
    },
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: 'Data Engineering Toolkit',
      description:
        'One‑click conversion of Ab Initio, Oozie, DataStage, and Informatica workflows into modern orchestration (Snowpark / Airflow).',
      modalContent: {
        description:
          'Our Data Engineering Toolkit provides a suite of solutions for modernizing and optimizing your data pipelines and workflows.',
        features: [
          'Automated workflow conversion',
          'Pipeline optimization',
          'Performance monitoring',
          'Error handling and recovery',
          'Version control integration',
        ],
        benefits: [
          'Accelerate development cycles',
          'Reduce maintenance overhead',
          'Improve data quality',
          'Enhanced monitoring capabilities',
          'Streamlined deployment process',
        ],
        technologies: ['Snowpark', 'Apache Airflow', 'Python', 'dbt', 'Git', 'Jenkins'],
      },
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: 'Enhanced Customer 360',
      description:
        'Unify data, surface deep audience insights, and optimize campaigns—boosting ROI across every channel.',
      modalContent: {
        description:
          'Create a unified view of your customers across all touchpoints and channels, enabling personalized experiences and data‑driven decision making.',
        features: [
          'Customer data integration',
          'Identity resolution',
          'Behavioral analytics',
          'Predictive modeling',
          'Real-time segmentation',
        ],
        benefits: [
          'Improved customer satisfaction',
          'Increased marketing ROI',
          'Better customer retention',
          'Personalized experiences',
          'Data‑driven decisions',
        ],
        technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Machine Learning'],
      },
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: 'Data Strategy & Architecture',
      description:
        'Blueprints for lakes, warehouses, and ML pipelines—delivered fast and governed end‑to‑end.',
      modalContent: {
        description:
          'Develop a comprehensive data strategy aligned with your business objectives and design a scalable architecture to support your data initiatives.',
        features: [
          'Architecture assessment',
          'Technology selection',
          'Governance framework',
          'Security planning',
          'Scalability design',
        ],
        benefits: [
          'Future‑proof infrastructure',
          'Reduced technical debt',
          'Improved data accessibility',
          'Enhanced security',
          'Better resource utilization',
        ],
        technologies: ['Cloud Platforms', 'Data Lakes', 'Data Warehouses', 'APIs', 'Microservices'],
      },
    },
    {
      icon: <LineChart className="h-8 w-8 text-accent" />,
      title: 'AI & Machine Learning',
      description:
        'Roadmaps, models, and MLOps that turn raw data into real‑world AI products and new revenue streams.',
      modalContent: {
        description:
          'Leverage cutting‑edge AI and machine‑learning technologies to unlock insights from your data and automate complex business processes.',
        features: [
          'Custom model development',
          'AutoML implementation',
          'Model deployment',
          'Performance monitoring',
          'Continuous improvement',
        ],
        benefits: [
          'Automated decision making',
          'Predictive insights',
          'Process optimization',
          'Cost reduction',
          'Competitive advantage',
        ],
        technologies: [
          'TensorFlow',
          'PyTorch',
          'scikit-learn',
          'MLflow',
          'Kubernetes',
          'Docker',
        ],
      },
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Managed Operations',
      description:
        '24 / 7 platform administration, Elastic Ops, and DataOps / MLOps so your team can focus on innovation.',
      modalContent: {
        description:
          'End‑to‑end management of your data operations, ensuring optimal performance, security, and reliability of your data platform.',
        features: [
          '24/7 monitoring',
          'Performance optimization',
          'Security management',
          'Backup and recovery',
          'Capacity planning',
        ],
        benefits: [
          'Reduced operational overhead',
          'Improved platform stability',
          'Faster issue resolution',
          'Optimized costs',
          'Enhanced security',
        ],
        technologies: [
          'Terraform',
          'Ansible',
          'Prometheus',
          'Grafana',
          'ELK Stack',
        ],
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 w-full bg-primary px-4 md:px-8 opacity-0 transition-opacity duration-1000"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Data Services We Offer
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Leverage 15 + years of deep‑dive migration and engineering expertise to modernize, govern, and extract value from enterprise data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onLearnMore={() => setSelectedService(index)}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {selectedService !== null && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
          content={services[selectedService].modalContent}
        />
      )}
    </section>
  );
};

export default Services;
