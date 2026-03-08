import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowUp, FileText, QrCode, Shield, Server, Scan, Database, BarChart3, Zap } from 'lucide-react';
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
      customStyle={{
        margin: 0,
        padding: '1.5rem',
        fontSize: '0.8125rem',
        lineHeight: '1.7',
        borderRadius: 0,
        background: '#1e1e2e',
      }}
      wrapLongLines
    >
      {children.trim()}
    </SyntaxHighlighter>
  </div>
);

const AsciiDiagram = ({ children }: { children: string }) => (
  <div className="rounded-xl overflow-x-auto my-6 shadow-lg border border-slate-700/50 bg-[#1e1e2e] p-6">
    <pre className="text-[0.75rem] md:text-[0.8125rem] leading-relaxed text-emerald-400 font-mono whitespace-pre">
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

const Badge = ({ children }: { children: string }) => (
  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/50">
    {children}
  </span>
);

const ProjectDocuTwin = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC]">
      <Navbar />

      {/* Hero Section */}
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
            Phygital Document Tracking System
          </p>
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider self-center mr-1">Role:</span>
            <span className="text-sm text-white/90 font-medium">Full-Stack Developer & System Architect</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React', 'TypeScript', 'Supabase', 'PostgreSQL RLS', 'QR Protocol', 'Real-time WebSocket'].map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* ========== SECTION 1: OVERVIEW ========== */}
        <SectionHeading icon={FileText}>1. Project Overview & The "Phygital" Concept</SectionHeading>
        <Divider />

        <SubHeading>The Problem</SubHeading>
        <div className="prose prose-slate max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-4">
            In Indonesian government institutions (SKPD — <em>Satuan Kerja Perangkat Daerah</em>), thousands of physical documents are sent between agencies daily — budget approvals, asset verification letters, classified correspondence. While digital systems exist to <em>catalog</em> these documents, they suffer from a critical blind spot: <strong>the physical chain-of-custody</strong>.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Once a document leaves the sender's desk and enters the hands of a courier, it becomes invisible. There is no tracking, no verification at destination, and no audit trail proving <em>who received what, when, and from whom</em>. This creates several real-world risks:
          </p>
          <ul className="space-y-2 text-foreground/80 mb-6 list-disc list-inside">
            <li><strong>Misdelivery</strong> — A courier delivers a document to the wrong agency. Without verification, it gets filed and the error is only discovered weeks later.</li>
            <li><strong>Accountability Gaps</strong> — When documents go missing, there is no forensic trail to establish where the chain of custody broke.</li>
            <li><strong>Classification Breaches</strong> — Confidential (Rahasia) documents have no mechanism to prevent wrong-party receipt.</li>
          </ul>
        </div>

        <SubHeading>The Solution: Digital Twins for Physical Assets</SubHeading>
        <div className="prose prose-slate max-w-none">
          <p className="text-foreground/80 leading-relaxed mb-4">
            <strong>DocuTwin</strong> solves this by creating a <em>digital twin</em> — a real-time digital replica of every physical document's lifecycle. The concept of "phygital" (physical + digital) is realized through a <strong>QR Code-based handshake protocol</strong>: every outgoing physical document is bound to a UUID-tracked database record, and the physical receipt at the destination is validated through a camera-based QR scan that executes server-side verification logic.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">The system guarantees that:</p>
          <ol className="space-y-2 text-foreground/80 mb-6 list-decimal list-inside">
            <li>Every physical document has a 1:1 digital counterpart tracked in real-time.</li>
            <li>Receipt is <strong>verified programmatically</strong> — not by human confirmation.</li>
            <li>A document intended for Agency A <strong>cannot</strong> be marked as received by Agency B — the system auto-rejects mismatches.</li>
            <li>Every scan event (match or mismatch) is logged to an immutable <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">scan_logs</code> audit trail.</li>
          </ol>
        </div>

        {/* ========== SECTION 2: TECH STACK ========== */}
        <SectionHeading icon={Server}>2. Tech Stack & Architecture</SectionHeading>
        <Divider />

        <SubHeading>Stack Composition</SubHeading>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Layer</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Technology</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Frontend Framework', 'React 18 + TypeScript', 'Component-driven SPA with strict typing'],
                ['Build Tooling', 'Vite 5 (SWC)', 'Sub-second HMR, optimized production builds'],
                ['UI Components', 'shadcn/ui + Radix UI', 'Accessible, composable headless components'],
                ['Styling', 'Tailwind CSS 3 + CSS Custom Properties', 'Design token system with HSL-based theme variables'],
                ['Animation', 'Framer Motion 12', 'Physics-based transitions for scan feedback'],
                ['Backend-as-a-Service', 'Supabase (PostgreSQL 14+)', 'Auth, database, real-time subscriptions, RLS'],
                ['QR Generation', 'react-qr-code', 'Client-side SVG QR encoding bound to UUIDs'],
                ['QR Scanning', '@yudiel/react-qr-scanner', 'Camera-based barcode detection'],
                ['Routing', 'React Router DOM 6', 'Protected routes with auth-gated layouts'],
                ['State Management', 'React Context + useState/useMemo', 'Lightweight, no external state library'],
                ['Date Utilities', 'date-fns 3', 'Tree-shakable date formatting'],
              ].map(([layer, tech, role], i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-3 font-semibold text-foreground whitespace-nowrap">{layer}</td>
                  <td className="p-3 text-foreground/80 font-mono text-xs">{tech}</td>
                  <td className="p-3 text-foreground/70">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SubHeading>Client-Server Architecture</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-2">
          DocuTwin uses a <strong>serverless-first</strong> architecture. There is no traditional backend server — all server-side logic is handled by Supabase:
        </p>

        <AsciiDiagram>{`┌─────────────────────────────┐
│       React SPA (Vite)      │
│  ┌───────────┐ ┌──────────┐ │
│  │  Outbox   │ │  Inbox   │ │
│  │ (QR Gen)  │ │(QR Scan) │ │
│  └─────┬─────┘ └────┬─────┘ │
│        │             │       │
│  ┌─────▼─────────────▼─────┐ │
│  │  Supabase JS Client     │ │
│  │  (supabase-js v2.98)    │ │
│  └─────────────┬───────────┘ │
└────────────────│─────────────┘
                 │ HTTPS + WebSocket
                 ▼
┌────────────────────────────────┐
│     Supabase Cloud Platform    │
│  ┌──────────────────────────┐  │
│  │   PostgreSQL Database    │  │
│  │  ┌────────┐ ┌─────────┐ │  │
│  │  │  RLS   │ │Functions│ │  │
│  │  │Policies│ │(has_role│ │  │
│  │  │        │ │get_user │ │  │
│  │  │        │ │_agency) │ │  │
│  │  └────────┘ └─────────┘ │  │
│  └──────────────────────────┘  │
│  ┌──────────┐ ┌─────────────┐  │
│  │  Auth    │ │  Realtime   │  │
│  │ (GoTrue) │ │  (WebSocket)│  │
│  └──────────┘ └─────────────┘  │
└────────────────────────────────┘`}</AsciiDiagram>

        <p className="text-foreground/80 leading-relaxed mb-2">Key architectural decisions:</p>
        <ul className="space-y-2 text-foreground/80 mb-6 list-disc list-inside">
          <li><strong>No REST API layer</strong>: The Supabase client communicates directly with PostgreSQL via PostgREST, eliminating a custom API server.</li>
          <li><strong>Real-time via WebSocket channels</strong>: Dashboard data is kept fresh through Supabase Realtime subscriptions, not polling.</li>
          <li><strong>Security at the database layer</strong>: Business logic constraints are enforced via Row Level Security (RLS) policies and PostgreSQL functions — not application code.</li>
        </ul>

        {/* ========== SECTION 3: DEEP DIVE ========== */}
        <SectionHeading icon={QrCode}>3. Deep Dive: Key Technical Implementations</SectionHeading>
        <Divider />

        <SubHeading>3.1 Dynamic QR Generation (Digital Twin Binding)</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-2">
          When a user registers an outgoing document via the <strong>Outbox</strong> page, the system creates a database record and binds the auto-generated PostgreSQL UUID to a QR code:
        </p>

        <CodeBlock language="typescript">{`// Outbox.tsx — Document registration
const { data, error } = await supabase
  .from("documents")
  .insert({
    document_number: docNumber.trim(),
    subject: subject.trim(),
    destination_skpd: destination,
    sender: agencyName ?? "BKAD",
    pic_sender: picSender.trim() || null,
    courier_name: courierName.trim() || null,
    physical_description: physicalDesc.trim() || null,
    urgency,
  })
  .select()
  .single();`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-2">
          The <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">.select().single()</code> chain is critical — it returns the full row <em>including the server-generated UUID</em> (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">data.id</code>). This UUID is then immediately rendered as a QR code:
        </p>

        <CodeBlock language="tsx">{`// The UUID becomes the QR payload
<QRCode value={generatedDoc.id} size={140} level="M" />
<p className="font-mono select-all">{generatedDoc.id}</p>`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-4">
          The system produces a <strong>printable shipping label</strong> (print-optimized via <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">print:</code> Tailwind variants) containing the destination agency, chain-of-custody metadata, urgency classification badge, and the QR code linked to the document's database UUID. This label is physically attached to the document — the QR code is the bridge between the physical asset and its digital twin.
        </p>

        {/* Screenshot: Outbox */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <img src={screenshotOutbox} alt="DocuTwin Outbox — Tracking Ticket with QR Code" className="w-full h-auto rounded-xl" loading="lazy" />
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">Outbox — Generated Tracking Ticket with QR Code bound to document UUID</p>
        </div>

        <SubHeading>3.2 Two-Way Dashboard & Real-time State Machine</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-2">
          The Dashboard implements a <strong>dual-perspective data model</strong> with real-time synchronization:
        </p>

        <CodeBlock language="typescript">{`// Dashboard.tsx — Real-time subscription
useEffect(() => {
  fetchDocuments();
  
  const channel = supabase
    .channel("documents-realtime")
    .on("postgres_changes", 
      { event: "*", schema: "public", table: "documents" }, 
      () => { fetchDocuments(); }
    )
    .subscribe();

  return () => { supabase.removeChannel(channel); };
}, []);`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-4">
          This establishes a persistent WebSocket connection that listens for <strong>any</strong> change (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">INSERT</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">UPDATE</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">DELETE</code>) on the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">documents</code> table and triggers a full data refresh.
        </p>

        <p className="text-foreground/80 leading-relaxed mb-2 font-semibold">Data partitioning by role:</p>
        <CodeBlock language="typescript">{`const isSuperAdmin = role === "super_admin";
const incoming = documents.filter(d => d.destination_skpd === agencyName);
const outgoing = documents.filter(d => d.sender === agencyName);`}</CodeBlock>

        <ul className="space-y-2 text-foreground/80 mb-6 list-disc list-inside">
          <li><strong>Super Admin</strong>: Sees all documents across all agencies in a single flat table.</li>
          <li><strong>SKPD User</strong>: Sees two tabs — "Incoming Expected" and "Outgoing".</li>
        </ul>

        <p className="text-foreground/80 leading-relaxed mb-2 font-semibold">Active vs. Archive separation:</p>
        <CodeBlock language="typescript">{`// Main table filters to active documents only
documents.filter(d => d.status !== "Received")

// Metric cards compute against the FULL dataset
const totalDocs = documents.length;
const inTransit = documents.filter(d => d.status === "In Transit").length;
const received = documents.filter(d => d.status === "Received").length;
const warnings = documents.filter(d => 
  d.status === "Mismatch Warning" || d.status === "Wrong Delivery"
).length;`}</CodeBlock>

        {/* Screenshot: Dashboard */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <img src={screenshotDashboard} alt="DocuTwin Dashboard — Real-time document tracking" className="w-full h-auto rounded-xl" loading="lazy" />
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">Dashboard — Super Admin view with metric cards, search/filter, and real-time document table</p>
        </div>

        <SubHeading>3.3 The "Handshake" Protocol (Camera Scanner & Verification)</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          The <strong>Inbox</strong> page implements the core "phygital handshake" — the moment where the physical document meets its digital twin:
        </p>

        <p className="text-foreground/80 leading-relaxed mb-2 font-semibold">Step 1: QR Decode & UUID Validation</p>
        <CodeBlock language="typescript">{`const handleDetected = useCallback(async (rawValue: string) => {
  if (processingRef.current || paused) return;

  const trimmed = rawValue.trim();
  // Strict UUID v4 format validation
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(trimmed)) 
    return;

  processingRef.current = true;
  setPaused(true);
  setScanState("scanning");`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-4">
          The scanner uses a <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">processingRef</code> (React ref, not state) to prevent race conditions during the async database lookup. A 4-second cooldown prevents accidental re-scans.
        </p>

        <p className="text-foreground/80 leading-relaxed mb-2 font-semibold">Step 2: Database Lookup</p>
        <CodeBlock language="typescript">{`const { data: doc, error } = await supabase
  .from("documents")
  .select("*")
  .eq("id", trimmed)
  .maybeSingle();`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-2 font-semibold">Step 3: Destination Matching (The Handshake)</p>
        <CodeBlock language="typescript">{`if (scannedDoc.destination_skpd === agencyName) {
  // ✅ MATCH — Update status and log success
  await supabase.from("documents")
    .update({ status: "Received" })
    .eq("id", scannedDoc.id);
  await logScan(scannedDoc, "match");
} else {
  // ❌ MISMATCH — Log rejection, alert user
  await logScan(scannedDoc, "mismatch");
  // ... Mismatch dialog
}`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-4">
          This is the critical business logic: the system compares <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">scannedDoc.destination_skpd</code> (the intended destination) against <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">agencyName</code> (the authenticated user's agency). If they don't match, the document <strong>cannot</strong> be accepted — it is a wrong delivery.
        </p>

        <SubHeading>3.4 Automated Mismatch Rejection Logic</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-2">When a mismatch is detected, the system:</p>
        <ol className="space-y-2 text-foreground/80 mb-4 list-decimal list-inside">
          <li><strong>Does NOT update the document status</strong> — It remains "In Transit", preserving the correct state machine.</li>
          <li><strong>Logs the mismatch event</strong> to the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">scan_logs</code> table with forensic metadata:</li>
        </ol>

        <CodeBlock language="typescript">{`const logScan = async (doc: ScannedDoc, result: "match" | "mismatch") => {
  await supabase.from("scan_logs").insert({
    document_id: doc.id,
    scanned_by: user?.id,
    scanner_agency: agencyName ?? "Unknown",
    expected_agency: doc.destination_skpd,
    result,
  });
};`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-2">The scan state machine:</p>
        <AsciiDiagram>{`idle → scanning → verified (match)
                → mismatch  (wrong destination)
                → error     (UUID not found in DB)`}</AsciiDiagram>

        <p className="text-foreground/80 leading-relaxed mb-4">
          Each state triggers distinct visual feedback — spinner overlay during lookup, green checkmark with spring animation on match, red X-circle with warning dialog on mismatch — all implemented via Framer Motion's <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">AnimatePresence</code>.
        </p>

        {/* Screenshot: Login */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 my-8 border border-slate-200">
          <img src={screenshotLogin} alt="DocuTwin Login — Authentication & SKPD Registration" className="w-full h-auto rounded-xl" loading="lazy" />
          <p className="text-center text-xs text-foreground/60 mt-2 pb-1">Authentication — Sign In & SKPD Registration with agency-scoped access</p>
        </div>

        {/* ========== SECTION 4: DATABASE ========== */}
        <SectionHeading icon={Database}>4. Database Schema & Security (RBAC & RLS)</SectionHeading>
        <Divider />

        <SubHeading>PostgreSQL Schema</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-2">
          The Supabase PostgreSQL database consists of four core tables and two server-side functions:
        </p>

        <AsciiDiagram>{`┌──────────────────────┐     ┌─────────────────────┐
│      documents       │     │      profiles        │
├──────────────────────┤     ├─────────────────────┤
│ id          UUID PK  │     │ id       UUID PK/FK │
│ document_number TEXT │     │ agency_name    TEXT  │
│ subject         TEXT │     │ role           TEXT  │
│ sender          TEXT │     │ created_at TIMESTAMPTZ│
│ destination_skpd TEXT│     └─────────────────────┘
│ status          TEXT │
│ urgency         TEXT │     ┌─────────────────────┐
│ pic_sender      TEXT │     │     user_roles       │
│ courier_name    TEXT │     ├─────────────────────┤
│ physical_description │     │ id       UUID PK    │
│                 TEXT │     │ user_id  UUID FK    │
│ created_at TIMESTAMPTZ│    │ role     app_role   │
│ updated_at TIMESTAMPTZ│    │         (ENUM)      │
└──────────┬───────────┘     └─────────────────────┘
           │
           │ FK: document_id
           ▼
┌──────────────────────┐
│      scan_logs       │
├──────────────────────┤
│ id            UUID PK│
│ document_id   UUID FK│
│ scanned_by    UUID   │
│ scanner_agency  TEXT │
│ expected_agency TEXT │
│ result          TEXT │
│ created_at TIMESTAMPTZ│
└──────────────────────┘

ENUM app_role: 'super_admin' | 'skpd_user'

FUNCTIONS:
  get_user_agency(_user_id UUID) → TEXT
  has_role(_user_id UUID, _role app_role) → BOOLEAN`}</AsciiDiagram>

        <SubHeading>Role-Based Access Control (RBAC)</SubHeading>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Role</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Scope</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Capabilities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="p-3 font-mono text-sm font-semibold text-foreground">super_admin</td>
                <td className="p-3 text-foreground/80">Global</td>
                <td className="p-3 text-foreground/70">View all documents across all agencies, full system oversight</td>
              </tr>
              <tr className="hover:bg-blue-50/30 transition-colors">
                <td className="p-3 font-mono text-sm font-semibold text-foreground">skpd_user</td>
                <td className="p-3 text-foreground/80">Agency-scoped</td>
                <td className="p-3 text-foreground/70">View/send documents for own agency only, scan incoming for own agency</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-2">Role resolution during authentication follows a <strong>fallback chain</strong>:</p>
        <CodeBlock language="typescript">{`// useAuth.tsx — fetchProfile()
const { data: roleData } = await supabase
  .from("user_roles")
  .select("role")
  .eq("user_id", userId)
  .maybeSingle();
setRole((roleData?.role as "super_admin" | "skpd_user") ?? "skpd_user");`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-4">
          If no role is found in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">user_roles</code>, the system defaults to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">skpd_user</code> — following the principle of <strong>least privilege</strong>.
        </p>

        <p className="text-foreground/80 leading-relaxed mb-2">Agency name resolution similarly uses a fallback chain:</p>
        <CodeBlock language="typescript">{`// 1. Try JWT user_metadata (set during sign-up)
const metaAgency = metadata?.agency_name;
if (metaAgency) {
  setAgencyName(metaAgency);
} else {
  // 2. Fall back to profiles table lookup
  const { data: profileData } = await supabase
    .from("profiles")
    .select("agency_name")
    .eq("id", userId)
    .maybeSingle();
  setAgencyName(profileData?.agency_name ?? null);
}`}</CodeBlock>

        <SubHeading>Row Level Security (RLS)</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Security enforcement happens at the <strong>database layer</strong>, not the application layer. Supabase RLS policies ensure that even if the frontend code were compromised, unauthorized data access is impossible.
        </p>
        <ul className="space-y-2 text-foreground/80 mb-4 list-disc list-inside">
          <li><strong><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">has_role(_user_id, _role)</code></strong>: Returns <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">true</code> if the user has the specified role — used in RLS policies to grant Super Admin global access.</li>
          <li><strong><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">get_user_agency(_user_id)</code></strong>: Returns the user's agency_name — used in RLS policies to scope data access.</li>
        </ul>

        <CodeBlock language="sql">{`-- Super Admin: full access
CREATE POLICY "super_admin_all_access" ON documents
  FOR ALL USING (has_role(auth.uid(), 'super_admin'));

-- SKPD User: can read documents where they are sender or destination
CREATE POLICY "skpd_read_own" ON documents
  FOR SELECT USING (
    sender = get_user_agency(auth.uid()) 
    OR destination_skpd = get_user_agency(auth.uid())
  );

-- SKPD User: can insert documents as sender
CREATE POLICY "skpd_insert_own" ON documents
  FOR INSERT WITH CHECK (
    sender = get_user_agency(auth.uid())
  );

-- SKPD User: can update status when they are the destination
CREATE POLICY "skpd_update_status" ON documents
  FOR UPDATE USING (
    destination_skpd = get_user_agency(auth.uid())
  );`}</CodeBlock>

        <p className="text-foreground/80 leading-relaxed mb-4">
          This architecture ensures <strong>data isolation between agencies</strong> is enforced at the PostgreSQL level — every query is automatically filtered by the database engine before results are returned to the client.
        </p>

        {/* ========== SECTION 5: IMPACT ========== */}
        <SectionHeading icon={BarChart3}>5. Business Impact & Scalability</SectionHeading>
        <Divider />

        <SubHeading>Operational Impact</SubHeading>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Metric</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">Before DocuTwin</th>
                <th className="text-left p-3 font-bold text-foreground border-b border-slate-200">After DocuTwin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Delivery Verification', 'Manual sign-off (pen on paper)', 'Automated QR-based handshake'],
                ['Mismatch Detection', 'Discovered days/weeks later', 'Instant automated rejection'],
                ['Audit Trail', 'Non-existent', 'Immutable scan_logs with forensic metadata'],
                ['Cross-Agency Visibility', 'Phone calls between agencies', 'Real-time dashboard for all stakeholders'],
                ['Document Status Tracking', 'Manual status board', 'Automated lifecycle: Pending → In Transit → Received'],
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

        <SubHeading>Architectural Scalability</SubHeading>
        <ul className="space-y-3 text-foreground/80 mb-6 list-disc list-inside">
          <li><strong>Serverless Backend</strong>: Supabase auto-scales database connections and auth sessions. No server provisioning required.</li>
          <li><strong>Real-time Efficiency</strong>: WebSocket subscriptions replace polling — reducing network overhead from O(n) requests to O(1) persistent connections per client.</li>
          <li><strong>Row Level Security at Scale</strong>: RLS policies are evaluated by the PostgreSQL query planner, not application code — performance scales with database indexing.</li>
          <li><strong>Stateless Frontend</strong>: Each React client maintains its own session via JWT tokens stored in localStorage with auto-refresh.</li>
          <li><strong>Multi-Tenancy Ready</strong>: The agency-scoped architecture supports unlimited agencies without schema changes — adding a new SKPD requires only a new user registration.</li>
        </ul>

        <SubHeading>Immutable Audit Trail</SubHeading>
        <p className="text-foreground/80 leading-relaxed mb-2">
          The <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-700">scan_logs</code> table creates a permanent forensic record of every scan event:
        </p>

        <AsciiDiagram>{`scan_logs: {
  document_id  → which document was scanned
  scanned_by   → which user performed the scan (auth UID)
  scanner_agency → the agency of the scanner
  expected_agency → the intended destination
  result       → "match" or "mismatch"
  created_at   → timestamp
}`}</AsciiDiagram>

        <p className="text-foreground/80 leading-relaxed mb-4">
          This data is <strong>append-only</strong> — scan logs are inserted, never updated or deleted. Combined with Supabase's built-in audit capabilities, this provides a tamper-evident chain-of-custody record suitable for government compliance requirements.
        </p>

        <SubHeading>Future Extension Points</SubHeading>
        <ul className="space-y-3 text-foreground/80 mb-6 list-disc list-inside">
          <li><strong>Mobile App (Capacitor)</strong>: The React SPA can be wrapped into a native Android/iOS shell with minimal code changes.</li>
          <li><strong>Multi-Region Deployment</strong>: Supabase supports read replicas and edge functions for regional distribution.</li>
          <li><strong>Workflow Automation</strong>: PostgreSQL triggers can send notifications on status transitions.</li>
          <li><strong>Analytics Dashboard</strong>: The scan_logs and documents tables provide rich data for operational analytics.</li>
        </ul>

        {/* ========== TECHNOLOGY SUMMARY ========== */}
        <SectionHeading icon={Zap}>Technology Summary</SectionHeading>
        <Divider />

        <div className="rounded-2xl border-2 border-blue-200/50 bg-gradient-to-r from-blue-50 to-sky-50 p-6 md:p-8 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Frontend', value: 'React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · shadcn/ui · Framer Motion' },
              { label: 'Backend', value: 'Supabase (PostgreSQL · Auth/GoTrue · Realtime · RLS)' },
              { label: 'QR Stack', value: 'react-qr-code (generation) · @yudiel/react-qr-scanner (scanning)' },
              { label: 'DevOps', value: 'Vercel (deployment) · GitHub (source control)' },
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
            DocuTwin demonstrates that the most impactful enterprise solutions often bridge physical and digital worlds — not by replacing paper, but by giving paper a digital identity.
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
