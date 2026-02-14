import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";

import { Loader } from "./components/ui/Loader";
import { PageWrapper } from "./components/ui/PageWrapper";

import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";


// Scroll to top
function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}


// Smooth Scroll
function SmoothScroll() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();

  }, []);

  return null;
}


// Animated Routes
function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />

        <Route path="/about" element={
          <PageWrapper>
            <About />
          </PageWrapper>
        } />

        <Route path="/projects" element={
          <PageWrapper>
            <Projects />
          </PageWrapper>
        } />

        <Route path="/projects/:id" element={
          <PageWrapper>
            <ProjectDetail />
          </PageWrapper>
        } />

        <Route path="/skills" element={
          <PageWrapper>
            <Skills />
          </PageWrapper>
        } />

        <Route path="/contact" element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        } />

        <Route path="/resume" element={
          <PageWrapper>
            <Resume />
          </PageWrapper>
        } />

      </Routes>

    </AnimatePresence>

  );
}


// App Wrapper with Loader
function AppWrapper() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);


  if (loading) return <Loader />;


  return (

    <div className="relative min-h-screen bg-black text-white">

      <Navbar />

      <main>
        <AnimatedRoutes />
      </main>

      <Footer />

    </div>

  );

}


// Main App
export default function App() {

  return (

    <Router>

      <ScrollToTop />

      <SmoothScroll />

      <AppWrapper />

    </Router>

  );

}
