import { axiosJobsApi as jobsApi } from '@/lib/jobs-api';import { getServerSideSitemap } from 'next-sitemap'

export async function GET(request) {
  try {
    // Set a timeout for the API call since you mentioned it takes 5 seconds
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
    
    // Fetch all jobs from your API
    const jobs = await jobsApi.getAllJobs()

    // Handle different response structures - adjust based on your API response
    const jobsList = Array.isArray(jobs) ? jobs : jobs.data || []

    console.log(`Generating sitemap for ${jobsList.length} jobs`)
    
    // Generate sitemap fields for each job
    const fields = jobsList
      .filter(job => job && job.job_slug) // Filter jobs with valid job_slug
      .map((job) => ({
        loc: `https://jobsai.in/job/${job.job_slug}`,
        lastmod: job.updatedAt || job.updated_at || job.createdAt || job.created_at || new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }))

    console.log(`Generated ${fields.length} sitemap entries`)
    
    return getServerSideSitemap(fields)
  } catch (error) {
    console.error('Error generating jobs sitemap:', error.message)
    
    // Return empty sitemap on error to prevent sitemap from breaking
    return getServerSideSitemap([
      {
        loc: 'https://jobsai.in/',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      }
    ])
  }
}