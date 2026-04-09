import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, Database, QrCode, Shield, Layers, Settings, FileText, Zap, ClipboardCheck, BarChart3, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import screenshotForm from '@/assets/project-sensushub-form.png';
import screenshotLogin from '@/assets/project-sensushub-login.png';
import screenshotSettings from '@/assets/project-sensushub-settings.png';
import screenshotReports from '@/assets/project-sensushub-reports.png';
import screenshotAssets from '@/assets/project-sensushub-assets.png';

const CodeBlock = ({ children, language = 'typescript' }: { children: string; language?: string }) => (
  <div className="rounded-xl overflow-hidden my-6 shadow-lg border border-slate-700/50">
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.8125rem', lineHeight: '1.7', borderRadius: 0, background: '#1e1e2e' }}
      wrapLongLines
    >
      {children.trim()}
    </SyntaxHighlighter>
  </div>
);

const AsciiDiagram = ({ children }: { children: string }) => (
  <div className="rounded-xl overflow-x-auto my-6 shadow-lg border border-slate-700/50 bg-[#1e1e2e] p-6">
    <pre className="text-[0.7rem] md:text-[0.8rem] leading-relaxed text-emerald-400 font-mono whitespace-pre">
      {children.trim()}
    </pre>
  </div>
);

const SectionHeading = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3 pt-8">
    <Icon className="w-7 h-7 text-blue-600 flex-shrink-0" />
    {children}
  </h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl md:text-2xl font-editorial font-bold text-foreground mt-8 mb-4">{children}</h3>
);

const Divider = () => (
  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-6" />
);

