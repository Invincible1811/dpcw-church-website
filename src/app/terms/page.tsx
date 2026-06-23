import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <div className="h-20" />
      <section className="bg-[#faf8f4] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#0f1a2e]/40 text-[13px] mb-10">Last updated: June 2026</p>

          <div className="prose prose-lg max-w-none text-[#2a2a2a]/70 text-[15px] leading-[1.9] space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Divine Peniel Chapel Worldwide website, you accept and agree to be 
                bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">2. Use of Website</h2>
              <p>This website is provided for informational and spiritual purposes. You agree to use it only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Infringe on the rights of others</li>
                <li>Restrict or inhibit anyone&apos;s use of the website</li>
                <li>Attempt to gain unauthorised access to any part of the website</li>
                <li>Transmit any harmful or malicious content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, videos, and design elements — 
                is the property of Divine Peniel Chapel Worldwide and is protected by copyright and intellectual 
                property laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">4. User-Submitted Content</h2>
              <p>
                When you submit information through our contact form, you grant us permission to use that 
                information to respond to your enquiry. We will not share your personal information with 
                third parties without your consent, except as described in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">5. Donations</h2>
              <p>
                All donations made through our website or linked payment platforms are voluntary and 
                non-refundable unless otherwise stated. Donations are used to support the ministry&apos;s 
                operations, outreach programmes, and charitable activities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">6. External Links</h2>
              <p>
                Our website may contain links to external websites (e.g., social media platforms). 
                We are not responsible for the content or privacy practices of these external sites. 
                We encourage you to review their terms and policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">7. Disclaimer</h2>
              <p>
                This website is provided &ldquo;as is&rdquo; without any warranties, express or implied. 
                We do not guarantee that the website will be available at all times or free from errors. 
                We shall not be liable for any damages arising from the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">8. Limitation of Liability</h2>
              <p>
                Divine Peniel Chapel Worldwide shall not be liable for any indirect, incidental, special, 
                or consequential damages resulting from your use of or inability to use this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">9. Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                immediately upon posting. Your continued use of the website after changes constitutes acceptance 
                of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Republic of Ghana. 
                Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Ghana.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0f1a2e] mb-3">11. Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us through our 
                website contact form or visit any of our branch locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
