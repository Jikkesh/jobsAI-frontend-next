import React from 'react';
import Link from 'next/link';
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Job Categories': [
      { name: 'Remote Jobs', href: '/jobs/remote' },
      { name: 'Freshers Jobs', href: '/jobs/fresher' },
      { name: 'Internship', href: '/jobs/internship' },
      { name: 'Experienced Jobs', href: '/jobs/experienced' },
      { name: 'AI Jobs', href: '/jobs/ai' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      // { name: 'Blog', href: '/blog' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Jobs<span className="text-blue-400">AI</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect job opportunity. 
              Connect with top employers and advance your career with JobsAI.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>jobsai2001@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 8220632285</span>
              </div> */}
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors focus-ring rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} JobsAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors focus-ring rounded"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors focus-ring rounded"
              >
                Terms
              </Link>
              <Link
                href="/disclaimer"
                className="text-gray-400 hover:text-white text-sm transition-colors focus-ring rounded"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;