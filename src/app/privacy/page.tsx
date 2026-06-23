import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="h-20" />
      <section className="bg-[#faf8f4] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#0f1a2e]/40 text-[13px] mb-10">Last updated: June 2026</p>

          <div className="prose prose-lg max-w-none text-[#2a2a2a]/70 text-[15px] leading-[1.9] space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">1. Introduction</h2>
              <p>
                Divine Peniel Chapel Worldwide (&ldquo;D.P.C.W&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) 
                is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard 
                your personal information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">2. Information We Collect</h2>
              <p>We may collect the following information when you voluntarily provide it:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and message content when you submit our contact form.</li>
                <li><strong>Usage Data:</strong> Anonymous information about how you interact with our website, including pages visited and time spent.</li>
                <li><strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your enquiries and prayer requests</li>
                <li>Improve our website and user experience</li>
                <li>Send you updates about church events (only if you opt in)</li>
                <li>Analyse website traffic and usage patterns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">4. Cookies</h2>
              <p>
                Our website uses cookies to remember your preferences and improve functionality. 
                You can choose to accept or decline cookies when prompted. You can also manage cookies 
                through your browser settings at any time.
              </p>
              <p className="mt-3">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">5. Third-Party Services</h2>
              <p>
                Our website may contain embedded content from third-party services (e.g., Facebook, YouTube). 
                These services may collect data about you. We encourage you to review their respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">6. Data Security</h2>
              <p>
                We take appropriate technical and organisational measures to protect your personal data against 
                unauthorised access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Object to the processing of your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">8. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes 
                for which it was collected, or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our website is not directed at children under 13. We do not knowingly collect personal 
                information from children. If you believe we have inadvertently collected such information, 
                please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact us through our website contact form or visit any of our branch locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