const ProjectSensusHub = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] md:h-[60vh] overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 shadow-lg">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-300/90 font-medium text-sm tracking-wide">Technical Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-white mb-3">SensusHub</h1>
          <p className="text-lg md:text-xl text-blue-200/80 font-medium max-w-2xl mb-6">
            {t('Platform Sensus & Manajemen Aset Barang Milik Daerah (BMD)', 'Government Asset Census & Lifecycle Management Platform (BMD)')}
          </p>
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider self-center mr-1">Role:</span>
            <span className="text-sm text-white/90 font-medium">System Architect & Product Creator</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'JSONB', 'RLS', 'QR Code', 'PDF Generation'].map(tag => (
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
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200/50 rounded-2xl p-6 mb-8">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">TL;DR</p>
          <p className="text-foreground/80 leading-relaxed">
            {t(
              'SensusHub adalah platform digitalisasi siklus hidup aset Barang Milik Daerah (BMD) yang mengotomasi seluruh proses — dari registrasi & klasifikasi hierarkis, pelabelan QR Code, hingga ticketing system pemeliharaan dan ekstraksi dokumen legal. Arsitektur Dynamic Custom Columns (JSONB + Schema-on-Read) memungkinkan setiap instansi menyesuaikan skema data tanpa migrasi database.',
              'SensusHub is a full-lifecycle government asset (BMD) digitalization platform that automates the entire process — from hierarchical registration & classification, QR Code labeling, to a maintenance ticketing system and legal document extraction. The Dynamic Custom Columns architecture (JSONB + Schema-on-Read) allows each institution to customize their data schema without database migrations.'
            )}
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[
            { img: screenshotLogin, label: t('Login / Autentikasi', 'Login / Authentication') },
            { img: screenshotForm, label: t('Form Registrasi Aset', 'Asset Registration Form') },
            { img: screenshotAssets, label: t('Daftar Aset & Bulk Actions', 'Asset List & Bulk Actions') },
            { img: screenshotSettings, label: t('Pengaturan Master Data', 'Master Data Settings') },
            { img: screenshotReports, label: t('Laporan Kendala / Tiket', 'Issue Reports / Ticketing') },
          ].map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
              <div className="overflow-hidden">
                <img src={item.img} alt={item.label} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-xs text-center text-slate-500 font-medium py-2 px-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Section 1: Problem Statement */}
        <SectionHeading icon={Zap}>{t('Konteks Bisnis — Masalah yang Dipecahkan', 'Business Context — The Problem')}</SectionHeading>
        <Divider />
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Proses sensus aset Barang Milik Daerah (BMD) di instansi pemerintah masih mengandalkan spreadsheet manual, pelabelan fisik yang rawan rusak, dan alur pelaporan yang terputus antar-divisi. Konsekuensinya sangat merugikan:',
            'Government asset (BMD) census processes in public institutions still rely on manual spreadsheets, fragile physical labeling, and disconnected inter-division reporting pipelines. The consequences are severe:'
          )}
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: t('Inkonsistensi Data', 'Data Inconsistency'),
              desc: t('Setiap divisi menggunakan format kolom dan kode aset yang berbeda sehingga data sulit dikonsolidasikan.', 'Each division uses different column formats and asset codes, making data consolidation extremely difficult.'),
              color: 'bg-red-50 border-red-200 text-red-700'
            },
            {
              title: t('Zero Traceability', 'Zero Traceability'),
              desc: t('Tidak ada mekanisme menelusuri histori aset dari pelabelan hingga resolusi kendala lapangan.', 'No mechanism to trace asset history from labeling to field issue resolution.'),
              color: 'bg-amber-50 border-amber-200 text-amber-700'
            },
            {
              title: t('Proses Manual Rapuh', 'Fragile Manual Process'),
              desc: t('Pembuatan kode aset, pencetakan label, dan pelaporan kerusakan sepenuhnya bergantung pada input manual — sumber utama human error.', 'Asset coding, label printing, and damage reporting rely entirely on manual input — the primary source of human error.'),
              color: 'bg-orange-50 border-orange-200 text-orange-700'
            },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-xs leading-relaxed opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 2: Code Composition Engine */}
        <SectionHeading icon={Workflow}>{t('Hierarchical Code Composition Engine', 'Hierarchical Code Composition Engine')}</SectionHeading>
        <Divider />
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Kode aset BMD bukan sekadar auto-increment — ia harus merepresentasikan klasifikasi bertingkat: Divisi → KIB → Sub-Atribut → Nomor Urut. SensusHub mengimplementasikan Code Composition Engine yang secara otomatis merangkai kode aset berdasarkan pilihan klasifikasi admin:',
            'BMD asset codes are not simple auto-increments — they must represent a hierarchical classification: Division → KIB → Sub-Attribute → Sequential Number. SensusHub implements a Code Composition Engine that automatically assembles asset codes based on admin classification selections:'
          )}
        </p>
        <AsciiDiagram>{`
┌──────────┐   ┌──────────┐   ┌──────────────────┐   ┌──────────┐
│  Divisi   │ . │   KIB    │ . │  Coded Dropdown  │ . │ Auto-Inc │
│  (01)     │   │  (03)    │   │  Values (A, 02)  │   │  (001)   │
└──────────┘   └──────────┘   └──────────────────┘   └──────────┘
                    │
                    ▼
            Kode Aset: 01.03.A.02.001
        `}</AsciiDiagram>

        <p className="text-foreground/80 leading-relaxed mb-2">
          {t(
            'Mekanisme teknis di balik layar mencakup 3 fase:',
            'The technical mechanism behind the scenes involves 3 phases:'
          )}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
          <li><strong>Phase 1 — Code Part Assembly:</strong> {t('Sistem mengiterasi seluruh customColumns bertipe coded_dropdown sesuai urutan drag-and-drop yang dikonfigurasi admin.', 'The system iterates all coded_dropdown customColumns in the drag-and-drop order configured by the admin.')}</li>
          <li><strong>Phase 2 — Collision Detection:</strong> {t('Query ke database menggunakan ILIKE pattern matching untuk memastikan nomor urut lanjutan yang benar, bahkan dalam skenario concurrent insert.', 'Queries the database using ILIKE pattern matching to ensure correct sequential numbering, even during concurrent inserts.')}</li>
          <li><strong>Phase 3 — Sequential Numbering:</strong> {t('Untuk bulk insert (misal: 50 unit kursi), sistem menghasilkan array payload dengan nomor urut berurutan dalam satu batch operation.', 'For bulk inserts (e.g., 50 chairs), the system generates array payloads with sequential numbering in a single batch operation.')}</li>
        </ul>

        <CodeBlock>{`// Simplified logic dari Code Composition Engine
const codeParts: string[] = [];

// Setiap coded_dropdown berkontribusi pada kode aset
for (const col of customColumns) {
  if (col.type === "coded_dropdown" && customData[col.name]) {
    const selectedOpt = col.options?.find(o => o.code === customData[col.name]);
    if (selectedOpt) codeParts.push(selectedOpt.code);
  }
}

// Query existing codes untuk menentukan nomor urut selanjutnya
const prefixKode = codeParts.join(".");
const { data: existing } = await supabase
  .from("assets")
  .select("kode_aset")
  .ilike("kode_aset", \`\${prefixKode}.%\`);

// Generate batch payload dengan sequential numbering
const payload = Array.from({ length: quantity }, (_, i) => ({
  kode_aset: \`\${prefixKode}.\${String(startNum + i).padStart(3, "0")}\`,
  // ... remaining fields
}));`}</CodeBlock>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
          <p className="text-emerald-800 text-sm">
            <strong>Business Impact:</strong> {t(
              'Proses yang secara manual membutuhkan 15–30 menit per aset (menentukan kode, cek duplikasi, mengetik manual) direduksi menjadi 3 klik + 1 submit — dengan jaminan zero collision dan konsistensi format 100%.',
              'A process that manually takes 15–30 minutes per asset (determining codes, checking duplicates, manual typing) is reduced to 3 clicks + 1 submit — with guaranteed zero collision and 100% format consistency.'
            )}
          </p>
        </div>

        {/* Section 3: Dynamic Custom Columns */}
        <SectionHeading icon={Layers}>{t('Dynamic Custom Columns — Schema-on-Read', 'Dynamic Custom Columns — Schema-on-Read')}</SectionHeading>
        <Divider />
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Ini adalah keunggulan arsitektural utama SensusHub. Dalam standar BMD, terdapat beberapa Kartu Inventaris Barang (KIB) yang masing-masing memiliki atribut yang sangat berbeda (KIB A—Tanah, KIB B—Peralatan & Mesin, KIB C—Gedung, dst). Pendekatan tradisional memerlukan tabel terpisah atau puluhan kolom nullable.',
            'This is SensusHub\'s primary architectural advantage. In BMD standards, multiple Asset Inventory Cards (KIB) each have vastly different attributes (KIB A—Land, KIB B—Equipment & Machinery, KIB C—Buildings, etc.). The traditional approach requires separate tables or dozens of nullable columns.'
          )}
        </p>
        <SubHeading>{t('Solusi: JSONB + Metadata-Driven UI', 'Solution: JSONB + Metadata-Driven UI')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'SensusHub menggunakan pendekatan Schema-on-Read dengan dua komponen: (1) Metadata Layer — skema kolom custom tersimpan sebagai JSONB di tabel companies; (2) Data Layer — data aktual setiap aset tersimpan sebagai JSONB di kolom custom_data.',
            'SensusHub uses a Schema-on-Read approach with two components: (1) Metadata Layer — custom column schemas stored as JSONB in the companies table; (2) Data Layer — actual asset data stored as JSONB in the custom_data column.'
          )}
        </p>

        <CodeBlock language="json">{`// Metadata Layer (companies.custom_column_schema)
{
  "Peralatan dan Mesin": [
    { "id": "uuid-1", "name": "Merk", "type": "text" },
    { "id": "uuid-2", "name": "Tahun Pembuatan", "type": "number" },
    { "id": "uuid-3", "name": "Jenis Kendaraan", "type": "coded_dropdown",
      "options": [
        { "label": "Roda 2", "code": "R2" },
        { "label": "Roda 4", "code": "R4" }
      ]
    }
  ]
}

// Data Layer (assets.custom_data)
{
  "Merk": "Toyota Avanza",
  "Tahun Pembuatan": 2024,
  "Jenis Kendaraan": "Roda 4"
}`}</CodeBlock>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: t('Zero Schema Migration', 'Zero Schema Migration'), desc: t('Menambah atribut baru tidak memerlukan ALTER TABLE, migrasi database, atau deployment ulang.', 'Adding new attributes requires no ALTER TABLE, database migration, or redeployment.') },
            { title: t('KIB-Specific Isolation', 'KIB-Specific Isolation'), desc: t('Kolom "Nomor Polisi" hanya muncul saat memilih KIB Peralatan & Mesin — tidak mencemari form KIB Tanah.', '"License Plate" column only appears when selecting Equipment KIB — it doesn\'t pollute the Land KIB form.') },
            { title: t('Coded Dropdown Auto-Code', 'Coded Dropdown Auto-Code'), desc: t('Setiap opsi dropdown memiliki code yang otomatis berkontribusi pada kode aset hierarkis.', 'Every dropdown option has a code that automatically contributes to the hierarchical asset code.') },
            { title: t('Drag-and-Drop Ordering', 'Drag-and-Drop Ordering'), desc: t('Admin mengatur urutan kolom via @dnd-kit. Urutan ini menentukan urutan segmen kode aset.', 'Admin arranges column order via @dnd-kit. This order determines the asset code segment sequence.') },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="font-bold text-sm text-slate-900 mb-1">{item.title}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 4: QR Code Digital Twin */}
        <SectionHeading icon={QrCode}>{t('Digital Twin via QR Code — Identitas Phygital', 'Digital Twin via QR Code — Phygital Identity')}</SectionHeading>
        <Divider />
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Setiap aset yang terdaftar memiliki representasi digital yang dapat diakses oleh siapa saja — tanpa login — melalui QR Code yang ditempel secara fisik pada aset tersebut. Siapa saja yang menemukan aset (cleaning service, tamu, auditor eksternal) dapat langsung mengidentifikasi aset dan melaporkan kendala tanpa akses ke sistem internal.',
            'Every registered asset has a digital representation accessible by anyone — without login — through a QR Code physically attached to the asset. Anyone who finds the asset (cleaning staff, visitors, external auditors) can instantly identify it and report issues without internal system access.'
          )}
        </p>

        <AsciiDiagram>{`
┌──────────────┐    ┌───────────────┐    ┌──────────────────┐
│  Aset Fisik   │───▶│  Scan QR Code │───▶│  Digital Twin     │
│  + Label QR   │    │  (Kamera HP)  │    │  Profile Page     │
└──────────────┘    └───────────────┘    └──────────────────┘
                                                  │
                                                  ▼
                                          ┌──────────────────┐
                                          │ Anonymous Ticket  │
                                          │ Submission (Lapor │
                                          │ Kendala)          │
                                          └──────────────────┘
        `}</AsciiDiagram>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-blue-800 text-sm">
            <strong>{t('Alur Teknis:', 'Technical Flow:')}</strong> {t(
              'Label PDF (250×130pt) di-generate via @react-pdf/renderer → QR Code mengandung URL unik /scan/{uuid} → Halaman publik fetch data tanpa autentikasi (RLS: SELECT public) → Smart Location Engine mengekstrak lokasi yang paling relevan dari atribut JSONB yang heterogen.',
              'PDF Labels (250×130pt) generated via @react-pdf/renderer → QR Code contains unique URL /scan/{uuid} → Public page fetches data without authentication (RLS: SELECT public) → Smart Location Engine extracts the most relevant location from heterogeneous JSONB attributes.'
            )}
          </p>
        </div>

        {/* Section 5: Maintenance Ticketing */}
        <SectionHeading icon={ClipboardCheck}>{t('Sistem Tiket Pemeliharaan End-to-End', 'End-to-End Maintenance Ticketing System')}</SectionHeading>
        <Divider />
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'SensusHub mengimplementasikan alur tiket pemeliharaan yang menghubungkan pelapor lapangan (publik) dengan tim pemeliharaan (admin) melalui 4 fase yang sepenuhnya digital:',
            'SensusHub implements a maintenance ticketing flow connecting field reporters (public) with the maintenance team (admin) through 4 fully digital phases:'
          )}
        </p>

        <div className="space-y-4 mb-8">
          {[
            { phase: '1', title: t('Pelaporan Anonim', 'Anonymous Reporting'), desc: t('Siapa saja scan QR Code → Isi: Nama, WhatsApp, Deskripsi Kendala → INSERT ke asset_reports tanpa login (RLS anon).', 'Anyone scans QR Code → Fill: Name, WhatsApp, Issue Description → INSERT to asset_reports without login (RLS anon).'), color: 'border-l-amber-500 bg-amber-50' },
            { phase: '2', title: t('Dashboard Triage', 'Triage Dashboard'), desc: t('Semua laporan masuk ditampilkan dengan status Menunggu / Diproses / Selesai. Integrasi WhatsApp via 1-click deeplink (auto-format nomor Indonesia: 0→62).', 'All incoming reports displayed with Waiting / Processing / Completed status. WhatsApp integration via 1-click deeplink (auto-format Indonesian numbers: 0→62).'), color: 'border-l-blue-500 bg-blue-50' },
            { phase: '3', title: t('Resolusi Terstruktur', 'Structured Resolution'), desc: t('Admin mengisi Aksi (Diperbaiki / Diganti / Dihapuskan), Total Biaya (Rp), dan Catatan Teknisi. JSONB resolusi tersimpan di database.', 'Admin fills Action (Repaired / Replaced / Disposed), Total Cost, and Technician Notes. Resolution JSONB stored in database.'), color: 'border-l-emerald-500 bg-emerald-50' },
            { phase: '4', title: t('Dokumentasi Otomatis', 'Automated Documentation'), desc: t('Cetak Berita Acara (PDF) + Export Log Book (Excel). Jika aksi = "Dihapuskan", sistem otomatis memutasi status aset → "Usul Hapus".', 'Print Official Report (PDF) + Export Log Book (Excel). If action = "Disposed", system automatically mutates asset status → "Proposed Deletion".'), color: 'border-l-purple-500 bg-purple-50' },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-r-xl border-l-4 ${item.color}`}>
              <p className="font-bold text-sm text-slate-900 mb-1">Phase {item.phase}: {item.title}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <CodeBlock>{`// Event-Driven Asset Status Mutation
if (resolusiForm.aksi === "Dihapuskan" && resolveReport.asset_id) {
  // Otomatis ubah status aset menjadi "Usul Hapus"
  await supabase.from("assets").update({
    custom_data: { ...currentCustom, status_aset: "Usul Hapus" },
  }).eq("id", resolveReport.asset_id);
}`}</CodeBlock>

        {/* Section 6: Security Architecture */}
        <SectionHeading icon={Shield}>{t('Arsitektur Keamanan Data', 'Data Security Architecture')}</SectionHeading>
        <Divider />
        <SubHeading>{t('Multi-Tenant Isolation via Row Level Security', 'Multi-Tenant Isolation via Row Level Security')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Dirancang sebagai platform multi-tenant (satu instance melayani banyak instansi). Keamanan isolasi data diimplementasikan langsung di database layer menggunakan PostgreSQL RLS — bukan di application layer yang rentan bypass.',
            'Designed as a multi-tenant platform (one instance serves many institutions). Data isolation security is implemented directly at the database layer using PostgreSQL RLS — not at the application layer which is vulnerable to bypass.'
          )}
        </p>

        <CodeBlock language="sql">{`-- Asymmetric Access Policies
-- Assets: Public can READ (QR scan), only authenticated can WRITE
CREATE POLICY "Public can view assets" ON public.assets 
  FOR SELECT USING (true);

-- Reports: Public can SUBMIT (anonymous ticketing), only admin can READ
CREATE POLICY "Public_Can_Insert_Reports" ON public.asset_reports
  FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Admin_Select_Own_Reports" ON public.asset_reports
  FOR SELECT TO authenticated USING (
    company_id IN (SELECT id FROM public.companies WHERE user_id = auth.uid())
  );`}</CodeBlock>

        <SubHeading>PIN Lock System</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Melindungi integritas standarisasi master data instansi dari perubahan yang tidak disengaja oleh staf operasional. Halaman Settings selalu terkunci — staf dapat melihat konfigurasi, tetapi tidak dapat mengubahnya tanpa PIN admin.',
            'Protects the integrity of institutional master data standardization from accidental modifications by operational staff. The Settings page is always locked — staff can view configurations but cannot modify them without the admin PIN.'
          )}
        </p>

        {/* Section 7: Document Pipeline */}
        <SectionHeading icon={FileText}>{t('Pipeline Generasi Dokumen Multi-Format', 'Multi-Format Document Generation Pipeline')}</SectionHeading>
        <Divider />
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Seluruh proses generasi dokumen berjalan 100% di browser — tanpa round-trip ke server. Dokumen dapat di-generate bahkan saat koneksi lambat selama data sudah ter-cache oleh React Query.',
            'The entire document generation process runs 100% in the browser — no server round-trips. Documents can be generated even with slow connections as long as data is cached by React Query.'
          )}
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left p-3 border border-slate-200 font-semibold">{t('Tipe Dokumen', 'Document Type')}</th>
                <th className="text-left p-3 border border-slate-200 font-semibold">Engine</th>
                <th className="text-left p-3 border border-slate-200 font-semibold">{t('Kegunaan', 'Use Case')}</th>
              </tr>
            </thead>
            <tbody>
              {[
                [t('Label Aset', 'Asset Labels'), '@react-pdf/renderer', t('Pencetakan massal label + QR Code untuk ditempel pada aset fisik', 'Mass printing of labels + QR Code to attach on physical assets')],
                [t('Laporan Audit', 'Audit Report'), 'jsPDF + AutoTable', t('Laporan inventaris formal multi-page untuk keperluan audit', 'Formal multi-page inventory report for audit purposes')],
                ['Excel Export', 'SheetJS (xlsx)', t('Multi-sheet workbook — sheet "Semua Aset" + sheet per KIB', 'Multi-sheet workbook — "All Assets" sheet + per-KIB sheet')],
                [t('Berita Acara', 'Official Report'), 'jsPDF + AutoTable', t('Dokumen legal dengan tabel grid, kolom tanda tangan, dan data resolusi', 'Legal document with grid table, signature columns, and resolution data')],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium">{row[0]}</td>
                  <td className="p-3 border border-slate-200"><code className="text-xs bg-slate-100 px-2 py-0.5 rounded">{row[1]}</code></td>
                  <td className="p-3 border border-slate-200 text-slate-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative shadow-lg mb-12">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 mix-blend-screen pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-editorial font-bold mb-6 text-white flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-blue-400" />
              {t('Ringkasan Eksekutif', 'Executive Summary')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-3 text-blue-300 font-semibold">{t('Dimensi', 'Dimension')}</th>
                    <th className="text-left p-3 text-red-300 font-semibold">{t('Konvensional', 'Conventional')}</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">SensusHub</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  {[
                    [t('Kode Aset', 'Asset Code'), t('Manual, rawan duplikasi', 'Manual, prone to duplicates'), t('Auto-generated, hierarkis, collision-proof', 'Auto-generated, hierarchical, collision-proof')],
                    [t('Skema Data', 'Data Schema'), t('Fixed columns, perlu developer', 'Fixed columns, needs developer'), t('Dynamic Custom Columns, admin self-service', 'Dynamic Custom Columns, admin self-service')],
                    [t('Identifikasi', 'Identification'), t('Label stiker manual', 'Manual sticker labels'), t('QR Code → Digital Twin interaktif', 'QR Code → Interactive Digital Twin')],
                    [t('Pelaporan', 'Reporting'), t('Telepon/WA manual', 'Manual phone/WA'), t('Scan QR → Form → Dashboard → PDF', 'Scan QR → Form → Dashboard → PDF')],
                    [t('Keamanan', 'Security'), t('Filter di application code', 'Filter in application code'), t('RLS di database layer (defense in depth)', 'RLS at database layer (defense in depth)')],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-3 font-medium text-white/90">{row[0]}</td>
                      <td className="p-3 text-red-200/70">{row[1]}</td>
                      <td className="p-3 text-emerald-200/90 font-medium">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Navigation */}
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

export default ProjectSensusHub;
