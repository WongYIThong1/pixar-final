import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/50">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Fast. Secure. Scalable.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Full-Stack Development
            <br />
            <span className="text-primary">Made Simple</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we build secure, lightning-fast web applications
            and custom software solutions. Full-stack expertise with end-to-end service
            including hosting, domains, and ongoing maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Login
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized performance and rapid development cycles
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Secure by Default</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security built into every layer
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Full-Stack Solutions</h3>
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
