import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionHeading } from '@/components/project/ProjectShared';

import bannerImg from '@/assets/project-hbu-banner.jpg';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const ProjectHBUAnalysis = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="relative h-[400px] w-full overflow-hidden">
        <img src={bannerImg} alt="HBU Analysis Site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/95 to-[#F8FAFC]/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              {t('Analisis Highest and Best Use (HBU) Lahan Kosong – Jl. Sadang Sari, Baleendah', 'Highest and Best Use (HBU) Analysis of Vacant Land – Jl. Sadang Sari, Baleendah')}
            </h1>
            <p className="text-lg text-muted-foreground">
              2025 · Bandung · {t('Analyst & Field Research Team', 'Analyst & Field Research Team')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>
          <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Gambaran Umum', 'Overview')}</SectionHeading>
          <p className="text-foreground leading-relaxed text-lg">{t('Proyek ini dilakukan untuk menentukan penggunaan tertinggi dan terbaik (Highest and Best Use) terhadap lahan kosong di Jl. Sadang Sari, Kecamatan Baleendah, Kabupaten Bandung. Analisis ini merupakan bagian dari kegiatan akademik di Program Studi Manajemen Aset Politeknik Negeri Bandung, dengan tujuan mengidentifikasi bentuk pemanfaatan lahan yang paling optimal dari sisi fisik, hukum, pasar, finansial, dan produktivitas maksimum.', 'This project aimed to determine the Highest and Best Use (HBU) of a vacant land located on Jl. Sadang Sari, Baleendah, Bandung. It was conducted under the Asset Management program at Politeknik Negeri Bandung, focusing on identifying the most optimal land utilization based on physical, legal, market, financial, and maximum productivity aspects.')}</p>
        </section>

        <section>
          <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Peran & Tanggung Jawab', 'Role & Responsibility')}</SectionHeading>
          <p className="text-foreground leading-relaxed text-lg">{t('Saya berperan sebagai analis lapangan dan penyusun laporan akhir, dengan tanggung jawab utama dalam pengumpulan data, pemetaan, serta analisis spasial dan ekonomi untuk setiap aspek kajian.', 'I acted as a field analyst and report contributor, responsible for data collection, mapping, and conducting spatial and economic analysis for each assessment aspect.')}</p>
        </section>

        <section>
          <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Metodologi / Proses', 'Methodology / Process')}</SectionHeading>
          <ol className="space-y-4 text-foreground leading-relaxed text-lg list-decimal list-inside">
            <li><strong>{t('Identifikasi Tapak:', 'Site Identification:')}</strong> {t('Survei fisik lokasi menggunakan observasi lapangan dan peta spasial.', 'Conducted field observations and spatial mapping.')}</li>
            <li><strong>{t('Analisis Lima Aspek HBU:', 'Five HBU Aspects Analysis:')}</strong> {t('Meliputi aspek fisik, pemasaran, legal, finansial, dan produktivitas maksimum.', 'Physical, Market, Legal, Financial, and Maximum Productivity.')}</li>
            <li><strong>{t('Evaluasi Alternatif Penggunaan:', 'Alternative Evaluation:')}</strong> {t('Membandingkan beberapa skenario pengembangan.', 'Compared different potential development scenarios.')}</li>
            <li><strong>{t('Penarikan Kesimpulan:', 'Conclusion:')}</strong> {t('Menentukan opsi penggunaan lahan paling optimal.', 'Determined the most optimal land use option.')}</li>
          </ol>
        </section>

        <section>
          <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Aspek-Aspek Analisis HBU', 'HBU Analysis Aspects')}</SectionHeading>
          <div className="space-y-8">
            {[
              { emoji: '🏗️', title: t('1. Aspek Fisik (Physically Possible)', '1. Physical Aspect (Physically Possible)'), desc: t('Menilai kondisi fisik lahan, termasuk bentuk, luas, topografi, aksesibilitas, dan utilitas. Lahan di Jl. Sadang Sari seluas ±140 m² memiliki bentuk persegi panjang, topografi datar, akses jalan lingkungan ±3 m, serta drainase baik. Kondisi ini memungkinkan pengembangan skala kecil-menengah seperti kontrakan atau kios pertokoan.', 'Evaluates the physical condition of the site, including shape, size, topography, accessibility, and utilities. The ±140 m² site has a rectangular shape, flat topography, and accessible neighborhood roads (±3 m wide), making it suitable for small to medium-scale developments such as rental housing or retail kiosks.') },
              { emoji: '📈', title: t('2. Aspek Pemasaran (Market Feasibility)', '2. Market Aspect (Market Feasibility)'), desc: t('Berdasarkan data BPS, wilayah Baleendah memiliki kegiatan ekonomi aktif dan kepadatan penduduk tinggi. Hasil kuesioner menunjukkan permintaan tinggi terhadap properti sewa dan pertokoan kecil. Hal ini menunjukkan prospek pasar yang kuat bagi pengembangan komersial ringan.', 'Based on BPS data, Baleendah District has high economic activity and population density. Survey results show strong demand for rental housing and small-scale retail properties, indicating a solid market feasibility for light commercial or rental developments.') },
              { emoji: '⚖️', title: t('3. Aspek Legal (Legally Permissible)', '3. Legal Aspect (Legally Permissible)'), desc: t('Berdasarkan ketentuan tata ruang setempat, kawasan Baleendah tergolong sebagai area perumahan dan campuran komersial ringan. Tidak terdapat kendala hukum signifikan, dan lahan tidak termasuk area lindung atau risiko bencana tinggi.', 'According to local spatial regulations, Baleendah is classified as a residential and light commercial mixed-use area. The site is legally clear, not in a restricted or disaster-prone zone, allowing flexible development options.') },
              { emoji: '💰', title: t('4. Aspek Finansial (Financially Feasible)', '4. Financial Aspect (Financially Feasible)'), desc: t('Analisis kelayakan menunjukkan bahwa pengembangan kontrakan memberikan rasio manfaat-biaya paling tinggi. Biaya investasi relatif rendah dibandingkan potensi pendapatan sewa tahunan. Dengan tingkat hunian tinggi dan permintaan stabil, proyek ini dinilai layak secara finansial.', 'Financial feasibility analysis shows that developing rental housing provides the highest benefit-cost ratio. The investment cost is relatively low compared to the annual rental income potential, making the project financially viable with stable occupancy prospects.') },
              { emoji: '🚀', title: t('5. Aspek Produktivitas Maksimum (Maximally Productive)', '5. Maximum Productivity Aspect (Maximally Productive)'), desc: t('Berdasarkan pembobotan lima aspek, alternatif kontrakan (rental housing) memperoleh skor tertinggi, yaitu 36 dari 40. Ini menunjukkan bahwa opsi tersebut paling produktif secara ekonomi, sesuai dengan kondisi fisik dan pasar sekitar.', 'Based on the five-aspect evaluation, the rental housing alternative achieved the highest total score of 36 out of 40. This indicates that it is the most economically productive and contextually appropriate use of the land.') },
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.25)] border border-[rgba(59,130,246,0.15)] backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.emoji} {item.title}</h3>
                <p className="text-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading iconClassName="text-[hsl(217,91%,60%)]">{t('Tabel Produktivitas Maksimum (Okupansi 70%)', 'Maximum Productivity Table (70% Occupancy)')}</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[rgba(59,130,246,0.15)]">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-[hsl(217,91%,60%)]/10 to-[hsl(224,76%,48%)]/10 hover:bg-gradient-to-r hover:from-[hsl(217,91%,60%)]/10 hover:to-[hsl(224,76%,48%)]/10">
                  <TableHead className="text-foreground font-semibold">{t('Indikator', 'Indicator')}</TableHead>
                  <TableHead className="text-foreground font-semibold">{t('Toko/Kios (70%)', 'Shop/Kiosk (70%)')}</TableHead>
                  <TableHead className="text-foreground font-semibold">{t('Ruang Terbuka Hijau', 'Green Open Space')}</TableHead>
                  <TableHead className="text-foreground font-semibold">{t('Kontrakan', 'Rental Housing')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-foreground">
                <TableRow><TableCell className="font-medium">{t('Aspek Fisik', 'Physical Aspect')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">{t('Aspek Legal', 'Legal Aspect')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">{t('Aspek Pemasaran', 'Market Aspect')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell></TableRow>
                <TableRow className="bg-muted"><TableCell colSpan={4} className="font-semibold">{t('Aspek Finansial', 'Financial Aspect')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">NPV</TableCell><TableCell>{t('Rp502.988.889 (positif, layak)', 'Rp502,988,889 (positive, feasible)')}</TableCell><TableCell>{t('–Rp198.600.000 (negatif, tidak layak)', '–Rp198,600,000 (negative, not feasible)')}</TableCell><TableCell>{t('Rp314.000.000 (positif, layak)', 'Rp314,000,000 (positive, feasible)')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">IRR</TableCell><TableCell>12,91%</TableCell><TableCell>{t('<4,75% (di bawah discount rate)', '<4.75% (below discount rate)')}</TableCell><TableCell>12,30%</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">PBP</TableCell><TableCell>{t('10-11 tahun', '10-11 years')}</TableCell><TableCell>{t('>20 tahun (tidak kembali)', '>20 years (no return)')}</TableCell><TableCell>{t('11-12 tahun', '11-12 years')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">ARR</TableCell><TableCell>±8,2%</TableCell><TableCell>{t('3,2% (rendah / tidak signifikan)', '3.2% (low / insignificant)')}</TableCell><TableCell>±8,6%</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">PI</TableCell><TableCell>{t('1,32 (>1, layak)', '1.32 (>1, feasible)')}</TableCell><TableCell>{t('0,72 (<1, tidak layak)', '0.72 (<1, not feasible)')}</TableCell><TableCell>{t('1,34 (>1, layak)', '1.34 (>1, feasible)')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">NOI</TableCell><TableCell>{t('Rp47.000.000 / tahun', 'Rp47,000,000 / year')}</TableCell><TableCell>{t('Rp0 (tidak ada arus kas)', 'Rp0 (no cash flow)')}</TableCell><TableCell>{t('Rp67.567.500 / tahun', 'Rp67,567,500 / year')}</TableCell></TableRow>
                <TableRow><TableCell className="font-medium">{t('Aspek Keuangan', 'Financial Aspect')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell><TableCell>{t('Tidak layak', 'Not Feasible')}</TableCell><TableCell>{t('Layak', 'Feasible')}</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Alat & Keterampilan yang Digunakan', 'Tools & Skills Used')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[rgba(255,255,255,0.25)] border border-[rgba(59,130,246,0.15)] backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">{t('Alat / Perangkat Lunak', 'Tools / Software')}</h3>
              <ul className="space-y-2 text-foreground"><li>• ArcGIS Online, Google Sheets</li><li>• Microsoft Excel</li><li>• BPS Open Data</li></ul>
            </div>
            <div className="bg-[rgba(255,255,255,0.25)] border border-[rgba(59,130,246,0.15)] backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">{t('Keterampilan', 'Skills')}</h3>
              <ul className="space-y-2 text-foreground"><li>• {t('Analisis Data Spasial & Pasar', 'Spatial Data & Market Analysis')}</li><li>• {t('Evaluasi Kuantitatif', 'Quantitative Evaluation')}</li><li>• {t('Penilaian Demografis', 'Demographic Assessment')}</li><li>• {t('Perencanaan Strategis & Pelaporan', 'Strategic Planning & Reporting')}</li></ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Hasil & Dampak', 'Results & Impact')}</h2>
          <div className="bg-[rgba(255,255,255,0.25)] border border-[rgba(59,130,246,0.15)] backdrop-blur-sm rounded-lg p-6">
            <p className="text-foreground leading-relaxed text-lg mb-4">{t('Rekomendasi akhir menunjukkan bahwa pengembangan kontrakan merupakan Highest and Best Use bagi lahan ini.', 'The final recommendation concluded that rental housing is the Highest and Best Use for the site, emphasizing the importance of a multi-aspect analytical approach in urban land potential assessment.')}</p>
            <p className="text-foreground leading-relaxed text-lg">{t('Temuan ini memperkuat pentingnya pendekatan analisis multi-aspek dalam penilaian potensi lahan perkotaan.', 'This finding reinforces the importance of a multi-aspect analytical approach in assessing urban land potential.')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)] mb-6">{t('Refleksi / Pembelajaran', 'Reflection / Learning Outcome')}</h2>
          <div className="bg-[rgba(255,255,255,0.25)] border border-[rgba(59,130,246,0.15)] backdrop-blur-sm rounded-lg p-6">
            <p className="text-foreground leading-relaxed text-lg italic">{t('Saya belajar bahwa keputusan pengembangan lahan harus mempertimbangkan keseimbangan antara aspek teknis, hukum, dan ekonomi agar hasilnya benar-benar berkelanjutan.', 'I learned that determining optimal land use requires balancing technical, legal, and economic aspects to achieve sustainable outcomes.')}</p>
          </div>
        </section>

        <section className="pt-8 border-t border-[rgba(59,130,246,0.15)]">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
            <Button onClick={() => { navigate('/'); setTimeout(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} variant="glass">
              <ArrowLeft className="w-[18px] h-[18px] mr-[6px]" />
              {t('Kembali ke Proyek', 'Back to Projects')}
            </Button>
            <Button onClick={scrollToTop} variant="glass">
              <ArrowUp className="w-[18px] h-[18px] mr-[6px]" />
              {t('Kembali ke Atas', 'Back to Top')}
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectHBUAnalysis;
