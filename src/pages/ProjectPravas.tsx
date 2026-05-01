import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Film, Users, Clapperboard, Award, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import headerImg from '@/assets/project-pravas.webp';
import teamPhotoImg from '@/assets/project-pravas-team.webp';

const ProjectPravas = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />
      
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="PRAVAS Short Film Project" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/60 to-transparent" />
          <div className="absolute inset-0 bg-[rgba(59,130,246,0.1)]" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-medium">{t('Film Pendek · Desember 2023', 'Short Film · December 2023')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-editorial font-bold text-white mb-3">PRAVAS {t('— Proyek Film Pendek', '— Short Film Project')}</h1>
          <p className="text-lg text-white/80 font-medium">{t('Film Konsep Traveloka', 'Traveloka Concept Film')} · {t(' Sutradara, Perancang Konsep, Editor', ' Director, Concept Designer, Editor')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        <div className="bg-gradient-to-r from-[hsl(217,91%,60%)]/15 to-[hsl(224,76%,48%)]/15 border border-[rgba(59,130,246,0.2)] rounded-2xl p-6 flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">🏅 {t('Juara 2 — Lomba Film Pendek E-Commerce', '2nd Place — E-Commerce Short Film Competition')}</h3>
            <p className="text-foreground/70">{t('D4 Manajemen Aset, Politeknik Negeri Bandung (2023)', 'D4 Asset Management, Politeknik Negeri Bandung (2023)')}</p>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Film className="w-8 h-8 text-[hsl(217,91%,60%)]" />
            {t('Gambaran Umum', 'Overview')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>{t('"PRAVAS" adalah film pendek yang dibuat untuk memperkenalkan Traveloka sebagai platform yang mudah diakses dan inovatif untuk merencanakan liburan dan memesan tiket secara online.', '"PRAVAS" is a short film created to introduce Traveloka as an accessible and innovative platform for planning vacations and booking tickets online.')}</p>
            <p>{t('Film ini menekankan kesederhanaan pemesanan digital, menunjukkan bagaimana teknologi menyederhanakan pengalaman perjalanan.', 'The film emphasizes the simplicity of digital booking, showing how technology streamlines travel experiences.')}</p>
            <p>{t('Dikembangkan untuk kompetisi film kreatif dalam Program D4 Manajemen Aset di Politeknik Negeri Bandung, melibatkan beberapa kelas dari program studi yang sama.', 'Developed for a creative film competition within the D4 Asset Management Program at Politeknik Negeri Bandung, involving several classes from the same study program.')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Clapperboard className="w-8 h-8 text-[hsl(217,91%,60%)]" />
            {t('Konsep & Cerita', 'Concept & Story')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>{t('Film ini mengadopsi gaya sinematik screen-life, terinspirasi dari film "Missing" dan "Searching".', 'The film adopts a screen-life cinematic style, inspired by "Missing" and "Searching".')}</p>
            <p>{t('Semua adegan berlangsung sepenuhnya di layar laptop, dari menyalakan perangkat hingga percakapan melalui Discord dan alur pemesanan Traveloka — menciptakan pengalaman storytelling digital yang unik.', 'All scenes unfold entirely on a laptop screen, from powering on the device to conversations via Discord and the Traveloka booking flow — creating a unique digital storytelling experience.')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-[hsl(217,91%,60%)]" />
            {t('Tim & Produksi', 'Team & Production')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>👥 {t('6 anggota tim berkolaborasi selama satu minggu produksi.', '6 team members collaborated during one week of production.')}</p>
            <div>
              <h3 className="font-bold text-foreground mb-3 text-lg">🛠️ {t('Alat yang Digunakan:', 'Tools Used:')}</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start"><span className="mr-3">•</span><span><strong>OBS Studio</strong> — {t('perekaman layar dan live capture', 'screen recording and live capture')}</span></li>
                <li className="flex items-start"><span className="mr-3">•</span><span><strong>Discord</strong> — {t('adegan dialog dan komunikasi suara', 'dialogue scenes and voice communication')}</span></li>
                <li className="flex items-start"><span className="mr-3">•</span><span><strong>CapCut</strong> — {t('editing, trimming, sequencing', 'editing, trimming, sequencing')}</span></li>
                <li className="flex items-start"><span className="mr-3">•</span><span><strong>Canva</strong> — {t('aset visual dan layout judul', 'visual assets and title layout')}</span></li>
                <li className="flex items-start"><span className="mr-3">•</span><span><strong>Google Drive</strong> — {t('koordinasi dan berbagi script', 'coordination and script sharing')}</span></li>
                <li className="flex items-start"><span className="mr-3">•</span><span><strong>Adobe Podcast</strong> — {t('peningkatan dan keseimbangan suara', 'sound enhancement and balance')}</span></li>
              </ul>
            </div>
            <p>{t('🎬 Saya berperan sebagai pemimpin proyek, sutradara, dan perancang konsep, bertanggung jawab atas arahan kreatif dan eksekusi edit akhir.', '🎬 I served as project leader, director, and concept creator, responsible for creative direction and final edit execution.')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Award className="w-8 h-8 text-[hsl(217,91%,60%)]" />
            {t('Kompetisi & Penghargaan', 'Competition & Recognition')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p><strong>🏅 {t('Juara 2 — Lomba Film Pendek E-Commerce', '2nd Place Winner — E-Commerce Short Film Competition')}</strong></p>
            <p>📍 {t('Kompetisi Internal, Program D4 Manajemen Aset – Politeknik Negeri Bandung (2023)', 'Internal Competition, D4 Asset Management Program – Politeknik Negeri Bandung (2023)')}</p>
            <p><strong>{t('Kriteria Penilaian:', 'Judging Criteria:')}</strong> {t('Storytelling · Editing · Ide Kreatif', 'Storytelling · Editing · Creative Idea')}</p>
            <p>{t('Film ini menonjol melalui eksekusi screen-life yang berani dan narasi yang kohesif, mengubah demonstrasi aplikasi perjalanan sederhana menjadi pengalaman sinematik yang menarik.', 'The film stood out through its bold screen-life execution and cohesive narrative, turning a simple travel app demonstration into an engaging cinematic experience.')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4">{t('Hasil & Refleksi', 'Results & Reflection')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <ul className="space-y-3 ml-6">
              <li className="flex items-start"><span className="mr-3">✓</span><span>{t('Memperkuat kerja tim dan kepemimpinan dalam lingkungan kreatif', 'Strengthened teamwork and leadership in a creative setting')}</span></li>
              <li className="flex items-start"><span className="mr-3">✓</span><span>{t('Mengembangkan storytelling visual terstruktur dari ide abstrak', 'Developed structured visual storytelling from abstract ideas')}</span></li>
              <li className="flex items-start"><span className="mr-3">✓</span><span>{t('Meningkatkan kemampuan directing dan editing dengan alat terbatas', 'Enhanced direction and editing capabilities with limited tools')}</span></li>
              <li className="flex items-start"><span className="mr-3">✓</span><span>{t('Membuktikan bahwa orisinalitas dan kejelasan dapat mengungguli skala produksi', 'Proved that originality and clarity can outshine production scale')}</span></li>
            </ul>
            <p className="pt-4">🎞 <strong>{t('Durasi:', 'Duration:')}</strong> 4 {t('menit', 'minutes')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Youtube className="w-8 h-8 text-[hsl(217,91%,60%)]" />
            {t('Tonton Filmnya', 'Watch the Film')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="relative w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)]" style={{ paddingBottom: '56.25%' }}>
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/yRE2nsRGWTs" title="PRAVAS - Short Film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <div className="mt-4 text-center">
            <a href="https://youtu.be/yRE2nsRGWTs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[hsl(217,91%,60%)] hover:text-[hsl(224,76%,48%)] transition-colors font-medium">
              <Youtube className="w-5 h-5" />
              {t('Buka di YouTube', 'Open in YouTube')}
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4">{t('Dokumentasi — Momen Tim PRAVAS', 'Behind the Project — PRAVAS Team Moments')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] rounded-full mb-6" />
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="aspect-video overflow-hidden">
              <img src={teamPhotoImg} alt="PRAVAS Team Award Ceremony" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-sm font-medium px-4">{t('Momen penyerahan sertifikat juara — kolaborasi tim yang membuahkan hasil.', 'Award ceremony moment — team collaboration that paid off.')}</p>
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

export default ProjectPravas;
