
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import WelcomeDialog from "./components/WelcomeDialog";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [guestName, setGuestName] = useState<string>('My Guest');

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // First time visitor logic
      localStorage.setItem('hasVisited', 'true');
    } else {
      // Skip loading for returning visitors
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    setShowWelcome(true);
  };

  const handleGuestNameSet = (name: string) => {
    setGuestName(name);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {!loading && (
          <>
            <WelcomeDialog 
              open={showWelcome} 
              onOpenChange={setShowWelcome} 
              onGuestNameSet={handleGuestNameSet} 
            />
            
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index guestName={guestName} />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
