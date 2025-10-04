export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Users,
  GraduationCap,
  Briefcase,
  Search,
  Filter,
  SortDesc
} from 'lucide-react';
import JobCard from '@/components/jobs/JobCard';
import AdSlot from '@/components/ads/AdSlot';
import Sidebar from '@/components/layout/Sidebar';
import { Metadata } from 'next';
import { axiosJobsApi as jobsApi } from '@/lib/jobs-api';
import CategoryJobsClient from './CategoryJobsClient';

// Valid categories
const validCategories = ['remote', 'fresher', 'internship', 'experienced', 'ai'];
const PAGE_SIZE = 10;

// Category configuration
const categoryConfig = {
  ai: {
    title: 'AI Jobs',
    description: 'Explore cutting-edge AI job opportunities in machine learning, data science, and more',
    icon: Users,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  remote: {
    title: 'Remote Jobs',
    description: 'Work from anywhere with these remote job opportunities',
    icon: MapPin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  fresher: {
    title: 'Freshers - Offcampus Jobs',
    description: 'Entry-level positions perfect for new graduates',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  internship: {
    title: 'Internship Opportunities',
    description: 'Gain valuable experience with these internship programs',
    icon: GraduationCap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  experienced: {
    title: 'Jobs for Experienced Professionals',
    description: 'Senior-level positions for experienced professionals',
    icon: Briefcase,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
};

interface Props {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params;

  if (!validCategories.includes(category)) {
    return {
      title: 'Category Not Found',
    };
  }

  const config = categoryConfig[category as keyof typeof categoryConfig];

  return {
    title: `${config.title} | JobsAI`,
    description: config.description,
    openGraph: {
      title: `${config.title} | JobsAI`,
      description: config.description,
    },
  };
}

export default async function CategoryJobsPage({ params }: Props) {
  const { category } = params;

  // Validate category
  if (!validCategories.includes(category)) {
    notFound();
  }

  // server-side fetch initial jobs (page 1)
  let initialJobs: any[] = [];
  let initialTotal = 0;

  const config = categoryConfig[category as keyof typeof categoryConfig];
  const IconComponent = config.icon;

  try {
    const res: any = await jobsApi.getJobsByCategory(category, 1, PAGE_SIZE);
    initialJobs =  res?.jobs ?? (Array.isArray(res) ? res : []);
    initialTotal = res?.totalCount ?? (Array.isArray(initialJobs) ? initialJobs.length : 0);
    initialJobs = initialJobs.map((j: any) => ({ ...j, type: j.type ?? 'Full-time' }));
  } catch (err) {
    console.error('Server fetch category jobs failed', err);
    // fallback: empty list (client can still try to load more)
    initialJobs = [];
    initialTotal = 0;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`p-3 rounded-xl ${config.bgColor}`}>
              <IconComponent className={`h-8 w-8 ${config.color}`} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
              <p className="text-gray-600 mt-1">{config.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            {/* <span>{initialTotal} jobs found</span> */}
            <span>Updated daily</span>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      {/* <section className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">

            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${config.title.toLowerCase()}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>

              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SortDesc className="h-4 w-4" />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <div className="container py-8">

        {/* Ad Slot */}
        {/* <AdSlot
          size="banner"
          className="mb-8"
          placeholder="Category Page Advertisement - 728x90"
        /> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Jobs List */}
          <CategoryJobsClient
            category={category}
            initialJobs={initialJobs}
            initialTotal={initialTotal}
            pageSize={PAGE_SIZE}
          />

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
