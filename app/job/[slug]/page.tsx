/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Building2,
  Calendar,
  Users,
  ExternalLink,
  Share2,
  Bookmark,
  ChevronRight,
  GraduationCap,
  Banknote,
  CheckCircle
} from 'lucide-react';
import AdSlot from '@/components/ads/AdSlot';
import Sidebar from '@/components/layout/Sidebar';
import { Metadata } from 'next';

// API Call to Get Job By ID
import { axiosJobsApi as jobsApi } from '@/lib/jobs-api';
import JobLogo from '@/components/jobLogo/JobLogo';
import { getPostalCodeByCity, isSpecified } from '@/lib/utils';

//Make API call to get job
const GetJobById = async (id: string) => {
  try {
    const response = await jobsApi.getJobById(id);
    return response;
  } catch (error) {
    console.error('Error fetching job by ID:', error);
    throw error;
  }
};

interface Props {
  params: {
    slug: string;
  };
}

// Helper function to strip HTML tags
const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '');
};

// Helper function to parse HTML content to array
const parseHtmlToArray = (html: string): string[] => {
  const listItems = html.match(/<li[^>]*>(.*?)<\/li>/g);
  if (listItems) {
    return listItems.map(item => stripHtmlTags(item).trim());
  }
  return [];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job: any = await GetJobById(params.slug);

  if (!job) {
    return {
      title: 'Job Not Found',
      icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
      },
    };
  }

  const cleanDescription = stripHtmlTags(job.job_description);

  return {
    title: `${job.job_role} at ${job.company_name} | JobsAI`,
    description: `${job.job_role} position at ${job.company_name} - ${job.city}, ${job.state}, ${job.category}. Salary: ${job.salary_package}. Apply now!`,
    keywords: `${job.job_role}, ${job.company_name}, ${job.city}, ${job.state}, ${job.category}, jobs, careers, internship`,
    authors: [{ name: 'JobsAI Team' }],
    // Add favicon configuration
    icons: {
      icon: [
        { url: 'favicons/favicon.ico' },
        { url: 'favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: 'favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      shortcut: 'favicons/favicon.ico',
      apple: [
        { url: 'favicons/apple-touch-icon.png' },
        { url: 'favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
      ],
      other: [
        { rel: 'mask-icon', url: 'favicons/safari-pinned-tab.svg', color: '#2563eb' },
      ],
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://jobsai.in/jobs/${job.job_slug}`,
      siteName: 'JobsAI',
      title: `${job.job_role} at ${job.company_name}`,
      description: `${job.job_role} position at ${job.company_name} - ${job.city}, ${job.state}, ${job.category}. Salary: ${job.salary_package}.`,
      images: [
        {
          url: `https://logo.clearbit.com/${job.company_name}.com`,
          width: 1200,
          height: 630,
          alt: `${job.company_name} - ${job.job_role}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@jobsai',
      creator: '@jobsai',
    },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const job: any = await GetJobById(params.slug);

  if (!job) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getJobTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'fresher':
        return 'bg-green-100 text-green-700';
      case 'internship':
        return 'bg-yellow-100 text-yellow-700';
      case 'remote':
        return 'bg-purple-100 text-purple-700';
      case 'contract':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const cityState = [job.city, job.state].filter(isSpecified).join(', ');

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": job.job_role,
            "description": stripHtmlTags(job.job_description),
            "identifier": {
              "@type": "PropertyValue",
              "name": job.company_name,
              "value": job.job_slug.toString()
            },
            "datePosted": job.posted_on,
            // Add validThrough - set to 60 days from posted date
            "validThrough": new Date(new Date(job.posted_on).getTime() + 60 * 24 * 60 * 60 * 1000).toISOString(),
            "employmentType": job.category.toUpperCase(),
            "hiringOrganization": {
              "@type": "Organization",
              "name": job.company_name,
              "sameAs": job.website_link,
              "logo": `https://logo.clearbit.com/${job.company_name}.com`
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": job.city,
                "addressRegion": job.state,
                "addressCountry": "IN",
                "postalCode": getPostalCodeByCity(job.city, job.state),
                "streetAddress": job.city + ", " + job.state
              }
            },
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": {
                "@type": "QuantitativeValue",
                "value": job.salary_package,
                "unitText": "YEAR"
              }
            },
            "qualifications": stripHtmlTags(job.qualification),
            "responsibilities": stripHtmlTags(job.key_responsibility),
            "occupationalCategory": job.job_role
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Company Logo & Basic Info */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
                      <JobLogo
                        src={`https://logo.clearbit.com/${job.company_name}.com`}
                        alt={`${job.company_name} logo`}
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {job.job_role}
                    </h1>
                    <div className="flex items-center space-x-4 mb-4">
                      <Link
                        href={`/company/${job.company_name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {job.company_name}
                      </Link>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getJobTypeColor(job.category)}`}>
                        {job.category}
                      </span>
                    </div>

                    {/* Job Meta */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      {cityState && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{cityState}</span>
                        </div>
                      )}
                      {isSpecified(job.salary_package) && (
                        <div className="flex items-center gap-2">
                          <Banknote className="h-4 w-4" />
                          <span>{job.salary_package}</span>
                        </div>
                      )}

                      {isSpecified(job.posted_on) && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Posted {formatDate(job.posted_on)}</span>
                        </div>
                      )}

                      {isSpecified(job.experience) && (
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                      )}

                      {isSpecified(job.batch) && (
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          <span>{job.batch}</span>
                        </div>
                      )}

                      {job.is_fresher && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>Fresher Friendly</span>
                        </div>
                      )}

                    </div>

                  </div>
                </div>
              </div>

              {/* Job Actions Section */}
              <div className="lg:col-span-1">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 sticky top-4">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Interested in this role?</h3>
                    <p className="text-sm text-gray-600">Read all the details below first</p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    {/* <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Bookmark className="h-4 w-4" />
                      Save Job
                    </button> */}
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Job Content */}
            <div className="lg:col-span-3">
              {/* Table of Contents */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                <h2 className="font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  <a href="#description" className="block text-blue-600 hover:text-blue-800 transition-colors">Job Description</a>
                  <a href="#qualifications" className="block text-blue-600 hover:text-blue-800 transition-colors">Qualifications</a>
                  <a href="#responsibilities" className="block text-blue-600 hover:text-blue-800 transition-colors">Key Responsibilities</a>
                  <a href="#selection" className="block text-blue-600 hover:text-blue-800 transition-colors">Selection Process</a>
                  <a href="#how-to-apply" className="block text-blue-600 hover:text-blue-800 transition-colors">How to Apply</a>
                  <a href="#company" className="block text-blue-600 hover:text-blue-800 transition-colors">About Company</a>
                </nav>
              </div>

              {/* Job Description */}
              <section id="description" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>
                <div
                  className="prose prose-gray max-w-none prose-custom"
                  dangerouslySetInnerHTML={{ __html: job.job_description }}
                />
              </section>

              {/* Ad Slot */}
              {/* <AdSlot size="banner" className="mb-8" placeholder="Job Details Advertisement - 728x90" /> */}

              {/* Qualifications */}
              <section id="qualifications" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualifications</h2> */}
                <div
                  className="prose prose-gray max-w-none prose-custom"
                  dangerouslySetInnerHTML={{ __html: job.qualification }}
                />
              </section>

              {/* Key Responsibilities */}
              <section id="responsibilities" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2> */}
                <div
                  className="prose prose-gray max-w-none prose-custom"
                  dangerouslySetInnerHTML={{ __html: job.key_responsibility }}
                />
              </section>

              {/* Selection Process */}
              <section id="selection" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Selection Process</h2>
                <div
                  className="prose prose-gray max-w-none prose-custom"
                  dangerouslySetInnerHTML={{ __html: job.selection_process }}
                />
              </section>

              {/* How to Apply Section */}
              <section id="how-to-apply" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To apply for a job, read through all information provided on the job listing page carefully.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Look for the apply link on the job listing page, usually located somewhere on the page.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Clicking on the apply link will take you to the company's application portal.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Enter your personal details and any other information requested by the company in the application portal.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">5</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Pay close attention to the instructions provided and fill out all necessary fields accurately and completely.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">6</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Double-check all the information provided before submitting the application.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-semibold text-sm">7</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Ensure that your contact information is correct and up-to-date, and accurately reflect your qualifications and experience.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-800 mb-1">Important Note</h4>
                        <p className="text-amber-700 text-sm">
                          Submitting an application with incorrect or incomplete information could harm your chances of being selected for an interview.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Company Info */}
              <section id="company" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About {job.company_name}</h2>
                <div
                  className="prose prose-gray max-w-none prose-custom"
                  dangerouslySetInnerHTML={{ __html: job.about_company }}
                />
              </section>

              {/* Call to Action - Apply Button */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
                <p className="text-gray-600 mb-6">
                  Join {job.company_name} and take your career to the next level. We're looking for talented individuals like you!
                </p>
                <a
                  href={job.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Apply for this Job
                  <ExternalLink className="h-5 w-5" />
                </a>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Generate static paths for job pages
export async function generateStaticParams() {
  try {
    return [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}