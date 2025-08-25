/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { Scale, FileText, AlertTriangle, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Jobs AI',
  description: 'Read Jobs AI\'s terms of service and user agreement. Understand your rights and responsibilities when using our job search platform.',
  robots: {
    index: true,
    follow: true,
  },
};

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="mx-auto h-16 w-16 text-blue-600 mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
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
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Please read these Terms of Use ("Terms", "Terms of Use") carefully before using 
                the https://jobsai.in website (the "Service") operated by Jobs AI ("us", "we", or "our").
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Your access to and use of the Service is conditioned on your acceptance of and compliance 
                with these Terms. These Terms apply to all visitors, users, and others who access or use 
                the Service. By accessing or using the Service, you agree to be bound by these Terms. 
                If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Description of Service</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Jobs AI is a job aggregation platform that acts as a bridge between company career pages 
                and job seekers. Our services include:
              </p>
              <ul className="list-disc list-inside ml-4 mb-6 text-base text-gray-700 space-y-2">
                <li>Aggregating job listings from trusted sources across India and remote positions globally</li>
                <li>Verifying job listings through our team to ensure legitimacy</li>
                <li>Providing direct links to company career pages, LinkedIn, and other application platforms</li>
                <li>Job search and filtering functionality</li>
                <li>Career-related information and resources</li>
              </ul>

              <p className="text-base md:text-lg text-gray-700 mb-6">
                We source job listings from various companies and provide verified opportunities for job 
                seekers to easily understand and apply for positions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. User Responsibilities and Conduct</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">As a user of Jobs AI, you agree to:</p>
              <ul className="list-disc list-inside ml-4 mb-6 text-base text-gray-700 space-y-2">
                <li>Provide accurate and truthful information when using our services</li>
                <li>Verify job details directly with employers before applying</li>
                <li>Use our platform only for legitimate job search purposes</li>
                <li>Respect the intellectual property rights of Jobs AI and third parties</li>
                <li>Not engage in fraudulent, misleading, or illegal activities</li>
                <li>Not attempt to scrape, copy, or misuse our job listings database</li>
                <li>Report any suspicious or fraudulent job listings to our team</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Job Listings and Applications</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.1 Nature of Our Service</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Jobs AI is a job aggregation platform, not an employer. We collect job listings from 
                various sources and verify them through our team. When you click "Apply," you will be 
                redirected to external websites where the actual application process takes place.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.2 Job Listing Accuracy</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                While we strive to verify all job listings, we cannot guarantee the complete accuracy 
                of job descriptions, requirements, or company information. Job seekers are responsible 
                for verifying all details directly with the hiring companies.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.3 No Employment Guarantee</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                We do not guarantee job placement, interview opportunities, or employment outcomes. 
                All hiring decisions are made by the respective employers, not by Jobs AI.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Links to Other Websites</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Our Service contains links to third-party websites including company career pages, 
                LinkedIn, and other job application platforms that are not owned or controlled by Jobs AI.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Jobs AI has no control over, and assumes no responsibility for, the content, privacy 
                policies, or practices of any third-party websites or services. You further acknowledge 
                and agree that Jobs AI shall not be responsible or liable, directly or indirectly, for 
                any damage or loss caused or alleged to be caused by or in connection with use of or 
                reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                We strongly advise you to read the terms and conditions and privacy policies of any 
                third-party websites or services that you visit.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of Jobs AI and its licensors. The Service is protected by copyright, 
                trademark, and other laws. Our trademarks and trade dress may not be used in connection 
                with any product or service without our prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Geographic Scope</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Our primary focus is on job opportunities in India and remote positions accessible globally. 
                Users are responsible for ensuring they meet all legal requirements for employment in 
                their respective jurisdictions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Privacy and Data Protection</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Your privacy is important to us. Please review our 
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline"> Privacy Policy</Link>, 
                which explains how we collect, use, and protect your information when you use our Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Termination</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                We may terminate or suspend access to our Service immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                All provisions of the Terms which by their nature should survive termination shall survive 
                termination, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and 
                "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether 
                express or implied, including, but not limited to, implied warranties of merchantability, 
                fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Jobs AI, its subsidiaries, affiliates, and its licensors do not warrant that:
              </p>
              <ul className="list-disc list-inside ml-4 mb-6 text-base text-gray-700 space-y-2">
                <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
                <li>Any errors or defects will be corrected</li>
                <li>The Service is free of viruses or other harmful components</li>
                <li>The results of using the Service will meet your requirements</li>
                <li>All job listings are accurate, current, or legitimate</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Limitation of Liability</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                In no event shall Jobs AI, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Indemnification</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                You agree to defend, indemnify, and hold harmless Jobs AI and its licensee and licensors, 
                and their employees, contractors, agents, officers and directors, from and against any and 
                all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including 
                but not limited to attorney's fees).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Governing Law</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                These Terms shall be governed and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions. Our failure to enforce any right or provision of 
                these Terms will not be considered a waiver of those rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Changes to Terms</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                By continuing to access or use our Service after those revisions become effective, you agree 
                to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Contact Information</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-disc list-inside ml-4 mb-6 text-base text-gray-700 space-y-2">
                <li><strong>Email:</strong> jobsai2001@gmail.com</li>
                <li><strong>Website:</strong> https://jobsai.in</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-base text-amber-800">
                      These terms constitute the entire agreement between you and Jobs AI regarding 
                      our Service, and supersede and replace any prior agreements we might have between 
                      us regarding the Service. If any provision is found unenforceable, the remaining 
                      provisions remain in effect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/privacy"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">
                Learn how we collect, use, and protect your personal information.
              </p>
            </Link>

            <Link
              href="/disclaimer"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <AlertTriangle className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
              <p className="text-gray-600 text-sm">
                Important disclaimers and limitations regarding our services.
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <HelpCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">
                Need help understanding our terms? Contact our support team.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;