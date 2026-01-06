import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Scholar Homes" className="w-10 h-10 rounded-lg" />
            <span className="font-semibold text-xl text-gray-900">Scholar Homes</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-gray-600">
              Scholar Homes ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Information</h3>
            <p className="text-gray-600 mb-4">When you create an account, we collect:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Your name</li>
              <li>Email address (must be a valid .edu email for verification)</li>
              <li>Password (stored securely using industry-standard encryption)</li>
              <li>University affiliation</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Profile photo (optional)</li>
              <li>University selection</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Listing Information</h3>
            <p className="text-gray-600 mb-4">When you create a housing listing, we collect:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Property photos</li>
              <li>Property description and title</li>
              <li>Address and location information</li>
              <li>Rental price and availability dates</li>
              <li>Property details (bedrooms, bathrooms, amenities)</li>
              <li>Listing type (sublet, rental, roommate wanted)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Communications</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Messages exchanged between users through our in-app messaging system</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Device information (device type, operating system)</li>
              <li>Usage data (features accessed, time spent in app)</li>
              <li>Log data (IP address, access times)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Create and manage your account</li>
              <li>Verify your student status through .edu email verification</li>
              <li>Display your listings to other verified users</li>
              <li>Facilitate communication between users</li>
              <li>Filter and display listings by university</li>
              <li>Send important service notifications (account verification, password resets)</li>
              <li>Improve and optimize our services</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">With Other Users</h3>
            <p className="text-gray-600 mb-4">
              When you create a listing, other verified users can see your listing details, first name, profile photo, and university. When you message another user, they can see your name and profile photo.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Providers</h3>
            <p className="text-gray-600 mb-4">
              We use third-party services to help operate our platform:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Supabase for database hosting, authentication, and file storage</li>
              <li>Cloud hosting providers for app infrastructure</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Requirements</h3>
            <p className="text-gray-600">
              We may disclose your information if required by law, court order, or government request, or to protect the rights, property, or safety of Scholar Homes, our users, or others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-600 mb-4">
              Your data is stored securely using Supabase, which employs industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit (TLS/SSL)</li>
              <li>Encryption of data at rest</li>
              <li>Secure password hashing</li>
              <li>Row-level security policies for database access</li>
            </ul>
            <p className="text-gray-600 mt-4">
              While we implement appropriate security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-600">
              We retain your personal information for as long as your account is active or as needed to provide you services. If you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Update:</strong> Correct or update your account information through the app settings</li>
              <li><strong>Delete:</strong> Delete your account and associated data</li>
              <li><strong>Remove Listings:</strong> Delete any listings you have created</li>
              <li><strong>Opt Out:</strong> Unsubscribe from promotional communications</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, contact us at support@scholarhomes.com or use the account settings within the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600">
              Scholar Homes is intended for college students aged 18 and older. We do not knowingly collect personal information from anyone under 18. If we learn we have collected information from someone under 18, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:{' '}
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
