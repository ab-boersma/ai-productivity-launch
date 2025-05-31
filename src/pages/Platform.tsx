
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Search, 
  Workflow, 
  Shield, 
  Plug,
  Code,
  CheckCircle,
  Slack,
  Zap,
  Play,
  FileText,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";

export default function Platform() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center animate-fade-up">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Platform Overview</Badge>
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              AI Productivity Layer for Legal Teams
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Three specialized AI associates working together to transform your legal workflow. 
              Built for teams that need enterprise capabilities without enterprise complexity.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* White Shoe Co-Counsel Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-slate-docket text-pure-white">Core AI Assistant</Badge>
              <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl mb-6">
                White Shoe Co-Counsel
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your AI legal research assistant that understands context and nuance. 
                Natural conversation meets sophisticated legal analysis.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Natural language legal queries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">IRAC-structured analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Multi-jurisdiction research</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Citation tracking & verification</span>
                </div>
              </div>

              <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white">
                <Play className="h-4 w-4 mr-2" />
                Watch Co-Counsel in Action
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Co-Counsel Screenshot</p>
                  <p className="text-sm text-gray-400">Upload screenshot here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Shoe Associates Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Specialized AI Team</Badge>
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              White Shoe Associates
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized AI assistants that handle specific legal workflows with expert precision.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Issue Spotter Associate */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                    <Search className="h-6 w-6 text-pure-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Issue Spotter Associate</CardTitle>
                    <p className="text-sm text-gray-500">Document Review Specialist</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Automated document review that catches what humans miss. Risk analysis, 
                  compliance gaps, and suggested remediation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Contract risk analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Compliance detection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Risk scoring</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                  </div>
                  
                  <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Screenshot</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workflow Automation Associate */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                    <Workflow className="h-6 w-6 text-pure-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Workflow Associate</CardTitle>
                    <p className="text-sm text-gray-500">Process Automation Expert</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Streamline repetitive tasks and integrate with your existing tools. 
                  Document generation, approvals, and deadline tracking.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Document generation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Approval workflows</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Deadline tracking</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                  </div>
                  
                  <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <Workflow className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Screenshot</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Platform Connectivity</Badge>
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Seamless Integrations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with tools your team already uses. Native integrations and powerful APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Plug className="h-6 w-6 text-slate-docket" />
                  Native Integrations
                </CardTitle>
                <CardDescription>
                  Connect with tools your team already uses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <Slack className="h-5 w-5" />
                    <span className="text-sm">Slack</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-sm">Microsoft Teams</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm">Zapier</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <Code className="h-5 w-5" />
                    <span className="text-sm">REST API</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Plus integrations with popular CLM systems, document repositories, and legal tech platforms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-slate-docket" />
                  API & Webhooks
                </CardTitle>
                <CardDescription>
                  Build custom integrations with our developer-friendly API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <pre className="text-xs text-gray-600 overflow-x-auto">
{`{
  "query": "Review this NDA",
  "document_id": "doc_123",
  "response_format": "IRAC"
}`}
                  </pre>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• RESTful API with OpenAPI specification</li>
                  <li>• Webhook support for real-time updates</li>
                  <li>• SDKs for Python, JavaScript, and more</li>
                  <li>• Comprehensive documentation and examples</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Enterprise Security</Badge>
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Bank-Grade Data Security
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your data stays yours, always. Built with enterprise security from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-slate-docket" />
                  Enterprise Security
                </CardTitle>
                <CardDescription>
                  Bank-grade security for your most sensitive legal data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">SOC 2 Type II compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Zero-knowledge architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">GDPR & CCPA compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Regular security audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-slate-docket" />
                  Data Protection
                </CardTitle>
                <CardDescription>
                  Your data stays yours, always
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">No training on your data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Data residency options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Automatic data deletion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Access controls & audit logs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">On-premise deployment available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Security Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-slate-docket rounded-lg">
                <Shield className="h-6 w-6 text-pure-white" />
              </div>
              <p className="text-2xl font-bold text-midnight-brief">99.9%</p>
              <p className="text-sm text-gray-600">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-slate-docket rounded-lg">
                <Clock className="h-6 w-6 text-pure-white" />
              </div>
              <p className="text-2xl font-bold text-midnight-brief">24/7</p>
              <p className="text-sm text-gray-600">Security monitoring</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-slate-docket rounded-lg">
                <Users className="h-6 w-6 text-pure-white" />
              </div>
              <p className="text-2xl font-bold text-midnight-brief">500+</p>
              <p className="text-sm text-gray-600">Legal teams protected</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-slate-docket rounded-lg">
                <TrendingUp className="h-6 w-6 text-pure-white" />
              </div>
              <p className="text-2xl font-bold text-midnight-brief">Zero</p>
              <p className="text-sm text-gray-600">Data breaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Ready to Transform Your Legal Workflow?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join legal teams that are already saving 8+ hours per week with White Shoe AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing" className="text-sm font-semibold leading-6 text-midnight-brief hover:text-slate-docket transition-colors">
                View pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
