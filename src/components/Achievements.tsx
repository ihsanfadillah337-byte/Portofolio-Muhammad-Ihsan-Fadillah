import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Trophy, Star, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParallax } from '@/hooks/useParallax';

const Achievements = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const glowParallax = useParallax({ speed: 0.25 });

  const achievements = [
    {
      icon: Trophy,
      title: t('GPA Tinggi (3.67)', 'High GPA (3.67)'),
      description: t('Performa akademik yang konsisten', 'Consistent academic performance'),
      color: 'bg-yellow-500/10 text-yellow-600',
    },
    {
      icon: Target,
      title: t('Penyelesaian Proyek', 'Project Completion'),
      description: t('Berhasil memimpin dan menyelesaikan 6+ proyek manajemen aset utama', 'Successfully led and completed 6+ major asset management projects'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Star,
      title: t('Kepemimpinan', 'Leadership'),
      description: t('Mengkoordinasikan tim secara efektif dalam proyek lapangan multi-fase', 'Coordinated teams effectively in multi-phase field projects'),
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Award,
      title: t('Inovasi & Efisiensi', 'Innovation & Efficiency'),
      description: t('Menerapkan proses validasi berbasis AI untuk meningkatkan akurasi data', 'Implemented AI-based validation processes for improved data accuracy'),
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative z-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={glowParallax.ref}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[hsl(224,76%,48%)]/8 rounded-full blur-3xl will-change-transform"
          style={{ transform: glowParallax.transform }}
        />
      </div>
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('Prestasi & Pencapaian', 'Achievements')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto mb-12 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${achievement.color} flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(59,130,246,0.15)]`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-editorial text-lg text-foreground font-bold">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
