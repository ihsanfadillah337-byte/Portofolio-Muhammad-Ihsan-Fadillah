import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroAbout from '@/components/HeroAbout';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Skills from '@/components/Skills';
import Languages from '@/components/Languages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import WaveDivider from '@/components/WaveDivider';
import Preloader from '@/components/ui/preloader';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    // Only show preloader on first visit per session
    return !sessionStorage.getItem('preloader_shown');
  });
  const [contentReady, setContentReady] = useState(!showPreloader);

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem('preloader_shown', 'true');
    setShowPreloader(false);
    // Small delay before fading in content
    requestAnimationFrame(() => setContentReady(true));
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen dark">
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <motion.div
        initial={contentReady ? { opacity: 1 } : { opacity: 0 }}
        animate={contentReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Navbar />
        <IntroSection />
        <WaveDivider />
        <HeroAbout />
        <Projects />
        <Education />
        <Achievements />
        <Skills />
        <Languages />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
