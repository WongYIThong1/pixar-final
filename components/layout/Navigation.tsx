'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 处理 Home 链接 - 滚动到顶部
    if (href === '/' || href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      return;
    }
    
    // 处理锚点链接
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navHeight = 64; // 导航栏高度 (h-16 = 4rem = 64px)
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      
      // 关闭移动端菜单
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center group cursor-pointer">
            <span className="text-xl font-bold group-hover:text-primary transition-colors">Pixar</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              onClick={(e) => handleSmoothScroll(e, '/')}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#services" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#portfolio" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Docs <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/faq">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tos">Terms of Service</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="hover:scale-105 transition-transform duration-300 hover-lift"
              asChild
            >
              <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t animate-slide-in-down">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleSmoothScroll(e, '/')}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#portfolio')}
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/tos"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <div className="pt-4 space-y-2">
              <Button 
                className="w-full"
                asChild
              >
                <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
