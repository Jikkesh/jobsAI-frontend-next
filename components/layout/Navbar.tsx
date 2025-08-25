'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Briefcase, 
  Menu, 
  X, 
  Search,
  Users,
  GraduationCap,
  MapPin,
  BookOpen,
  Mail
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      name: 'Remote Jobs',
      href: '/jobs/remote',
      icon: MapPin,
    },
    {
      name: 'Freshers',
      href: '/jobs/fresher',
      icon: Users,
    },
    {
      name: 'Internship',
      href: '/jobs/internship',
      icon: GraduationCap,
    },
    {
      name: 'Experienced Jobs',
      href: '/jobs/experienced',
      icon: Briefcase,
    },
    // {
    //   name: 'Blogs',
    //   href: '/blog',
    //   icon: BookOpen,
    // },
    {
      name: 'Contact',
      href: '/contact',
      icon: Mail,
    },
  ];

  const isActiveLink = (href: string) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Header Ad Slot */}
      {/* <div className="bg-gray-50 py-2">
        <div className="container">
          <div className="ad-slot h-16">
            Header Advertisement Slot - 728x90
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            aria-label="JobsAI Home"
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Jobs<span className="text-blue-600">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                    isActiveLink(item.href)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Search Button - Desktop */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/search"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-ring"
            >
              <Search className="h-4 w-4" />
              <span>Search Jobs</span>
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-ring"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors focus-ring ${
                      isActiveLink(item.href)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Search */}
              {/* <Link
                href="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-ring"
              >
                <Search className="h-5 w-5" />
                <span>Search Jobs</span>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;