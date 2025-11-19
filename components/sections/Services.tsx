import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Code, Server, Shield, Wrench, Rocket, Smartphone, Workflow } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Website Development</CardTitle>
              <CardDescription className="text-base">
                Complete all-inclusive website solution from start to finish
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our website development service is a comprehensive, end-to-end solution that handles
                every aspect of bringing your online presence to life. You get a complete package with
                no hidden surprises.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Design & Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom website design, frontend development with modern frameworks, and robust
                      backend systems tailored to your specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Server className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hosting & Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional hosting setup with reliable uptime. Hosting fees are transparently
                      included in your monthly maintenance plan, covering server costs, bandwidth, and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Domain Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete domain service including purchase assistance, DNS configuration, SSL
                      certificates, and ongoing domain management to keep your site secure and accessible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Security Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in security from the ground up including SSL encryption, secure authentication,
                      DDoS protection, and regular security audits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Deployment & Launch</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless deployment process with testing, optimization, and go-live support to
                      ensure a smooth launch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Maintenance</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular updates, security patches, performance monitoring, backup management,
                      and technical support to keep your site running smoothly 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium">
                  Everything is included in one transparent pricing structure. No surprises, no hidden fees.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Software Development</CardTitle>
              <CardDescription className="text-base">
                Custom software solutions built for scalability and performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Transform your business processes with custom software designed specifically for your
                unique requirements. We build scalable, secure solutions that grow with your business.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Software Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Bespoke software solutions designed from the ground up to match your exact business
                      logic, workflows, and requirements. Desktop, web, or cloud-based applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Server className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">API Development & Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      RESTful and GraphQL APIs built to modern standards. Seamless third-party integrations
                      with payment gateways, CRMs, analytics platforms, and more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Workflow className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Process Automation</h4>
                    <p className="text-sm text-muted-foreground">
                      Automate repetitive tasks, streamline workflows, and reduce manual errors with
                      intelligent automation solutions that save time and increase efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile Compatibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Responsive designs that work flawlessly across all devices. Progressive web apps
                      or native mobile applications when needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure-by-Default Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Security is never an afterthought. Every application is built with industry-standard
                      encryption, authentication, authorization, and data protection from day one.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Scalability Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Architecture designed to scale with your growth. From handling hundreds to millions
                      of users, your software adapts to demand without requiring complete rewrites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium">
                  Every project includes comprehensive testing, documentation, and deployment support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
