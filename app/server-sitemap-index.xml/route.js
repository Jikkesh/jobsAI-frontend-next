import { getServerSideSitemapIndex } from 'next-sitemap'

export async function GET(request) {
  // Generate sitemaps for your dynamic job pages
  const sitemaps = [
    'https://jobsai.in/server-sitemap-jobs.xml',
  ]

  return getServerSideSitemapIndex(sitemaps)
}