import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  GraduationCap,
  MapPin,
  TrendingUp,
  ChevronRight,
  Building2,
  Clock
} from 'lucide-react';
import JobCard from '@/components/jobs/JobCard';
import BlogCard from '@/components/blog/BlogCard';
import AdSlot from '@/components/ads/AdSlot';
import Sidebar from '@/components/layout/Sidebar';
import { Metadata } from 'next';
import { axiosJobsApi as jobsApi } from '@/lib/jobs-api';

const jobCategories = [
  {
    name: 'Remote Jobs',
    icon: MapPin,
    count: 1245,
    href: '/jobs/remote',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Fresher',
    icon: Users,
    count: 856,
    href: '/jobs/fresher',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Internship',
    icon: GraduationCap,
    count: 423,
    href: '/jobs/internship',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Experienced',
    icon: Briefcase,
    count: 967,
    href: '/jobs/experienced',
    color: 'bg-orange-100 text-orange-700',
  },
];

export const metadata: Metadata = {
  title: 'JobsAI | Jobs AI - Find Your Dream Job | Remote Jobs, Freshers, Internship',
  description: 'Discover the latest job opportunities, remote work positions, fresher jobs, and internships. Get career insights through our expert blog posts and land your dream job today.',
};

// Function to fetch latest jobs from API
async function fetchLatestJobs() {
  try {
    const response = await jobsApi.getLatestJobs();
    return response || { Remote: [], Fresher: [], Internship: [], Experienced: [] };
  } catch (error) {
    console.error('Error fetching latest jobs:', error);
    return {
      Remote: [],
      Fresher: [],
      Internship: [],
      Experienced: []
    };
  }
}

export default async function HomePage() {

  const latestJobsData: any = await fetchLatestJobs();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-4xl">

            {/* Main Headline with better keyword targeting */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Find <span className="text-white">Jobs in India</span> - Remote, Fresher & Internships
            </h1>

            {/* Enhanced description with location and job type keywords */}
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Discover latest job opportunities across India. Get remote work positions,
              fresher jobs in top companies, and internship programs. Start your career journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://t.me/JobsaiChannel" target='_blank'
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 focus-ring"
              >
                <Briefcase className="h-5 w-5" />
                Get Free Job Alerts
              </Link>
              {/* <Link
                href="/blog"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2 focus-ring"
              >
                Career Tips
                <ChevronRight className="h-4 w-4" />
              </Link> */}
            </div>
          </div>
          {/* Trust indicators */}
          <div className="mt-8 pt-8 border-t border-blue-400/30">
            <p className="text-blue-200 text-sm mb-4">Trusted by Job Seekers from:</p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">IIT</span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">NIT</span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">Engineering Colleges</span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">MBA Institutes</span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full">Fresh Graduates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - CNN Style Layout */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Main Content (3/4 width) */}
          <div className="lg:col-span-3 space-y-8">

            {/* Job Categories */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
                {/* <Link 
                  href="/jobs" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Link> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {jobCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="card hover:scale-105 transform transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg ${category.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {category.name}
                          </h3>
                          {/* <p className="text-sm text-gray-600">{category.count} jobs</p> */}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>  
            </section>

            {/* Ad Slot Between Sections */}
            {/* <AdSlot
              size="banner"
              className="my-8"
              placeholder="Advertisement Banner - 728x90"
            /> */}

            {/* Featured Jobs by Category */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Job Opportunities</h2>

              {/* Remote Jobs */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Remote Jobs
                  </h3>
                  <Link
                    href="/jobs/remote"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestJobsData.Remote?.length > 0 ? (
                    latestJobsData.Remote.map((job: any) => (
                      <JobCard key={job.job_slug} job={job} />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8 text-gray-500">
                      <p>No remote jobs available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Fresher Jobs */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    Fresher Jobs
                  </h3>
                  <Link
                    href="/jobs/fresher"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestJobsData.Fresher?.length > 0 ? (
                    latestJobsData.Fresher.map((job: any) => (
                      <JobCard key={job.job_slug} job={job} />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8 text-gray-500">
                      <p>No fresher jobs available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Internships */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                    Internships
                  </h3>
                  <Link
                    href="/jobs/internship"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestJobsData.Internship?.length > 0 ? (
                    latestJobsData.Internship.map((job: any) => (
                      <JobCard key={job.job_slug} job={job} />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8 text-gray-500">
                      <p>No internships available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Experienced Jobs */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-orange-600" />
                    Experienced Jobs
                  </h3>
                  <Link
                    href="/jobs/experienced"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestJobsData.Experienced?.length > 0 ? (
                    latestJobsData.Experienced.map((job: any) => (
                      <JobCard key={job.job_slug} job={job} />
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8 text-gray-500">
                      <p>No experienced jobs available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Top Stories Section */}
            {/* <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Top Stories
                </h2>
                <Link 
                  href="/blog" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topStories.map((story, index) => (
                  <BlogCard
                    key={story.id}
                    post={story}
                    featured={index === 0}
                  />
                ))}
              </div>
            </section> */}

          </div>

          {/* Sidebar (1/4 width) */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

        </div>
      </div>
      
    </div>
  );
}