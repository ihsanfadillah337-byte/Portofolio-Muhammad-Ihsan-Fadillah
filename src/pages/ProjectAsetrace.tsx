import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Cpu, Radio, Database, Brain, MapPin, Shield, Activity, Zap, AlertTriangle, Server, BarChart3, Wifi, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CodeBlock, AsciiDiagram, SectionHeading, SubHeading, Divider } from '@/components/project/ProjectShared';

import screenshot1 from '@/assets/project-asetrace-1.webp';
import screenshot2 from '@/assets/project-asetrace-2.webp';
import screenshot3 from '@/assets/project-asetrace-3.webp';
import screenshot4 from '@/assets/project-asetrace-4.webp';

const ProjectAsetrace = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] md:h-[60vh] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-medium text-sm tracking-wide">Technical Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-white mb-3">Asetrace</h1>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mb-6">
            {t('Indoor Asset Tracking & Digital Twin Platform', 'Indoor Asset Tracking & Digital Twin Platform')}
          </p>
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider self-center mr-1">Role:</span>
            <span className="text-sm text-white/90 font-medium">Full-Stack Developer & IoT System Architect</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {['ESP32', 'BLE Beacon', 'React', 'Supabase', 'Real-time', 'AI Assistant'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white/90 border border-white/15 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* TL;DR */}
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200/50 rounded-2xl p-6 mb-8">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">TL;DR</p>
          <p className="text-foreground/80 leading-relaxed">
            {t(
              'Asetrace adalah platform Digital Twin yang membuat setiap aset fisik (laptop, server, perangkat) punya "kembaran digital" di layar. BLE Beacon ditempel ke aset, ESP32 Gateway menangkap sinyalnya, dan dashboard menampilkan posisi aset secara real-time di peta lantai — lengkap dengan AI assistant dan notifikasi otomatis.',
              'Asetrace is a Digital Twin platform that gives every physical asset (laptop, server, device) a "digital twin" on screen. BLE Beacons are attached to assets, ESP32 Gateways capture their signals, and the dashboard shows asset positions in real-time on a floor map — complete with AI assistant and automatic notifications.'
            )}
          </p>
        </div>

        {/* ========== SECTION 1: WHY ========== */}
        <SectionHeading icon={AlertTriangle}>
          {t('1. Mengapa Asetrace Dibuat?', '1. Why Asetrace Was Built')}
        </SectionHeading>
        <Divider />

        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Di banyak institusi di Indonesia, manajemen aset masih berjalan dengan cara lama: spreadsheet manual, formulir kertas, dan audit stok yang memakan waktu berhari-hari. Akibatnya:',
            'In many Indonesian institutions, asset management still runs the old way: manual spreadsheets, paper forms, and stock audits taking days. The consequences:'
          )}
        </p>
        <ul className="space-y-3 text-foreground/80 mb-6 list-disc list-inside">
          <li><strong>Ghost Assets</strong> — {t('Aset tercatat "ada" di sistem, tapi fisiknya sudah entah di mana. Baru ketahuan saat audit tahunan.', 'Assets recorded as "available" in the system, but physically already somewhere unknown. Only discovered during annual audits.')}</li>
          <li><strong>Zero Visibility</strong> — {t('Tidak ada cara mengetahui di ruangan mana sebuah laptop atau server berada saat ini, tanpa menelusuri gedung secara manual.', 'No way to know which room a laptop or server is in right now, without manually searching the building.')}</li>
          <li><strong>{t('Tidak Ada Jejak', 'No Trail')}</strong> — {t('Saat aset hilang, tidak ada catatan digital tentang kronologi perpindahan dan siapa penanggung jawab terakhir.', 'When assets go missing, there\'s no digital record of the movement history and who was last responsible.')}</li>
          <li><strong>{t('Reaktif, Bukan Preventif', 'Reactive, Not Preventive')}</strong> — {t('Sistem lama hanya bisa merespons setelah masalah terjadi. Tidak ada peringatan dini otomatis.', 'Old systems can only respond after problems occur. No automatic early warnings.')}</li>
        </ul>

        <div className="relative rounded-2xl overflow-hidden my-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-sky-400 rounded-2xl" />
          <div className="relative m-[2px] bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl p-6 md:p-8">
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              {t(
                '"Asetrace mengubah paradigma pengelolaan aset dari cari manual, catat manual, audit manual — menjadi sistem yang secara otonom mengetahui di mana setiap aset berada, siapa yang membawanya, dan kapan aset itu berpindah. Semuanya dalam hitungan detik, tanpa campur tangan manusia."',
                '"Asetrace shifts asset management from manual search, manual record, manual audit — to a system that autonomously knows where every asset is, who has it, and when it moved. All in seconds, without human intervention."'
              )}
            </p>
          </div>
        </div>

        {/* ========== SECTION 2: HOW IT WORKS ========== */}
        <SectionHeading icon={Cpu}>
          {t('2. Cara Kerja Sistem', '2. How the System Works')}
        </SectionHeading>
        <Divider />

        <p className="text-foreground/80 leading-relaxed mb-6">
          {t(
            'Asetrace bekerja sebagai Digital Twin — representasi virtual yang menjadi cerminan real-time dari kondisi aset di dunia fisik. Sistemnya terdiri dari tiga lapisan:',
            'Asetrace works as a Digital Twin — a virtual representation that mirrors the real-time state of physical assets. The system has three layers:'
          )}
        </p>

        <div className="grid gap-4 mb-6">
          {[
            { icon: <Radio className="w-5 h-5 text-blue-600" />, title: t('Lapisan 1: IoT Sensing', 'Layer 1: IoT Sensing'), desc: t('BLE Beacon (tag Bluetooth kecil) ditempel ke aset. ESP32 Gateway di setiap ruangan menangkap sinyal dari tag tersebut dan mencatat kekuatan sinyalnya.', 'BLE Beacons (small Bluetooth tags) are attached to assets. ESP32 Gateways in each room capture signals from these tags and record signal strength.') },
            { icon: <Server className="w-5 h-5 text-blue-600" />, title: t('Lapisan 2: Cloud Intelligence', 'Layer 2: Cloud Intelligence'), desc: t('Setiap beberapa detik, Gateway mengirim data ke Supabase Edge Function. Di sinilah sistem menentukan di ruangan mana aset berada, mendeteksi perpindahan, dan mengirim notifikasi otomatis.', 'Every few seconds, Gateways send data to Supabase Edge Functions. This is where the system determines which room an asset is in, detects movement, and sends automatic notifications.') },
            { icon: <MapPin className="w-5 h-5 text-blue-600" />, title: t('Lapisan 3: Digital Twin Dashboard', 'Layer 3: Digital Twin Dashboard'), desc: t('Frontend menampilkan peta lantai interaktif. Ikon aset bergerak secara instan saat aset fisik berpindah ruangan, berkat koneksi WebSocket real-time.', 'The frontend displays an interactive floor map. Asset icons move instantly when physical assets change rooms, thanks to real-time WebSocket connections.') },
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

        <AsciiDiagram>{`┌──────────────────────────────────────────────────────────┐
│                  PHYSICAL LAYER (IoT)                    │
│  [BLE Tag] ~~sinyal~~> [ESP32 Gateway] ──HTTP POST──>    │
├──────────────────────────────────────────────────────────┤
│              CLOUD INTELLIGENCE (Serverless)              │
│  ┌─────────────────────────────────────────┐             │
│  │ Supabase Edge Functions (Deno)          │             │
│  │  • ble-tracking  → Mesin Pelacakan      │             │
│  │  • ai-chat       → Asisten AI           │             │
│  └──────────────┬──────────────────────────┘             │
│  ┌──────────────▼──────────────────────────┐             │
│  │ PostgreSQL + Real-time WebSocket        │             │
│  │  + Row Level Security + RBAC            │             │
│  └─────────────────────────────────────────┘             │
├──────────────────────────────────────────────────────────┤
│               FRONTEND (Digital Twin UI)                  │
│  React 18 + TypeScript + Vite                            │
│  • Peta Lantai Interaktif (Digital Twin)                 │
│  • WebSocket Real-time (Zero Polling)                    │
│  • shadcn/ui + Tailwind + Framer Motion                  │
└──────────────────────────────────────────────────────────┘`}</AsciiDiagram>

        {/* Screenshot: Dashboard */}
        <div className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.08)] bg-white p-2 my-8">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img src={screenshot1} alt="Asetrace Dashboard" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Dashboard — Overview aset dengan peta lantai real-time', 'Dashboard — Asset overview with real-time floor map')}</p>
        </div>

        {/* ========== SECTION 3: CHALLENGES ========== */}
        <SectionHeading icon={Activity}>
          {t('3. Tantangan Teknis & Solusi', '3. Technical Challenges & Solutions')}
        </SectionHeading>
        <Divider />

        <SubHeading>{t('Tantangan 1: Efek Ping-Pong (Perpindahan Palsu)', 'Challenge 1: Ping-Pong Effect (False Movements)')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Ketika aset berada tepat di perbatasan dua ruangan, dua Gateway bisa saling "berebut klaim" — bergantian melaporkan sinyal lebih kuat. Akibatnya, sistem mencatat aset berpindah bolak-balik puluhan kali per menit.',
            'When an asset sits right at the boundary of two rooms, two Gateways can "fight" each other — alternately reporting stronger signals. This causes the system to record dozens of back-and-forth movements per minute.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-2 font-semibold">
          {t('Solusi — Tiga lapisan pertahanan:', 'Solution — Three defense layers:')}
        </p>
        <ol className="space-y-2 text-foreground/80 mb-4 list-decimal list-inside">
          <li><strong>Debounce (5 detik)</strong> — {t('Setelah perpindahan tercatat, sistem mengunci lokasi dan menolak klaim baru selama 5 detik.', 'After a movement is recorded, the system locks the location and rejects new claims for 5 seconds.')}</li>
          <li><strong>Strongest Wins</strong> — {t('Jika data masih segar (< 12 detik), pindah hanya diizinkan jika sinyal baru benar-benar lebih kuat.', 'If data is still fresh (< 12 seconds), movement is only allowed if the new signal is actually stronger.')}</li>
          <li><strong>Free Agent</strong> — {t('Jika data sudah basi (> 12 detik), Gateway manapun yang menangkap sinyal valid boleh langsung klaim. Mencegah aset "terjebak" di lokasi lama.', 'If data is stale (> 12 seconds), any Gateway capturing a valid signal can claim it. Prevents assets from being "stuck" at old locations.')}</li>
        </ol>

        <CodeBlock>{`// Logika penentuan ruangan (disederhanakan)
function determineRoom(asset, newSignal) {
  const lastUpdate = asset.lastSeen;
  const timeSince = Date.now() - lastUpdate;

  // Debounce: tolak jika baru saja pindah
  if (timeSince < 5000) return "REJECT";
  
  // Data basi → Free Agent: terima langsung
  if (timeSince > 12000) return "APPROVE";
  
  // Data segar → hanya pindah jika sinyal lebih kuat
  return newSignal.rssi > asset.currentRSSI 
    ? "APPROVE" 
    : "REJECT";
}`}</CodeBlock>

        <SubHeading>{t('Tantangan 2: Browser Freeze', 'Challenge 2: Browser Freeze')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Sistem IoT menghasilkan puluhan event per detik. Kalau setiap event langsung memicu update tampilan, browser user akan freeze total.',
            'The IoT system generates dozens of events per second. If every event directly triggers a display update, the user\'s browser would freeze completely.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Solusinya: Batched Queue. Semua event dikumpulkan dulu, lalu diproses sekaligus setiap 1,5 detik. 30 event hanya menghasilkan satu kali update tampilan — browser tetap lancar.',
            'Solution: Batched Queue. All events are collected first, then processed together every 1.5 seconds. 30 events produce just one display update — the browser stays smooth.'
          )}
        </p>

        <SubHeading>{t('Tantangan 3: AI Ngarang Lokasi', 'Challenge 3: AI Hallucinating Locations')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'AI assistant awalnya membaca data lokasi yang sudah lama — bukan data real-time dari sensor. Akibatnya, jawaban lokasi aset bisa salah atau dikarang.',
            'The AI assistant initially read outdated location data — not real-time data from sensors. This caused asset location answers to be wrong or fabricated.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Solusinya: AI sekarang membaca data yang sama persis dengan yang tampil di dashboard (dari tabel real-time). Jika lokasi tidak diketahui, AI dipaksa menjawab "Saya tidak bisa mendeteksi lokasi aset ini" — bukan mengarang nama ruangan.',
            'Solution: AI now reads the exact same data shown on the dashboard (from real-time tables). If the location is unknown, AI is forced to answer "I cannot detect this asset\'s location" — not make up room names.'
          )}
        </p>

        {/* Screenshot: AI & Movement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.08)] bg-white p-2">
            <img src={screenshot2} alt="Movement Timeline" className="w-full h-auto rounded-xl" loading="lazy" />
            <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Movement Timeline & Signal Tracking', 'Movement Timeline & Signal Tracking')}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.08)] bg-white p-2">
            <img src={screenshot3} alt="AI Insights" className="w-full h-auto rounded-xl" loading="lazy" />
            <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('AI Insights & Deteksi Anomali', 'AI Insights & Anomaly Detection')}</p>
          </div>
        </div>

        {/* ========== SECTION 4: SMART FEATURES ========== */}
        <SectionHeading icon={Brain}>
          {t('4. Fitur Cerdas & Otomasi', '4. Smart Features & Automation')}
        </SectionHeading>
        <Divider />

        <div className="grid gap-3 mb-6">
          {[
            { icon: <AlertTriangle className="w-5 h-5 text-amber-600" />, title: t('Ghost Asset Detection', 'Ghost Asset Detection'), desc: t('Jika aset yang seharusnya di gudang terdeteksi di ruangan lain, sistem otomatis mengirim notifikasi ke admin. Pencegahan pencurian tanpa audit manual.', 'If an asset that should be in storage is detected in another room, the system automatically notifies admins. Theft prevention without manual audits.') },
            { icon: <Wifi className="w-5 h-5 text-blue-600" />, title: t('Auto-Recovery & Signal Loss', 'Auto-Recovery & Signal Loss'), desc: t('Jika sinyal BLE hilang > 5 menit, aset ditandai "untracked" dan admin diberitahu. Jika sinyal muncul kembali, status otomatis kembali "active" — tanpa aksi manual.', 'If a BLE signal is lost > 5 minutes, the asset is marked "untracked" and admins are notified. If the signal returns, status auto-reverts to "active" — no manual action.') },
            { icon: <Brain className="w-5 h-5 text-purple-600" />, title: t('AI Assistant Kontekstual', 'Context-Aware AI Assistant'), desc: t('"Di mana Speaker Admin 1?" — AI tidak menebak, tapi membaca langsung dari data real-time sensor. Jawaban akurat dan bisa diverifikasi.', '"Where is Speaker Admin 1?" — AI doesn\'t guess, it reads directly from real-time sensor data. Answers are accurate and verifiable.') },
            { icon: <Eye className="w-5 h-5 text-green-600" />, title: t('Zero Refresh Dashboard', 'Zero Refresh Dashboard'), desc: t('Semua perubahan — perpindahan aset, persetujuan peminjaman, notifikasi baru — tampil instan di layar tanpa perlu refresh halaman.', 'All changes — asset movements, borrow approvals, new notifications — appear instantly on screen without page refresh.') },
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

        <SubHeading>{t('Keamanan Data', 'Data Security')}</SubHeading>
        <ul className="space-y-2 text-foreground/80 mb-6 list-disc list-inside">
          <li>{t('API key untuk AI disimpan di server, tidak pernah terekspos di browser', 'AI API keys stored on server, never exposed in browser')}</li>
          <li>{t('ID internal database tidak pernah dikirim ke AI — mencegah kebocoran skema data', 'Internal database IDs never sent to AI — prevents data schema leaks')}</li>
          <li>{t('Row Level Security memastikan setiap user hanya melihat data yang dia berhak akses', 'Row Level Security ensures each user only sees data they\'re authorized to access')}</li>
        </ul>

        {/* Screenshot: Inventory */}
        <div className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.08)] bg-white p-2 my-8">
          <img src={screenshot4} alt="Inventory Management" className="w-full h-auto rounded-xl" loading="lazy" />
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Inventory Management & Tambah Aset', 'Inventory Management & Add Asset')}</p>
        </div>

        {/* ========== SECTION 5: IMPACT ========== */}
        <SectionHeading icon={BarChart3}>
          {t('5. Dampak & Manfaat', '5. Impact & Benefits')}
        </SectionHeading>
        <Divider />

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Sebelum Asetrace', 'Before Asetrace')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Sesudah Asetrace', 'After Asetrace')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                [t('Audit aset manual per semester (berhari-hari)', 'Manual asset audit per semester (takes days)'), t('Posisi semua aset diketahui per detik, otomatis', 'All asset positions known per second, automatically')],
                [t('Pencurian baru ketahuan saat audit berikutnya', 'Theft only discovered at next audit'), t('Ghost Asset terdeteksi dalam hitungan detik', 'Ghost Assets detected within seconds')],
                [t('Peminjaman via formulir kertas tanpa tracking', 'Paper forms for borrowing, no tracking'), t('Workflow digital lengkap dengan paper trail', 'Complete digital workflow with paper trail')],
                [t('Aset hilang sinyal tanpa peringatan', 'Lost signal with no warning'), t('Notifikasi otomatis dalam 5 menit ke admin', 'Automatic notification within 5 minutes to admin')],
                [t('Tidak ada catatan perpindahan aset', 'No asset movement records'), t('Seluruh kronologi tercatat otomatis per ruangan', 'Complete chronology auto-recorded per room')],
              ].map(([before, after], i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-3 text-red-600/80">{before}</td>
                  <td className="p-3 text-emerald-700 font-medium">{after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SubHeading>{t('Metrik Teknis', 'Technical Metrics')}</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {[
            { value: '830', label: t('baris logika di tracking engine', 'lines of logic in tracking engine') },
            { value: '< 2s', label: t('latensi dari deteksi fisik ke UI', 'latency from physical detection to UI') },
            { value: '~95%', label: t('pengurangan beban CPU browser', 'browser CPU load reduction') },
          ].map(({ value, label }, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 p-5 text-center">
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-xs text-white/80">{label}</p>
            </div>
          ))}
        </div>

        {/* ========== TECH STACK ========== */}
        <SectionHeading icon={Zap}>Tech Stack</SectionHeading>
        <Divider />

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Komponen', 'Component')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Teknologi', 'Technology')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Alasan Pemilihan', 'Why This Choice')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                [t('Tag Aset', 'Asset Tag'), 'BLE Beacon', t('Baterai tahan 1-3 tahun, biaya < Rp 50.000/unit', 'Battery lasts 1-3 years, cost < $3/unit')],
                ['Gateway', 'ESP32', t('Wi-Fi + BLE terintegrasi, < Rp 100.000/unit', 'Integrated Wi-Fi + BLE, ~$6/unit')],
                ['Database', 'Supabase PostgreSQL', t('Real-time streaming + keamanan bawaan (RLS)', 'Built-in real-time streaming + security (RLS)')],
                [t('Serverless Logic', 'Serverless Logic'), 'Edge Functions (Deno)', t('Latensi rendah, deploy otomatis', 'Low latency, auto-deploy')],
                ['Frontend', 'React + Vite + TypeScript', t('Ekosistem terbesar, type safety untuk data IoT', 'Largest ecosystem, type safety for IoT data')],
                ['UI', 'shadcn/ui + Tailwind + Framer Motion', t('Komponen modern, animasi smooth', 'Modern components, smooth animations')],
              ].map(([component, tech, reason], i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-3 font-semibold text-foreground">{component}</td>
                  <td className="p-3 text-foreground/80 font-mono text-xs">{tech}</td>
                  <td className="p-3 text-foreground/70">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {['ESP32', 'BLE Beacon', 'Supabase', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Edge Functions', 'AI/LLM'].map(tech => (
            <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50">{tech}</span>
          ))}
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200/60 mb-8">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-bold text-amber-700">85%</span>
          </div>
          <div>
            <p className="font-bold text-sm text-amber-800">{t('Status: Dalam Pengembangan', 'Status: In Development')}</p>
            <p className="text-xs text-amber-700/80">{t('Fokus saat ini: penyempurnaan logika spatial rendering dan optimasi validasi visual.', 'Current focus: refining spatial rendering logic and optimizing visual validation.')}</p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-4">
          <p className="text-foreground/60 italic text-center text-sm leading-relaxed">
            {t(
              'Asetrace menunjukkan bahwa dengan kombinasi IoT murah, serverless computing, dan rekayasa state management yang presisi, sistem pelacakan aset enterprise-grade bisa dibangun tanpa server fisik dan tanpa biaya lisensi.',
              'Asetrace shows that with low-cost IoT, serverless computing, and precise state management engineering, enterprise-grade asset tracking can be built without physical servers and without license fees.'
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

export default ProjectAsetrace;
