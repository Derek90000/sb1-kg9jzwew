import React, { useEffect, useRef, useState } from 'react';
import { Mail, MessageSquare, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, this would send the data to a server
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

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
      id="contact"
      ref={sectionRef}
      className="relative py-20 w-full px-4 md:px-8 opacity-0 transition-opacity duration-1000"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-secondary bg-opacity-50 px-4 py-2 rounded-full mb-6">
              <MessageSquare className="h-5 w-5 text-accent mr-2" />
              <span className="text-text font-medium">Get in Touch</span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
              Ready to Transform Your Data Infrastructure?
            </h2>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              Contact us today to discuss how we can help your organization leverage 
              the full potential of your data. Our team of experts is ready to 
              assist with your migration to Snowflake and other data optimization needs.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <a href="mailto:info@squadrondata.com" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                <Mail className="h-5 w-5 text-accent mr-3" />
                info@squadrondata.com
              </a>
              <a href="tel:1-888-556-7693" className="flex items-center text-text-secondary hover:text-accent transition-colors">
                <Phone className="h-5 w-5 text-accent mr-3" />
                1-888-556-7693
              </a>
            </div>
            
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl">
              <h3 className="font-heading font-medium text-lg mb-4 text-text">North American Offices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-heading font-medium text-text">United States</p>
                  <p className="text-text-secondary">7415 W. 130th Street</p>
                  <p className="text-text-secondary">Suite 290</p>
                  <p className="text-text-secondary">Overland Park, KS 66213</p>
                </div>
                <div>
                  <p className="font-heading font-medium text-text">Canada</p>
                  <p className="text-text-secondary">90 Burnhmthorpe Rd W</p>
                  <p className="text-text-secondary">Suite 1400</p>
                  <p className="text-text-secondary">Mississauga ON L5B 3C3</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="font-heading font-semibold text-xl mb-6 text-text">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-text-secondary text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-text-secondary text-sm mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-text-secondary text-sm mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <span>Send Message</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;