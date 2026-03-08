import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import { useParallax } from '@/hooks/useParallax';

const HeroAbout = () => {
  const { t } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowParallax = useParallax({ speed: 0.3, direction: 'both' });
  const photoParallax = useParallax({ speed: 0.15 });
  
  const fullName = 'Muhammad Ihsan Fadillah';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShowContent(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) { setDisplayedName(fullName); return; }
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 80);
    return () => clearInterval(typewriterInterval);
  }, [showContent]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20 relative overflow-hidden z-10"
    >
      <div 
        ref={glowParallax.ref}
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[hsl(217,91%,60%)]/15 via-[hsl(224,76%,48%)]/8 to-transparent rounded-full blur-3xl animate-glow-pulse will-change-transform"
        style={{ transform: glowParallax.transform }}
      />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className={`space-y-4 md:space-y-6 order-2 md:order-1 transition-all duration-1000 text-center md:text-left ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div>
              <h1 className="font-editorial font-bold text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4 uppercase tracking-tight leading-tight">
                {displayedName}
                {displayedName.length < fullName.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h1>
              
              <p className="font-editorial font-semibold text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 tracking-wide leading-relaxed">
                {t(
                  'Mahasiswa Manajemen Aset | Fokus pada Efisiensi dan Inovasi Teknologi',
                  'Asset Management Student | Focused on Efficiency and Technological Innovation'
                )}
              </p>
              
              <p className="font-sans text-xs md:text-base text-foreground/80 leading-relaxed">
                {t(
                  'Mahasiswa Manajemen Aset yang termotivasi tinggi di Politeknik Negeri Bandung dengan pengalaman praktis dalam inventarisasi aset, perencanaan fasilitas keselamatan, dan analisis Highest and Best Use (HBU). Terampil dalam analisis data, pemetaan spasial (GIS), dan evaluasi aset strategis. Bersemangat menerapkan wawasan berbasis AI untuk menciptakan solusi manajemen aset yang efisien dan berkelanjutan, menggabungkan pemikiran analitis dengan aplikasi dunia nyata.',
                  'Highly motivated Asset Management student at Politeknik Negeri Bandung with practical experience in asset inventory, safety facility planning, and Highest and Best Use (HBU) analysis. Skilled in data analytics, spatial mapping (GIS), and strategic asset evaluation. Passionate about applying AI-driven insights to create efficient and sustainable asset management solutions, combining analytical thinking with real-world application.'
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button size="lg" asChild variant="default" className="group hover:scale-105 active:scale-95 w-full sm:w-auto">
                <a href="/Muhammad_Ihsan_Fadillah_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {t('Unduh CV', 'Download CV')}
                </a>
              </Button>
              
              <Button size="lg" variant="glass" onClick={() => scrollToSection('projects')} className="group hover:scale-105 active:scale-95 w-full sm:w-auto">
                {t('Lihat Proyek', 'View Projects')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div 
            className={`flex justify-center order-1 md:order-2 transition-all duration-1000 mb-6 md:mb-0 ${
              showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-[hsl(217,91%,60%)]/20 via-[hsl(224,76%,48%)]/10 to-transparent blur-3xl animate-glow-pulse" />
              
              <div 
                ref={photoParallax.ref}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[rgba(59,130,246,0.25)] will-change-transform"
                style={{ 
                  transform: photoParallax.transform,
                  boxShadow: '0 0 20px rgba(59,130,246,0.15)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,91%,60%)]/5 to-[hsl(224,76%,48%)]/5 mix-blend-overlay" />
                <img src={profilePhoto} alt="Muhammad Ihsan Fadillah" loading="eager" decoding="async" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
