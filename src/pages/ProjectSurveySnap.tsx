import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Camera, Wifi, WifiOff, Cloud, FolderOpen, MapPin, Shield, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CodeBlock, AsciiDiagram, SectionHeading, SubHeading, Divider } from '@/components/project/ProjectShared';

import screenshotDashboard from '@/assets/project-surveysnap-dashboard.png';
import screenshotCategories from '@/assets/project-surveysnap-categories.png';
import screenshotGDrive from '@/assets/project-surveysnap-gdrive.png';
import screenshotNewProject from '@/assets/project-surveysnap-newproject.png';

const ProjectSurveySnap = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] md:h-[60vh] overflow-hidden bg-gradient-to-br from-[#312E81] via-[#4338CA] to-[#6366F1]">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(129,140,248,0.2),transparent_60%)]" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-indigo-200/90 font-medium text-sm tracking-wide">Technical Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-white mb-3">SurveySnap</h1>
          <p className="text-lg md:text-xl text-indigo-200/80 font-medium max-w-2xl mb-6">
            {t('Aplikasi Survei Lapangan Offline-First', 'Offline-First Field Survey App')}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider self-center mr-1">Role:</span>
            <span className="text-sm text-white/90 font-medium">Full-Stack Developer</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React PWA', 'Supabase', 'IndexedDB', 'WebRTC', 'Google Apps Script', 'Offline-First'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* TL;DR */}
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200/50 rounded-2xl p-6 mb-8">
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">TL;DR</p>
          <p className="text-foreground/80 leading-relaxed">
            {t(
              'SurveySnap adalah Progressive Web App untuk surveyor aset yang sering bekerja di lokasi tanpa sinyal internet. Aplikasi ini memungkinkan pengambilan foto & video dengan GPS watermark, penyimpanan otomatis ke tiga tempat sekaligus (device, cloud, Google Drive), dan sinkronisasi otomatis saat koneksi kembali tersedia.',
              'SurveySnap is a Progressive Web App for asset surveyors who frequently work in areas with no internet. It enables photo & video capture with GPS watermarks, automatic saving to three locations simultaneously (device, cloud, Google Drive), and auto-sync when connectivity returns.'
            )}
          </p>
        </div>

        {/* ========== SECTION 1: OVERVIEW ========== */}
        <SectionHeading icon={Camera} iconClassName="text-indigo-600">
          {t('1. Mengapa SurveySnap Dibuat?', '1. Why SurveySnap Was Built')}
        </SectionHeading>
        <Divider className="from-indigo-600 to-sky-400" />

        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Surveyor aset dari KJPP (Kantor Jasa Penilai Publik) dan BKAD sering bekerja di lokasi yang sulit dijangkau sinyal — seperti basement gedung, area pedalaman, atau bangunan tua. Mereka harus mendokumentasikan kondisi aset dengan foto dari berbagai sudut: tampak depan, samping, belakang, interior, dan detail kerusakan.',
            'Asset surveyors from KJPP (Public Appraisal Offices) and BKAD frequently work in areas with poor connectivity — building basements, rural areas, or old structures. They need to document asset conditions with photos from multiple angles: front view, side, back, interior, and damage details.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Masalahnya? Kalau internet mati saat survei, foto bisa hilang. Kalau HP rusak, semua dokumentasi ikut hilang. Dan setelah survei, mereka masih harus menyortir ratusan foto secara manual ke folder-folder yang tepat.',
            'The problem? If the internet drops during a survey, photos can be lost. If the phone breaks, all documentation is gone. And after the survey, they still have to manually sort hundreds of photos into the correct folders.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          {t(
            'SurveySnap menyelesaikan semua itu: foto tersimpan otomatis ke tiga tempat berbeda, terorganisir per kategori, dan dilengkapi bukti lokasi GPS yang langsung tercetak di gambar.',
            'SurveySnap solves all of that: photos are automatically saved to three different locations, organized by category, and stamped with GPS proof directly on the image.'
          )}
        </p>

        {/* Screenshot: Dashboard */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img src={screenshotDashboard} alt="SurveySnap Dashboard" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Dashboard — Daftar project survei dengan progress tracking', 'Dashboard — Survey project list with progress tracking')}</p>
        </div>

        {/* ========== SECTION 2: HOW IT WORKS ========== */}
        <SectionHeading icon={Cloud} iconClassName="text-indigo-600">
          {t('2. Bagaimana Sistemnya Bekerja', '2. How the System Works')}
        </SectionHeading>
        <Divider className="from-indigo-600 to-sky-400" />

        <SubHeading>{t('Arsitektur 3-Way Save', '3-Way Save Architecture')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Setiap kali surveyor menekan tombol "Simpan", foto dikirim ke tiga tempat secara bersamaan:',
            'Every time a surveyor hits "Save", the photo is sent to three places simultaneously:'
          )}
        </p>

        <div className="grid gap-3 mb-6">
          {[
            { icon: <Smartphone className="w-5 h-5 text-indigo-600" />, title: t('1. Device Lokal', '1. Local Device'), desc: t('Foto langsung disimpan ke galeri HP — jadi walaupun semua server mati, data tetap aman di tangan surveyor.', 'Photo saved directly to phone gallery — even if all servers go down, data stays safe with the surveyor.') },
            { icon: <Cloud className="w-5 h-5 text-indigo-600" />, title: t('2. Supabase Cloud', '2. Supabase Cloud'), desc: t('Upload ke cloud storage untuk backup dan akses dari mana saja. Jika offline, masuk antrian otomatis.', 'Uploaded to cloud storage for backup and access from anywhere. If offline, auto-queued for later.') },
            { icon: <FolderOpen className="w-5 h-5 text-indigo-600" />, title: t('3. Google Drive', '3. Google Drive'), desc: t('Foto otomatis dikirim ke Google Drive dan diorganisir ke folder berdasarkan nama project dan kategori. Tanpa sorting manual.', 'Photos auto-sent to Google Drive, organized into folders by project name and category. No manual sorting.') },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-indigo-100 hover:border-indigo-300/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-0.5">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AsciiDiagram>{`[Surveyor tekan "Simpan"]
        │
        ├── 1. Simpan ke HP (instant, selalu berhasil)
        │
        ├── 2. Upload ke Supabase Cloud
        │       ├── Online?  → Upload langsung ✅
        │       └── Offline? → Masuk antrian IndexedDB 🔄
        │                       └── Auto-sync saat online kembali
        │
        └── 3. Kirim URL ke Google Apps Script
                └── GAS copy file ke Google Drive 📁
                    └── Otomatis masuk folder: NamaProject/Kategori`}</AsciiDiagram>

        {/* Screenshot: Categories */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img src={screenshotCategories} alt="SurveySnap Categories" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Kategori dokumentasi sesuai standar KJPP — Tampak Depan, Samping, Belakang, dll.', 'Documentation categories per KJPP standards — Front, Side, Back, Interior, etc.')}</p>
        </div>

        {/* ========== SECTION 3: OFFLINE ========== */}
        <SectionHeading icon={WifiOff} iconClassName="text-indigo-600">
          {t('3. Tantangan Teknis & Solusi', '3. Technical Challenges & Solutions')}
        </SectionHeading>
        <Divider className="from-indigo-600 to-sky-400" />

        <SubHeading>{t('Offline-First: Data Tidak Boleh Hilang', 'Offline-First: Zero Data Loss')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Tantangan utamanya: bagaimana caranya agar data tetap aman saat tidak ada internet? Solusinya adalah mekanisme antrian offline berbasis IndexedDB.',
            'The main challenge: how to keep data safe with no internet? The solution is an offline queue mechanism built on IndexedDB.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Ketika surveyor menyimpan foto tanpa koneksi, foto tersebut masuk ke antrian lokal di browser. Saat HP kembali terhubung ke internet, sistem otomatis mendeteksi koneksi dan mengirim semua foto yang tertunda secara berurutan — tanpa aksi apapun dari user.',
            'When a surveyor saves a photo without connectivity, the photo enters a local browser queue. When the phone reconnects to the internet, the system automatically detects connectivity and sends all pending photos in order — no user action needed.'
          )}
        </p>

        <CodeBlock language="typescript">{`// Simplified offline queue flow
const savePhoto = async (photoData) => {
  // 1. Always save to device first (never fails)
  downloadPhotoToDevice(photoData);

  if (navigator.onLine) {
    // 2a. Online: upload directly
    await uploadToSupabase(photoData);
    await sendToGoogleDrive(publicUrl);
  } else {
    // 2b. Offline: queue for later
    await addToQueue(photoData);
    toast("Saved offline — will sync automatically");
  }
};

// Auto-sync when connection returns
window.addEventListener('online', () => {
  processQueue(); // Sends all pending items in order
});`}</CodeBlock>

        <SubHeading>{t('GPS Watermark Tanpa API Berbayar', 'GPS Watermark Without Paid APIs')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Setiap foto yang diambil otomatis dilengkapi informasi koordinat GPS dan timestamp yang tercetak langsung di gambar. Ini bukan metadata yang bisa dihapus — melainkan "dibakar" ke dalam piksel gambar menggunakan Canvas API browser. Tidak ada biaya API pihak ketiga.',
            'Every photo captured automatically includes GPS coordinates and timestamp burned directly onto the image. This isn\'t erasable metadata — it\'s rendered onto the image pixels using the browser\'s Canvas API. No third-party API costs.'
          )}
        </p>

        <SubHeading>{t('Video Recording yang Stabil', 'Stable Video Recording')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Merekam video di browser mobile itu tricky — memori terbatas, bisa crash. SurveySnap membatasi durasi ke 30 detik, merekam data dalam potongan kecil per detik (bukan satu blob besar), dan otomatis membersihkan resource kamera saat halaman ditinggalkan.',
            'Recording video in a mobile browser is tricky — limited memory, can crash. SurveySnap limits duration to 30 seconds, records data in small chunks per second (not one massive blob), and automatically cleans up camera resources when leaving the page.'
          )}
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Pengaturan', 'Setting')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Nilai', 'Value')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Alasan', 'Reason')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                [t('Resolusi Foto', 'Photo Resolution'), '1920×1080', t('Cukup detail untuk dokumentasi aset', 'Sufficient detail for asset documentation')],
                [t('Durasi Maks Video', 'Max Video Duration'), t('30 detik', '30 seconds'), t('Mencegah file terlalu besar di memori', 'Prevents oversized files in memory')],
                ['Codec', 'VP9 → VP8 → WebM', t('Otomatis pilih yang didukung device', 'Auto-selects what the device supports')],
                [t('Potongan Data', 'Data Chunks'), t('Per 1 detik', 'Every 1 second'), t('Data diproses bertahap, bukan sekaligus', 'Data processed gradually, not all at once')],
              ].map(([setting, value, reason], i) => (
                <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="p-3 font-semibold text-foreground">{setting}</td>
                  <td className="p-3 text-foreground/80 font-mono text-xs">{value}</td>
                  <td className="p-3 text-foreground/70">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Screenshot: Google Drive Integration */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <img src={screenshotGDrive} alt="SurveySnap Google Drive Integration" className="w-full h-auto rounded-xl" loading="lazy" />
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Integrasi Google Drive — Setup webhook untuk auto-sync', 'Google Drive Integration — Webhook setup for auto-sync')}</p>
        </div>

        {/* ========== SECTION 4: IMPACT ========== */}
        <SectionHeading icon={Shield}>
          {t('4. Dampak & Manfaat', '4. Impact & Benefits')}
        </SectionHeading>
        <Divider />

        <SubHeading>{t('Perlindungan Data 3 Lapis', '3-Layer Data Protection')}</SubHeading>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Skenario Masalah', 'Failure Scenario')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Data Tetap Aman Di', 'Data Still Safe In')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                [t('Tidak ada internet', 'No internet'), t('✅ HP lokal + antrian offline', '✅ Local device + offline queue')],
                [t('Server cloud mati', 'Cloud server down'), t('✅ HP lokal', '✅ Local device')],
                [t('HP hilang/rusak', 'Phone lost/broken'), t('✅ Supabase Cloud + Google Drive', '✅ Supabase Cloud + Google Drive')],
                [t('Google Drive penuh', 'Google Drive full'), t('✅ HP lokal + Supabase Cloud', '✅ Local device + Supabase Cloud')],
              ].map(([scenario, safe], i) => (
                <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="p-3 text-red-600/80 font-medium">{scenario}</td>
                  <td className="p-3 text-emerald-700 font-medium">{safe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SubHeading>{t('Efisiensi Operasional', 'Operational Efficiency')}</SubHeading>
        <div className="grid gap-3 mb-6">
          {[
            { icon: <FolderOpen className="w-5 h-5 text-indigo-600" />, title: t('Sorting otomatis', 'Auto sorting'), desc: t('File otomatis masuk folder yang tepat di Google Drive berdasarkan nama project dan kategori — tidak perlu sortir manual ratusan foto.', 'Files auto-organized into correct Google Drive folders by project name and category — no need to manually sort hundreds of photos.') },
            { icon: <MapPin className="w-5 h-5 text-indigo-600" />, title: t('Bukti lokasi permanen', 'Permanent location proof'), desc: t('Koordinat GPS & timestamp tercetak langsung di foto — tidak bisa diedit, memenuhi kebutuhan audit trail.', 'GPS coordinates & timestamp burned onto photos — can\'t be edited, meets audit trail requirements.') },
            { icon: <Smartphone className="w-5 h-5 text-indigo-600" />, title: t('Tanpa install, tanpa biaya', 'No install, no cost'), desc: t('PWA = cukup buka URL di browser. Tidak perlu download dari App Store. Semua fitur kamera dan GPS menggunakan API bawaan browser.', 'PWA = just open a URL in the browser. No App Store download needed. All camera and GPS features use built-in browser APIs.') },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-indigo-100 hover:border-indigo-300/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-0.5">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot: New Project */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <img src={screenshotNewProject} alt="SurveySnap New Project" className="w-full h-auto rounded-xl" loading="lazy" />
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Form pembuatan project survei baru', 'New survey project creation form')}</p>
        </div>

        {/* ========== TECH STACK ========== */}
        <SectionHeading icon={Zap}>Tech Stack</SectionHeading>
        <Divider />

        <div className="rounded-2xl border-2 border-indigo-200/50 bg-gradient-to-r from-indigo-50 to-sky-50 p-6 md:p-8 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Framework', value: 'React 18 + Vite 5 (PWA)' },
              { label: 'State', value: 'Zustand (persist → IndexedDB)' },
              { label: 'Styling', value: 'TailwindCSS + shadcn/ui' },
              { label: 'Auth & Storage', value: 'Supabase Auth + Storage' },
              { label: 'Offline', value: 'IndexedDB queue + Service Worker' },
              { label: 'Media', value: 'WebRTC (Camera + MediaRecorder)' },
              { label: 'Location', value: 'Geolocation API + Canvas Watermark' },
              { label: 'Integration', value: 'Google Apps Script → Google Drive' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-foreground/80 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-8">
          <p className="text-foreground/60 italic text-center text-sm leading-relaxed">
            {t(
              'SurveySnap membuktikan bahwa aplikasi yang paling berdampak bukan yang paling canggih — tapi yang paling bisa diandalkan saat kondisi lapangan tidak ideal.',
              'SurveySnap proves that the most impactful apps aren\'t the most sophisticated — but the most reliable when field conditions are far from ideal.'
            )}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-10">
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

export default ProjectSurveySnap;
