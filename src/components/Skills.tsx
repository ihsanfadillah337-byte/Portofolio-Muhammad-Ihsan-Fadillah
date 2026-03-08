import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Users, LineChart, Lightbulb } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const Skills = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const glowParallax = useParallax({ speed: 0.3 });

  const skills = [
    { icon: Users, title: t('Kepemimpinan & Koordinasi Tim', 'Leadership & Team Coordination') },
    { icon: Lightbulb, title: t('Penilaian Risiko & Keselamatan', 'Risk & Safety Assessment') },
    { icon: LineChart, title: t('Inventarisasi & Penilaian Aset', 'Asset Inventory & Valuation') },
    { icon: Sparkles, title: t('GIS & Pemetaan Spasial', 'GIS & Spatial Mapping') },
    { icon: LineChart, title: t('Pemikiran Analitis & Matematis', 'Analytical & Mathematical Thinking') },
    { icon: Users, title: t('Presentasi Laporan & Komunikasi', 'Report Presentation & Communication') },
    { icon: Sparkles, title: t('Pemanfaatan Teknologi AI', 'AI Technology Utilization') },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div 
        ref={glowParallax.ref}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[hsl(217,91%,60%)]/8 rounded-full blur-3xl will-change-transform"
        style={{ transform: glowParallax.transform }}
      />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('Keahlian', 'Skills')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto mb-12 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-6 rounded-2xl border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 0.05 + 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)]/20 to-[hsl(224,76%,48%)]/20 flex items-center justify-center flex-shrink-0 border border-[rgba(59,130,246,0.2)] shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all">
                <skill.icon className="w-6 h-6 text-[hsl(217,91%,60%)]" />
              </div>
              <h3 className="font-editorial font-semibold text-foreground">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
