import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: t('Beranda', 'Home') },
    { id: 'about', label: t('Tentang', 'About') },
    { id: 'projects', label: t('Proyek', 'Projects') },
    { id: 'education', label: t('Pendidikan', 'Education') },
    { id: 'achievements', label: t('Prestasi', 'Achievements') },
    { id: 'contact', label: t('Kontak', 'Contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled 
          ? 'bg-[rgba(248,250,252,0.95)] backdrop-blur-md shadow-[0_1px_0_0_rgba(59,130,246,0.1)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase tracking-wide"
          >
            MIF
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-[hsl(215,16%,47%)] hover:text-[hsl(222,47%,11%)] relative group transition-colors px-3 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold text-[hsl(215,16%,47%)] hover:text-[hsl(222,47%,11%)] hover:bg-[rgba(59,130,246,0.08)] transition-colors"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </Button>
            <Button size="sm" asChild variant="default" className="hover:scale-105 active:scale-95">
              <a href="/Muhammad_Ihsan_Fadillah_CV.pdf" download="Muhammad_Ihsan_Fadillah_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                {t('Unduh CV', 'Download CV')}
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold text-[hsl(215,16%,47%)] hover:text-[hsl(222,47%,11%)] hover:bg-[rgba(59,130,246,0.08)] transition-colors px-3"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[hsl(215,16%,47%)] hover:text-[hsl(217,91%,60%)] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in border-t border-[rgba(59,130,246,0.15)] pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-semibold text-[hsl(215,16%,47%)] hover:text-[hsl(222,47%,11%)] hover:bg-[rgba(59,130,246,0.06)] rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" asChild variant="default" className="w-full">
              <a href="/Muhammad_Ihsan_Fadillah_CV.pdf" download="Muhammad_Ihsan_Fadillah_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                {t('Unduh CV', 'Download CV')}
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
