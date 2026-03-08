import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';
import heroAssetInventory from '@/assets/hero-asset-inventory.png';
import heroSafetyPlanning from '@/assets/hero-safety-planning.png';
import heroHbuAnalysis from '@/assets/hero-hbu-analysis.png';
import heroPravas from '@/assets/hero-pravas.png';
import heroSnapSpend from '@/assets/hero-snapspend.png';
import heroAsetrace from '@/assets/hero-asetrace.png';
import heroDocuTwin from '@/assets/hero-docutwin.png';

interface ProjectCardItem extends CardStackItem {
  subtitle: string;
  period: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  const projects: ProjectCardItem[] = [
    {
      id: 'docutwin',
      title: 'DocuTwin',
      subtitle: t('Sistem Pelacakan Dokumen Phygital', 'Phygital Document Tracking System'),
      period: '2025–2026',
      description: t(
        'Solusi "Digital Twin" untuk pelacakan aset dokumen birokrasi dengan QR handshake, state machine real-time, dan Row Level Security.',
        'A "Digital Twin" solution for government document tracking with QR-based chain-of-custody handshakes and real-time state machines.'
      ),
      imageSrc: heroDocuTwin,
      href: '/project/docutwin',
    },
    {
      id: 'asetrace',
      title: 'Asetrace',
      subtitle: t('Digital Twin & IoT Asset Tracking', 'Digital Twin & IoT Asset Tracking'),
      period: '2025–2026',
      description: t(
        'Sistem RTLS dan Digital Twin untuk manajemen aset fisik menggunakan ESP32, BLE Beacon, dan Supabase Realtime.',
        'RTLS and Digital Twin dashboard for physical asset management using ESP32, BLE Beacons, and Supabase Realtime.'
      ),
      imageSrc: heroAsetrace,
      href: '/project/asetrace',
    },
    {
      id: 'snapspend',
      title: 'SnapSpend',
      subtitle: t('Aplikasi Keuangan Pribadi', 'Personal Finance App'),
      period: '2025',
      description: t(
        'Aplikasi pencatatan keuangan berbasis AI dengan fitur voice note dan scan struk.',
        'AI-powered finance tracker with voice note and receipt scanning.'
      ),
      imageSrc: heroSnapSpend,
      href: '/project/snapspend',
    },
    {
      id: 'asset-inventory',
      title: t('Inventarisasi Aset Tetap', 'Fixed Asset Inventory'),
      subtitle: 'SDI Miftahul Iman',
      period: t('Mar–Mei 2024', 'Mar–May 2024'),
      description: t(
        'Pendataan dan penilaian aset tetap, dengan tanggung jawab dalam koordinasi tim dan validasi data.',
        'Asset inventory and valuation project, responsible for team coordination and data validation.'
      ),
      imageSrc: heroAssetInventory,
      href: '/project/asset-inventory',
    },
    {
      id: 'safety-planning',
      title: t('Perencanaan Fasilitas Keselamatan', 'Facility Safety Planning'),
      subtitle: 'MI Asih Putera',
      period: t('Sep–Nov 2024', 'Sep–Nov 2024'),
      description: t(
        'Perencanaan fasilitas keselamatan gedung untuk mengidentifikasi risiko dan solusi mitigasi.',
        'Building safety planning, identifying risks and proposing mitigation solutions.'
      ),
      imageSrc: heroSafetyPlanning,
      href: '/project/safety-planning',
    },
    {
      id: 'hbu-analysis',
      title: t('Analisis HBU', 'HBU Analysis'),
      subtitle: 'Jl. Sadang Sari, Baleendah',
      period: '2025',
      description: t(
        'Analisis penggunaan tertinggi dan terbaik pada lahan kosong di Baleendah.',
        'HBU analysis for a vacant land in Baleendah.'
      ),
      imageSrc: heroHbuAnalysis,
      href: '/project/hbu-analysis',
    },
    {
      id: 'pravas',
      title: t('PRAVAS — Film Pendek', 'PRAVAS — Short Film'),
      subtitle: t('Film Konsep Traveloka', 'Traveloka Concept Film'),
      period: t('Des 2023', 'Dec 2023'),
      description: t(
        'Film pendek kreatif yang memperkenalkan kemudahan booking online Traveloka. Juara 2 — Lomba Film Pendek.',
        'A creative short film introducing Traveloka\'s ease of online booking. 2nd Place — Short Film Competition.'
      ),
      imageSrc: heroPravas,
      href: '/project/pravas',
    },
  ];

  return (
    <section id="projects" className="relative scroll-smooth py-20">
      <div ref={ref} className="px-6 text-center relative z-10 mb-8">
        <h2 className={`text-4xl md:text-5xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('Proyek', 'Projects')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <CardStack
          items={projects}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          cardWidth={560}
          cardHeight={340}
          renderCard={(item, { active }) => (
            <div className="relative h-full w-full group">
              <div className="absolute inset-0">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                  loading="eager"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="text-xs font-medium text-primary-foreground/70 uppercase tracking-wider mb-1">
                  {(item as ProjectCardItem).period}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 truncate">{item.title}</h3>
                <p className="text-sm text-white/70 mb-1">{(item as ProjectCardItem).subtitle}</p>
                {item.description && (
                  <p className="text-sm text-white/60 line-clamp-2">{item.description}</p>
                )}
                {active && item.href && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(item.href!);
                    }}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-lg transition-colors w-fit"
                  >
                    {t('Lihat Detail', 'View Details')} →
                  </button>
                )}
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Projects;
