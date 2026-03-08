import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-editorial font-bold bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-xl text-foreground/80 mb-8">
          {t('Halaman tidak ditemukan', 'Page not found')}
        </p>
        <Button asChild variant="default" className="group">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t('Kembali ke Beranda', 'Return to Home')}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
