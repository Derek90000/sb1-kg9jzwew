import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-40 pb-32 md:pt-56 md:pb-48 w-full px-4 md:px-8 opacity-0 transition-opacity duration-1000 overflow-hidden"
      style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ 
          backgroundImage: 'url(/background.png)'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-text">
            Turn Legacy Data into<br />
            <span style={{ color: 'rgb(37, 99, 235)' }}>Competitive Advantage</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-12">
            We <span className="text-text">migrate</span>, <span className="text-text">modernize</span>, and <span className="text-text">monetize</span> your enterprise data so every query drives revenue—starting day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#contact" 
              className="flex items-center justify-center bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm group"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:1-888-556-7693" 
              className="flex items-center justify-center bg-white/80 backdrop-blur-sm border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Call 1-888-556-7693</span>
            </a>
          </div>

          <div className="w-64 h-64 flex items-center justify-center">
            <img 
              src="/snowflake.png" 
              alt="Snowflake Partner"
              className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;