import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Smartphone, Mic, Camera, Brain, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import screenshot1 from '@/assets/project-snapspend-1.jpg';
import screenshot2 from '@/assets/project-snapspend-2.jpg';

const ProjectSnapSpend = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />
      
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#34C759] via-[#2AAF4F] to-[#1E8E3E]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-medium">{t('Aplikasi Mobile · 2025', 'Mobile App · 2025')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-editorial font-bold text-white mb-3">SnapSpend</h1>
          <p className="text-lg text-white/80 font-medium">{t('Pencatatan Keuangan Pribadi Berbasis AI', 'AI-Powered Personal Finance Tracker')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Smartphone className="w-8 h-8 text-[#34C759]" />
            {t('Latar Belakang', 'Background')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#34C759] to-[#2AAF4F] rounded-full mb-6" />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>{t('Konsistensi mencatat keuangan pribadi sering mentok di urusan input manual yang repetitif. Fitur praktis seperti voice note atau scan struk sebenarnya jadi solusi ideal — tapi rata-rata terkunci sebagai fitur premium berbayar di aplikasi pasaran.', 'Consistently tracking personal finances often stalls due to repetitive manual input. Practical features like voice notes or receipt scanning are ideal solutions — but most apps lock them behind paid premium tiers.')}</p>
            <p>{t('Daripada berlangganan, saya memutuskan untuk merakit solusinya sendiri.', 'Instead of subscribing, I decided to build the solution myself.')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#34C759]" />
            {t('Fitur Utama', 'Key Features')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#34C759] to-[#2AAF4F] rounded-full mb-6" />
          <div className="grid gap-4">
            {[
              { icon: <Mic className="w-6 h-6 text-[#34C759]" />, title: t('Voice Note (Multi-Transaction)', 'Voice Note (Multi-Transaction)'), desc: t('Cukup rekam suara untuk mencatat beberapa pengeluaran sekaligus.', 'Simply record your voice to log multiple expenses at once.') },
              { icon: <Camera className="w-6 h-6 text-[#34C759]" />, title: t('Snap Receipt', 'Snap Receipt'), desc: t('Ekstrak data pengeluaran langsung dari foto struk belanja.', 'Extract expense data directly from receipt photos.') },
              { icon: <Brain className="w-6 h-6 text-[#34C759]" />, title: t('AI Auto-Categorization', 'AI Auto-Categorization'), desc: t('Sistem otomatis mengubah input suara/foto menjadi nominal dan kategori spesifik. Pengguna hanya perlu review dan klik "Submit".', 'Automatically converts voice/photo input into amounts and specific categories. Users just review and click "Submit".') },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-[rgba(52,199,89,0.15)] hover:border-[rgba(52,199,89,0.3)] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[rgba(52,199,89,0.1)] flex items-center justify-center flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Wrench className="w-8 h-8 text-[#34C759]" />
            {t('Tech Stack', 'Tech Stack')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#34C759] to-[#2AAF4F] rounded-full mb-6" />
          <div className="flex flex-wrap gap-3">
            {['Lovable', 'Supabase', 'OpenAI API', 'Median.co', 'React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(52,199,89,0.1)] text-[#1E8E3E] border border-[rgba(52,199,89,0.2)]">{tech}</span>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-[#34C759]/10 to-[#2AAF4F]/10 border border-[rgba(52,199,89,0.2)] rounded-2xl p-6">
            <p className="text-foreground/80 leading-relaxed italic">
              {t('"Di tengah banyaknya tools AI canggih yang kini tersedia gratis, sayang jika tidak dimanfaatkan. Selama kita tahu persis masalah apa yang mau diselesaikan, membangun solusi personal yang fungsional itu sangat mungkin dilakukan."', '"With so many powerful AI tools now freely available, it would be a waste not to leverage them. As long as you know exactly what problem you want to solve, building a functional personal solution is very much achievable."')}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4">{t('Tampilan Aplikasi', 'App Screenshots')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#34C759] to-[#2AAF4F] rounded-full mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(52,199,89,0.1)] bg-white p-3">
              <img src={screenshot1} alt={t('Dashboard utama SnapSpend', 'SnapSpend main dashboard')} className="w-full h-auto rounded-xl" loading="lazy" />
              <p className="text-center text-sm text-foreground/60 mt-3">{t('Dashboard — Ringkasan keuangan', 'Dashboard — Financial summary')}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(52,199,89,0.1)] bg-white p-3">
              <img src={screenshot2} alt={t('Halaman laporan SnapSpend', 'SnapSpend reports page')} className="w-full h-auto rounded-xl" loading="lazy" />
              <p className="text-center text-sm text-foreground/60 mt-3">{t('Reports — Analisis pengeluaran', 'Reports — Spending analysis')}</p>
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button onClick={() => navigate('/#projects')} variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t('Kembali ke Proyek', 'Back to Projects')}
          </Button>
          <Button onClick={scrollToTop} variant="outline" className="flex items-center gap-2">
            <ArrowUp className="w-4 h-4" />
            {t('Kembali ke Atas', 'Back to Top')}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectSnapSpend;
