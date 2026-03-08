import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const contacts = [
    { icon: Mail, label: 'Email', value: 'ihsanfadillah337@gmail.com', href: 'mailto:ihsanfadillah337@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad Ihsan Fadillah', href: 'https://www.linkedin.com/in/muhammad-ihsan-fadillah-327309285' },
    { icon: MapPin, label: t('Lokasi', 'Location'), value: 'Bandung, Indonesia', href: null as string | null },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[hsl(224,76%,48%)]/8 rounded-full blur-3xl animate-glow-pulse" />
      
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-4xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-3 text-center uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('Kontak', 'Contact')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] mx-auto mb-12 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-6 rounded-2xl border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)]/20 to-[hsl(224,76%,48%)]/20 flex items-center justify-center mx-auto mb-4 border border-[rgba(59,130,246,0.2)] group-hover:border-[rgba(59,130,246,0.4)] shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all">
                    <contact.icon className="w-6 h-6 text-[hsl(217,91%,60%)]" />
                  </div>
                  <h3 className="font-editorial font-semibold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-sm text-foreground/80 break-all">{contact.value}</p>
                </a>
              ) : (
                <div className="block p-6 rounded-2xl border border-[rgba(59,130,246,0.15)] bg-white/40 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)]/20 to-[hsl(224,76%,48%)]/20 flex items-center justify-center mx-auto mb-4 border border-[rgba(59,130,246,0.2)] shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <contact.icon className="w-6 h-6 text-[hsl(217,91%,60%)]" />
                  </div>
                  <h3 className="font-editorial font-semibold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-sm text-foreground/80">{contact.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
