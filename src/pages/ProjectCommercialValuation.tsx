import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Store, Calculator, BarChart, FileText, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import bannerImg from '@/assets/hero-asset-inventory.png';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-6">
    {Icon && <div className="p-2 bg-[hsl(217,91%,60%)]/10 rounded-lg"><Icon className="w-6 h-6 text-[hsl(217,91%,60%)]" /></div>}
    <h2 className="text-3xl font-heading font-bold text-[hsl(217,91%,60%)]">{children}</h2>
  </div>
);

const ProjectCommercialValuation = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img src={bannerImg} alt="Commercial Property Valuation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[hsl(217,91%,60%)]/10 text-[hsl(217,91%,60%)] rounded-full text-sm font-semibold tracking-wide border border-[hsl(217,91%,60%)]/20">
                {t('Penilaian Properti Komersial', 'Commercial Property Valuation')}
              </span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold tracking-wide border border-slate-300">
                {t('Soreang, Bandung', 'Soreang, Bandung')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              {t('Penilaian Aset UMKM:', 'SME Asset Valuation:')} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)]">
                Warung Seblak Wa Rima
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl">
              {t(
                'Estimasi nilai pasar wajar (Market Value) atas properti residensial komersial terpadu menggunakan Pendekatan Data Pasar, Pendekatan Biaya, dan Pendekatan Pendapatan sesuai Standar Penilaian Indonesia (SPI).',
                'Fair Market Value estimation of an integrated commercial-residential property utilizing Market Data, Cost, and Income approaches in accordance with Indonesian Valuation Standards (SPI).'
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Project Context */}
        <section className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <SectionHeading icon={Store}>{t('Konteks Penilaian', 'Valuation Context')}</SectionHeading>
            <p className="text-slate-700 leading-relaxed text-lg">
              {t(
                'Proyek ini merupakan penugasan penilaian aset (Asset Valuation) yang bertujuan untuk mengestimasi Nilai Pasar properti yang berlokasi di Soreang, Kabupaten Bandung. Properti ini berstatus Hak Milik dengan peruntukan ganda: sebagai tempat tinggal (residensial) sekaligus tempat usaha kuliner (Warung Seblak).',
                'This project is an asset valuation assignment aimed at estimating the Market Value of a property located in Soreang, Bandung. The freehold property operates with a dual purpose: as a primary residence and an active culinary business (Warung Seblak).'
              )}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{t('Luas Tanah', 'Land Area')}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">273 <span className="text-xl">m²</span></p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{t('Luas Bangunan', 'Building Area')}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">56 <span className="text-xl">m²</span></p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('Gambaran Tugas', 'Assignment Overview')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Inspeksi Fisik & Pengecekan Lingkungan', 'Physical Inspection & Environmental Checks')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Analisis Data Pasar Pembanding (3 Properti)', 'Comparable Market Data Analysis (3 Properties)')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Pemodelan Biaya Reproduksi Baru (RCN)', 'Replacement Cost New (RCN) Modeling')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Kapitalisasi Pendapatan Bersih Operasional', 'Net Operating Income Capitalization')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Methodology: 3 Approaches */}
        <section>
          <SectionHeading icon={Calculator}>{t('Tiga Pendekatan Penilaian (SPI 2018)', 'Three Valuation Approaches (SPI 2018)')}</SectionHeading>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Approach 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Pendekatan Data Pasar', 'Market Data Approach')}</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {t(
                  'Menggunakan 3 data pembanding rumah tinggal di sekitar lokasi (Komplek Bumi Parahyangan Kencana). Dilakukan adjusment untuk lokasi, luasan, dan waktu transaksi untuk menemukan harga rata-rata wajar tanah per meter persegi.',
                  'Utilizing 3 residential comparables in the vicinity. Adjustments were made for location, size, and time of transaction to derive a fair indication of land matrix value.'
                )}
              </p>
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <p className="text-sm font-semibold text-slate-500 mb-1">{t('Indikasi Nilai Tanah:', 'Indicated Land Value:')}</p>
                <p className="text-2xl font-bold text-slate-900">Rp430.212.467</p>
              </div>
            </div>

            {/* Approach 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Pendekatan Biaya', 'Cost Approach (RCN)')}</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {t(
                  'Menggunakan Metode Survei Kuantitas (Quantity Survey Method) untuk menghitung Biaya Reproduksi Baru (RCN). Struktur dievaluasi per komponen (Rangka, Atap, Lantai, dll). Penyusutan dianggap minim karena renovasi mayor (2017).',
                  'Using the Quantity Survey Method to estimate Replacement Cost New (RCN). Structures were evaluated per component framework. Depreciation was considered minimal due to a major 2017 renovation.'
                )}
              </p>
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <p className="text-sm font-semibold text-slate-500 mb-1">{t('Indikasi Nilai Bangunan:', 'Indicated Building Value:')}</p>
                <p className="text-2xl font-bold text-slate-900">Rp338.048.000</p>
              </div>
            </div>

            {/* Approach 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Pendekatan Pendapatan', 'Income Approach')}</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {t(
                  'Menganalisis perputaran uang wirausaha warung. PGI (Potential Gross Income) didepresiasi oleh Loss of Vacancy (hari libur & pengajian). Sisa NOI dikapitalisasi dengan Cap Rate sebesar 9.75% (BI Rate 4.75% + 5% resiko bisnis).',
                  'Analyzing the culinary business cash flow. PGI was heavily adjusted by a Loss of Vacancy constraint. The remaining Net Operating Income (NOI) was capitalized at a 9.75% Cap Rate.'
                )}
              </p>
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <p className="text-sm font-semibold text-slate-500 mb-1">{t('Indikasi Nilai Properti:', 'Indicated Property Value:')}</p>
                <p className="text-2xl font-bold text-slate-900">Rp743.083.311</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Tables */}
        <section>
          <SectionHeading icon={FileText}>{t('Pembedahan Arus Kas (NOI)', 'Cash Flow Breakdown (NOI)')}</SectionHeading>
          
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-1/2 font-semibold text-slate-900">{t('Komponen Pendapatan', 'Income Component')}</TableHead>
                  <TableHead className="text-right font-semibold text-slate-900">{t('Per Bulan (Rp)', 'Per Month (Rp)')}</TableHead>
                  <TableHead className="text-right font-semibold text-slate-900">{t('Per Tahun (Rp)', 'Per Year (Rp)')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">{t('Potensi Pendapatan Kotor (PGI)', 'Potential Gross Income (PGI)')}</TableCell>
                  <TableCell className="text-right">11.250.000</TableCell>
                  <TableCell className="text-right">135.000.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-red-500">{t('Kerugian Buka/Tutup (Loss of Vacancy - 17.77%)', 'Loss of Vacancy (17.77%)')}</TableCell>
                  <TableCell className="text-right text-red-500">(2.000.000)</TableCell>
                  <TableCell className="text-right text-red-500">(24.000.000)</TableCell>
                </TableRow>
                <TableRow className="bg-slate-50 font-semibold border-b-2 border-slate-200">
                  <TableCell>{t('Pendapatan Kotor Efektif (EGI)', 'Effective Gross Income (EGI)')}</TableCell>
                  <TableCell className="text-right">9.250.000</TableCell>
                  <TableCell className="text-right">111.000.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t('Bahan Baku (50% EGI)', 'Raw Materials (50% EGI)')}</TableCell>
                  <TableCell className="text-right text-red-500">(4.625.000)</TableCell>
                  <TableCell className="text-right text-red-500">(55.500.000)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t('Utilitas (Listrik, PDAM, Gas LPG)', 'Utilities (Electricity, Water, Gas)')}</TableCell>
                  <TableCell className="text-right text-red-500">(380.000)</TableCell>
                  <TableCell className="text-right text-red-500">(4.560.000)</TableCell>
                </TableRow>
                <TableRow className="bg-emerald-50 text-emerald-900 font-bold border-t-2 border-emerald-200 font-heading text-lg">
                  <TableCell>{t('Pendapatan Bersih Operasional (NOI)', 'Net Operating Income (NOI)')}</TableCell>
                  <TableCell className="text-right">4.245.000</TableCell>
                  <TableCell className="text-right">50.940.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white">
              {t('Rekonsiliasi Nilai & Kesimpulan', 'Value Reconciliation & Conclusion')}
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  {t(
                    'Perbandingan nilai antara Pendekatan Biaya (Rp768,2 Juta) dan Pendekatan Pendapatan (Rp743,0 Juta) menunjukkan rentang simpangan yang sangat rapat (selisih < 5%). Hal ini membuktikan bahwa operasional komersial warung seblak sudah sepadan dengan nilai tukar fisik aset bangunannya.',
                    'The variance between the Cost Approach (Rp768.2M) and the Income Approach (Rp743.0M) demonstrates an extremely tight margin (variance < 5%). This proves that the commercial operations justify the physical asset structure.'
                  )}
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {t(
                    'Sebagai hasil akhir, Penilai memutuskan untuk menggunakan nilai dari Pendekatan Pendapatan dengan pertimbangan objektif bahwa bisnis kuliner ini sangat aktif, sehingga kapitalisasi NOI lebih mencerminkan persepsi riil pembeli (investor) di pasar yang ada.',
                    'In the final reconciliation, the Valuer weighted heavily on the Income Approach. Since it is an active commercial operation, the capitalized NOI perfectly mirrors actual market/investor sentiment.'
                  )}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-slate-300 font-semibold tracking-widest uppercase mb-2">
                  {t('Estimasi Nilai Properti Wajar', 'Estimated Fair Property Value')}
                </p>
                <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-editorial">
                  Rp743 Juta
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
            <Button onClick={() => { navigate('/'); setTimeout(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} variant="outline" className="border-slate-300">
              <ArrowLeft className="w-[18px] h-[18px] mr-[6px]" />
              {t('Kembali ke Proyek', 'Back to Projects')}
            </Button>
            <Button onClick={scrollToTop} variant="ghost" className="text-slate-500 hover:text-slate-900">
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

export default ProjectCommercialValuation;
