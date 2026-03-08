import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Cpu, Database, Brain, Zap, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import screenshot1 from '@/assets/project-asetrace-1.jpg';
import screenshot2 from '@/assets/project-asetrace-2.jpg';
import screenshot3 from '@/assets/project-asetrace-3.jpg';
import screenshot4 from '@/assets/project-asetrace-4.jpg';

const Divider = () => (
  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
);

const ProjectAsetrace = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 shadow-lg">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-300/90 font-medium text-sm tracking-wide">Engineering Case Study · 2025–2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-white mb-3">Asetrace: Event-Driven Digital Twin & Context-Aware AI</h1>
          <p className="text-lg md:text-xl text-blue-200/80 font-medium max-w-3xl mb-6">
            Beyond standard CRUD inventory. A high-throughput micro-location tracking platform projecting physical hardware movements into a real-time UI.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React', 'Supabase', 'ESP32', 'BLE Beacons', 'Edge Functions'].map(tech => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* Placeholder for System Architecture Diagram */}
        <section>
          <div className="w-full flex items-center justify-center bg-[#1e1e2e] rounded-2xl border border-slate-700/50 p-12 min-h-[300px] shadow-lg">
             <div className="text-center">
                 <Cpu className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                 <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">System Architecture Diagram Placeholder</p>
             </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1: Architecture & Tech Stack */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Hybrid Serverless & Low-Energy Topology</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Overcoming the limitations of indoor GPS, Asetrace utilizes a hybrid architecture. Data flows from Hardware (BLE Beacons & ESP32 Gateways) to the Backend (Supabase PostgreSQL & Deno Edge Functions) for low-latency processing, and is rendered on a React/Tailwind client.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Engineering Decision</span>
                    <p className="text-sm text-slate-700 leading-relaxed">Opted for BLE proximity tracking over UWB (Ultra-Wideband). While trading off centimeter-level accuracy, BLE offers massive logistical efficiency (multi-year battery life) and extreme cost-effectiveness for large-scale enterprise deployments.</p>
                </div>
            </div>

            {/* Section 2: The Core Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Autonomous Event-Driven Mutations</h3>
                <p className="text-slate-600 leading-relaxed">
                    The core of Asetrace is its autonomous logging—eliminating manual barcode scanning. The system relies on Proximity Handshakes and RSSI Signal Fluctuations. When an asset moves from Room A to Room B, the ESP32 captures the aggressive RSSI shift. The Edge Function arbitrates this data and instantly executes an Autonomous SQL Transaction, seamlessly building the asset's movement history without human intervention.
                </p>
            </div>

            {/* Section 3: Performance & Real-Time UI */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Zero-Polling Digital Twin & State Management</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Physical movements are projected instantly onto the virtual floor map using Supabase's Real-time WebSockets (pg_notify).
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Performance Tuning</span>
                    <p className="text-sm text-slate-700 leading-relaxed">High-throughput BLE payloads can cause severe React DOM freezing. To mitigate this, Asetrace implements a Debounced Handler & Batching Queue System at the React Hook level (useBLETracking). Incoming payloads are pooled into a state queue and rendered in parallel intervals, guaranteeing a freeze-free Operator Dashboard even under heavy burst traffic.</p>
                </div>
            </div>

            {/* Section 4: AI Integration */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Zero-Trust Context-Aware AI</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Asetrace AI is a Decision-Support System utilizing a lightweight RAG (Retrieval-Augmented Generation) architecture. The Edge Function securely 'hydrates' the LLM prompt with real-time WebSocket data and room variables.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Security & Anti-Hallucination</span>
                    <p className="text-sm text-slate-700 leading-relaxed">Implemented a Zero-Trust barrier by censoring all internal relational UUIDs from the AI context to prevent Prompt Injection. Strict guardrails force the LLM to explicitly state 'Unknown' if signal depth is lost, completely eliminating blind speculation or hallucinations.</p>
                </div>
            </div>
        </div>

        <section>
          <h2 className="text-3xl font-editorial font-bold text-foreground mb-4">{t('Tampilan Aplikasi', 'App Screenshots')}</h2>
          <Divider />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { src: screenshot1, label: t('Admin Dashboard — Overview aset', 'Admin Dashboard — Asset overview') },
              { src: screenshot2, label: t('Movement Timeline & Signal Tracking', 'Movement Timeline & Signal Tracking') },
              { src: screenshot3, label: t('AI Insights & Anomaly Detection', 'AI Insights & Anomaly Detection') },
              { src: screenshot4, label: t('Inventory Management & Add Asset', 'Inventory Management & Add Asset') },
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.08)] bg-white p-2 border border-slate-100">
                <img src={img.src} alt={img.label} className="w-full h-auto rounded-xl" loading="lazy" />
                <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{img.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200">
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
