'use client';
/* eslint-disable react/no-unescaped-entities, react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Filter,
  SortDesc,
  X,
  ChevronDown
} from 'lucide-react';
import JobCard from '@/components/jobs/JobCard';
import AdSlot from '@/components/ads/AdSlot';
import Sidebar from '@/components/layout/Sidebar';

// Sample jobs data
const allJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    description: 'Join our team as a Senior Frontend Developer and build amazing user experiences.',
    publishedAt: '2024-01-15',
    category: 'remote',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: '2',
    title: 'Backend Engineer - Node.js',
    company: 'StartupXYZ',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$70,000 - $100,000',
    description: 'Build scalable backend services using Node.js, Express, and MongoDB.',
    publishedAt: '2024-01-14',
    category: 'experienced',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: '3',
    title: 'Junior Software Engineer',
    company: 'InnovativeTech',
    location: 'Chennai, India',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Perfect role for fresh graduates looking to start their tech career.',
    publishedAt: '2024-01-13',
    category: 'fresher',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: '4',
    title: 'Marketing Internship',
    company: 'GrowthCo',
    location: 'Remote',
    type: 'Internship',
    salary: '$15/hour',
    description: 'Great opportunity to learn digital marketing in a fast-paced startup environment.',
    publishedAt: '2024-01-12',
    category: 'internship',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'BigTech Corp',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130,000 - $180,000',
    description: 'Lead product strategy and roadmap for our core platform.',
    publishedAt: '2024-01-11',
    category: 'experienced',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
  },
];

const locations = [
  'All Locations',
  'Remote',
  'New York, NY',
  'Chennai, India',
  'Los Angeles, CA',
  'Chicago, IL',
  'Austin, TX',
  'Seattle, WA',
  'Boston, MA',
  'Denver, CO',
];

const jobTypes = [
  'All Types',
  'Full-time',
  'Part-time',
  'Internship',
  'Contract',
  'Freelance',
];

const categories = [
  'All Categories',
  'Remote Jobs',
  'Fresher',
  'Internship',
  'Experienced',
];

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'salary-high', label: 'Salary: High to Low' },
  { value: 'salary-low', label: 'Salary: Low to High' },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  const handleSearch = () => {
    let filtered = allJobs.filter(job => {
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = selectedLocation === 'All Locations' || 
        job.location === selectedLocation;
      
      const matchesType = selectedType === 'All Types' || 
        job.type === selectedType;
      
      const matchesCategory = selectedCategory === 'All Categories' || 
        (selectedCategory === 'Remote Jobs' && job.category === 'remote') ||
        (selectedCategory === 'Fresher' && job.category === 'fresher') ||
        (selectedCategory === 'Internship' && job.category === 'internship') ||
        (selectedCategory === 'Experienced' && job.category === 'experienced');
      
      return matchesSearch && matchesLocation && matchesType && matchesCategory;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'newest':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('All Locations');
    setSelectedType('All Types');
    setSelectedCategory('All Categories');
    setSortBy('newest');
    setFilteredJobs(allJobs);
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedLocation, selectedType, selectedCategory, sortBy]);

  const hasActiveFilters = searchTerm || 
    selectedLocation !== 'All Locations' || 
    selectedType !== 'All Types' || 
    selectedCategory !== 'All Categories';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container py-6">
          {/* Main Search */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            {/* Search Input */}
            <div className="lg:col-span-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="lg:col-span-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-2">
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search Jobs
              </button>
            </div>
          </div>

          {/* Additional Filters Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Advanced Filters */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm"
                >
                  <X className="h-4 w-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Sort and Results Count */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredJobs.length} jobs found
              </span>
              
              <div className="flex items-center space-x-2">
                <SortDesc className="h-4 w-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Any Salary</option>
                    <option>$40,000+</option>
                    <option>$60,000+</option>
                    <option>$80,000+</option>
                    <option>$100,000+</option>
                    <option>$120,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Any Experience</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Executive</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <div className="container py-8">
        {/* Ad Slot */}
        {/* <AdSlot 
          size="banner" 
          className="mb-8"
          placeholder="Search Results Advertisement - 728x90"
        /> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Jobs List */}
          <div className="lg:col-span-3">
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <div key={job.id}>
                    <JobCard job={job} />
                    {/* Ad slot after every 5 jobs */}
                    {/* {(index + 1) % 5 === 0 && index < filteredJobs.length - 1 && (
                      <div className="my-8">
                        <AdSlot 
                          size="banner" 
                          placeholder={`Search Results Ad ${Math.floor(index / 5) + 1} - 728x90`}
                        />
                      </div>
                    )} */}
                  </div>
                ))}
                
                {/* Load More Button */}
                <div className="text-center mt-12">
                  <button className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                    Load More Jobs
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <Search className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No jobs found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or filters to find more opportunities.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;