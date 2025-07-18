'use client';

import Link from 'next/link';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/millionstreet', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/millionstreet', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/millionstreet', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-[#151515] border-t border-primary/10">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Logo */}
          <Link href="/">
            <img 
              src="/images/logo-million.svg" 
              alt="Million" 
              className="h-12"
            />
          </Link>

          {/* Center - Contact & CNPJ */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-gray-500">
            <p>CNPJ: 12.345.678/0001-90</p>
            <span className="hidden md:inline">•</span>
            <a href="mailto:contato@million.com.br" className="hover:text-primary transition-colors">
              contato@million.com.br
            </a>
            <span className="hidden md:inline">•</span>
            <a href="https://wa.me/5554965778874" className="hover:text-primary transition-colors">
              (54) 9657-8874
            </a>
          </div>

          {/* Right side - Social & Credits */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-3 h-3" />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-4 bg-gray-700"></div>

            {/* Agency Credit */}
            <p className="hidden md:block text-xs text-gray-500">
              Desenvolvido por{' '}
              <a 
                href="https://amage.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                amage
              </a>
            </p>
          </div>
        </div>

        {/* Mobile only - Agency credit */}
        <p className="md:hidden text-center mt-4 text-xs text-gray-500">
          Desenvolvido por{' '}
          <a 
            href="https://amage.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            amage
          </a>
        </p>
      </div>
    </footer>
  );
}