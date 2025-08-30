import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jobsai.in"),
  title: {
    default: 'JobsAI | Jobs AI - Find Your Dream Job | Remote Jobs, Freshers, Internships',
    template: '%s | JobsAI'
  },
  description: 'Discover the latest job opportunities, remote work positions, fresher jobs, and internships. Get career insights through our expert blog posts and land your dream job today.',
  keywords: [
    'IT jobs India',
    'software developer jobs',
    'tech careers India',
    'fresher IT jobs',
    'internships in India',
    'remote IT jobs',
    'tech vacancies',
    'Bangalore IT jobs',
    'Chennai tech jobs',
    'engineering graduate jobs',
    'software engineer jobs',
    'IT recruitment',
    'web developer jobs India',
    'entry level IT jobs'
  ].join(', '),
  authors: [{ name: 'JobsAI Team' }],
  creator: 'JobsAI',
  publisher: 'JobsAI',
  applicationName: 'Jobs AI',
  generator: 'JobsAI',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Jobs & Career',
  classification: 'Job Portal',
  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jobsai.in',
    siteName: 'Jobs AI',
    title: 'Jobs AI | Find Freshers Jobs | Internship Opportunities | Remote Jobs in India | Career Growth in Tech',
    description: 'Discover thousands of IT job opportunities across India. The ultimate platform for freshers, experienced professionals, students seeking internships and Remote jobs in the tech industry.',
    images: [
      {
        url: 'https://jobsai.in/social/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Jobs AI - AI-Powered Job Discovery Platform. Freshers, Internships, Experienced Roles & Remote Jobs in India.',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@jobsAI_',
    creator: '@jobsAI_',
    title: 'Jobs AI | AI-Powered Job Discovery Platform | Fresher, Internship & Remote Jobs in India',
    description: 'Jobs AI is India\'s leading job platform for tech careers. Find exclusive fresher jobs, internships, experienced roles & remote jobs in the IT industry.',
    images: [
      {
        url: 'https://jobsai.in/social/twitter-card-1200x600.jpg',
        alt: 'Jobs AI - AI-Powered Job Discovery Platform. Freshers, Internships, Experienced Roles & Remote Jobs in India.',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: '6pnXEQqxSepVL3mcAKStNih3DPWVOXsJcecbdmSjVzk',
  },

  alternates: {
    languages: {
      'en-IN': 'https://jobsai.in',
    },
  },

  other: {
    'msapplication-TileColor': '#da532c',
    'msapplication-config': 'favicons/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Jobs AI',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to critical domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://partner.googleadservices.com" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" />

        {/* DNS prefetch for AdSense domains */}
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//www.google.com" />

        {/* Schema.org structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jobs AI",
              "alternateName": "JobsAI",
              "url": "https://jobsai.in",
              "logo": "https://jobsai.in/logo.png",
              "description": "Jobs AI is India's leading job platform for tech careers, offering a wide range of opportunities including fresher jobs, internships, experienced roles, and remote jobs in the IT industry.",
              "foundingDate": "2025",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8220632285",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.youtube.com/@JobsAI-30",
                "https://x.com/jobsAI_",
                "https://www.threads.com/@jobsai_",
                "https://www.instagram.com/jobsai_/?hl=en"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobBoard",
              "name": "Jobs AI",
              "url": "https://jobsai.in",
              "description": "Find the latest IT jobs, fresher positions, internships, and remote work opportunities in India",
              "provider": {
                "@type": "Organization",
                "name": "Jobs AI",
                "sameAs": "https://jobsai.in"
              }
            })
          }}
        />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        {/* Google Analytics - Using Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EG5XH5QE27"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EG5XH5QE27', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>

        {/* Performance optimization script */}
        <Script id="performance-observer" strategy="afterInteractive">
          {`
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    gtag('event', 'LCP', {
                      event_category: 'Web Vitals',
                      value: Math.round(entry.startTime),
                      non_interaction: true,
                    });
                  }
                }
              });
              observer.observe({entryTypes: ['largest-contentful-paint']});
            }
          `}
        </Script>
      </body>
    </html>
  );
}