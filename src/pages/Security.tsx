import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye,
  Server,
  FileCheck,
  Users,
  Globe,
  CheckCircle,
  Download,
  AlertTriangle,
  Database,
  TestTube,
  UserCheck
} from "lucide-react";

const protectionMeasures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our platform is built on trusted cloud infrastructure providers that maintain SOC 2 compliance and other certifications."
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    description: "Granular access controls ensure users can only access the data they need."
  },
  {
    icon: TestTube,
    title: "Security Testing",
    description: "We regularly test our systems to identify and address potential vulnerabilities."
  },
  {
    icon: Database,
    title: "Data Isolation",
    description: "Client data is logically isolated to prevent unauthorized access between organizations."
  },
  {
    icon: Shield,
    title: "Privacy By Design",
    description: "Security and privacy considerations are built into our development process from the start."
  }
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Security, availability, and confidentiality controls",
    status: "Certified"
  },
  {
    name: "GDPR Compliance",
    description: "European data protection regulation compliance",
    status: "Compliant"
  },
  {
    name: "CCPA Compliance", 
    description: "California Consumer Privacy Act compliance",
    status: "Compliant"
  },
  {
    name: "ISO 27001",
    description: "Information security management standard",
    status: "In Progress"
  }
];

const faqs = [
  {
    question: "Do you train AI models on our data?",
    answer: "No, never. We use a zero-knowledge architecture where your data is processed for your specific requests only and is never used to train or improve our AI models. Your confidential information remains completely private."
  },
  {
    question: "Where is our data stored?",
    answer: "Data is stored in SOC 2 certified data centers with multiple geographic options. Enterprise customers can choose specific regions or opt for on-premise deployment for complete control."
  },
  {
    question: "How do you handle data deletion?",
    answer: "Data is automatically deleted according to your retention policies. You can request immediate deletion at any time. We provide cryptographic proof of deletion for compliance requirements."
  },
  {
    question: "What access controls are available?",
    answer: "We provide role-based access control with granular permissions, single sign-on (SSO) integration, multi-factor authentication (MFA), and comprehensive audit logging of all user actions."
  },
  {
    question: "How often are security audits performed?",
    answer: "We undergo annual SOC 2 audits, quarterly penetration testing, and continuous security monitoring. Enterprise customers can request additional audits or provide their own security assessments."
  },
  {
    question: "What happens in case of a security incident?",
    answer: "We have a comprehensive incident response plan with immediate notification protocols. All incidents are contained, investigated, and reported according to regulatory requirements and customer agreements."
  }
];

export default function Security() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center animate-fade-up">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Security</Badge>
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              Bank-Grade Security for Your Legal Data
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your most sensitive legal information deserves the highest level of protection. 
              We've built enterprise-grade security from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* How We Protect Your Data */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              How We Protect Your Data
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Security is fundamental to our platform. We've implemented comprehensive measures to protect your data at every level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {protectionMeasures.map((measure) => (
              <Card key={measure.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                      <measure.icon className="h-6 w-6 text-pure-white" />
                    </div>
                    <CardTitle className="text-lg">{measure.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Security Philosophy */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl mb-6">
                Our Security Philosophy
              </h2>
              <p className="text-xl leading-8 text-gray-700 max-w-3xl mx-auto">
                White Shoe is designed to help legal teams work confidently with their sensitive data. 
                We follow security best practices and focus on these key areas:
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Key Areas */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-slate-docket/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-slate-docket/20 transition-colors">
                    <div className="w-2 h-2 bg-slate-docket rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-midnight-brief">Privacy-first design and development</h3>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-slate-docket/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-slate-docket/20 transition-colors">
                    <div className="w-2 h-2 bg-slate-docket rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-midnight-brief">Secure cloud infrastructure from trusted providers</h3>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-slate-docket/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-slate-docket/20 transition-colors">
                    <div className="w-2 h-2 bg-slate-docket rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-midnight-brief">Continuous monitoring and proactive security measures</h3>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-slate-docket/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-slate-docket/20 transition-colors">
                    <div className="w-2 h-2 bg-slate-docket rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-midnight-brief">Transparent data handling and privacy policies</h3>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-slate-docket/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-slate-docket/20 transition-colors">
                    <div className="w-2 h-2 bg-slate-docket rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-midnight-brief">Regular security reviews</h3>
                  </div>
                </div>
              </div>

              {/* Understanding Our Approach Card */}
              <div className="lg:mt-0 mt-8">
                <Card className="bg-gradient-to-br from-slate-docket/5 to-slate-docket/10 border-slate-docket/20 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-slate-docket rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-pure-white" />
                      </div>
                      <CardTitle className="text-xl text-midnight-brief">Understanding Our Approach</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 leading-relaxed text-base">
                      We're committed to continuously improving our security practices as we grow. We work with 
                      infrastructure providers who maintain rigorous compliance certifications while we focus on 
                      building secure application-level protections for your data.
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-docket/20">
                      <div className="flex items-center gap-2 text-sm text-slate-docket font-medium">
                        <CheckCircle className="h-4 w-4" />
                        <span>Security-first development approach</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Certifications & Compliance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We maintain the highest standards of security and compliance across global regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    {cert.status === "Certified" || cert.status === "Compliant" ? (
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-8 w-8 text-yellow-600" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-midnight-brief mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {cert.description}
                  </p>
                  <Badge 
                    variant={cert.status === "In Progress" ? "secondary" : "outline"}
                    className={cert.status !== "In Progress" ? "bg-green-100 text-green-800" : ""}
                  >
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Details */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl mb-6">
                Data Protection Architecture
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-docket rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-midnight-brief mb-2">Encryption at Every Layer</h3>
                    <p className="text-gray-600">Data is encrypted using AES-256 in transit via TLS 1.3 and at rest with rotating keys managed by hardware security modules (HSMs).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-docket rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-midnight-brief mb-2">Network Isolation</h3>
                    <p className="text-gray-600">Each customer's data is processed in isolated environments with dedicated encryption keys and network segmentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-docket rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-midnight-brief mb-2">Access Controls</h3>
                    <p className="text-gray-600">Role-based access with principle of least privilege, MFA requirements, and comprehensive audit logging of all system access.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-slate-docket" />
                  Security Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div>
                    <p className="font-medium text-sm">SOC 2 Type II Report</p>
                    <p className="text-xs text-gray-500">Independent security audit results</p>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div>
                    <p className="font-medium text-sm">Security Whitepaper</p>
                    <p className="text-xs text-gray-500">Detailed technical architecture</p>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div>
                    <p className="font-medium text-sm">Penetration Test Results</p>
                    <p className="text-xs text-gray-500">Third-party security assessment</p>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Security FAQ
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Common questions about our security practices and data protection.
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-midnight-brief hover:text-slate-docket">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Security Questions?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our security team is here to answer any questions about our data protection practices 
              and compliance capabilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Contact Security Team
                </Button>
              </Link>
              <Button variant="outline" className="border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white">
                <Download className="h-4 w-4 mr-2" />
                Security Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
