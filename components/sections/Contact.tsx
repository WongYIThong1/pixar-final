'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { use3DTilt } from '@/hooks/use-3d-tilt';

export default function Contact() {
  const discordCardRef = use3DTilt({ maxRotation: 10, scale: 1.05 });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 perspective-3d">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-3d">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our Discord server to discuss your project and get started
          </p>
        </div>

        <div className="flex justify-center">
          <Card 
            ref={discordCardRef} 
            className="max-w-md w-full animate-fade-in-up card-3d shadow-3d-hover transform-3d group"
          >
            <CardContent className="pt-12 pb-12 px-8 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Join Our Discord
              </h3>
              <p className="text-muted-foreground mb-8">
                Connect with us on Discord to discuss your project, ask questions, and get started on your next venture.
              </p>
              <Button 
                size="lg" 
                className="w-full group button-3d shadow-3d-hover"
                asChild
              >
                <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
                  Join Discord Server
                  <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
