import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article className={`card group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
      <Link href={`/blog/${post.id}`} className="block">
        <div className={`${featured ? 'md:flex md:space-x-6' : ''}`}>
          {/* Image */}
          <div className={`relative overflow-hidden rounded-lg mb-4 ${featured ? 'md:mb-0 md:w-1/2' : ''}`}>
            <div className="aspect-video relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-3 left-3">
              <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
            <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 ${
              featured ? 'text-2xl' : 'text-lg'
            }`}>
              {post.title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>

            {/* Read More */}
            <div className="mt-4">
              <span className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center gap-1">
                Read More
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;