import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contacts = [
    { icon: Mail, label: 'Email', value: 'ihsanfadillah337@gmail.com', href: 'mailto:ihsanfadillah337@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad Ihsan Fadillah', href: 'https://www.linkedin.com/in/muhammad-ihsan-fadillah-327309285' },
    { icon: MapPin, label: t('Lokasi', 'Location'), value: 'Bandung, Indonesia', href: null as string | null },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman pesan
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(t('Pesan berhasil terkirim!', 'Message sent successfully!'), {
      description: t('Terima kasih telah menghubungi saya. Saya akan segera membalasnya.', 'Thank you for reaching out. I will get back to you soon.'),
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[hsl(224,76%,48%)]/8 rounded-full blur-3xl animate-glow-pulse" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('Hubungi Saya', 'Contact Me')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Info Kontak (Kiri) */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-editorial font-bold text-foreground">
                {t('Mari Berkolaborasi', "Let's Collaborate")}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {t(
                  'Saya selalu terbuka untuk diskusi mengenai manajemen aset, pengembangan sistem, atau peluang kolaborasi lainnya.',
                  'I am always open to discussing asset management, system development, or other collaboration opportunities.'
                )}
              </p>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="group">
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(217,91%,60%)]/10 to-[hsl(224,76%,48%)]/10 flex items-center justify-center border border-[rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform">
                        <contact.icon className="w-6 h-6 text-[hsl(217,91%,60%)]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[hsl(217,91%,60%)] uppercase tracking-wider">{contact.label}</h4>
                        <p className="text-sm text-foreground/80 font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(217,91%,60%)]/10 to-[hsl(224,76%,48%)]/10 flex items-center justify-center border border-[rgba(59,130,246,0.1)]">
                        <contact.icon className="w-6 h-6 text-[hsl(217,91%,60%)]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[hsl(217,91%,60%)] uppercase tracking-wider">{contact.label}</h4>
                        <p className="text-sm text-foreground/80 font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Kirim Pesan (Kanan) */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl border border-[rgba(59,130,246,0.2)] bg-white/60 backdrop-blur-md shadow-[0_20px_50px_rgba(59,130,246,0.05)] space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-1">{t('Nama Lengkap', 'Full Name')}</label>
                  <Input 
                    required 
                    placeholder="John Doe" 
                    className="rounded-xl border-[rgba(59,130,246,0.2)] focus:border-[hsl(217,91%,60%)] focus:ring-[hsl(217,91%,60%)]/20 transition-all bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-1">{t('Email', 'Email')}</label>
                  <Input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="rounded-xl border-[rgba(59,130,246,0.2)] focus:border-[hsl(217,91%,60%)] focus:ring-[hsl(217,91%,60%)]/20 transition-all bg-white/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-1">{t('Subjek', 'Subject')}</label>
                <Input 
                  required 
                  placeholder={t('Tanya tentang Proyek', 'Question about Project')} 
                  className="rounded-xl border-[rgba(59,130,246,0.2)] focus:border-[hsl(217,91%,60%)] focus:ring-[hsl(217,91%,60%)]/20 transition-all bg-white/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-1">{t('Pesan', 'Message')}</label>
                <Textarea 
                  required 
                  placeholder={t('Halo Ihsan, saya ingin berdiskusi tentang...', 'Hi Ihsan, I would like to discuss...')} 
                  className="min-h-[150px] rounded-2xl border-[rgba(59,130,246,0.2)] focus:border-[hsl(217,91%,60%)] focus:ring-[hsl(217,91%,60%)]/20 transition-all bg-white/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 rounded-2xl font-bold text-lg group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('Mengirim...', 'Sending...')}
                  </>
                ) : (
                  <>
                    {t('Kirim Pesan', 'Send Message')}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

