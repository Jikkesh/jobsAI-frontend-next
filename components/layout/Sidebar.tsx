export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Clock,
  ChevronRight,
  Bookmark,
  Users,
  Building2,
  Loader2,
  RefreshCw
} from 'lucide-react';
import AdSlot from '@/components/ads/AdSlot';
import { axiosJobsApi as jobsApi } from '@/lib/jobs-api';

const popularPosts = [
  {
    id: '1',
    title: '10 Skills Every Developer Should Have in 2024',
    readTime: '5 min read',
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'How to Negotiate Your Salary Like a Pro',
    readTime: '7 min read',
    publishedAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'The Future of Remote Work: Trends to Watch',
    readTime: '6 min read',
    publishedAt: '2024-01-13',
  },
  {
    id: '4',
    title: 'Building a Personal Brand as a Developer',
    readTime: '8 min read',
    publishedAt: '2024-01-12',
  },
];

const jobStats = [
  {
    label: 'Total Jobs',
    value: '12,456',
    icon: Bookmark,
    change: '+12%',
    color: 'text-blue-600',
  },
  {
    label: 'Companies',
    value: '3,890',
    icon: Building2,
    change: '+8%',
    color: 'text-green-600',
  },
  {
    label: 'Active Users',
    value: '89,234',
    icon: Users,
    change: '+15%',
    color: 'text-purple-600',
  },
];

type TrendingJob = {
  id: string;
  job_slug?: string;
  job_role?: string;
  title?: string;
  category?: string;
  company_name?: string;
  company?: string;
  posted_on?: string;
  publishedAt?: string;
  salary_package?: string;
  city?: string;
  state?: string;
};

// Server-side function to fetch trending jobs
async function fetchTrendingJobs(): Promise<TrendingJob[]> {
  try {
    const response: any = await jobsApi.getTrendingJobs(10);
    return response || [];
  } catch (err) {
    console.error('Error fetching trending jobs:', err);
    return [];
  }
}

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  return `${diffDays}d ago`;
};

const formatJobLocation = (job: any) => {
  if (job.city && job.state) {
    return `${job.city}, ${job.state}`;
  }
  return job.category || 'Remote';
};

// Server Component
const Sidebar = async () => {
  // Fetch data on the server
  const trendingJobs = await fetchTrendingJobs();

  return (
    <aside className="space-y-6">
      {/* Job Stats */}
      {/* <div className="sidebar-card">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Platform Stats
        </h3>
        <div className="space-y-4">
          {jobStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <IconComponent className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-green-600">{stat.change}</span>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* Popular Posts */}
      {/* <div className="sidebar-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Popular Posts</h3>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="flex-grow min-w-0">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 text-sm mb-1 line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}

      {/* Advertisement Slot */}
      {/* <AdSlot
        size="sidebar"
        placeholder="Sidebar Advertisement - 300x250"
      /> */}

      {/* Trending Jobs */}
      <div className="sidebar-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            Trending Jobs
          </h3>
        </div>

        {/* Jobs List */}
        <div className="space-y-3">
          {trendingJobs.length > 0 ? (
            trendingJobs.map((job) => (
              <Link
                key={job.job_slug}
                href={`/job/${job?.job_slug}`}
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 text-sm line-clamp-1 flex-grow">
                    {job.job_role || job.title}
                  </h4>
                  {job.category === 'Remote' && (
                    <span className="flex-shrink-0 ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                      Remote
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                  {job.company_name || job.company}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="line-clamp-1">{formatJobLocation(job)}</span>
                  <span>{job.posted_on ? formatDate(job.posted_on) : formatDate(job.publishedAt)}</span>
                </div>
                {job.salary_package && (
                  <div className="mt-1 text-xs text-blue-600 font-medium">
                    {job.salary_package}
                  </div>
                )}
              </Link>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              <p className="text-sm">No trending jobs available</p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="sidebar-card bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest job alerts and career tips delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div> */}

      {/* Another Ad Slot */}
      {/* <AdSlot
        size="sidebar"
        placeholder="Sidebar Advertisement #2 - 300x250"
      /> */}
    </aside>
  );
};

export default Sidebar;