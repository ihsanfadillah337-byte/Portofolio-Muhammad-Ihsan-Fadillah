/**
 * ProjectShared Components
 * 
 * Komponen-komponen ini digunakan secara bersama di seluruh halaman detail proyek
 * untuk menjaga konsistensi visual dan mengikuti prinsip DRY.
 * 
 * Komponen yang tersedia:
 * - CodeBlock: Untuk menampilkan blok kode dengan syntax highlighting
 * - AsciiDiagram: Untuk menampilkan diagram arsitektur berbasis teks
 * - SectionHeading: Judul bagian utama dengan ikon opsional
 * - SubHeading: Judul sub-bagian
 * - Divider: Garis pemisah dekoratif dengan gradient
 */

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ children, language = 'typescript' }: { children: string; language?: string }) => (
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

export const AsciiDiagram = ({ children }: { children: string }) => (
  <div className="rounded-xl overflow-x-auto my-6 shadow-lg border border-slate-700/50 bg-[#1e1e2e] p-6">
    <pre className="text-[0.7rem] md:text-[0.8rem] leading-relaxed text-emerald-400 font-mono whitespace-pre">
      {children.trim()}
    </pre>
  </div>
);

export const SectionHeading = ({ icon: Icon, children, className = "", iconClassName = "text-blue-600" }: { icon?: React.ElementType; children: React.ReactNode; className?: string; iconClassName?: string }) => (
  <h2 className={`text-2xl md:text-3xl font-editorial font-bold text-foreground mb-4 flex items-center gap-3 pt-8 ${className}`}>
    {Icon && <Icon className={`w-7 h-7 flex-shrink-0 ${iconClassName}`} />}
    {children}
  </h2>
);

export const SubHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-xl md:text-2xl font-editorial font-bold text-foreground mt-8 mb-4 ${className}`}>{children}</h3>
);

export const Divider = ({ className = "from-blue-600 to-sky-400" }: { className?: string }) => (
  <div className={`w-16 h-1 bg-gradient-to-r rounded-full mb-6 ${className}`} />
);
