// app/privacy-policy/page.js
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";





export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/">   <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              ← Back to Home 
            </button>
            </Link>
          </div>
        </nav>
  
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: December 2024</p>
            </div>
  
            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy outlines our practices for collecting, using, and safeguarding your data.
                </p>
              </section>
  
              <hr className="border-gray-200" />
  
              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600 mb-3">
                      When you use our services, we may collect the following personal information:
                    </p>
                    <ul className="space-y-2 ml-6 text-gray-600 list-disc">
                      <li>Name and contact details</li>
                      <li>Account credentials</li>
                      <li>Payment information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                </div>
              </section>
  
              <hr className="border-gray-200" />
  
              {/* Data Usage */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
                <p className="text-gray-600 mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span className="select-none">•</span>
                    <span>Providing and maintaining our services, including processing transactions and sending important notifications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="select-none">•</span>
                    <span>Improving and optimizing our services based on user feedback and usage patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="select-none">•</span>
                    <span>Protecting against fraud and maintaining the security of our platform</span>
                  </li>
                </ul>
              </section>
  
              <hr className="border-gray-200" />
  
              {/* Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>
  
              <hr className="border-gray-200" />
  
              {/* Contact Section */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our Privacy Policy or how we handle your data, please don&apos;t hesitate to reach out.
                </p>
                <a 
                  href="mailto:harshankit2410@gmail.com" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Privacy Team
                </a>
              </section>
            </div>
  
            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 py-8">
              <p>© 2024 MyPerfectPg. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    );
  }