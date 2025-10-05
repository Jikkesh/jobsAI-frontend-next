/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jobsai.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/api/*', '/admin/*', '/server-sitemap-index.xml'],
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
      await config.transform(config, '/about'),
      await config.transform(config, '/privacy'),
      await config.transform(config, '/terms'),
      await config.transform(config, '/disclaimer'),
      await config.transform(config, '/contact'),
      await config.transform(config, '/jobs/remote'),
      await config.transform(config, '/jobs/internship'),
      await config.transform(config, '/jobs/fresher'),
      await config.transform(config, '/jobs/experienced'),
      await config.transform(config, '/jobs/ai'),
    ]
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/static/'],
      },
    ],
    additionalSitemaps: [
      'https://jobsai.in/server-sitemap-index.xml',
    ],
  },
  transform: async (config, path) => {
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/jobs/')) {
      priority = 0.9
      changefreq = 'daily'
    } else if (['/about', '/contact'].includes(path)) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (['/privacy', '/terms', '/disclaimer'].includes(path)) {
      priority = 0.6
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}