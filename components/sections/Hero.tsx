'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Layers } from 'lucide-react';
import { use3DTilt } from '@/hooks/use-3d-tilt';

export default function Hero() {
  const card1Ref = use3DTilt({ maxRotation: 10, scale: 1.05 });
  const card2Ref = use3DTilt({ maxRotation: 10, scale: 1.05 });
  const card3Ref = use3DTilt({ maxRotation: 10, scale: 1.05 });

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden perspective-3d">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/50 animate-fade-in-down shadow-3d">
            <Zap className="h-4 w-4 text-primary animate-pulse-slow" />
            <span className="text-sm font-medium">Fast. Secure. Scalable.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up animation-delay-100 text-3d">
            Full-Stack Development
            <br />
            <span className="text-primary gradient-text">Made Simple</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            From concept to deployment, we build secure, lightning-fast web applications
            and custom software solutions. Full-stack expertise with end-to-end service
            including hosting, domains, and ongoing maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up animation-delay-300">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 group button-3d shadow-3d-hover"
              asChild
            >
              <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div 
              ref={card1Ref}
              className="flex flex-col items-center gap-3 animate-fade-in-up animation-delay-400 card-3d shadow-3d-hover p-6 rounded-lg transform-3d"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized performance and rapid development cycles
              </p>
            </div>

            <div 
              ref={card2Ref}
              className="flex flex-col items-center gap-3 animate-fade-in-up animation-delay-500 card-3d shadow-3d-hover p-6 rounded-lg transform-3d"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">Secure by Default</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security built into every layer
              </p>
            </div>

            <div 
              ref={card3Ref}
              className="flex flex-col items-center gap-3 animate-fade-in-up animation-delay-600 card-3d shadow-3d-hover p-6 rounded-lg transform-3d"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">Full-Stack Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Complete end-to-end development and deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
