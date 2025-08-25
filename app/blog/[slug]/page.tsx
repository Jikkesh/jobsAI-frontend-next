import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';
import AdSlot from '@/components/ads/AdSlot';
import Sidebar from '@/components/layout/Sidebar';
import { Metadata } from 'next';

// Sample blog posts data - Replace with API calls in production
const blogPostsData = {
  '1': {
    id: '1',
    slug: 'high-paying-remote-jobs-2024',
    title: '10 High-Paying Remote Jobs You Can Start Today',
    excerpt: 'Discover lucrative remote opportunities that offer competitive salaries and flexible work arrangements.',
    content: `
      <h2>The Remote Work Revolution</h2>
      <p>The landscape of work has fundamentally changed. What started as a necessity during the pandemic has evolved into a permanent shift toward flexible work arrangements. Today, more companies than ever are offering high-paying remote positions, opening up opportunities for professionals worldwide.</p>
      
      <p>Remote work isn't just about working from home anymore—it's about accessing global opportunities, achieving better work-life balance, and often earning more than traditional office-based roles.</p>

      <h2>Top 10 High-Paying Remote Jobs</h2>
      
      <h3>1. Software Engineer ($80,000 - $200,000+)</h3>
      <p>Software engineering remains one of the most lucrative remote career paths. Companies like GitLab, Automattic, and Stripe have proven that distributed engineering teams can be incredibly productive. Key skills include:</p>
      <ul>
        <li>Programming languages (Python, JavaScript, Java, Go)</li>
        <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
        <li>DevOps and CI/CD pipelines</li>
        <li>Database management</li>
      </ul>

      <h3>2. Product Manager ($90,000 - $180,000)</h3>
      <p>Product managers coordinate between engineering, design, and business teams to deliver successful products. Remote product management requires strong communication skills and the ability to work asynchronously across time zones.</p>

      <h3>3. Data Scientist ($85,000 - $170,000)</h3>
      <p>With the explosion of big data, companies need skilled professionals who can extract insights from complex datasets. Remote data scientists work on machine learning models, statistical analysis, and data visualization.</p>

      <h3>4. UX/UI Designer ($70,000 - $150,000)</h3>
      <p>User experience and interface design are critical for digital products. Remote designers collaborate with product teams to create intuitive, beautiful interfaces that users love.</p>

      <h3>5. Digital Marketing Manager ($60,000 - $130,000)</h3>
      <p>Digital marketing has naturally adapted to remote work. Marketing managers develop strategies, manage campaigns, and analyze performance metrics—all tasks that can be done effectively from anywhere.</p>

      <h3>6. Cybersecurity Specialist ($80,000 - $160,000)</h3>
      <p>As cyber threats increase, companies need security experts to protect their digital assets. Many cybersecurity roles are naturally suited to remote work, involving monitoring, analysis, and incident response.</p>

      <h3>7. Technical Writer ($55,000 - $120,000)</h3>
      <p>Technical writers create documentation, user guides, and educational content for software products. This role requires strong writing skills and the ability to understand complex technical concepts.</p>

      <h3>8. Sales Engineer ($80,000 - $150,000)</h3>
      <p>Sales engineers combine technical expertise with sales skills to help customers understand and implement complex products. Many work remotely, traveling to clients as needed.</p>

      <h3>9. Customer Success Manager ($65,000 - $140,000)</h3>
      <p>Customer success managers ensure clients get maximum value from products and services. This role involves relationship building, problem-solving, and strategic guidance.</p>

      <h3>10. Financial Analyst ($60,000 - $130,000)</h3>
      <p>Financial analysis work naturally lends itself to remote arrangements. Analysts create models, analyze market trends, and provide insights to guide business decisions.</p>

      <h2>Skills for Remote Work Success</h2>
      <p>Beyond technical skills, successful remote workers develop:</p>
      <ul>
        <li><strong>Communication:</strong> Clear, concise written and verbal communication</li>
        <li><strong>Self-management:</strong> Ability to work independently and manage time effectively</li>
        <li><strong>Technology proficiency:</strong> Comfort with collaboration tools and platforms</li>
        <li><strong>Adaptability:</strong> Flexibility to work across time zones and cultures</li>
      </ul>

      <h2>Finding Remote Job Opportunities</h2>
      <p>The best remote jobs are often found on specialized platforms:</p>
      <ul>
        <li>Remote-specific job boards (RemoteOK, We Work Remotely, FlexJobs)</li>
        <li>Company career pages with remote filters</li>
        <li>Professional networks and referrals</li>
        <li>Freelance platforms for contract opportunities</li>
      </ul>

      <h2>Negotiating Remote Work Arrangements</h2>
      <p>If your current company doesn't offer remote positions, consider these negotiation strategies:</p>
      <ul>
        <li>Start with a trial period</li>
        <li>Demonstrate your productivity and results</li>
        <li>Present a formal proposal with clear expectations</li>
        <li>Address concerns about communication and collaboration</li>
      </ul>

      <h2>The Future of Remote Work</h2>
      <p>Remote work is here to stay. Companies that embrace distributed teams often see benefits including access to global talent, reduced overhead costs, and improved employee satisfaction. For workers, remote positions offer unprecedented flexibility and access to opportunities regardless of geographic location.</p>

      <p>As you explore remote opportunities, focus on roles that align with your skills and career goals. The key is to position yourself as someone who can deliver exceptional results regardless of location.</p>
    `,
    author: 'Sarah Johnson',
    authorBio: 'Career Coach & Remote Work Expert with over 10 years of experience helping professionals transition to remote careers.',
    authorImage: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    publishedAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-16T14:30:00Z',
    readTime: '5 min read',
    views: 1247,
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Career Advice',
    tags: ['Remote Work', 'High Paying Jobs', 'Career Tips', 'Job Search'],
    featured: true,
  },
  'high-paying-remote-jobs-2024': {
    id: '1',
    slug: 'high-paying-remote-jobs-2024',
    title: '10 High-Paying Remote Jobs You Can Start Today',
    excerpt: 'Discover lucrative remote opportunities that offer competitive salaries and flexible work arrangements.',
    content: `
      <h2>The Remote Work Revolution</h2>
      <p>The landscape of work has fundamentally changed. What started as a necessity during the pandemic has evolved into a permanent shift toward flexible work arrangements. Today, more companies than ever are offering high-paying remote positions, opening up opportunities for professionals worldwide.</p>
      
      <p>Remote work isn't just about working from home anymore—it's about accessing global opportunities, achieving better work-life balance, and often earning more than traditional office-based roles.</p>

      <h2>Top 10 High-Paying Remote Jobs</h2>
      
      <h3>1. Software Engineer ($80,000 - $200,000+)</h3>
      <p>Software engineering remains one of the most lucrative remote career paths. Companies like GitLab, Automattic, and Stripe have proven that distributed engineering teams can be incredibly productive. Key skills include:</p>
      <ul>
        <li>Programming languages (Python, JavaScript, Java, Go)</li>
        <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
        <li>DevOps and CI/CD pipelines</li>
        <li>Database management</li>
      </ul>

      <h3>2. Product Manager ($90,000 - $180,000)</h3>
      <p>Product managers coordinate between engineering, design, and business teams to deliver successful products. Remote product management requires strong communication skills and the ability to work asynchronously across time zones.</p>

      <h3>3. Data Scientist ($85,000 - $170,000)</h3>
      <p>With the explosion of big data, companies need skilled professionals who can extract insights from complex datasets. Remote data scientists work on machine learning models, statistical analysis, and data visualization.</p>

      <h3>4. UX/UI Designer ($70,000 - $150,000)</h3>
      <p>User experience and interface design are critical for digital products. Remote designers collaborate with product teams to create intuitive, beautiful interfaces that users love.</p>

      <h3>5. Digital Marketing Manager ($60,000 - $130,000)</h3>
      <p>Digital marketing has naturally adapted to remote work. Marketing managers develop strategies, manage campaigns, and analyze performance metrics—all tasks that can be done effectively from anywhere.</p>

      <h3>6. Cybersecurity Specialist ($80,000 - $160,000)</h3>
      <p>As cyber threats increase, companies need security experts to protect their digital assets. Many cybersecurity roles are naturally suited to remote work, involving monitoring, analysis, and incident response.</p>

      <h3>7. Technical Writer ($55,000 - $120,000)</h3>
      <p>Technical writers create documentation, user guides, and educational content for software products. This role requires strong writing skills and the ability to understand complex technical concepts.</p>

      <h3>8. Sales Engineer ($80,000 - $150,000)</h3>
      <p>Sales engineers combine technical expertise with sales skills to help customers understand and implement complex products. Many work remotely, traveling to clients as needed.</p>

      <h3>9. Customer Success Manager ($65,000 - $140,000)</h3>
      <p>Customer success managers ensure clients get maximum value from products and services. This role involves relationship building, problem-solving, and strategic guidance.</p>

      <h3>10. Financial Analyst ($60,000 - $130,000)</h3>
      <p>Financial analysis work naturally lends itself to remote arrangements. Analysts create models, analyze market trends, and provide insights to guide business decisions.</p>

      <h2>Skills for Remote Work Success</h2>
      <p>Beyond technical skills, successful remote workers develop:</p>
      <ul>
        <li><strong>Communication:</strong> Clear, concise written and verbal communication</li>
        <li><strong>Self-management:</strong> Ability to work independently and manage time effectively</li>
        <li><strong>Technology proficiency:</strong> Comfort with collaboration tools and platforms</li>
        <li><strong>Adaptability:</strong> Flexibility to work across time zones and cultures</li>
      </ul>

      <h2>Finding Remote Job Opportunities</h2>
      <p>The best remote jobs are often found on specialized platforms:</p>
      <ul>
        <li>Remote-specific job boards (RemoteOK, We Work Remotely, FlexJobs)</li>
        <li>Company career pages with remote filters</li>
        <li>Professional networks and referrals</li>
        <li>Freelance platforms for contract opportunities</li>
      </ul>

      <h2>Negotiating Remote Work Arrangements</h2>
      <p>If your current company doesn't offer remote positions, consider these negotiation strategies:</p>
      <ul>
        <li>Start with a trial period</li>
        <li>Demonstrate your productivity and results</li>
        <li>Present a formal proposal with clear expectations</li>
        <li>Address concerns about communication and collaboration</li>
      </ul>

      <h2>The Future of Remote Work</h2>
      <p>Remote work is here to stay. Companies that embrace distributed teams often see benefits including access to global talent, reduced overhead costs, and improved employee satisfaction. For workers, remote positions offer unprecedented flexibility and access to opportunities regardless of geographic location.</p>

      <p>As you explore remote opportunities, focus on roles that align with your skills and career goals. The key is to position yourself as someone who can deliver exceptional results regardless of location.</p>
    `,
    author: 'Sarah Johnson',
    authorBio: 'Career Coach & Remote Work Expert with over 10 years of experience helping professionals transition to remote careers.',
    authorImage: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    publishedAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-16T14:30:00Z',
    readTime: '5 min read',
    views: 1247,
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Career Advice',
    tags: ['Remote Work', 'High Paying Jobs', 'Career Tips', 'Job Search'],
    featured: true,
  }
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData[params.slug as keyof typeof blogPostsData];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | JobsAI Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://jobsai.in/blog/${post.slug}`,
      siteName: 'JobsAI',
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
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

export default function BlogPostPage({ params }: Props) {
  const post = blogPostsData[params.slug as keyof typeof blogPostsData];

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author,
              "description": post.authorBio
            },
            "publisher": {
              "@type": "Organization",
              "name": "JobsAI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://jobsai.in/logo.png"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt,
            "image": post.image,
            "articleSection": post.category,
            "keywords": post.tags.join(", "),
            "wordCount": post.content.split(' ').length,
            "timeRequired": post.readTime,
            "url": `https://jobsai.in/blog/${post.slug}`
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <section className="bg-white border-b border-gray-200">
          <div className="container py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="bg-white">
          <div className="container py-12">
            <div className="max-w-4xl mx-auto">
              {/* Category and Tags */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center space-x-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-8">
                <div className="flex items-center space-x-6">
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.authorBio.split(' with ')[0]}</p>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
                {/* Table of Contents */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h2 className="font-semibold text-gray-900 mb-4">Table of Contents</h2>
                  <nav className="space-y-2 text-sm">
                    <a href="#remote-work-revolution" className="block text-blue-600 hover:text-blue-800 transition-colors">The Remote Work Revolution</a>
                    <a href="#top-10-jobs" className="block text-blue-600 hover:text-blue-800 transition-colors">Top 10 High-Paying Remote Jobs</a>
                    <a href="#skills-success" className="block text-blue-600 hover:text-blue-800 transition-colors">Skills for Remote Work Success</a>
                    <a href="#finding-opportunities" className="block text-blue-600 hover:text-blue-800 transition-colors">Finding Remote Job Opportunities</a>
                    <a href="#negotiating" className="block text-blue-600 hover:text-blue-800 transition-colors">Negotiating Remote Work Arrangements</a>
                    <a href="#future" className="block text-blue-600 hover:text-blue-800 transition-colors">The Future of Remote Work</a>
                  </nav>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-gray prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Ad Slot in Article */}
                {/* <div className="my-12">
                  <AdSlot 
                    size="banner" 
                    placeholder="In-Article Advertisement - 728x90"
                  />
                </div> */}

                {/* Author Bio */}
                <div className="bg-gray-50 rounded-lg p-6 mt-12">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">About {post.author}</h3>
                      <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Article Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                  <Link 
                    href="/blog/previous-article"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous Article
                  </Link>
                  <Link 
                    href="/blog/next-article"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Next Article
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
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

// Generate static paths for blog posts
export async function generateStaticParams() {
  // Return all possible slug values that exist in your blogPostsData
  return Object.keys(blogPostsData).map((slug) => ({
    slug: slug, // This should match your [slug] parameter name
  }));
}