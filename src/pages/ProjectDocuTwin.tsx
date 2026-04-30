import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, FileText, QrCode, Shield, Server, Database, BarChart3, Zap, Scan, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import screenshotLogin from '@/assets/project-docutwin-login.png';
import screenshotDashboard from '@/assets/project-docutwin-dashboard.png';
import screenshotOutbox from '@/assets/project-docutwin-outbox.png';

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

const ProjectDocuTwin = () => {
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
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-300/90 font-medium text-sm tracking-wide">Technical Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-bold text-white mb-3">DocuTwin</h1>
          <p className="text-lg md:text-xl text-blue-200/80 font-medium max-w-2xl mb-6">
            {t('Sistem Pelacakan Dokumen Phygital', 'Phygital Document Tracking System')}
          </p>
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider self-center mr-1">Role:</span>
            <span className="text-sm text-white/90 font-medium">Full-Stack Developer</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'QR Code', 'Real-time'].map(tag => (
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
              'DocuTwin membuat setiap dokumen fisik punya "kembaran digital" yang bisa dilacak secara real-time. Saat dokumen dikirim, sistem menghasilkan QR code. Saat diterima, penerima scan QR tersebut — dan sistem otomatis memverifikasi apakah dokumen sampai ke tujuan yang benar.',
              'DocuTwin gives every physical document a "digital twin" that can be tracked in real-time. When a document is sent, the system generates a QR code. When received, the recipient scans that QR — and the system automatically verifies if the document arrived at the correct destination.'
            )}
          </p>
        </div>

        {/* ========== SECTION 1: OVERVIEW ========== */}
        <SectionHeading icon={FileText}>
          {t('1. Mengapa DocuTwin Dibuat?', '1. Why DocuTwin Was Built')}
        </SectionHeading>
        <Divider />

        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Di instansi pemerintah (SKPD), ribuan surat fisik dikirim antar OPD setiap hari — surat persetujuan anggaran, verifikasi aset, surat rahasia. Masalahnya? Begitu surat keluar dari meja pengirim dan dipegang kurir, surat itu "menghilang" dari sistem. Tidak ada yang tahu surat itu sedang di mana, siapa yang menerima, dan kapan sampai.',
            'In Indonesian government agencies (SKPD), thousands of physical documents are sent between offices daily — budget approvals, asset verifications, classified letters. The problem? Once a document leaves the sender\'s desk and goes to a courier, it becomes "invisible." Nobody knows where it is, who received it, or when it arrived.'
          )}
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t('Ini menimbulkan risiko nyata:', 'This creates real risks:')}
        </p>
        <ul className="space-y-2 text-foreground/80 mb-6 list-disc list-inside">
          <li>{t('Surat terkirim ke OPD yang salah, baru ketahuan berminggu kemudian', 'Documents delivered to the wrong office, discovered weeks later')}</li>
          <li>{t('Surat hilang dan tidak ada jejak siapa yang terakhir memegang', 'Documents lost with no trail of who last held them')}</li>
          <li>{t('Surat rahasia bisa diterima oleh pihak yang bukan tujuan', 'Confidential letters could be received by the wrong party')}</li>
        </ul>

        <SubHeading>{t('Solusi: QR Code sebagai "Jembatan"', 'Solution: QR Code as the "Bridge"')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'DocuTwin menyelesaikan ini dengan konsep sederhana: setiap dokumen fisik yang dikirim mendapat QR code unik yang terhubung ke database. Saat penerima scan QR tersebut, sistem langsung mengecek — "Apakah surat ini memang ditujukan untuk OPD ini?" Jika cocok, status berubah jadi "Diterima". Jika tidak cocok, sistem langsung menolak dan mencatat kejadiannya.',
            'DocuTwin solves this with a simple concept: every physical document sent gets a unique QR code linked to a database record. When the recipient scans that QR, the system immediately checks — "Is this document actually meant for this office?" If it matches, status changes to "Received." If not, the system rejects it and logs the event.'
          )}
        </p>

        {/* ========== SECTION 2: HOW IT WORKS ========== */}
        <SectionHeading icon={QrCode}>
          {t('2. Cara Kerja Sistem', '2. How the System Works')}
        </SectionHeading>
        <Divider />

        <SubHeading>{t('Langkah 1: Kirim Dokumen (Outbox)', 'Step 1: Send Document (Outbox)')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Pengirim mengisi form pengiriman — nomor surat, tujuan OPD, nama kurir, dan tingkat urgensi. Sistem langsung meng-generate label pengiriman lengkap dengan QR code yang bisa dicetak dan ditempel di berkas fisik.',
            'The sender fills out a shipping form — document number, destination office, courier name, and urgency level. The system immediately generates a shipping label with a printable QR code to attach to the physical document.'
          )}
        </p>

        <CodeBlock language="typescript">{`// Sistem menyimpan data dokumen ke database
const { data } = await supabase
  .from("documents")
  .insert({
    document_number: "SURAT/BKAD/2026/001",
    subject: "Verifikasi Data Aset",
    destination_skpd: "Dinas Pendidikan",
    sender: "BKAD",
    courier_name: "Ahmad",
    urgency: "Biasa",
  })
  .select()
  .single();

// data.id = UUID unik → langsung jadi isi QR code`}</CodeBlock>

        {/* Screenshot: Outbox */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img src={screenshotOutbox} alt="DocuTwin Outbox" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Outbox — Label pengiriman dengan QR code yang siap cetak', 'Outbox — Shipping label with printable QR code')}</p>
        </div>

        <SubHeading>{t('Langkah 2: Terima & Scan (Inbox)', 'Step 2: Receive & Scan (Inbox)')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Saat dokumen sampai, penerima membuka halaman Inbox dan mengarahkan kamera ke QR code. Sistem langsung melakukan tiga hal: (1) baca QR, (2) cek di database, (3) cocokkan tujuan dokumen dengan OPD si penerima.',
            'When the document arrives, the recipient opens the Inbox page and points the camera at the QR code. The system instantly does three things: (1) read QR, (2) check database, (3) match the document\'s destination with the recipient\'s office.'
          )}
        </p>

        <CodeBlock language="typescript">{`// Verifikasi: apakah dokumen ini memang untuk OPD saya?
if (scannedDoc.destination_skpd === myAgency) {
  // ✅ COCOK → Status berubah jadi "Diterima"
  await updateStatus(scannedDoc.id, "Received");
  await logScan(scannedDoc, "match");
} else {
  // ❌ TIDAK COCOK → Tolak, catat kejadiannya
  await logScan(scannedDoc, "mismatch");
  showWarning("Dokumen ini bukan untuk OPD Anda!");
}`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-2">
          {t('Alur state dari setiap dokumen:', 'Every document goes through this flow:')}
        </p>
        <AsciiDiagram>{`[Dikirim]  →  [In Transit]  →  [Diterima] ✅
                              →  [Mismatch] ❌ (salah tujuan)
                              →  [Not Found] ⚠️ (QR tidak valid)`}</AsciiDiagram>

        <SubHeading>{t('Langkah 3: Pantau Semua di Dashboard', 'Step 3: Monitor Everything on Dashboard')}</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Dashboard menampilkan semua dokumen secara real-time. Super Admin bisa melihat seluruh dokumen dari semua OPD. User biasa hanya bisa melihat dokumen yang dikirim dan yang ditujukan untuk OPD mereka.',
            'The dashboard shows all documents in real-time. Super Admin can see all documents from all offices. Regular users can only see documents they sent or that are addressed to their office.'
          )}
        </p>

        {/* Screenshot: Dashboard */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img src={screenshotDashboard} alt="DocuTwin Dashboard" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Dashboard — Tracking status dokumen secara real-time', 'Dashboard — Real-time document status tracking')}</p>
        </div>

        {/* ========== SECTION 3: SECURITY ========== */}
        <SectionHeading icon={Shield}>
          {t('3. Keamanan & Kontrol Akses', '3. Security & Access Control')}
        </SectionHeading>
        <Divider />

        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(
            'Keamanan data diterapkan langsung di level database (bukan hanya di aplikasi). Artinya, walaupun seseorang memodifikasi kode aplikasi, dia tetap tidak bisa mengakses data OPD lain — karena aturannya dikunci di PostgreSQL.',
            'Data security is enforced at the database level (not just in the app). This means even if someone modifies the app code, they still can\'t access another office\'s data — because the rules are locked in PostgreSQL.'
          )}
        </p>

        <div className="grid gap-3 mb-6">
          {[
            { icon: <Users className="w-5 h-5 text-blue-600" />, title: 'Super Admin', desc: t('Bisa melihat semua dokumen dari semua OPD. Untuk pengawasan tingkat pusat.', 'Can view all documents from all offices. For central-level oversight.') },
            { icon: <Scan className="w-5 h-5 text-blue-600" />, title: t('User OPD', 'Office User'), desc: t('Hanya bisa melihat dan mengirim dokumen untuk OPD-nya sendiri. Tidak bisa mengakses data OPD lain.', 'Can only view and send documents for their own office. Cannot access other offices\' data.') },
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

        <p className="text-foreground/80 leading-relaxed mb-2">
          {t('Contoh aturan keamanan di database:', 'Example database security rules:')}
        </p>
        <CodeBlock language="sql">{`-- User OPD hanya bisa baca dokumen milik OPD-nya
CREATE POLICY "skpd_read_own" ON documents
  FOR SELECT USING (
    sender = get_user_agency(auth.uid()) 
    OR destination_skpd = get_user_agency(auth.uid())
  );

-- Super Admin bisa akses semua
CREATE POLICY "super_admin_all" ON documents
  FOR ALL USING (has_role(auth.uid(), 'super_admin'));`}</CodeBlock>

        {/* Screenshot: Login */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <div className="aspect-video overflow-hidden rounded-xl">
            <img src={screenshotLogin} alt="DocuTwin Login" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">{t('Halaman login & registrasi OPD', 'Login & office registration page')}</p>
        </div>

        {/* ========== SECTION 4: IMPACT ========== */}
        <SectionHeading icon={BarChart3}>
          {t('4. Dampak & Manfaat', '4. Impact & Benefits')}
        </SectionHeading>
        <Divider />

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Aspek', 'Aspect')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Sebelum DocuTwin', 'Before DocuTwin')}</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">{t('Sesudah DocuTwin', 'After DocuTwin')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                [t('Verifikasi Penerimaan', 'Receipt Verification'), t('Tanda tangan manual di kertas', 'Manual pen-on-paper sign-off'), t('Scan QR otomatis', 'Automatic QR scan')],
                [t('Deteksi Salah Kirim', 'Misdelivery Detection'), t('Baru ketahuan berhari/minggu kemudian', 'Discovered days/weeks later'), t('Langsung ditolak saat itu juga', 'Instantly rejected on the spot')],
                [t('Jejak Audit', 'Audit Trail'), t('Tidak ada', 'Non-existent'), t('Setiap scan tercatat permanen', 'Every scan permanently logged')],
                [t('Visibilitas Antar OPD', 'Cross-Office Visibility'), t('Harus telepon satu per satu', 'Must call each office'), t('Dashboard real-time', 'Real-time dashboard')],
                [t('Status Dokumen', 'Document Status'), t('Papan tulis manual', 'Manual whiteboard'), t('Otomatis: Pending → In Transit → Diterima', 'Automated: Pending → In Transit → Received')],
              ].map(([metric, before, after], i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-3 font-semibold text-foreground">{metric}</td>
                  <td className="p-3 text-red-600/80">{before}</td>
                  <td className="p-3 text-emerald-700 font-medium">{after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SubHeading>{t('Arsitektur yang Scalable', 'Scalable Architecture')}</SubHeading>
        <div className="grid gap-3 mb-6">
          {[
            { icon: <Server className="w-5 h-5 text-blue-600" />, title: t('Tanpa Server Sendiri', 'No Own Server'), desc: t('Semua backend ditangani Supabase — otomatis scale, tidak perlu kelola server.', 'All backend handled by Supabase — auto-scales, no server management needed.') },
            { icon: <Zap className="w-5 h-5 text-blue-600" />, title: t('Real-time via WebSocket', 'Real-time via WebSocket'), desc: t('Dashboard langsung update tanpa perlu refresh halaman — data berubah secara instan.', 'Dashboard updates instantly without page refresh — data changes in real-time.') },
            { icon: <Database className="w-5 h-5 text-blue-600" />, title: t('Multi-OPD Tanpa Ubah Kode', 'Multi-Office Without Code Changes'), desc: t('Tambah OPD baru cukup registrasi user baru, tidak perlu ubah database atau kode.', 'Adding a new office just requires a new user registration, no database or code changes.') },
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

        {/* ========== TECH STACK ========== */}
        <SectionHeading icon={Zap}>Tech Stack</SectionHeading>
        <Divider />

        <div className="rounded-2xl border-2 border-blue-200/50 bg-gradient-to-r from-blue-50 to-sky-50 p-6 md:p-8 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Frontend', value: 'React 18 · TypeScript · Vite 5 · Tailwind CSS · shadcn/ui · Framer Motion' },
              { label: 'Backend', value: 'Supabase (PostgreSQL · Auth · Realtime · Row Level Security)' },
              { label: 'QR Stack', value: 'react-qr-code · @yudiel/react-qr-scanner' },
              { label: 'DevOps', value: 'Vercel · GitHub' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-foreground/80 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-8">
          <p className="text-foreground/60 italic text-center text-sm leading-relaxed">
            {t(
              'DocuTwin membuktikan bahwa solusi enterprise paling berdampak bukan yang menggantikan kertas — tapi yang memberi kertas identitas digital.',
              'DocuTwin proves that the most impactful enterprise solutions don\'t replace paper — they give paper a digital identity.'
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

export default ProjectDocuTwin;
