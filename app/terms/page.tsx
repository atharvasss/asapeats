import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - ASAP EATS',
  description: 'Terms and conditions for using ASAP EATS services and website.',
}

export default function TermsOfService() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated on December 5, 2023</p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">OVERVIEW</h2>
              
              <p className="mb-6">
                This website is operated by ASAP EATS. Throughout the site, the terms "we", "us" and "our" refer to ASAP EATS. ASAP EATS offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>

              <p className="mb-6">
                By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, click & collect location partners, and/or contributors of content.
              </p>

              <p className="mb-6">
                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SECTION 1 - ONLINE ORDERING TERMS</h2>
              
              <p className="mb-6">
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
              </p>

              <p className="mb-6">
                You may not use our products or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>

              <p className="mb-6">
                A breach or violation of any of the Terms will result in an immediate termination of your Services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SECTION 2 - GENERAL CONDITIONS</h2>
              
              <p className="mb-6">
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>

              <p className="mb-6">
                You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
              </p>

              <p className="mb-6">
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SECTION 3 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
              
              <p className="mb-6">
                Prices for our products are subject to change without notice.
              </p>

              <p className="mb-6">
                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
              </p>

              <p className="mb-6">
                We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                For any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:terms@asapeats.com.au" className="text-orange-600 hover:text-orange-700">
                  terms@asapeats.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

