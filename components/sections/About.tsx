import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const techStack = [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Golang',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'Tailwind CSS',
    'GraphQL',
    'REST APIs'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building digital solutions with expertise and passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in-left hover-lift">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Full-Stack Developer & Technical Consultant</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      With over a decade of experience in software development, I specialize in creating
                      robust, scalable solutions for businesses of all sizes. From early-stage startups
                      to enterprise clients, I&apos;ve delivered projects that solve real problems and
                      drive measurable results.
                    </p>
                    <p>
                      My approach combines technical excellence with clear communication. I believe in
                      building solutions that are not only powerful and secure but also maintainable
                      and easy to understand. Every project is an opportunity to create something
                      exceptional.
                    </p>
                    <p>
                      Whether you need a complete web application, custom software, or technical
                      consulting, I provide end-to-end service that covers every aspect from initial
                      concept to ongoing support. Your success is my priority.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="animate-fade-in-right animation-delay-200 hover-lift group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">10+ Years Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Extensive experience building production systems used by thousands of users daily
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right animation-delay-400 hover-lift group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Client-Focused Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct communication, transparent pricing, and ongoing support for long-term success
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right animation-delay-600 hover-lift group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Modern Tech Stack</h4>
                    <p className="text-sm text-muted-foreground">
                      Using cutting-edge technologies and best practices for optimal performance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="animate-fade-in-up animation-delay-800 hover-lift">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-5 w-5 text-primary animate-pulse-slow" />
              <h3 className="text-xl font-semibold">Technical Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="hover:scale-110 hover:bg-primary/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
