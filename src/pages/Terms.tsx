import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
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

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using Scholar Homes, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-600 mb-4">
              To use Scholar Homes, you must:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Have a valid .edu email address</li>
              <li>Be a current student, faculty, or staff member at an accredited university</li>
              <li>Provide accurate and complete registration information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Listing Guidelines</h2>
            <p className="text-gray-600 mb-4">
              When creating listings, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Only list properties you have the right to rent or sublet</li>
              <li>Include accurate photos of the property</li>
              <li>Respond to inquiries in a timely manner</li>
              <li>Not engage in discriminatory practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Conduct</h2>
            <p className="text-gray-600 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Post false, misleading, or fraudulent content</li>
              <li>Harass, threaten, or intimidate other users</li>
              <li>Use the service for any illegal purpose</li>
              <li>Attempt to circumvent any security features</li>
              <li>Collect user information without consent</li>
              <li>Post spam or unauthorized advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer</h2>
            <p className="text-gray-600">
              Scholar Homes is a platform that connects students seeking housing. We do not own, manage, or control any properties listed on our platform. We are not responsible for the accuracy of listings, the condition of properties, or any disputes between users. All transactions are conducted directly between users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Scholar Homes shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:support@scholarhomes.com" className="text-primary hover:underline">
                support@scholarhomes.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
