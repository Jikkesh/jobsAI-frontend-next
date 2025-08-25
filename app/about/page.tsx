/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Target, 
  Users, 
  Award, 
  Briefcase,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  CheckCircle,
  MapPin,
  Star,
  Coffee,
  Search
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Jobs AI | Free Job Search Platform for India',
  description: 'Learn about Jobs AI\'s mission to help Indian job seekers find opportunities easily. Created by a job seeker, for job seekers - completely free service.',
  openGraph: {
    title: 'About Us - Jobs AI | Free Job Search Platform for India',
    description: 'Learn about Jobs AI\'s mission to help Indian job seekers find opportunities easily.',
  },
};

const AboutPage = () => {
  const stats = [
    {
      number: '50K+',
      label: 'Active Job Seekers',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      number: '5K+',
      label: 'Job Opportunities',
      icon: Briefcase,
      color: 'text-green-600',
    },
    {
      number: '1K+',
      label: 'Companies Listed',
      icon: Award,
      color: 'text-purple-600',
    },
    {
      number: '100%',
      label: 'Free Service',
      icon: Heart,
      color: 'text-red-600',
    },
  ];

  const values = [
    {
      title: 'Job Seeker First',
      description: 'Built by a job seeker who understands the struggles, we prioritize what job seekers actually need - not what companies want to sell.',
      icon: Heart,
    },
    {
      title: 'Always Free',
      description: 'We believe job searching should never cost money. Our platform is completely free for job seekers and will always remain so.',
      icon: Shield,
    },
    {
      title: 'Indian Focus',
      description: 'Designed specifically for the Indian job market, understanding local needs, company culture, and career aspirations.',
      icon: MapPin,
    },
    {
      title: 'Quality Over Quantity',
      description: 'Every job listing is manually verified by our team to ensure you only see legitimate, quality opportunities.',
      icon: Star,
    },
  ];

  const features = [
    {
      title: 'Manual Job Verification',
      description: 'Every job posting is personally reviewed and verified by our team before it goes live.',
      icon: CheckCircle,
    },
    {
      title: 'No Registration Required',
      description: 'Browse all jobs without creating accounts or sharing personal information.',
      icon: Search,
    },
    {
      title: 'Direct Applications',
      description: 'Apply directly to companies through their official channels - we don\'t act as middlemen.',
      icon: Target,
    },
    {
      title: 'Remote & On-site Jobs',
      description: 'Find both remote opportunities and location-specific jobs across India.',
      icon: Globe,
    },
  ];

  const journey = [
    {
      phase: 'The Struggle',
      description: 'As a job seeker, I experienced firsthand the frustration of fake job postings, spam, and platforms that prioritize employers over job seekers.',
      icon: Coffee,
    },
    {
      phase: 'The Vision',
      description: 'I realized there was a need for a simple, honest platform that actually helps job seekers without hidden agendas or fees.',
      icon: Target,
    },
    {
      phase: 'The Solution',
      description: 'Jobs AI was born - a free, transparent platform where every job is verified and job seekers can search without barriers.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <MapPin className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Made in India, For India
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              A job listing platform created by a job seeker who understands your struggle. 
              We make finding jobs in India simple, free, and frustration-free.
            </p>
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg text-white font-medium">
                🇮🇳 Focused on Indian Market • 💯 Completely Free • ✅ Manually Verified Jobs
              </p>
            </div> */}
            <Link
              href="/"
              className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-lg"
            >
              Start Job Search
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Indian professionals working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-gray-900">Made with ❤️ for Job Seekers</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Coffee className="h-4 w-4" />
                Personal Story
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                From Job Seeker to Solution Creator
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hi! I'm the creator of Jobs AI, and like you, I was once searching for the perfect job. 
                I experienced the frustration of fake postings, spam calls, and platforms that seemed 
                more interested in making money than actually helping job seekers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                That's when I decided to build something different - a platform that puts job seekers first. 
                No registration barriers, no hidden fees, no spam. Just genuine job opportunities verified 
                by someone who understands what you're going through.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {journey.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.phase}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Making Job Search Simple for Indians
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand the unique challenges of the Indian job market - from different hiring cultures 
                to location-specific requirements. Our platform is designed specifically to address these needs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for opportunities in major cities like Mumbai, Delhi, Bangalore, or 
                remote positions that you can do from anywhere in India, we've got you covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Zero Cost for Job Seekers</span>
                    <p className="text-gray-600">We never charge job seekers. This is our service to the community.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Manual Verification Process</span>
                    <p className="text-gray-600">Every job posting is personally reviewed to ensure legitimacy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-900">Indian Market Focus</span>
                    <p className="text-gray-600">Curated specifically for Indian job seekers and market dynamics.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Indian job seeker looking at opportunities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-4 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">India-First Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Make Job Search Better
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple features that make a real difference in your job search experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                  alt="Indian professionals celebrating success"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold text-gray-900">Growing Community</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                Community Impact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Building a Supportive Talent Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're not just a job listing platform - we're building a community of talented individuals
                who support each other. Through our Telegram channel, we share instant job updates,
                career tips, and create connections.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Join Our Telegram Community</h3>
                <p className="text-gray-600 mb-4">Get instant job notifications and connect with fellow job seekers.</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <span className="font-medium">📱 Real-time job alerts</span>
                  <span className="text-gray-400">•</span>
                  <span className="font-medium">🤝 Peer support</span>
                  <span className="text-gray-400">•</span>
                  <span className="font-medium">💡 Career tips</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">No spam, only quality job opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Community-driven support and networking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Free career guidance and industry insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Always Free</h3>
                <p className="text-blue-100">We will never charge job seekers for using our platform.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Job Seeker First</h3>
                <p className="text-blue-100">Every decision is made with job seekers' best interests in mind.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Star className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Quality Promise</h3>
                <p className="text-blue-100">Only verified, legitimate job opportunities make it to our platform.</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              This platform exists because I believe every talented person deserves access to great opportunities, 
              regardless of their background or ability to pay for premium services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who trust Jobs AI for their career journey. 
              Start exploring opportunities today - completely free, forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Browse Jobs Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Get in Touch
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ✨ No registration required • 🚀 Start searching immediately • 💯 Completely free
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};  

export default AboutPage;