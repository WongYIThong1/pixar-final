'use client';

import { useRef, useEffect, useState } from 'react';

interface Use3DTiltOptions {
  maxRotation?: number;
  perspective?: number;
  scale?: number;
}

export function use3DTilt(options: Use3DTiltOptions = {}) {
  const {
    maxRotation = 15,
    perspective = 1000,
    scale = 1.05,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxRotation;
      const rotateY = ((x - centerX) / centerX) * maxRotation;

      element.style.transform = `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
        translateZ(20px)
      `;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      element.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      element.style.transition = 'transform 0.3s ease-out';
      element.style.transform = `
        perspective(${perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        translateZ(0px)
      `;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, maxRotation, perspective, scale]);

  return ref;
}

