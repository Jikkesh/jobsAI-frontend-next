/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp,
  Search,
  Filter,
  ChevronRight
} from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import AdSlot from '@/components/ads/AdSlot';
import Sidebar from '@/components/layout/Sidebar';
import { Metadata } from 'next';

// Sample blog posts data - Replace with API calls in production
const blogPosts = [
  {
    id: '1',
    slug: 'high-paying-remote-jobs-2024',
    title: '10 High-Paying Remote Jobs You Can Start Today',
    excerpt: 'Discover lucrative remote opportunities that offer competitive salaries and flexible work arrangements. From software development to digital marketing, explore careers that let you work from anywhere.',
    author: 'Sarah Johnson',
    authorBio: 'Career Coach & Remote Work Expert',
    publishedAt: '2024-01-15T09:00:00Z',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Career Advice',
    tags: ['Remote Work', 'High Paying Jobs', 'Career Tips'],
    featured: true,
  },
  {
    id: '2',
    slug: 'resume-writing-guide-2024',
    title: 'How to Write a Resume That Gets You Hired',
    excerpt: 'Expert tips on crafting a compelling resume that stands out to recruiters and hiring managers. Learn the latest formatting trends and what employers really want to see.',
    author: 'Mike Chen',
    authorBio: 'HR Director & Recruitment Specialist',
    publishedAt: '2024-01-14T14:30:00Z',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Resume Tips',
    tags: ['Resume', 'Job Search', 'Career Development'],
    featured: false,
  },
  {
    id: '3',
    slug: 'interview-preparation-checklist',
    title: 'The Ultimate Interview Preparation Checklist',
    excerpt: 'Master your next job interview with our comprehensive preparation guide. From researching the company to handling tough questions, we\'ve got you covered.',
    author: 'Emily Rodriguez',
    authorBio: 'Career Development Manager',
    publishedAt: '2024-01-13T11:15:00Z',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Interview Tips',
    tags: ['Interview', 'Job Search', 'Preparation'],
    featured: false,
  },
  {
    id: '4',
    slug: 'tech-skills-in-demand-2024',
    title: 'Most In-Demand Tech Skills for 2024',
    excerpt: 'Stay ahead of the curve with these trending technical skills that employers are actively seeking. From AI and machine learning to cloud computing and cybersecurity.',
    author: 'David Park',
    authorBio: 'Tech Recruiter & Industry Analyst',
    publishedAt: '2024-01-12T16:45:00Z',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Tech Careers',
    tags: ['Technology', 'Skills', 'Career Growth'],
    featured: false,
  },
  {
    id: '5',
    slug: 'networking-tips-job-seekers',
    title: 'Networking Strategies That Actually Work',
    excerpt: 'Build meaningful professional connections that can accelerate your career. Learn how to network effectively both online and offline without feeling awkward.',
    author: 'Lisa Thompson',
    authorBio: 'Professional Development Coach',
    publishedAt: '2024-01-11T10:20:00Z',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Networking',
    tags: ['Networking', 'Professional Development', 'Career Growth'],
    featured: false,
  },
  {
    id: '6',
    slug: 'work-life-balance-remote-workers',
    title: 'Maintaining Work-Life Balance While Working Remotely',
    excerpt: 'Practical strategies for remote workers to maintain healthy boundaries and avoid burnout. Create a productive home office setup and establish routines that work.',
    author: 'Alex Kumar',
    authorBio: 'Remote Work Consultant',
    publishedAt: '2024-01-10T13:30:00Z',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Remote Work',
    tags: ['Work-Life Balance', 'Remote Work', 'Productivity'],
    featured: false,
  },
];

const categories = [
  'All',
  'Career Advice',
  'Resume Tips',
  'Interview Tips',
  'Tech Careers',
  'Remote Work',
  'Networking',
  'Salary Negotiation',
];

export const metadata: Metadata = {
  title: 'Career Blog - Expert Job Search Tips & Advice | JobsAI',
  description: 'Get expert career advice, job search tips, resume guidance, and interview preparation from industry professionals. Stay updated with the latest job market trends.',
  keywords: 'career advice, job search tips, resume writing, interview preparation, career development, job hunting, professional growth',
  openGraph: {
    title: 'Career Blog - Expert Job Search Tips & Advice | JobsAI',
    description: 'Get expert career advice, job search tips, resume guidance, and interview preparation from industry professionals.',
    type: 'website',
  },
};

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Career Insights & Job Search Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to accelerate your career journey. From resume writing to interview preparation, 
              we've got the insights you need to land your dream job.
            </p>
          </div>
          
          {/* Blog Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Industry Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Quick Reads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search Bar */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-8">
        {/* Ad Slot */}
        {/* <AdSlot 
          size="banner" 
          className="mb-8"
          placeholder="Blog Page Advertisement - 728x90"
        /> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {featuredPost && (
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
                </div>
                <BlogCard post={featuredPost} featured={true} />
              </section>
            )}

            {/* Ad Slot Between Sections */}
            {/* <AdSlot 
              size="banner" 
              className="mb-8"
              placeholder="Mid-Page Advertisement - 728x90"
            /> */}

            {/* Latest Articles */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="text-sm text-gray-500">
                  Showing {regularPosts.length} articles
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {regularPosts.map((post, index) => (
                  <div key={post.id}>
                    <BlogCard post={post} />
                    {/* Ad slot after every 4 articles */}
                    {/* {(index + 1) % 4 === 0 && (
                      <div className="col-span-full mt-8 mb-8">
                        <AdSlot 
                          size="banner" 
                          placeholder={`Article Advertisement ${Math.floor(index / 4) + 1} - 728x90`}
                        />
                      </div>
                    )} */}
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                  Load More Articles
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}