import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t border-[rgba(59,130,246,0.15)] relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 pb-12 border-b border-[rgba(59,130,246,0.15)]">
          <h3 className="text-3xl font-editorial font-bold text-foreground mb-4 uppercase tracking-wide">
            {t('Siap untuk Berkolaborasi?', 'Ready to Collaborate?')}
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            {t(
              'Mari berdiskusi tentang proyek manajemen aset atau peluang kolaborasi lainnya.',
              "Let's discuss asset management projects or other collaboration opportunities."
            )}
          </p>
          <Button size="lg" onClick={() => scrollToSection('contact')} variant="default" className="group">
            {t('Hubungi Saya Sekarang', 'Contact Me Now')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/muhammad-ihsan-fadillah-327309285"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)]/20 to-[hsl(224,76%,48%)]/20 border border-[rgba(59,130,246,0.2)] flex items-center justify-center hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-[hsl(217,91%,60%)]" />
          </a>
          <a
            href="mailto:ihsanfadillah337@gmail.com"
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)]/20 to-[hsl(224,76%,48%)]/20 border border-[rgba(59,130,246,0.2)] flex items-center justify-center hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-[hsl(217,91%,60%)]" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Muhammad Ihsan Fadillah — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
