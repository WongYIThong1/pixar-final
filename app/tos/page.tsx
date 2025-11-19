import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';

export default function TOSPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="p-6 md:p-10">
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By engaging CodeCraft Pro for website development, software development, or related
                  services, you agree to these Terms of Service. These terms constitute a legally
                  binding agreement between you (the &quot;Client&quot;) and CodeCraft Pro (the &quot;Service Provider&quot;).
                  If you do not agree to these terms, please do not proceed with any services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CodeCraft Pro provides professional development services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Website design and development</li>
                  <li>Custom software development</li>
                  <li>API development and integration</li>
                  <li>Hosting and infrastructure management</li>
                  <li>Domain registration and management</li>
                  <li>Ongoing maintenance and support</li>
                  <li>Technical consulting</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Specific services will be detailed in individual project proposals and contracts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Project Scope and Changes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Each project begins with a detailed scope of work outlining deliverables, timeline,
                  and costs. Any changes to the agreed scope must be requested in writing and may
                  result in additional fees and timeline adjustments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Scope creep protection: Minor clarifications are included, but substantial additions
                  require a formal change order. We will notify you immediately if requested changes
                  fall outside the original scope.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Standard payment structure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>30% deposit required to begin work</li>
                  <li>40% due at midpoint milestone</li>
                  <li>30% due upon completion before final delivery</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Invoices are due within 7 days of receipt. Late payments may result in project
                  suspension and 1.5% monthly interest charges. Monthly maintenance fees are billed
                  automatically on the first of each month.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are in USD unless otherwise specified. Prices do not include applicable
                  taxes, which are the Client&apos;s responsibility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate information, content, and materials needed for the project</li>
                  <li>Respond to requests for feedback within agreed timeframes</li>
                  <li>Review deliverables and provide timely feedback</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Maintain confidentiality of access credentials</li>
                  <li>Ensure content provided does not violate copyrights or trademarks</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Delays caused by late Client feedback or materials may extend project timelines
                  without penalty to the Service Provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon full payment, the Client receives full ownership of the final deliverables
                  including design, code, and content specific to their project. This excludes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Third-party libraries, frameworks, and tools (subject to their own licenses)</li>
                  <li>Service Provider&apos;s proprietary tools and methodologies</li>
                  <li>Reusable code components and templates</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  The Service Provider retains the right to showcase completed work in portfolios
                  and marketing materials unless confidentiality is specifically agreed upon.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Hosting and Maintenance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monthly maintenance plans include hosting, security updates, backups, and technical
                  support. Plans are billed monthly and can be cancelled with 30 days notice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cancellation of maintenance: Upon cancellation, the Service Provider will provide
                  all necessary files and documentation for transfer. The Client is responsible for
                  arranging alternative hosting.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Service Provider guarantees 99.9% uptime excluding scheduled maintenance and force
                  majeure events. Downtime credits may be provided for extended outages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Service Provider warrants that services will be performed professionally and in
                  accordance with industry standards. We guarantee bug-free operation for 30 days
                  after launch, with free fixes for any defects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, we cannot guarantee specific business results, search engine rankings,
                  traffic volumes, or sales. The Service Provider is not responsible for issues
                  arising from Client modifications, third-party integrations, or force majeure events.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Service Provider&apos;s total liability for any claim shall not exceed the total amount
                  paid by the Client for the specific project or service giving rise to the claim.
                  We are not liable for indirect, incidental, special, or consequential damages
                  including lost profits, data loss, or business interruption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain confidentiality of proprietary information shared
                  during the project. This includes business strategies, technical implementations,
                  and sensitive data. Confidentiality obligations survive project completion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate the agreement with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Client pays for all work completed to date</li>
                  <li>Service Provider delivers all completed work and source files</li>
                  <li>Unused deposits are refunded within 30 days</li>
                  <li>Both parties return confidential materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes shall first be addressed through good-faith negotiation. If
                  unresolved, disputes will be settled through binding arbitration in accordance
                  with applicable arbitration rules. Legal fees may be awarded to the prevailing party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Service Provider reserves the right to update these Terms of Service. Existing
                  projects continue under the terms agreed at project start. New projects will be
                  subject to current terms. Significant changes will be communicated via email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, contact us at:
                  <br />
                  Email: hello@codecraftpro.dev
                </p>
              </section>

              <div className="pt-8 border-t mt-12">
                <p className="text-sm text-muted-foreground italic">
                  By engaging our services, you acknowledge that you have read, understood, and
                  agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  );
}
