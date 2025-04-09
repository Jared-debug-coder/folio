import React from 'react';
import { ChevronDown, Code, Server, Globe, PenTool, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';

// Sample project data
const featuredProjects = [
  {
    id: 'cage-system',
    title: 'Cage Management System',
    description: 'An advanced system for managing livestock cages with tracking and analytics features.',
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=500',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 'rentconnect',
    title: 'RentConnect Website',
    description: 'A platform connecting landlords and tenants with seamless property management features.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500',
    tags: ['Next.js', 'Express', 'PostgreSQL']
  },
  {
    id: 'car-hire',
    title: 'Car Hire Application',
    description: 'A comprehensive car rental solution with booking, payment, and fleet management capabilities.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=500',
    tags: ['React Native', 'Firebase', 'Stripe']
  }
];

const skills = [
  {
    icon: <Code size={36} />,
    title: 'Frontend Development',
    description: 'Creating responsive, interactive interfaces using modern web technologies like React, Next.js, and Tailwind CSS.'
  },
  {
    icon: <Server size={36} />,
    title: 'Backend Development',
    description: 'Building robust server-side applications with Node.js, Express, and database technologies including MongoDB and PostgreSQL.'
  },
  {
    icon: <Globe size={36} />,
    title: 'Full Stack Solutions',
    description: 'Developing end-to-end web applications with seamless integration between frontend and backend systems.'
  },
  {
    icon: <PenTool size={36} />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences with a focus on usability and modern aesthetics.'
  }
];

interface IndexProps {
  guestName?: string;
}

const Index: React.FC<IndexProps> = ({ guestName = 'My Guest' }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <HeroSection guestName={guestName} />
        
        <div className="text-center mb-16">
          <button 
            onClick={() => scrollToSection('skills')}
            className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
        
        {/* Skills Section */}
        <section id="skills" className="section-padding bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">My Expertise</h2>
              <div className="h-1 w-20 bg-green-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-700"
                >
                  <div className="text-green-500 mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="section-padding bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-green-500 mx-auto mb-4"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore some of my recent work. Each project represents unique challenges and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/projects" 
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-medium inline-flex items-center"
              >
                View All Projects <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time positions, and consulting work.
              Let's create something amazing together!
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-medium bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors inline-flex items-center"
            >
              Get In Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
