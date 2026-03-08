import { useEffect, useState, useRef } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  disabled?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'vertical', disabled = false } = options;
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Disable parallax on mobile or if user prefers reduced motion
    if (disabled || isMobile || prefersReducedMotion) {
      return;
    }

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // Only calculate parallax when element is in viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress = (scrollY + viewportHeight - elementTop) / 
            (viewportHeight + elementHeight);
          
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
          
          const yOffset = direction !== 'horizontal' 
            ? (scrollY - elementTop) * speed 
            : 0;
          
          const xOffset = direction !== 'vertical' 
            ? (scrollY - elementTop) * speed * 0.5 
            : 0;

          setOffset({ x: xOffset, y: yOffset });
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, direction, disabled, isMobile, prefersReducedMotion]);

  const transform = disabled || isMobile || prefersReducedMotion 
    ? 'translate3d(0, 0, 0)'
    : `translate3d(${offset.x}px, ${offset.y}px, 0)`;

  return { ref, transform, offset };
};
