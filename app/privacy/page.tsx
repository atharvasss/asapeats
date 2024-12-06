import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - ASAP EATS',
  description: 'Privacy Policy for ASAP EATS - Learn how we protect and manage your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated on December 5, 2023</p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <p className="mb-6">
                ASAP EATS is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
              </p>

              <p className="mb-6">
                We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
              </p>

              <p className="mb-6">
                A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.aoic.gov.au
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Personal Information and why do we collect it?</h2>
              
              <p className="mb-6">
                Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include names, addresses, email addresses, phone and facsimile numbers.
              </p>

              <p className="mb-6">
                This Personal Information is obtained in many ways including interviews, correspondence, by telephone and facsimile, by email, via our website www.asapeats.com.au, from your website, from media and publications, from other publicly available sources, from cookies and from third parties. We don&apos;t guarantee website links or policy of authorised third parties.
              </p>

              <p className="mb-6">
                We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
              </p>

              <p className="mb-6">
                When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sensitive Information</h2>
              
              <p className="mb-6">
                Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual&apos;s racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.
              </p>

              <p className="mb-6">
                Sensitive information will be used by us only:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>For the primary purpose for which it was obtained</li>
                <li>With your consent</li>
                <li>Where required or authorised by law</li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                For any privacy-related queries, please contact us at{' '}
                <a href="mailto:privacy@asapeats.com.au" className="text-orange-600 hover:text-orange-700">
                  privacy@asapeats.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

