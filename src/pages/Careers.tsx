import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Briefcase, Code, Brain, Database, Shield, Users, ChevronDown, Send } from 'lucide-react';

interface RequirementCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const RequirementCard: React.FC<RequirementCardProps> = ({ icon, title, items }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="bg-accent/10 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full flex-shrink-0" />
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Big Data Hadoop Developer',
    experience: '',
    resume: null as File | null,
    coverLetter: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your application! We will review and get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'Big Data Hadoop Developer',
      experience: '',
      resume: null,
      coverLetter: '',
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  return (
    <>
      <SEO 
        title="Careers at Squadron Data | Join Our Team"
        description="Join Squadron Data and help transform organizations into data-centric, analytics-driven enterprises. View our current openings and apply today."
        canonical="https://squadrondata.com/careers"
      />
      
      <div 
        ref={sectionRef}
        className="min-h-screen pt-32 pb-20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
        style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Briefcase className="h-5 w-5 text-accent mr-2" />
              <span className="text-text font-medium">Join Our Team</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-6">
              Build the Future of Data Engineering
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Join our team of experts and help organizations transform their data infrastructure
              while working with cutting-edge technologies and solving complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <RequirementCard
              icon={<Code className="h-6 w-6 text-accent" />}
              title="Technical Skills"
              items={[
                "Hadoop and Hive LLAP",
                "Machine Learning and AI (deep learning)",
                "Scala and Spark",
                "Data migration and optimization",
                "Cloud solutions architecture"
              ]}
            />
            <RequirementCard
              icon={<Brain className="h-6 w-6 text-accent" />}
              title="Education & Experience"
              items={[
                "Master's in Computer Science or related field",
                "Experience with big data technologies",
                "Strong software development background",
                "Understanding of data warehousing concepts",
                "Cloud platform expertise"
              ]}
            />
            <RequirementCard
              icon={<Database className="h-6 w-6 text-accent" />}
              title="Key Responsibilities"
              items={[
                "Develop proprietary software solutions",
                "Migrate data at high speeds",
                "Design cloud solutions",
                "Implement security protocols",
                "Optimize data workflows"
              ]}
            />
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="font-heading text-2xl font-semibold mb-8 text-text text-center">
              Apply Now
            </h2>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-text-secondary text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-text-secondary text-sm mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                    min="0"
                    max="50"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-text-secondary text-sm mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="coverLetter" className="block text-text-secondary text-sm mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <span>Submit Application</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;