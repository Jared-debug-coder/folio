
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  gallery?: string[];
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample project data (in a real app, this would come from an API)
  const projects: ProjectData[] = [
    {
      id: 'cage-system',
      title: 'Cage Management System',
      description: 'An advanced system for managing chiken cages with tracking and analytics features.',
      longDescription: 'The Cage Management System is a comprehensive solution designed for chiken farmers and agricultural businesses to efficiently manage their cage operations. The system provides real-time monitoring, automated feeding schedules, inventory management, and detailed analytics to optimize productivity and animal welfare.',
      image: '/uploads/cage1.png', 
      tags: ['React', 'Java', 'Mysql'],
      features: [
        'Real-time monitoring of cage conditions',
        'Automated feeding schedule management',
        'Health tracking and alert system',
        'Inventory and supply chain management',
        'Comprehensive reporting and analytics',
        'Mobile-responsive design for on-the-go management'
      ],
      technologies: [
        'HTML5 and CSS3 for structure and styling',
        'JavaScript for interactive elements',
        'React.js for building the user interface',
        'Node.js and Express for backend APIs',
        'MongoDB for data storage',
        'Socket.IO for real-time updates',
        'Chart.js for visual analytics',
        'Responsive design principles for all device types'
      ],
      demoUrl: 'https://cage-system-demo.com',
      githubUrl: 'https://github.com/username/cage-system',
      gallery: [
        'https://images.unsplash.com/photo-1505232530843-7e94d7faac73?q=80&w=800',
        'https://images.unsplash.com/photo-1536657689784-eb72cdeea202?q=80&w=800',
        'https://images.unsplash.com/photo-1560420891-c499dd4d26a1?q=80&w=800'
      ]
    },
    {
      id: 'rentconnect',
      title: 'RentConnect Website',
      description: 'A platform connecting landlords and tenants with seamless property management features.',
      longDescription: 'RentConnect is a comprehensive property management platform that bridges the gap between landlords and tenants. The platform streamlines the entire rental process from property listing to lease management, rent collection, and maintenance requests. With user-friendly interfaces for both landlords and tenants, RentConnect aims to make property renting and management a hassle-free experience.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000',
      tags: ['Next.js', 'Express', 'PostgreSQL'],
      features: [
        'Property listing and search functionality',
        'Online application and screening process',
        'Digital lease signing and management',
        'Secure rent payment processing',
        'Maintenance request system',
        'Landlord dashboard with financial reporting',
        'Tenant portal for managing all aspects of their rental'
      ],
      technologies: [
        'HTML5 and CSS3 for structure and styling',
        'JavaScript and React for dynamic UI components',
        'PHP for server-side processing',
        'MySQL database for data management',
        'Responsive design with Tailwind CSS',
        'AWS S3 for document and image storage',
        'Stripe integration for payment processing',
        'SendGrid for email notifications'
      ],
      demoUrl: 'https://rentconnect-demo.com',
      githubUrl: 'https://github.com/username/rentconnect',
      gallery: [
        'https://images.unsplash.com/photo-1556566229-3e3b153f4c57?q=80&w=800',
        'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=800',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=800'
      ]
    },
    {
      id: 'car-hire',
      title: 'Car Hire Application',
      description: 'A comprehensive car rental solution with booking, payment, and fleet management capabilities.',
      longDescription: 'The Car Hire Application is a full-featured platform designed to revolutionize the car rental experience. This system serves both rental companies and customers by providing an intuitive booking process, flexible payment options, and robust fleet management tools. The application prioritizes user experience with a sleek interface while ensuring administrative control and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000',
      tags: ['React Native', 'Firebase', 'Stripe'],
      features: [
        'Intuitive vehicle search and booking system',
        'Real-time availability calendar',
        'Secure payment processing with multiple options',
        'Driver verification and digital contracts',
        'GPS tracking and geofencing for fleet monitoring',
        'Maintenance scheduling and history tracking',
        'Customer review and loyalty program system'
      ],
      technologies: [
        'HTML5 and CSS3 for the web interface',
        'JavaScript with React for frontend development',
        'Python for backend services and data processing',
        'RESTful API architecture',
        'Firebase for real-time database and authentication',
        'Stripe for payment processing',
        'Google Maps API for location services',
        'Responsive design for mobile and desktop access'
      ],
      demoUrl: 'https://carhire-app-demo.com',
      githubUrl: 'https://github.com/username/car-hire-app',
      gallery: [
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800',
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800'
      ]
    },
    {
      id: 'gym-system',
      title: 'Gym Management System',
      description: 'Complete solution for gym owners to manage memberships, schedule classes, track attendance, and process payments.',
      longDescription: 'The Gym Management System is an all-in-one solution designed to streamline operations for fitness centers and gyms. This comprehensive platform helps gym owners manage memberships, schedule classes, track member attendance, process payments, and generate insightful reports. The system also includes a member portal where users can book classes, track their fitness progress, and manage their accounts.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000',
      tags: ['React', 'Express', 'MySQL'],
      features: [
        'Membership management with different subscription tiers',
        'Class scheduling and attendance tracking',
        'Equipment inventory and maintenance tracking',
        'Staff scheduling and payroll integration',
        'Member portal with progress tracking',
        'Mobile app for check-ins and class bookings',
        'Comprehensive reporting dashboard'
      ],
      technologies: [
        'React for frontend development',
        'Express.js backend API',
        'MySQL database for structured data',
        'Redis for caching and session management',
        'JWT for secure authentication',
        'Chart.js for analytics visualization',
        'Progressive Web App capabilities'
      ],
      demoUrl: 'https://gym-system-demo.com',
      githubUrl: 'https://github.com/username/gym-management',
      gallery: [
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800',
        'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800'
      ]
    },
    {
      id: 'spa-salon',
      title: 'Spa & Salon Booking System',
      description: 'Full-featured platform for spa and salon businesses to manage appointments, staff schedules, inventory, and client relationships.',
      longDescription: 'The Spa & Salon Booking System is a comprehensive management platform tailored to the specific needs of wellness and beauty businesses. This solution streamlines appointment scheduling, staff management, inventory control, and client relationship management. With a focus on delivering exceptional customer experiences, the system offers online booking, automated reminders, loyalty programs, and detailed reporting to optimize business operations.',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
      features: [
        '24/7 online booking system with real-time availability',
        'Staff scheduling with workload optimization',
        'Service and product inventory management',
        'Client profiles with service history and preferences',
        'Package and gift card management',
        'Automated appointment reminders via email and SMS',
        'Detailed financial and operational reporting'
      ],
      technologies: [
        'Vue.js frontend for reactive interfaces',
        'Laravel PHP framework for backend logic',
        'PostgreSQL database for relational data',
        'Redis for caching frequently accessed data',
        'AWS S3 for image and document storage',
        'Twilio for SMS notifications',
        'Responsive design for all device types'
      ],
      demoUrl: 'https://spa-salon-demo.com',
      githubUrl: 'https://github.com/username/spa-salon-system',
      gallery: [
        'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800',
        'https://images.unsplash.com/photo-1633681926020-99686359ff61?q=80&w=800'
      ]
    },
    {
      id: 'sacco-system',
      title: 'SACCO Management System',
      description: 'Comprehensive financial management system for Savings and Credit Cooperative Organizations.',
      longDescription: 'The SACCO Management System is a robust financial platform specifically designed for Savings and Credit Cooperative Organizations. This enterprise-grade solution helps SACCOs manage member accounts, process loans, track savings, handle dividends, and generate regulatory reports. With a focus on security, accuracy, and compliance, the system provides both administrative tools for staff and self-service features for members.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000',
      tags: ['Angular', 'Spring Boot', 'Oracle'],
      features: [
        'Member registration and account management',
        'Savings accounts with multiple product types',
        'Loan application, approval, and management workflow',
        'Automated dividend calculation and distribution',
        'Regulatory compliance reporting',
        'Member self-service portal',
        'Integrated accounting system',
        'Audit trail and security controls'
      ],
      technologies: [
        'Angular frontend framework for dynamic UIs',
        'Spring Boot microservices architecture',
        'Oracle database for enterprise-grade data storage',
        'RabbitMQ for message queuing',
        'Jasper Reports for financial statement generation',
        'OAuth2 and multi-factor authentication',
        'Kubernetes for deployment and scalability'
      ],
      demoUrl: 'https://sacco-system-demo.com',
      githubUrl: 'https://github.com/username/sacco-system',
      gallery: [
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800',
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800'
      ]
    }
  ];
  
  useEffect(() => {
    // Simulate fetching project data
    setIsLoading(true);
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id) || null;
      setProject(foundProject);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen bg-black text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-green-500">Loading project details...</div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen bg-black text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
              <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
              <Link 
                to="/projects" 
                className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full font-medium inline-flex items-center"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-black">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>
                
                {project.gallery && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={image} 
                            alt={`${project.title} screenshot ${index + 1}`} 
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6">Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md sticky top-28 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-gray-700">Project Information</h3>
                  
                  <div className="space-y-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 w-full py-3 rounded-lg font-medium inline-flex items-center justify-center text-black"
                      >
                        Live Demo <ExternalLink size={18} className="ml-2" />
                      </a>
                    )}
                    
                  
                    
                    <div className="pt-6 border-t border-gray-700">
                      <h4 className="font-medium text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                to="/projects" 
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-medium inline-flex items-center text-black"
              >
                <ArrowLeft size={18} className="mr-2" /> Back to Projects
              </Link>
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
