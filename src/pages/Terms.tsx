import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">Scholar Homes</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-gray-600">
              Welcome to Scholar Homes. These Terms of Service ("Terms") govern your use of the Scholar Homes mobile application and related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility</h2>
            <p className="text-gray-600 mb-4">To use Scholar Homes, you must:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Have a valid .edu email address from an accredited college or university</li>
              <li>Be a current student, faculty member, or staff member at an accredited institution, or have recently graduated</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the Service under applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Account Registration</h2>
            <p className="text-gray-600 mb-4">When creating an account, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Verify your email address through our verification process</li>
              <li>Maintain the security of your password and account credentials</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe to be fraudulent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. The Service</h2>
            <p className="text-gray-600 mb-4">
              Scholar Homes is a platform that connects college students seeking housing with those offering housing. Our Service allows users to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Create and browse housing listings (sublets, rentals, roommate searches)</li>
              <li>Filter listings by university, price, and other criteria</li>
              <li>Communicate directly with other verified users</li>
              <li>Save favorite listings</li>
            </ul>
            <p className="text-gray-600 mt-4">
              <strong>Important:</strong> Scholar Homes is a marketplace platform only. We do not own, manage, or control any properties listed on our platform. We are not a party to any rental agreements or transactions between users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Listing Guidelines</h2>
            <p className="text-gray-600 mb-4">When creating a listing, you represent and warrant that:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You have the legal right to rent, sublet, or offer the property</li>
              <li>All information in your listing is accurate and not misleading</li>
              <li>Photos accurately represent the current condition of the property</li>
              <li>The property meets all applicable housing and safety codes</li>
              <li>You will respond to inquiries in a reasonable timeframe</li>
              <li>Your listing complies with all applicable laws, including fair housing laws</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We reserve the right to remove any listing that violates these guidelines or that we determine, in our sole discretion, is inappropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
            <p className="text-gray-600 mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Post false, misleading, or fraudulent information</li>
              <li>Impersonate another person or misrepresent your affiliation with any entity</li>
              <li>Harass, threaten, or intimidate other users</li>
              <li>Discriminate against any user based on race, color, religion, sex, national origin, disability, familial status, or any other protected class</li>
              <li>Use the Service for any illegal purpose</li>
              <li>Post spam, advertisements, or promotional content unrelated to housing</li>
              <li>Attempt to circumvent our security measures or access other users' accounts</li>
              <li>Scrape, crawl, or use automated means to access the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Collect or harvest user information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Communications Between Users</h2>
            <p className="text-gray-600 mb-4">
              Our in-app messaging system is provided to facilitate communication about housing listings. When using our messaging feature:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Keep communications respectful and relevant to housing inquiries</li>
              <li>Do not share personal financial information (bank accounts, social security numbers)</li>
              <li>Be cautious of potential scams and report suspicious activity</li>
              <li>Do not use messaging for harassment or spam</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not monitor private messages but reserve the right to review reported content and take action against users who violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Fees and Payments</h2>
            <p className="text-gray-600">
              Scholar Homes is currently free to use. We do not charge fees for creating accounts, posting listings, or messaging other users. Any rental payments or deposits are made directly between users outside of our platform. We are not responsible for any financial transactions between users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The Scholar Homes name, logo, and all related names, logos, product and service names, designs, and slogans are our trademarks. You may not use these without our prior written permission.
            </p>
            <p className="text-gray-600">
              By posting content (listings, photos, messages) on the Service, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute that content in connection with operating and promoting the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers</h2>
            <p className="text-gray-600 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-600 mb-4">We do not warrant that:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The Service will be uninterrupted or error-free</li>
              <li>Listings are accurate, complete, or reliable</li>
              <li>Any property meets your expectations or requirements</li>
              <li>Users are who they claim to be</li>
              <li>Transactions between users will be completed successfully</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You are solely responsible for verifying the accuracy of listings and the identity and trustworthiness of other users before entering into any agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCHOLAR HOMES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, ANY TRANSACTION BETWEEN USERS, OR ANY PROPERTY LISTED ON THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify and hold harmless Scholar Homes and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising out of your use of the Service, your violation of these Terms, or your violation of any rights of another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may suspend or terminate your account at any time, with or without cause, and with or without notice. Reasons for termination may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Conduct that harms other users or third parties</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You may delete your account at any time through the app settings. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-600">
              Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive your right to participate in class actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-600">
              We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. General Provisions</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Scholar Homes regarding the Service.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found unenforceable, the remaining provisions will continue in effect.</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer these Terms without our consent. We may assign our rights and obligations without restriction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:support@scholarhomes.com" className="text-blue-500 hover:underline">
                support@scholarhomes.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
