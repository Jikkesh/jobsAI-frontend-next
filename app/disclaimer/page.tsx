/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Info, Shield, FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Jobs AI',
  description: 'Read important disclaimers about Jobs AI services, job listings, and career information. Understand our limitations and responsibilities.',
  robots: {
    index: true,
    follow: true,
  },
};

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="mx-auto h-16 w-16 text-orange-600 mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600">
              Important information about our services and limitations.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: August 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Disclaimer for Jobs AI</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                If you require any more information or have any questions about our site's disclaimer, 
                please feel free to contact us.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">General Information Disclaimer</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                All the information on this website - <span className="font-semibold text-blue-700">jobsai.in</span> - is published in good faith and for 
                general information purposes only. <span className="font-semibold text-blue-700">Jobs AI</span> does not make any warranties about the 
                completeness, reliability, and accuracy of this information. Any action you take upon 
                the information you find on this website (<span className="font-semibold text-blue-700">Jobs AI</span>) is strictly at your own risk. 
                <span className="font-semibold text-blue-700"> Jobs AI</span> will not be liable for any losses and/or damages in connection with the use of our website.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Listings and Third-Party Content</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Jobs AI acts as a bridge between company career pages and job seekers by aggregating 
                job listings from various sources. While we verify job listings through our team, we 
                do not guarantee the accuracy, completeness, or authenticity of all job postings. 
                Job seekers are advised to verify all job details directly with the hiring companies before applying.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Are Not Responsible For:</h3>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed mb-4">
                <li>The accuracy or completeness of job descriptions posted by employers</li>
                <li>Employment terms, conditions, salary, or benefits offered by companies</li>
                <li>The legitimacy or credibility of hiring companies</li>
                <li>Discriminatory or illegal hiring practices by employers</li>
                <li>Employment disputes or issues arising from job applications</li>
                <li>Changes in job requirements or availability after posting</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">External Links and Third-Party Websites</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                When you click on "Apply" buttons or other links on our website, you will be redirected 
                to external websites including company career pages, LinkedIn, or other job application 
                platforms. While we strive to provide only quality links to legitimate job opportunities, 
                we have no control over the content, hiring processes, or practices of these external sites. 
                These links do not imply our endorsement of all content found on these sites.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Please be also aware that when you leave our website, other sites may have different 
                privacy policies and terms which are beyond our control. Please be sure to check the 
                Privacy Policies of these sites as well as their "Terms of Service" before engaging in 
                any business or uploading any information.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Employment Outcomes</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Jobs AI does not guarantee job placement, interview opportunities, or employment outcomes. 
                The job application process, hiring decisions, and employment terms are entirely at the 
                discretion of the respective employers. Success in job searching depends on numerous factors 
                including but not limited to your qualifications, market conditions, employer preferences, 
                and economic factors beyond our control.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Geographic Limitations</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                While we focus primarily on jobs in India and remote positions globally, the availability 
                and legality of employment opportunities may vary by location. Users are responsible for 
                ensuring they meet all legal requirements for employment in their respective jurisdictions.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Verification Process</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Our team works to verify job listings from trusted sources, but we cannot guarantee that 
                all listings are completely accurate or up-to-date. Job seekers should:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed mb-4">
                <li>Verify job details directly with the hiring company</li>
                <li>Research companies before applying</li>
                <li>Be cautious of job postings that seem too good to be true</li>
                <li>Never pay fees to apply for legitimate job positions</li>
                <li>Report suspicious job listings to our team</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Disclaimers</h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Availability</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We strive to maintain high website availability but do not guarantee:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed mb-4">
                <li>Uninterrupted access to our services</li>
                <li>Error-free functionality at all times</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Prevention of technical issues or downtime</li>
                <li>Real-time updates of all job listings</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">No Employment Relationship</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Jobs AI is not an employer and does not participate in hiring decisions. We are solely 
                a job aggregation platform that connects job seekers with potential employers. All 
                employment relationships are between job seekers and the respective hiring companies.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Advice and Information</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Any career advice, tips, or guidance provided on our platform is for informational 
                purposes only and should not be considered professional career counseling. Individual 
                circumstances vary, and what works for one person may not work for another. We recommend 
                consulting with qualified career professionals for personalized advice.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In no event shall Jobs AI, its officers, directors, employees, or agents be liable for:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed mb-4">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Employment disputes or workplace issues</li>
                <li>Decisions made based on information from our platform</li>
                <li>Technical failures or security breaches</li>
                <li>Actions or omissions of third-party employers or job boards</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Consent</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                By using our website, you hereby consent to our disclaimer and agree to its terms.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Should we update, amend or make any changes to this document, those changes will be 
                prominently posted here with an updated "Last updated" date.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">If you have questions about this disclaimer, please contact us:</p>
              <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed mb-4">
                <li><strong>Email:</strong> jobsai2001@gmail.com</li>
                <li><strong>Website:</strong> https://jobsai.in</li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">
                      Important Reminder
                    </h3>
                    <p className="text-red-800">
                      Always exercise due diligence when applying for jobs or sharing personal 
                      information. Be cautious of fraudulent job postings and never pay fees 
                      to apply for legitimate positions. Report any suspicious activity to our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/terms"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Terms of Service</h3>
              <p className="text-gray-600 text-sm">
                Read our complete terms and conditions for using Jobs AI.
              </p>
            </Link>

            <Link 
              href="/privacy"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">
                Learn how we protect and handle your personal information.
              </p>
            </Link>

            <Link 
              href="/contact"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <Info className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">
                Have questions about our policies or need assistance?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;