
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-navy/5 to-portfolio-burgundy/5 z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-portfolio-navy">
                Jared <span className="text-portfolio-burgundy">Mogonchi</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full-Stack Developer creating innovative web solutions and bringing digital ideas to life. 
                Specialized in HTML, CSS, JavaScript, React, C/C++, Python, Java, and PHP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-gradient px-8 py-3 rounded-full font-medium inline-flex items-center justify-center">
                  View Projects <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact" className="px-8 py-3 rounded-full font-medium bg-transparent border-2 border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy hover:text-white transition-colors inline-flex items-center justify-center">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-portfolio-gold rounded-3xl"></div>
              <img
                src="/lovable-uploads/37da14e4-6691-40de-ab9a-53597eae38fd.png"
                alt="Professional portrait"
                className="rounded-3xl w-full h-auto relative z-10 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
