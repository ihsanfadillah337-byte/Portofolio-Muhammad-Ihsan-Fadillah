import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ExternalLink } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';

// Project Images
import heroAsetrace from '@/assets/hero-asetrace.png';
import heroDocuTwin from '@/assets/hero-docutwin.png';
import heroSurveySnap from '@/assets/hero-surveysnap.png';
import heroSnapSpend from '@/assets/hero-snapspend.png';
import heroAssetInventory from '@/assets/hero-asset-inventory.png';
import heroCommercialValuation from '@/assets/hero-commercial-valuation.png';
import heroSafetyPlanning from '@/assets/hero-safety-planning.png';
import heroHbuAnalysis from '@/assets/hero-hbu-analysis.png';
import heroPravas from '@/assets/hero-pravas.png';

export default function Projects() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const galleryImages = [
    {
      id: 1,
      title: 'Asetrace',
      subtitle: t('Digital Twin & IoT Asset Tracking', 'Digital Twin & IoT Asset Tracking'),
      category: 'IoT & System',
      description: t(
        'Sistem RTLS dan Digital Twin untuk manajemen aset fisik menggunakan ESP32, BLE Beacon, dan Supabase Realtime.',
        'RTLS and Digital Twin dashboard for physical asset management using ESP32, BLE Beacons, and Supabase Realtime.'
      ),
      url: heroAsetrace,
      href: '/project/asetrace',
    },
    {
      id: 2,
      title: 'DocuTwin',
      subtitle: t('Sistem Pelacakan Dokumen Phygital', 'Phygital Document Tracking System'),
      category: 'Web Apps',
      description: t(
        'Solusi "Digital Twin" untuk pelacakan aset dokumen birokrasi dengan QR handshake dan Row Level Security.',
        'A "Digital Twin" solution for government document tracking with QR-based chain-of-custody handshakes.'
      ),
      url: heroDocuTwin,
      href: '/project/docutwin',
    },
    {
      id: 3,
      title: 'SurveySnap',
      subtitle: t('Aplikasi Survei Lapangan Offline-First', 'Offline-First Field Survey App'),
      category: 'Web Apps',
      description: t(
        'PWA dokumentasi survei aset dengan 3-way save (device+cloud+Drive), offline queue, dan auto GPS watermark.',
        'PWA for asset survey documentation with 3-way save, offline queue, and auto GPS watermark.'
      ),
      url: heroSurveySnap,
      href: '/project/surveysnap',
    },
    {
      id: 4,
      title: 'SnapSpend',
      subtitle: t('Aplikasi Keuangan Pribadi', 'Personal Finance App'),
      category: 'Web Apps',
      description: t(
        'Aplikasi pencatatan keuangan berbasis AI dengan fitur voice note dan scan struk.',
        'AI-powered finance tracker with voice note and receipt scanning.'
      ),
      url: heroSnapSpend,
      href: '/project/snapspend',
    },
    {
      id: 5,
      title: t('Inventarisasi Aset Tetap', 'Fixed Asset Inventory'),
      subtitle: 'SDI Miftahul Iman',
      category: 'Consulting',
      description: t(
        'Pendataan dan penilaian aset tetap, koordinasi tim dan validasi data.',
        'Asset inventory and valuation project, involving team coordination and data validation.'
      ),
      url: heroAssetInventory,
      href: '/project/asset-inventory',
    },
    {
      id: 6,
      title: t('Perencanaan Fasilitas Keselamatan', 'Facility Safety Planning'),
      subtitle: 'MI Asih Putera',
      category: 'Consulting',
      description: t(
        'Perencanaan fasilitas keselamatan gedung untuk identifikasi risiko dan solusi mitigasi.',
        'Building safety planning, identifying risks and proposing mitigation solutions.'
      ),
      url: heroSafetyPlanning,
      href: '/project/safety-planning',
    },
    {
      id: 7,
      title: t('Analisis HBU', 'HBU Analysis'),
      subtitle: 'Jl. Sadang Sari, Baleendah',
      category: 'Consulting',
      description: t(
        'Analisis penggunaan tertinggi dan terbaik pada lahan kosong di Baleendah.',
        'Highest and best use analysis for a vacant land in Baleendah.'
      ),
      url: heroHbuAnalysis,
      href: '/project/hbu-analysis',
    },
    {
      id: 8,
      title: t('PRAVAS — Film Pendek', 'PRAVAS — Short Film'),
      subtitle: t('Film Konsep Traveloka', 'Traveloka Concept Film'),
      category: 'Creative',
      description: t(
        'Film pendek kreatif yang memperkenalkan kemudahan booking online Traveloka (Juara 2).',
        'Creative short film introducing Traveloka\'s ease of online booking (2nd Place).'
      ),
      url: heroPravas,
      href: '/project/pravas',
    },
    {
      id: 9,
      title: t('Penilaian Aset Komersial', 'Commercial Asset Valuation'),
      subtitle: t('Warung Seblak Wa Rima, Soreang', 'Warung Seblak Wa Rima, Soreang'),
      category: 'Consulting',
      description: t(
        'Estimasi nilai pasar (HBU) properti residensial & toko menggunakan 3 pendekatan (Pasar, Biaya, Pendapatan).',
        'Fair market value estimation of residential & commercial property using 3 approaches (Market, Cost, Income).'
      ),
      url: heroCommercialValuation,
      href: '/project/commercial-valuation',
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, imageId: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(imageId);
    }
  };

  return (
    <section id="projects" className="relative scroll-smooth bg-background px-4 py-20" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl">
        <div ref={ref} className="text-center relative z-10 mb-12" role="region" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className={`text-4xl md:text-5xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('Proyek & Karya', 'Projects & Portfolio')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`mx-auto max-w-2xl text-muted-foreground mt-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {t('Eksplorasi koleksi proyek teknologi, riset penilaian, dan karya kreatif.', 'Explore the collection of tech projects, valuation research, and creative works.')}
          </p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Gallery categories"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className="rounded-full px-5 font-medium tracking-wide"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Gallery items">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="listitem"
              >
                <Card
                  className="group relative cursor-pointer overflow-hidden border-border transition-all hover:border-[hsl(217,91%,60%)]/50 hover:shadow-2xl hover:shadow-[hsl(217,91%,60%)]/10"
                  onClick={() => setSelectedImage(image.id)}
                  onKeyDown={(event) => handleCardKeyDown(event, image.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${image.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="absolute h-full w-full object-cover object-top"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-transparent text-[10px] uppercase tracking-wider">
                          {image.category}
                        </Badge>
                        <ZoomIn className="h-5 w-5 text-white/0 group-hover:text-white/100 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                      <p className="text-sm text-white/80 line-clamp-1">{image.subtitle}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
              aria-describedby="gallery-dialog-description"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col items-center max-w-5xl w-full max-h-screen"
              >
                {/* Close Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute -top-12 sm:-top-8 right-0 sm:-right-12 text-white/70 hover:text-white hover:bg-white/10 z-[110]"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close"
                >
                  <X className="h-8 w-8" />
                </Button>

                {/* Navigation Buttons (Desktop) */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="hidden sm:flex absolute left-4 sm:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-[110]"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-10 w-10" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hidden sm:flex absolute right-4 sm:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-[110]"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  aria-label="Next"
                >
                  <ChevronRight className="h-10 w-10" />
                </Button>

                {/* Main Lightbox Content wrapper */}
                <div className="w-full bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Image Container */}
                  <div className="relative w-full bg-black/50 aspect-video max-h-[55vh] flex items-center justify-center overflow-hidden">
                    <motion.img
                      key={selectedImage}
                      src={selectedImageData.url}
                      alt={selectedImageData.title}
                      className="w-full h-full object-cover sm:object-contain object-top"
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Mobile Navigation overlay invisible buttons */}
                    <div className="absolute inset-y-0 left-0 w-1/3 sm:hidden" onClick={(e) => { e.stopPropagation(); handlePrev(); }} />
                    <div className="absolute inset-y-0 right-0 w-1/3 sm:hidden" onClick={(e) => { e.stopPropagation(); handleNext(); }} />
                  </div>

                  {/* Info Panel under image */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
                    id="gallery-dialog-description"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border-none transition-colors">
                          {selectedImageData.category}
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-editorial tracking-tight" id="gallery-dialog-title">
                        {selectedImageData.title}
                      </h3>
                      <p className="text-lg text-white/80 font-medium mb-3">
                        {selectedImageData.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
                        {selectedImageData.description}
                      </p>
                    </div>

                    {selectedImageData.href && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(null);
                          navigate(selectedImageData.href!);
                        }}
                        size="lg"
                        className="w-full md:w-auto mt-2 md:mt-0 font-bold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-900/20"
                      >
                        {t('Baca Studi Kasus', 'Read Case Study')} <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
