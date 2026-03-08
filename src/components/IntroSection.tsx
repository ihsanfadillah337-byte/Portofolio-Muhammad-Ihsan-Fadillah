import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { FloatingPaths } from '@/components/ui/background-paths';
import './IntroSection.css';

const IntroSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;
    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const lines = containerRef.current.querySelectorAll('.greeting-line');
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('visible');
        }, index * 150 + 300);
      });
      setHasAnimated(true);
    });
  }, [hasAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (window.scrollY > 120) {
        containerRef.current.classList.add('scroll-out');
      } else {
        containerRef.current.classList.remove('scroll-out');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,40%,98%)] via-[hsl(214,95%,93%)] to-[hsl(210,40%,96%)]" />
      </div>

      {/* Animated background paths with blue theme */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} color="hsl(217,91%,60%)" opacity={0.06} count={24} />
        <FloatingPaths position={-1} color="hsl(224,76%,48%)" opacity={0.04} count={24} />
      </div>

      <div 
        ref={containerRef}
        className="greeting-container relative z-10 flex flex-col items-center gap-4 md:gap-6 px-4 text-center max-w-3xl mx-auto py-8 md:py-0"
      >
        <h1 className="greeting-line font-editorial font-extrabold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">
          {t('Selamat Datang di Website Portfolio Saya', 'Welcome to My Portfolio Website')}
        </h1>
        
        <p className="greeting-line text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {t(
            'Temukan karya dan proyek saya di bidang manajemen aset.',
            'Discover my work and projects in asset management.'
          )}
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
