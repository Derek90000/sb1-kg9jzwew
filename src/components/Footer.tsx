import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text py-16 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-14 w-40 relative overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Squadron Data Logo" 
                  className="absolute inset-0 w-full h-full object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <span className="font-heading font-bold text-xl -ml-2">Squadron Data</span>
            </div>
            <p className="text-white text-opacity-80 mb-6 leading-relaxed">
              Transform your company into a data-centric, analytics-driven organization with North America's leading data services company.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="tel:1-888-556-7693" className="flex items-center text-white text-opacity-80 hover:text-accent transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                1-888-556-7693
              </a>
              <a href="mailto:info@squadrondata.com" className="flex items-center text-white text-opacity-80 hover:text-accent transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                info@squadrondata.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Platform Migrations
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Data Engineering Toolkit
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Enhanced Customer 360
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Data Strategy & Architecture
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Managed Operations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#case-studies" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#expertise" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="/#team" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/insights" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="/careers" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white text-opacity-80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Locations</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-heading font-medium mb-1">United States</p>
                  <p className="text-white text-opacity-80">
                    7415 W. 130th Street, Suite 290<br />
                    Overland Park, KS 66213
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-heading font-medium mb-1">Canada</p>
                  <p className="text-white text-opacity-80">
                    90 Burnhmthorpe Rd W, Suite 1400<br />
                    Mississauga ON L5B 3C3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Squadron Data inc. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-white text-opacity-70 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white text-opacity-70 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;