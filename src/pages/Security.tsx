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

const faqs = [
  {
    question: "Where is my data stored?",
    answer: "Your data is stored with secure cloud providers whose data centers are located in the United States. These providers maintain their own compliance certifications, including SOC 2."
  },
  {
    question: "How do you handle data retention?",
    answer: "We retain your data for as long as you maintain an active account. You can request data deletion at any time, and we'll comply with applicable regulations regarding data retention and deletion."
  },
  {
    question: "How do you handle security incidents?",
    answer: "We have a responsive incident handling process in place. In the event of a security incident, we'll promptly notify affected customers and take appropriate measures to address the issue in accordance with our privacy policy."
  },
  {
    question: "What compliance certifications do you have?",
    answer: "White Shoe is currently working toward formal certifications. We've designed our systems with GDPR and CCPA/CPRA principles in mind, and we utilize infrastructure providers who maintain their own compliance certifications such as SOC 2, ISO 27001, and others."
  },
  {
    question: "Do you offer custom security arrangements for enterprises?",
    answer: "Yes. For enterprise customers, we're happy to discuss specific security requirements and can work with you to address particular compliance needs through custom agreements and security measures."
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
              Your Legal Data, Protected
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              White Shoe is built with security as a priority. We leverage industry best practices to ensure your sensitive legal data remains protected and confidential.
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
