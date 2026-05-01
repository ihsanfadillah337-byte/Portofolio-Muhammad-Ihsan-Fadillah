import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/project/ProjectShared';

import bannerImg from '@/assets/project-asset-inventory.webp';
import gallery1 from '@/assets/project-asset-inventory-1.webp';
import gallery2 from '@/assets/project-asset-inventory-2.webp';

const ProjectAssetInventory = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [gallery1, gallery2];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <section className="relative h-96 overflow-hidden">
        <img src={bannerImg} alt="Project Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/70 to-[#F8FAFC]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('Inventarisasi Aset Tetap', 'Fixed Asset Inventory')}
            </h1>
            <p className="text-xl text-muted-foreground">
              SDI Miftahul Iman · {t('Mar–Mei 2024', 'Mar–May 2024')} · Bandung · {t('Ketua Pelaksana', 'Project Leader')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Ringkasan', 'Overview')}</SectionHeading>
            <p className="text-foreground leading-relaxed">
              {t('Proyek ini merupakan bagian dari kegiatan akademik Program Studi Manajemen Aset di Politeknik Negeri Bandung. Tujuannya adalah untuk melakukan pendataan, klasifikasi, dan penilaian aset tetap di SDI Miftahul Iman. Kegiatan ini menjadi dasar pengelolaan aset sekolah yang lebih terstruktur dan efisien.', 'This project was part of the academic program at Politeknik Negeri Bandung. It aimed to collect, classify, and evaluate fixed assets owned by SDI Miftahul Iman, forming the basis of a more efficient and structured asset management system.')}
            </p>
          </div>

          <div className="space-y-4">
            <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Peran & Tanggung Jawab', 'Role & Responsibility')}</SectionHeading>
            <p className="text-foreground leading-relaxed">
              {t('Sebagai ketua pelaksana, saya bertanggung jawab atas perencanaan proyek, pembagian tugas tim, supervisi survei lapangan, validasi data, dan penyusunan laporan akhir.', 'As the project leader, I was responsible for planning, team coordination, supervising field surveys, validating data, and preparing the final report.')}
            </p>
          </div>

          <div className="space-y-4">
            <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Metodologi / Proses', 'Methodology / Process')}</SectionHeading>
            <ol className="list-decimal list-inside space-y-2 text-foreground leading-relaxed">
              <li><strong>{t('Perencanaan:', 'Planning:')}</strong> {t('Menyusun jadwal dan pembagian tugas.', 'Scheduling and task assignment.')}</li>
              <li><strong>{t('Pelaksanaan:', 'Implementation:')}</strong> {t('Mengumpulkan data melalui survei fisik dan wawancara.', 'Data collection through surveys and interviews.')}</li>
              <li><strong>{t('Pelaporan:', 'Reporting:')}</strong> {t('Menyusun laporan ilmiah dan buku inventaris.', 'Drafting the scientific report and inventory book.')}</li>
              <li><strong>{t('Tindak Lanjut:', 'Follow-up:')}</strong> {t('Pemasangan label identitas aset dan penyerahan laporan ke sekolah.', 'Installing asset labels and submitting the final report.')}</li>
            </ol>
          </div>

          <div className="space-y-4">
            <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Alat & Keterampilan', 'Tools & Skills Used')}</SectionHeading>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[rgba(59,130,246,0.15)] bg-[rgba(255,255,255,0.25)] backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[hsl(217,91%,60%)]/10 to-[hsl(224,76%,48%)]/10">
                    <th className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-left font-semibold text-foreground">{t('Alat / Perangkat Lunak', 'Tools / Software')}</th>
                    <th className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-left font-semibold text-foreground">{t('Keterampilan', 'Skills')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">Google Sheets, Microsoft Excel</td><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">{t('Analisis & Pelaporan Data', 'Data Analysis & Reporting')}</td></tr>
                  <tr><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">Microsoft Word</td><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">{t('Penulisan Teknis', 'Technical Writing')}</td></tr>
                  <tr><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">{t('Kolaborasi Tim', 'Team Collaboration')}</td><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">{t('Komunikasi & Koordinasi', 'Communication & Coordination')}</td></tr>
                  <tr><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">{t('Observasi Lapangan', 'Field Observation')}</td><td className="border border-[rgba(59,130,246,0.15)] px-4 py-3 text-foreground">{t('Identifikasi Aset', 'Asset Identification')}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Hasil & Dampak', 'Results & Impact')}</SectionHeading>
            <p className="text-foreground leading-relaxed">{t('Menghasilkan laporan inventarisasi lengkap yang menjadi acuan pengelolaan dan pemeliharaan aset sekolah.', 'Produced a complete inventory report that serves as a reference for future asset maintenance and budgeting.')}</p>
          </div>

          <div className="space-y-4">
            <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Galeri', 'Gallery')}</SectionHeading>
            <div className="grid md:grid-cols-2 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg border border-[rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer group" onClick={() => setSelectedImage(img)}>
                  <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)]">{t('Refleksi / Pembelajaran', 'Reflection / Learning Outcome')}</h2>
            <p className="text-foreground leading-relaxed">{t('Saya belajar bahwa keberhasilan proyek tidak hanya tentang data, tetapi juga komunikasi dan kerja tim yang efektif.', 'I learned that the success of a project depends not only on data but also on teamwork and effective communication.')}</p>
          </div>

          <div className="pt-8 border-t border-[rgba(59,130,246,0.15)]">
            <Button onClick={() => { navigate('/'); setTimeout(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} variant="glass">
              <ArrowLeft className="w-[18px] h-[18px] mr-[6px]" />
              {t('Kembali ke Proyek', 'Back to Projects')}
            </Button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-[#F8FAFC]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-foreground hover:text-[hsl(217,91%,60%)] transition-colors"><span className="text-2xl">✕</span></button>
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg shadow-[0_0_40px_rgba(59,130,246,0.15)]" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectAssetInventory;
