import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const Education = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const glowParallax = useParallax({ speed: 0.3 });

  return (
    <section id="education" className="py-20 px-6 relative z-10">
      <div
        ref={glowParallax.ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(217,91%,60%)]/8 rounded-full blur-3xl animate-glow-pulse will-change-transform"
        style={{ transform: glowParallax.transform }} />
      
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('Pendidikan', 'Education')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto mb-12 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        
        <Card className={`border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm shadow-[0_8px_32px_rgba(59,130,246,0.1)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.2s' }}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-editorial text-xl mb-2 text-foreground font-bold">
                  Politeknik Negeri Bandung
                </CardTitle>
                <p className="text-foreground/80 font-medium">
                  {t('Sarjana Terapan Manajemen Aset', 'B.A.Sc. in Asset Management')}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('Apr 2023 – Sekarang', 'Apr 2023 – Present')}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[rgba(255,255,255,0.5)] border border-[rgba(59,130,246,0.15)]">
                <span className="text-sm font-semibold text-foreground">GPA:</span>
                <span className="text-sm font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent">3.67</span>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>);

};

export default Education;