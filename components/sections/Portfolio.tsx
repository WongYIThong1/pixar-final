import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'E-Commerce Platform',
    description: 'Full-featured online marketplace with payment processing, inventory management, and real-time analytics.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'Web Application'
  },
  {
    name: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine features.',
    tech: ['React', 'Golang', 'PostgreSQL', 'Docker', 'AWS'],
    category: 'Enterprise Software'
  },
  {
    name: 'Real-Time Analytics Dashboard',
    description: 'Business intelligence platform with real-time data visualization, custom reporting, and predictive analytics.',
    tech: ['TypeScript', 'Python', 'FastAPI', 'Redis', 'WebSocket'],
    category: 'Data Platform'
  },
  {
    name: 'Workflow Automation Suite',
    description: 'Process automation tool that integrates with multiple platforms to streamline business operations.',
    tech: ['Next.js', 'Python', 'Celery', 'MongoDB', 'REST APIs'],
    category: 'Automation'
  },
  {
    name: 'Mobile-First SaaS Application',
    description: 'Progressive web app with offline capabilities, push notifications, and cross-platform synchronization.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PWA'],
    category: 'SaaS Platform'
  },
  {
    name: 'API Gateway & Microservices',
    description: 'Scalable microservices architecture with centralized API gateway, load balancing, and service mesh.',
    tech: ['Golang', 'Docker', 'Kubernetes', 'gRPC', 'PostgreSQL'],
    category: 'Backend Infrastructure'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing our expertise across various industries and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
