import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Map, Layers, Network, Database, CheckCircle2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionHeading } from '@/components/project/ProjectShared';

import headerImg from '@/assets/project-gis-soreang-3.jpg';
import feature1Img from '@/assets/project-gis-soreang-1.png';
import feature2Img from '@/assets/project-gis-soreang-2.png';

const ProjectGISSoreang = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
        <img src={headerImg} alt="GIS Mapping Overlay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-slate-900/60 to-slate-900/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-100 backdrop-blur-md border border-blue-400/30 rounded-full text-sm font-semibold tracking-wide">
                {t('Sistem Informasi Geografis (GIS)', 'Geographic Information System (GIS)')}
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-100 backdrop-blur-md border border-emerald-400/30 rounded-full text-sm font-semibold tracking-wide">
                {t('Mei 2025', 'May 2025')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-sm">
              {t('Pemetaan & Overlay Fasilitas', 'Facilities Mapping & Overlay:')} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                Kecamatan Soreang
              </span>
            </h1>
            
            <p className="text-lg text-slate-200 max-w-2xl drop-shadow-sm">
              {t(
                'Analisis spasial menyeluruh untuk pemetaan infrastruktur dan distribusi sarana prasarana publik di wilayah Kecamatan Soreang, Kabupaten Bandung. Dilengkapi dengan Heat Map kepadatan dan Service Area.',
                'Comprehensive spatial analysis for mapping infrastructure and public facility distribution across Soreang District, Bandung Regency. Equipped with Density Heat Maps and Service Area logic.'
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Project Context */}
        <section className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <SectionHeading icon={Map} iconClassName="text-[hsl(217,91%,60%)]">{t('Konteks & Latar Belakang', 'Context & Background')}</SectionHeading>
            <p className="text-slate-700 leading-relaxed text-lg">
              {t(
                'Proyek Sistem Informasi Geografis (Web GIS) ini dikembangkan menggunakan platform berbasis Esri. Tujuan utamanya adalah untuk memvisualisasikan layer distribusi fasilitas umum, jangkauan pelayanan pendidikan, dan aksesibilitas jaringan transportasi.',
                'This Web Geographic Information System (Web GIS) project was developed using Esri-based platforms. Its primary goal is to visualize public facility distribution layers, educational service reach, and transportation network accessibility.'
              )}
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              {t(
                'Analisis overlay (tumpang-tindih) pada peta spasial sangat esensial bagi pengambil kebijakan dan tata ruang untuk mengidentifikasi area blank spot (tidak terjangkau sarana) maupun hotspot kepadatan aktivitas penduduk.',
                'Spatial overlay analysis is essential for urban planners and policymakers to identify "blank spot" areas (lacking facility coverage) as well as operational hotspots driven by population density.'
              )}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('Ruang Lingkup Spasial', 'Spatial Scope')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Batasan Administrasi & Perumahan', 'Administrative Boundaries & Housing')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Analisis Radius Sekolah Dasar', 'Primary School Radius Analysis')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Pusat Kesehatan (RS & Puskesmas)', 'Healthcare Centers (Hospitals & Clinics)')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">{t('Pemetaan Rute Multi-Moda Transportasi', 'Multi-Modal Transport Route Mapping')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Core Features */}
        <section>
          <SectionHeading icon={Layers} iconClassName="text-[hsl(217,91%,60%)]">{t('Fitur Analisis Overlay Utama', 'Core Overlay Analysis Features')}</SectionHeading>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            {/* Feature 1 */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature1Img} 
                    alt="Public Transport Network" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Network className="w-6 h-6 text-blue-600" />
                  {t('Aksesibilitas Multi-Moda & Pendidikan', 'Multi-Modal & Educational Accessibility')}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t(
                    'Visualisasi radius sebaran area sekolah (lingkaran biru) yang disandingkan dengan overlay jaringan rute transportasi umum. Analisis ini bertujuan memastikan coverage wilayah pendidikan terjangkau dengan baik oleh rute Angkot, Bus, maupun Pangkalan Ojek.',
                    'Visualizing the distribution radius of schools (blue circles) overlaid with public transit networks. This analysis aims to ensure that educational facility coverage areas are well-served by minivans (Angkot), bus routes, and local transit hubs.'
                  )}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature2Img} 
                    alt="Educational Facility Service Area" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Database className="w-6 h-6 text-emerald-600" />
                  {t('Analisis Service Area Fasilitas Kesehatan', 'Healthcare Facility Service Area')}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t(
                    'Penerapan layer Buffer spasial pada titik keberadaan Rumah Sakit di Kecamatan Soreang. Menampilkan radius pelayanan tercover untuk mengevaluasi pemerataan (spatial equity) fasilitas kesehatan terhadap wilayah hunian.',
                    'Applying spatial Buffer layers to Hospital locations in Soreang District. This displays the covered service radius to evaluate the spatial equity of healthcare facilities reaching residential areas.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion/Summary Banner */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-lg">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(217,91%,60%)]/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 mix-blend-screen pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              {t('Dampak Analisis Spasial', 'Spatial Analysis Impact')}
            </h2>
            <p className="text-slate-300 leading-relaxed text-xl font-light">
              {t(
                'Dengan memadukan fungsi pemetaan berlapis (Overlaying), Heat Map kepadatan populasi, dan analisis keterpaduan sektor kesehatan, logistik, dan pendidikan, peta ini memberikan landasan kuantitatif visual bagi perencanaan pembangunan Kecamatan Soreang di masa mendatangkan agar tepat sasaran, inklusif, dan efisien.',
                'By combining layered mapping (Overlaying), population density Heat Maps, and integrated analysis of the healthcare, logistics, and educational sectors, this map provides a visual, quantitative foundation for future development planning in Soreang District ensuring it is targeted, inclusive, and efficient.'
              )}
            </p>
          </div>
        </section>

        {/* Access Web Map Section */}
        <section className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Map className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Peta Interaktif Web GIS', 'Interactive Web GIS Map')}</h3>
              <p className="text-slate-600">
                {t(
                  'Jelajahi setiap layer data (transportasi, fasilitas kesehatan, kepadatan penduduk) secara langsung dan interaktif melalui Esri ArcGIS Map Viewer.',
                  'Explore every data layer (transport networks, healthcare facilities, population density) live and interactively via the Esri ArcGIS Map Viewer.'
                )}
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">
            <a href="https://www.arcgis.com/apps/mapviewer/index.html?webmap=b92fa0a9115d4db6b0c6c32c53a97a8d" target="_blank" rel="noopener noreferrer">
              {t('Akses Peta di ArcGIS', 'Open Map in ArcGIS')}
              <ExternalLink className="w-[18px] h-[18px] ml-2" />
            </a>
          </Button>
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

export default ProjectGISSoreang;
