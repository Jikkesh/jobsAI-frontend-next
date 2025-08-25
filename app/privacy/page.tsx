/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jobs AI',
  description: 'Learn how Jobs AI operates with minimal data collection. Read our privacy policy for job seekers.',
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto h-16 w-16 text-blue-600 mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              We believe in minimal data collection and maximum user privacy.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy for Jobs AI</h2>
              <p className="text-base text-gray-700 mb-4">
                Jobs AI ("us", "we", or "our") operates the jobsai.in website (the "Service"). 
                This page explains our approach to data collection and privacy when you use our Service.
              </p>

              <p className="text-base text-gray-700 mb-4">
                <strong>Our Philosophy:</strong> We believe that job searching should be private and hassle-free. 
                As a platform created by a former job seeker for job seekers, we operate with minimal data 
                collection and maximum respect for your privacy. By using the Service, you agree to the 
                practices outlined in this policy.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  🛡️ Privacy First Approach
                </h3>
                <p className="text-green-800">
                  <strong>We do NOT collect or store personal information in our database.</strong> Our platform 
                  operates completely open to users without requiring accounts, registrations, or personal data collection.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Information We Do NOT Collect</h2>
              <p className="text-base text-gray-700 mb-4">
                Unlike many job platforms, Jobs AI does <strong>NOT</strong> collect or store:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li>User accounts or profiles</li>
                <li>Personal contact information in our database</li>
                <li>Resumes or CVs</li>
                <li>Job application data</li>
                <li>Email addresses for marketing purposes</li>
                <li>User preferences or search history in our database</li>
                <li>Payment information (we're completely free)</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Limited Information We Handle</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2.1 Contact Form Submissions</h3>
              <p className="text-base text-gray-700 mb-4">
                When you use our contact form to send feedback or inquiries:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>What happens:</strong> Your message is sent directly to our email (jobsai2001@gmail.com)</li>
                <li><strong>What we store:</strong> Nothing in our database - messages are only stored in our email</li>
                <li><strong>Purpose:</strong> To review user feedback and improve our service</li>
                <li><strong>Retention:</strong> Email messages are retained as per standard email practices</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2.2 Google Analytics Data</h3>
              <p className="text-base text-gray-700 mb-4">
                We use Google Analytics to understand how our website is used:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>Collected by:</strong> Google (not stored in our database)</li>
                <li><strong>Purpose:</strong> To understand website traffic and improve user experience</li>
                <li><strong>Data type:</strong> Anonymous usage patterns, page views, general location data</li>
                <li><strong>Your control:</strong> You can disable this through browser settings or ad blockers</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2.3 Telegram Channel Subscription</h3>
              <p className="text-base text-gray-700 mb-4">
                We operate a Telegram channel for job updates:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>Completely optional:</strong> Subscribe only if you want instant job updates</li>
                <li><strong>Managed by:</strong> Telegram (we don't store your Telegram information)</li>
                <li><strong>Your control:</strong> You can leave the channel anytime directly through Telegram</li>
                <li><strong>No email required:</strong> This is separate from any email subscriptions</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. How We Operate Without Data Collection</h2>
              <p className="text-base text-gray-700 mb-4">
                Our service model is designed to work without collecting personal data:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>Job Verification:</strong> Our team manually verifies and curates job listings</li>
                <li><strong>No Employer Payments:</strong> We don't get paid by employers - this is a free service for job seekers</li>
                <li><strong>Open Access:</strong> All job listings are freely accessible without registration</li>
                <li><strong>External Applications:</strong> When you apply, you're redirected to company websites or job boards</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Data Sharing and Disclosure</h2>
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4.1 What We Cannot Share (Because We Don't Have It)</h3>
              <p className="text-base text-gray-700 mb-4">
                Since we don't collect or store personal information in our database, we have nothing to share with:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li>Employers or recruiters</li>
                <li>Marketing companies</li>
                <li>Data brokers</li>
                <li>Third-party services (beyond Google Analytics)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">4.2 Legal Compliance</h3>
              <p className="text-base text-gray-700 mb-4">
                In rare cases where legally required, we may need to provide:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li>Contact form emails (if subpoenaed)</li>
                <li>Website access logs (for security purposes)</li>
                <li>Any information required by Indian law enforcement</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Cookies and Tracking</h2>
              <p className="text-base text-gray-700 mb-4">
                We use minimal cookies and tracking:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Google Analytics Cookies:</strong> For anonymous usage statistics</li>
                <li><strong>No Advertising Cookies:</strong> We don't track users for advertising purposes</li>
                <li><strong>No Social Media Pixels:</strong> We don't use Facebook, LinkedIn, or other tracking pixels</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. External Links and Applications</h2>
              <p className="text-base text-gray-700 mb-4">
                When you click on job application links:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>You leave our platform:</strong> You'll be redirected to company websites, LinkedIn, Naukri, etc.</li>
                <li><strong>Their privacy policies apply:</strong> We're not responsible for external site practices</li>
                <li><strong>No tracking:</strong> We don't track what you do on external sites</li>
                <li><strong>Apply directly:</strong> Your applications go directly to employers, not through us</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Your Privacy Rights</h2>
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">7.1 What Rights You Have</h3>
              <p className="text-base text-gray-700 mb-4">Since we don't store personal data:</p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>No data to delete:</strong> We don't have personal data in our database to delete</li>
                <li><strong>No account to deactivate:</strong> We don't have user accounts</li>
                <li><strong>Contact form emails:</strong> You can request deletion of specific email communications</li>
                <li><strong>Telegram channel:</strong> Leave anytime directly through Telegram</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">7.2 Google Analytics Opt-out</h3>
              <p className="text-base text-gray-700 mb-4">
                To opt-out of Google Analytics tracking:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li>Use browser privacy/incognito mode</li>
                <li>Install ad blockers or privacy extensions</li>
                <li>Disable cookies in your browser settings</li>
                <li>Use Google Analytics Opt-out Browser Add-on</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Data Security</h2>
              <p className="text-base text-gray-700 mb-4">
                Our security approach is simple - we can't lose what we don't store:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>No database breaches possible:</strong> We don't store personal data</li>
                <li><strong>SSL encryption:</strong> All website communications are encrypted</li>
                <li><strong>Secure hosting:</strong> Our website is hosted securely</li>
                <li><strong>Email security:</strong> Contact form emails are handled through secure email services</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Children's Privacy</h2>
              <p className="text-base text-gray-700 mb-4">
                Our service is intended for job seekers aged 18 and above. We do not knowingly collect 
                information from children under 18. Since we don't collect personal information in our 
                database, this risk is minimized.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Geographic Scope and Compliance</h2>
              <p className="text-base text-gray-700 mb-4">
                Jobs AI primarily serves job seekers in India and globally for remote positions. We comply 
                with Indian privacy laws, including the Information Technology Act, 2000, and upcoming 
                Personal Data Protection regulations.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">11. Our Commitment to Job Seekers</h2>
              <p className="text-base text-gray-700 mb-4">
                As a platform created by a former job seeker:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>Always free:</strong> We'll never charge job seekers</li>
                <li><strong>No spam:</strong> We don't have your email to spam you</li>
                <li><strong>Quality jobs:</strong> Our team manually verifies every job listing</li>
                <li><strong>User-first approach:</strong> Decisions are made with job seekers' best interests in mind</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">12. Changes to This Privacy Policy</h2>
              <p className="text-base text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated "Last updated" date. Since we don't collect email addresses, we cannot notify 
                you directly of changes.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">13. Contact Us</h2>
              <p className="text-base text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our practices:
              </p>
              <ul className="list-disc pl-6 text-base text-gray-700 mb-4 space-y-2">
                <li><strong>Email:</strong> jobsai2001@gmail.com</li>
                <li><strong>Website:</strong> https://jobsai.in</li>
                <li><strong>Response time:</strong> We typically respond within 24-48 hours</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Our Promise to You
                </h3>
                <p className="text-blue-800 mb-3">
                  We're committed to keeping job searching simple, private, and free. As job seekers ourselves, 
                  we understand the importance of privacy in your career journey.
                </p>
                <p className="text-blue-800 font-semibold">
                  No accounts. No data collection. No hassle. Just jobs.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Summary: What This Means for You
                </h3>
                <p className="text-gray-700">
                  • Browse jobs completely anonymously<br/>
                  • No registration or personal data required<br/>
                  • Optional Telegram channel for job updates<br/>
                  • Contact us only if you want to provide feedback<br/>
                  • Apply directly to employers through their websites<br/>
                  • Your privacy is protected by design
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/terms"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <Lock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Terms of Service</h3>
              <p className="text-gray-600 text-sm">
                Read our terms and conditions for using Jobs AI services.
              </p>
            </Link>

            <Link
              href="/disclaimer"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <Eye className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
              <p className="text-gray-600 text-sm">
                Important disclaimers about our services and content.
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Have questions? Get in touch with our support team.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;