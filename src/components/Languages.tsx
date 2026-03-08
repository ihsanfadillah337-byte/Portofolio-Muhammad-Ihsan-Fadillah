import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const Languages = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const glowParallax = useParallax({ speed: 0.25 });

  const languages = [
    { code: 'ID', name: 'Bahasa Indonesia', level: t('Penutur Asli', 'Native') },
    { code: 'EN', name: 'English', level: t('Menengah', 'Intermediate') },
  ];

  return (
    <section id="languages" className="py-20 px-6 relative z-10">
      <div 
        ref={glowParallax.ref}
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[hsl(217,91%,60%)]/8 rounded-full blur-3xl will-change-transform"
        style={{ transform: glowParallax.transform }}
      />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('Bahasa', 'Languages')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto mb-12 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-6 rounded-2xl border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              <span className="text-2xl font-editorial font-bold text-primary">{lang.code}</span>
              <div>
                <h3 className="font-editorial font-semibold text-foreground text-lg">{lang.name}</h3>
                <p className="text-sm text-foreground/80">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
