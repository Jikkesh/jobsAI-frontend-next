import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Building2,
  ChevronRight,
  PiggyBank,
  Banknote
} from 'lucide-react';
import SafeHtml from '@/components/SafeHtml';
import JobLogo from '../jobLogo/JobLogo';

interface JobCardProps {
  job: any;
  featured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString();
  };

  const getJobTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-green-100 text-green-700';
      case 'part-time':
        return 'bg-yellow-100 text-yellow-700';
      case 'internship':
        return 'bg-purple-100 text-purple-700';
      case 'contract':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`card group cursor-pointer ${featured ? 'ring-2 ring-blue-500' : ''}`}>
      <Link href={`/job/${job.job_slug}`} className="block">
        <div className="flex items-start space-x-4">

          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
              {job.company_name ? (
                <JobLogo
                  src={`https://logo.clearbit.com/${job.company_name}.com`}
                  alt={`${job.company_name} logo`}
                  width={64}
                  height={64}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Job Details */}
          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-lg mb-1">
                  {job.job_role}
                </h3>
                <p className="text-gray-700 font-medium mb-2">{job.company_name}</p>
              </div>

              {featured && (
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <div className="text-gray-600 text-sm mb-3 line-clamp-2">
              <SafeHtml html={job.about_company} />
            </div>

            {/* Job Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{job.city}</span>
              </div>

              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                <span className={`px-2 py-1 rounded text-xs font-medium ${getJobTypeColor("Full-Time")}`}>
                  Full-Time
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* <DollarSign className="h-4 w-4" /> */}
                <Banknote className="h-4 w-4" />
                <span>{job.salary_package}</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatDate(job.posted_on)}</span>
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center gap-1">
                View Details
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;