import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import bannerImg from '@/assets/project-safety-planning.jpg';
import galleryImg1 from '@/assets/project-safety-planning-1.jpg';
import galleryImg2 from '@/assets/project-safety-planning-2.jpg';
import galleryImg3 from '@/assets/project-safety-planning-3.jpg';

const ProjectSafetyPlanning = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const galleryImages = [galleryImg1, galleryImg2, galleryImg3];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="relative h-96 overflow-hidden">
        <img src={bannerImg} alt="MI Asih Putera Safety Planning" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/95 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
            {t('Perencanaan Fasilitas Keselamatan Gedung – MI Asih Putera', 'Facility Safety Planning – MI Asih Putera')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('Sep–Nov 2024 · Bandung · Ketua Tim', 'Sep–Nov 2024 · Bandung · Team Coordinator')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Gambaran Umum', 'Overview')}</h2>
          <p className="text-foreground leading-relaxed">{t('Proyek ini bertujuan untuk merencanakan dan menilai kebutuhan fasilitas keselamatan dan kesehatan pada Gedung MI Asih Putera di Bandung. Kegiatan dilakukan untuk meningkatkan standar keselamatan bangunan pendidikan serta menciptakan lingkungan belajar yang lebih aman dan efisien.', 'This project aimed to plan and evaluate the safety and health facility requirements for MI Asih Putera Building in Bandung. It was conducted to improve building safety standards and create a safer, more efficient learning environment.')}</p>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Peran & Tanggung Jawab', 'Role & Responsibility')}</h2>
          <p className="text-foreground leading-relaxed mb-4">{t('Sebagai ketua tim, saya bertanggung jawab dalam:', 'As the team leader, I was responsible for:')}</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>{t('Menyusun konsep perencanaan fasilitas keselamatan.', 'Designing the safety planning concept.')}</li>
            <li>{t('Mengkoordinasikan anggota dalam observasi lapangan dan wawancara.', 'Coordinating team members for field observation and interviews.')}</li>
            <li>{t('Menganalisis kesesuaian fasilitas dengan standar nasional dan internasional.', 'Analyzing compliance with national and international safety standards.')}</li>
            <li>{t('Melakukan evaluasi mingguan dan mengarahkan penyusunan laporan akhir.', 'Conducting weekly evaluations and supervising final reporting.')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Metodologi / Proses', 'Methodology / Process')}</h2>
          <div className="space-y-4">
            {[
              { n: 1, title: t('Observasi Lapangan', 'Field Observation'), desc: t('Mengidentifikasi kondisi aktual fasilitas keselamatan.', 'Identifying the current state of safety facilities.') },
              { n: 2, title: t('Wawancara', 'Interviews'), desc: t('Mengumpulkan data dari pihak sekolah dan staf teknis.', 'Gathering data from school administrators and technical staff.') },
              { n: 3, title: t('Analisis Standar', 'Standard Analysis'), desc: t('Membandingkan kondisi eksisting dengan regulasi keselamatan nasional dan internasional.', 'Comparing existing conditions with national and international safety standards.') },
              { n: 4, title: t('Perencanaan Teknis', 'Technical Planning'), desc: t('Menyusun rekomendasi penambahan dan perbaikan fasilitas.', 'Preparing recommendations for improvement and maintenance.') },
            ].map((item) => (
              <div key={item.n} className="border-l-4 border-[hsl(217,91%,60%)] pl-4">
                <h3 className="font-semibold text-foreground mb-1">{item.n}. {item.title}</h3>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Alat & Keterampilan', 'Tools & Skills Used')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[rgba(59,130,246,0.15)] bg-[rgba(255,255,255,0.25)] backdrop-blur-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-[rgba(59,130,246,0.15)] bg-gradient-to-r from-[hsl(217,91%,60%)]/10 to-[hsl(224,76%,48%)]/10">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t('Alat / Perangkat Lunak', 'Tools / Software')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t('Keterampilan', 'Skills')}</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-[rgba(59,130,246,0.15)]"><td className="py-3 px-4">Microsoft Excel, Google Docs</td><td className="py-3 px-4">{t('Analisis Data & Dokumentasi', 'Data Analysis & Documentation')}</td></tr>
                <tr className="border-b border-[rgba(59,130,246,0.15)]"><td className="py-3 px-4">Canva, PowerPoint</td><td className="py-3 px-4">{t('Komunikasi Visual', 'Visual Communication')}</td></tr>
                <tr className="border-b border-[rgba(59,130,246,0.15)]"><td className="py-3 px-4">{t('Kolaborasi Tim', 'Team Collaboration')}</td><td className="py-3 px-4">{t('Kepemimpinan & Koordinasi', 'Leadership & Coordination')}</td></tr>
                <tr><td className="py-3 px-4">{t('Tinjauan Regulasi', 'Regulation Review')}</td><td className="py-3 px-4">{t('Riset & Pemahaman Kepatuhan', 'Research & Compliance Understanding')}</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Hasil & Dampak', 'Results & Impact')}</h2>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start"><span className="text-[hsl(217,91%,60%)] mr-2">✓</span><span>{t('Menghasilkan laporan perencanaan fasilitas keselamatan yang komprehensif.', 'Produced a comprehensive safety facility planning report.')}</span></li>
            <li className="flex items-start"><span className="text-[hsl(217,91%,60%)] mr-2">✓</span><span>{t('Memberikan rekomendasi teknis dan konsep "reframing error" sebagai pendekatan proaktif dalam keselamatan.', 'Delivered technical recommendations and introduced the "reframing error" concept as a proactive safety mindset.')}</span></li>
            <li className="flex items-start"><span className="text-[hsl(217,91%,60%)] mr-2">✓</span><span>{t('Meningkatkan kesadaran keselamatan di lingkungan sekolah.', 'Improved safety awareness within the school environment.')}</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Galeri', 'Gallery')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg cursor-pointer hover:opacity-90 border border-[rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all" onClick={() => setLightboxImage(img)}>
                <img src={img} alt={`Project documentation ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Refleksi / Pembelajaran', 'Reflection / Learning Outcome')}</h2>
          <p className="text-foreground leading-relaxed italic">{t('Saya belajar bahwa manajemen keselamatan bukan hanya soal mematuhi standar, tetapi juga membangun kesadaran kolektif dan sikap proaktif terhadap risiko.', 'I learned that safety management is not just about compliance, but also about building collective awareness and proactive attitudes toward risk prevention.')}</p>
        </section>

        <section className="pt-8 border-t border-[rgba(59,130,246,0.15)]">
          <Button variant="glass" onClick={() => { navigate('/'); setTimeout(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
            <ArrowLeft className="w-[18px] h-[18px] mr-[6px]" />
            {t('Kembali ke Proyek', 'Back to Projects')}
          </Button>
        </section>
      </div>

      <Footer />

      {lightboxImage && (
        <div className="fixed inset-0 bg-[#F8FAFC]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Gallery lightbox" className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_40px_rgba(59,130,246,0.15)]" />
          <button className="absolute top-4 right-4 text-foreground text-4xl hover:text-[hsl(217,91%,60%)] transition-colors" onClick={() => setLightboxImage(null)}>×</button>
        </div>
      )}
    </div>
  );
};

export default ProjectSafetyPlanning;
