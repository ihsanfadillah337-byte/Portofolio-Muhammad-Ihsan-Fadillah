import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Cpu, Radio, Database, Brain, MapPin, Wrench, Activity, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import screenshot1 from '@/assets/project-asetrace-1.jpg';
import screenshot2 from '@/assets/project-asetrace-2.jpg';
import screenshot3 from '@/assets/project-asetrace-3.jpg';
import screenshot4 from '@/assets/project-asetrace-4.jpg';

const ProjectAsetrace = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />

      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-medium text-sm">{t('IoT · Digital Twin · 2025–2026', 'IoT · Digital Twin · 2025–2026')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-editorial font-bold text-white mb-3">Asetrace</h1>
          <p className="text-lg text-white/80 font-medium max-w-xl">{t('Digital Twin & Real-Time Asset Tracking', 'Digital Twin & Real-Time Asset Tracking')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200/50 rounded-2xl p-6">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">TL;DR</p>
            <p className="text-foreground/80 leading-relaxed">
              {t('Menjembatani aset fisik dan catatan digital menggunakan ESP32, BLE Beacon, dan Supabase. Mengubah inventaris statis tradisional menjadi Digital Twin real-time dengan event-driven mutation logs.', 'Bridged the gap between physical assets and digital records using ESP32, BLE Beacons, and Supabase. Shifted traditional static inventory into a live, context-aware Digital Twin with event-driven mutation logs.')}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-blue-600" />
            {t('Masalah', 'The Problem')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
          <div className="space-y-3 text-foreground/80 leading-relaxed">
            <p>{t('Manajemen aset tradisional menderita "ghost assets" dan silo data. Begitu aset berpindah, sistem buta hingga audit manual berikutnya. Saya ingin menghilangkan human error dalam tracking.', 'Traditional asset management suffers from "ghost assets" and data silos. Once an asset moves, the system goes blind until the next manual audit. I wanted to eliminate human error in tracking.')}</p>
            <p className="text-sm text-foreground/60">{t('Dirancang untuk operasional fasilitas, manajer aset IT, dan administrator enterprise. Dibangun pada semester akhir akademik (akhir 2025–awal 2026).', 'Designed for facility operations, IT asset managers, and enterprise administrators. Built during my final academic term (late 2025 to early 2026).')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-blue-600" />
            {t('Arsitektur & Tech Stack', 'Architecture & Tech Stack')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
          <div className="grid gap-3">
            {[
              { icon: <Cpu className="w-5 h-5 text-blue-600" />, title: 'Hardware', desc: t('ESP32 sebagai gateway untuk membaca sinyal dari BLE Beacon bertenaga baterai.', 'ESP32 microcontrollers configured as gateways to read signals from battery-operated BLE Beacons.') },
              { icon: <Radio className="w-5 h-5 text-blue-600" />, title: 'Firmware Logic', desc: t('Spatial filtering kustom untuk mendefinisikan "Safe Zones" dan meminimalkan deteksi pergerakan palsu.', 'Custom spatial filtering to define "Safe Zones" and minimize false movement detection.') },
              { icon: <Database className="w-5 h-5 text-blue-600" />, title: 'Backend', desc: t('Supabase (PostgreSQL & Realtime) — dashboard web terupdate instan saat aset fisik berpindah.', 'Supabase (PostgreSQL & Realtime) — web dashboard updates instantly when an asset physically moves.') },
              { icon: <MapPin className="w-5 h-5 text-blue-600" />, title: 'Frontend', desc: t('React/TypeScript untuk floor map interaktif dan responsif.', 'React/TypeScript for a responsive, interactive floor map.') },
              { icon: <Brain className="w-5 h-5 text-blue-600" />, title: 'AI Assistant', desc: t('Asisten AI yang meng-query konteks database live untuk menjawab pertanyaan natural language.', 'AI Assistant that queries live database contexts to answer natural language questions.') },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-blue-100 hover:border-blue-300/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-0.5">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {['ESP32', 'BLE Beacon', 'Supabase', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Lovable'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50">{tech}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3">
            <Activity className="w-7 h-7 text-blue-600" />
            {t('Fitur Andalan', 'Key Feature')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-sky-400 rounded-2xl" />
            <div className="relative m-[2px] bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Event-Driven Mutation Logs</p>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                {t('"Sistem tidak bergantung pada input data manual atau sensor gerak biasa. Dengan arsitektur event-driven, ketika backend mendeteksi sinyal BLE terkuat berpindah dari Ruang A ke Ruang B, ia langsung mencatat mutation log baru (timestamp, lokasi sebelumnya, lokasi baru) tanpa intervensi manusia."', '"The system doesn\'t rely on manual data entry or typical motion sensors. Utilizing an event-driven architecture, when the backend detects the strongest BLE signal shifting from Room A to Room B, it instantly records a new mutation log (timestamp, previous location, new location) without any human intervention."')}
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200/60">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-amber-700">85%</span>
            </div>
            <div>
              <p className="font-bold text-sm text-amber-800">{t('Status: Dalam Pengembangan', 'Status: In Development')}</p>
              <p className="text-xs text-amber-700/80">{t('Fokus saat ini: penyempurnaan logika spatial rendering dan optimasi validasi visual.', 'Current focus: refining spatial rendering logic and optimizing visual validation.')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4">{t('Tampilan Aplikasi', 'App Screenshots')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: screenshot1, label: t('Admin Dashboard — Overview aset', 'Admin Dashboard — Asset overview') },
              { src: screenshot2, label: t('Movement Timeline & Signal Tracking', 'Movement Timeline & Signal Tracking') },
              { src: screenshot3, label: t('AI Insights & Anomaly Detection', 'AI Insights & Anomaly Detection') },
              { src: screenshot4, label: t('Inventory Management & Add Asset', 'Inventory Management & Add Asset') },
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.08)] bg-white p-2">
                <img src={img.src} alt={img.label} className="w-full h-auto rounded-xl" loading="lazy" />
                <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{img.label}</p>
              </div>
            ))}
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

export default ProjectAsetrace;
