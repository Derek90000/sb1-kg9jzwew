import React, { useEffect, useRef } from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image, linkedinUrl }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-square mb-6 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2 text-text">{name}</h3>
      <p className="text-text-secondary mb-4">{title}</p>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-accent hover:text-text-secondary transition-colors"
      >
        <Linkedin className="h-5 w-5 mr-2" />
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  );
};

const Team: React.FC = () => {
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

  const teamMembers = [
    {
      name: 'James Dinkel',
      title: 'President and CEO',
      image: '/James-Dinkel-CEO.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/james-dinkel-3a46647/'
    },
    {
      name: 'Chak Somaraju',
      title: 'Vice President of Technology',
      image: '/Chak-Somaraju.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/chak-somaraju-81b8004/'
    },
    {
      name: 'Chris Horbelt',
      title: 'Vice President of Professional Services',
      image: '/Chris-Horbelt.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/chris-horbelt-6509797/'
    },
    {
      name: 'Caston Stack',
      title: 'Vice President of Data Governance',
      image: '/Caston-Stack.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/caston-stack-798560b4/'
    },
    {
      name: 'Scott Thompson',
      title: 'Technical Director',
      image: '/Scott-Thompson.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/scott-thompson-48a07025/'
    },
    {
      name: 'Cody Vliet',
      title: 'Director of Business Development',
      image: '/Cody-Vliet.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/codyvliet/'
    }
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 w-full bg-primary px-4 md:px-8 opacity-0 transition-opacity duration-1000"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">Our Leadership Team</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            Meet the experienced professionals leading Squadron Data's mission to transform 
            organizations into data-centric, analytics-driven enterprises.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-accent hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Work With Us</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;