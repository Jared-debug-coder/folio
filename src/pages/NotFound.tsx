
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-[calc(100vh-20rem)]">
        <div className="container mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center py-16 max-w-md">
            <h1 className="text-8xl font-bold text-portfolio-burgundy mb-8">404</h1>
            <h2 className="text-3xl font-bold text-portfolio-navy mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="btn-gradient px-8 py-3 rounded-full font-medium inline-flex items-center"
            >
              <Home size={18} className="mr-2" /> Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
