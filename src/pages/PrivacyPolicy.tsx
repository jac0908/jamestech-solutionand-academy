import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="container py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: March 8, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and company details when you contact us, request a quote, or use our services. We also collect usage data automatically through cookies and similar technologies, including IP address, browser type, pages visited, and time spent on our site.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you technical notices and support messages</li>
            <li>Communicate about products, services, and events</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent security incidents</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at the information provided below.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
          <p>Our website uses cookies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features on our site.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2 font-medium text-foreground">James Tech Solution<br />Addis Ababa, Ethiopia<br />Email: info@jamestechsolution.com</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
