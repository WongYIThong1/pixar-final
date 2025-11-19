import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

export default function FAQPage() {
  const faqs = [
    {
      question: 'Are hosting fees included in the project cost?',
      answer: 'Hosting fees are included in your monthly maintenance plan, not in the initial development cost. The maintenance plan covers all hosting infrastructure, server costs, bandwidth, SSL certificates, and ongoing technical support. This ensures your website stays online and secure without surprise bills. We provide transparent pricing upfront so you know exactly what to expect.'
    },
    {
      question: 'How much does a website cost?',
      answer: 'Website costs vary based on complexity, features, and requirements. A basic informational website typically starts at $3,000-$5,000. E-commerce sites or custom web applications range from $8,000-$25,000+. During our initial consultation, we\'ll discuss your specific needs and provide a detailed quote. All quotes include design, development, deployment, and first-month hosting. Ongoing maintenance plans start at $99/month.'
    },
    {
      question: 'How long does development take?',
      answer: 'Timeline depends on project scope. A simple website takes 2-4 weeks from start to launch. More complex websites with custom features need 6-12 weeks. Custom software projects typically require 2-6 months. We provide a detailed project timeline during the planning phase, with clear milestones and regular progress updates. Rush delivery is available for urgent projects at an additional fee.'
    },
    {
      question: 'What\'s included in maintenance?',
      answer: 'Monthly maintenance includes: hosting infrastructure and server management, security updates and patches, regular backups, performance monitoring and optimization, SSL certificate renewal, minor content updates (up to 2 hours/month), technical support via email, and uptime monitoring with 99.9% guarantee. Additional hours for major updates are available at $100/hour. We also provide emergency support for critical issues.'
    },
    {
      question: 'Do you provide domain registration?',
      answer: 'Yes, we handle complete domain services. We can help you find and register the perfect domain, configure DNS settings, set up email forwarding, manage renewals, and transfer existing domains. Domain costs ($10-$50/year depending on extension) are separate from development fees. We recommend registering domains in your name for full ownership, and we manage all technical aspects.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies: TypeScript and JavaScript for robust code, React and Next.js for frontend development, Node.js, Golang, or Python for backends, PostgreSQL or MongoDB for databases, AWS or similar cloud platforms for hosting, and Docker/Kubernetes for scalability. Technology choices are tailored to your specific needs for optimal performance and maintainability.'
    },
    {
      question: 'Can I update the website myself?',
      answer: 'Absolutely! We build content management systems that let you update text, images, and basic content without technical knowledge. We provide comprehensive training and documentation. For more complex changes requiring code modifications, those are handled through your maintenance plan or on a per-project basis.'
    },
    {
      question: 'What happens if my website goes down?',
      answer: 'We monitor uptime 24/7 with automatic alerts. If issues occur, we respond immediately to restore service. Our maintenance plans include a 99.9% uptime guarantee with regular backups, so your data is always safe. Emergency support is available for critical issues. We also provide status updates and transparent communication during any incidents.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment structures. Typical arrangement: 30% deposit to begin, 40% at midpoint milestone, and 30% upon completion and launch. For larger projects ($15,000+), we can arrange custom payment schedules. Monthly maintenance is billed separately. We accept bank transfers, credit cards, and major payment platforms.'
    },
    {
      question: 'Can you work with my existing website?',
      answer: 'Yes, we can update, redesign, or completely rebuild existing websites. We\'ll audit your current site, identify issues and opportunities, propose improvements, and execute a migration plan. We ensure no data loss and minimal downtime during transitions. We can also take over maintenance of sites built by others.'
    },
    {
      question: 'What about mobile compatibility?',
      answer: 'All websites we build are fully responsive and mobile-optimized by default. We test on multiple devices and screen sizes to ensure perfect functionality. We can also build progressive web apps (PWAs) that work like native mobile apps, or develop custom mobile applications when needed.'
    },
    {
      question: 'How do you ensure security?',
      answer: 'Security is built-in from day one: SSL encryption for all traffic, secure authentication and authorization, regular security audits and updates, protection against common vulnerabilities (SQL injection, XSS, CSRF), DDoS protection through cloud infrastructure, regular automated backups, and compliance with industry standards (GDPR, HIPAA when required). We follow OWASP security guidelines.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a href="/#contact">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
