/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import JobCard from '@/components/jobs/JobCard';
import { axiosJobsApi as jobsApi } from '@/lib/jobs-api';import { Loader2 } from 'lucide-react';

interface Job { id: string; title: string; company: string; job_slug: string; /* ... */ }
interface Props {
    category: string;
    initialJobs: Job[];
    initialTotal: number;
    pageSize?: number;
}

export default function CategoryJobsClient({ category, initialJobs, initialTotal, pageSize = 10 }: Props) {
    const [jobs, setJobs] = useState<Job[]>(initialJobs);
    const [totalCount, setTotalCount] = useState<number>(initialTotal);
    const [page, setPage] = useState<number>(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const hasMore = jobs.length < totalCount;

    const handleLoadMore = async () => {
        if (!hasMore || loadingMore) return;
        setLoadingMore(true);
        setError(null);
        try {
            const nextPage = page + 1;
            const res: any = await jobsApi.getJobsByCategory(category, nextPage, pageSize);
            const newJobs = res.jobs ?? res;
            setJobs(prev => [...prev, ...newJobs]);
            setTotalCount(res.totalCount ?? (prev => prev + newJobs.length));
            setPage(nextPage);
        } catch (err: any) {
            console.error('Load more failed', err);
            setError('Failed to load more jobs.');
        } finally {
            setLoadingMore(false);
        }
    };

    return (
        <div className="lg:col-span-3">
            {error &&
                <div className="text-center py-12">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Jobs</h3>
                        <p className="text-red-600 mb-4">{error}</p>
                    </div>
                </div>
            }

            <div className="space-y-6">
                {jobs.length === 0 ? (
                    <div className="text-center py-12">
                    {/* <IconComponent className={`mx-auto h-16 w-16 ${config.color} mb-4`} /> */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No jobs found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any {category.toLowerCase()} at the moment.
                    </p>
                  </div>
                ) : (
                    jobs.map(job => <JobCard key={job.job_slug} job={job} />)
                )}
            </div>

            {hasMore && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        disabled={loadingMore}
                        className="btn-secondary"
                    >
                        {loadingMore ? (
                            <span className="inline-flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" /> Loading...
                            </span>
                        ) : (
                            'Load More Jobs'
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
