'use client';
import React, { useEffect, useRef, ForwardedRef } from 'react';

interface SlideshowProps {
  images: { src: string; className: string }[];
}

const Slideshow = React.forwardRef<HTMLDivElement, SlideshowProps>(
  ({ images }, ref: ForwardedRef<HTMLDivElement>) => {
    const localRef = useRef<HTMLDivElement>(null);

    // Assign the forwarded ref to localRef
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(localRef.current);
      } else if (ref) {
        ref.current = localRef.current;
      }
    }, [ref]);

    useEffect(() => {
      const container = localRef.current;
      if (!container) return;

      // Initialize scroll position
      container.scrollLeft = container.scrollWidth / 3;

      const onScroll = () => {
        const third = container.scrollWidth / 3;

        // Infinite scroll boundary checks
        if (container.scrollLeft <= 1) {
          container.scrollLeft = third + 1;
        } else if (container.scrollLeft >= third * 2 - 1) {
          container.scrollLeft = third - 1;
        }
      };

      container.addEventListener('scroll', onScroll, { passive: true });
      return () => container.removeEventListener('scroll', onScroll);
    }, []);

    const tripledImages = [...images, ...images, ...images]; // For infinite scroll

    return (
      <div
        ref={localRef}
        className="overflow-x-auto whitespace-nowrap space-x-6 flex items-center scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {tripledImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Project ${idx}`}
            className={`inline-block rounded-2xl shadow-lg ${img.className}`}
          />
        ))}
      </div>
    );
  }
);

export default Slideshow;


