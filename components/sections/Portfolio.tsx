'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { FolderCheck, Users, Award, Code2 } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description?: string;
}

interface StatCardProps {
  stat: StatItem;
  index: number;
}

function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = start;
            const endValue = end;

            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
              
              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, start, hasAnimated]);

  return { count, ref, hasAnimated };
}

function StatCard({ stat, index }: StatCardProps) {
  const { count, ref, hasAnimated } = useCountUp(stat.value, 2000);

  return (
    <Card
      ref={ref}
      className="text-center hover-lift animate-fade-in-up card-3d shadow-3d-hover group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="pt-6 pb-6">
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            {stat.icon}
          </div>
          <div className="relative overflow-hidden h-12 sm:h-14 flex items-center justify-center">
            <div 
              className="text-3xl sm:text-4xl font-bold mb-2 group-hover:text-primary transition-all duration-500 ease-out"
              style={{
                transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
                opacity: hasAnimated ? 1 : 0,
              }}
            >
              {count}{stat.suffix}
            </div>
          </div>
          <div className="text-sm font-semibold mb-1">{stat.label}</div>
          {stat.description && (
            <div className="text-xs text-muted-foreground">
              {stat.description}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const stats: StatItem[] = [
  {
    icon: <FolderCheck className="h-6 w-6" />,
    value: 50,
    suffix: '+',
    label: 'Projects Done',
    description: 'Successfully completed projects'
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: 30,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Years of professional expertise'
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    value: 100,
    suffix: '%',
    label: 'Success Rate',
    description: 'Project delivery success rate'
  }
];

// GIF 图片数组 - 你可以替换为你的实际 GIF 路径
const portfolioGifs = [
  {
    src: '/portfolio/project1.gif',
    alt: 'Proxy Selling Page',
    title: 'Proxy Selling Page',
    description: 'A modern e-commerce platform for proxy services with secure payment processing, user authentication, and real-time inventory management.'
  },
  {
    src: '/portfolio/project2.gif',
    alt: 'E-Commerce Platform',
    title: 'E-Commerce Platform',
    description: 'Full-featured online marketplace with shopping cart, checkout system, order tracking, and admin dashboard for product management.'
  },
  {
    src: '/portfolio/project3.gif',
    alt: 'SaaS Dashboard',
    title: 'SaaS Dashboard',
    description: 'Comprehensive SaaS application with user management, subscription billing, analytics dashboard, and API integrations.'
  },
  {
    src: '/portfolio/project4.gif',
    alt: 'Mobile App',
    title: 'Mobile App',
    description: 'Cross-platform mobile application with offline capabilities, push notifications, and seamless cloud synchronization.'
  },
  {
    src: '/portfolio/project5.gif',
    alt: 'Admin Panel',
    title: 'Admin Panel',
    description: 'Enterprise admin panel with data visualization, user management, content management system, and reporting tools.'
  },
  {
    src: '/portfolio/project6.gif',
    alt: 'Landing Page',
    title: 'Landing Page',
    description: 'High-converting landing page with animated sections, lead capture forms, and integrated analytics for marketing campaigns.'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing our expertise across various industries and technologies
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* GIF Portfolio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioGifs.map((gif, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={gif.src}
                  alt={gif.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-center group-hover:text-primary transition-colors">
                  {gif.title}
                </h3>
                {gif.description && (
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {gif.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
