
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Zap
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

      {/* Platform Tabs */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="associates" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-16">
              <TabsTrigger value="associates">AI Associates</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="security">Data Security</TabsTrigger>
            </TabsList>

            <TabsContent value="associates">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                        <MessageSquare className="h-6 w-6 text-pure-white" />
                      </div>
                      <CardTitle>Co-Counsel Chat</CardTitle>
                    </div>
                    <CardDescription>
                      Your AI legal research assistant that understands context and nuance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Natural language queries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Contextual legal analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Citation tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Multi-jurisdiction support</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-mono text-gray-600">
                        Query: "What are the disclosure requirements for M&A transactions in Delaware?"
                      </p>
                      <div className="mt-2 p-2 bg-white rounded border-l-4 border-slate-docket">
                        <p className="text-xs text-gray-500">AI Response includes IRAC analysis, relevant statutes, and case law...</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                        <Search className="h-6 w-6 text-pure-white" />
                      </div>
                      <CardTitle>Issue Spotter</CardTitle>
                    </div>
                    <CardDescription>
                      Automated document review that catches what humans miss
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Contract risk analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Compliance gap detection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Risk scoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Suggested remediation</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-mono text-gray-600">
                        Document: "Software License Agreement"
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-xs">High: Unlimited liability clause</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs">Medium: Auto-renewal terms</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                        <Workflow className="h-6 w-6 text-pure-white" />
                      </div>
                      <CardTitle>Workflow Automation</CardTitle>
                    </div>
                    <CardDescription>
                      Streamline repetitive tasks and integrate with your existing tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Team notifications</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-mono text-gray-600">
                        Trigger: "New contract uploaded"
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        → Auto-review → Flag issues → Notify stakeholders → Generate summary
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integrations">
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
            </TabsContent>

            <TabsContent value="security">
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
            </TabsContent>
          </Tabs>
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
