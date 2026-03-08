import Layout from "@/components/Layout";

const TermsOfService = () => (
  <Layout>
    <section className="container py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
      <p className="text-muted-foreground mb-6">Last updated: March 8, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using the services provided by James Tech Solution ("Company," "we," "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
          <p>James Tech Solution provides software development, cloud solutions, data analytics, consulting, and related technology services. The specific scope, deliverables, and timelines for each project will be outlined in a separate service agreement or statement of work.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Client Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Provide accurate and complete information required for service delivery</li>
            <li>Cooperate with our team and provide timely feedback</li>
            <li>Ensure you have the necessary rights to any content or data you provide</li>
            <li>Use our services only for lawful purposes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
          <p>Unless otherwise agreed in writing, all intellectual property rights in deliverables created by James Tech Solution shall transfer to the client upon full payment. We retain the right to use general knowledge, skills, and experience gained during the engagement.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Payment Terms</h2>
          <p>Payment terms will be specified in the applicable service agreement. Unless otherwise stated, invoices are due within 30 days of issuance. Late payments may incur additional charges as specified in the agreement.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Confidentiality</h2>
          <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of the agreement.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, James Tech Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
          <p>Either party may terminate a service agreement with 30 days' written notice. Upon termination, the client shall pay for all services rendered up to the date of termination. Provisions that by their nature should survive termination shall remain in effect.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia. Any disputes shall be resolved through arbitration in Addis Ababa, Ethiopia.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
          <p>For questions about these Terms of Service, please contact:</p>
          <p className="mt-2 font-medium text-foreground">James Tech Solution<br />Addis Ababa, Ethiopia<br />Email: info@jamestechsolution.com</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
