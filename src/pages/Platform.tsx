import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  TrendingUp,
  Scale,
  Briefcase,
  Building,
  Gavel,
  Globe,
  Lock,
  Target,
  Brain,
  Calculator,
  Database,
  Eye,
  Book,
  Landmark,
  UserCheck,
  Award,
  Lightbulb,
  BarChart,
  FileSearch,
  Handshake,
  Mail
} from "lucide-react";

// All Associates data organized by practice area
const allAssociates = [
  // Corporate & Securities
  {
    id: 1,
    name: "Corporate Secretary",
    specialty: "Corporate Governance Specialist",
    icon: Building,
    description: "Streamline corporate governance with AI-powered documentation tools. Draft professional board minutes from transcripts, generate formal board resolutions, and create unanimous written consents.",
    category: "Corporate & Securities",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    name: "Funding Navigator",
    specialty: "Corporate Funding Expert",
    icon: TrendingUp,
    description: "AI-powered analysis and workflow management for corporate funding transactions. Analyze term sheets, SAFE notes, and debt agreements with valuation assessment and compliance verification.",
    category: "Corporate & Securities",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    name: "M&A Companion",
    specialty: "M&A Legal Assistant",
    icon: Handshake,
    description: "Your AI-powered M&A legal assistant for due diligence, issue tracking, and document analysis. Streamline mergers and acquisitions with comprehensive AI-driven due diligence support.",
    category: "Corporate & Securities",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 4,
    name: "Investor Relations Manager",
    specialty: "Investor Communications Expert",
    icon: Users,
    description: "Create, review, and manage investor-facing narratives with SEC compliance and disclosure risk assessment. Craft compelling, compliant investor communications.",
    category: "Corporate & Securities",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 5,
    name: "Equity Plan Reviewer",
    specialty: "Equity Compensation Specialist",
    icon: Award,
    description: "Comprehensive equity compensation plan analysis and compliance verification. Ensure your equity plans meet all regulatory requirements with AI-powered analysis.",
    category: "Corporate & Securities",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 6,
    name: "ESG Disclosure Companion",
    specialty: "ESG Compliance Expert",
    icon: Globe,
    description: "Draft and validate ESG/DEI disclosures with smart templates, risk assessment, and regulatory compliance. Navigate the complex ESG disclosure landscape.",
    category: "Corporate & Securities",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  
  // Compliance & Risk Management
  {
    id: 7,
    name: "Issue Spotter",
    specialty: "Risk Detection Specialist",
    icon: Search,
    description: "Identifies key legal risks in internal communications. Protect your organization by analyzing emails, Slack messages, and documents for potential legal exposure.",
    category: "Compliance & Risk",
    categoryColor: "bg-red-100 text-red-800"
  },
  {
    id: 8,
    name: "Compliance Navigator",
    specialty: "Regulatory Compliance Expert",
    icon: Shield,
    description: "Identifies regulatory risks in company policies with multi-jurisdiction analysis. Ensure your policies meet all regulatory requirements with AI scanning for compliance gaps.",
    category: "Compliance & Risk",
    categoryColor: "bg-red-100 text-red-800"
  },
  {
    id: 9,
    name: "Sales & Marketing Approver",
    specialty: "Marketing Compliance Specialist",
    icon: Target,
    description: "AI-driven compliance checkpoint for outbound marketing and sales content. Prevent regulatory violations with automated review of marketing materials and sales presentations.",
    category: "Compliance & Risk",
    categoryColor: "bg-red-100 text-red-800"
  },
  {
    id: 10,
    name: "Corporate Policies Drafter",
    specialty: "Policy Development Expert",
    icon: FileText,
    description: "Generate compliant corporate policies with jurisdiction-aware templates and AI customization. Create comprehensive corporate policies tailored to your jurisdiction and industry.",
    category: "Compliance & Risk",
    categoryColor: "bg-red-100 text-red-800"
  },
  
  // Litigation & Disputes
  {
    id: 11,
    name: "Litigation Risk Modeler",
    specialty: "Litigation Analytics Expert",
    icon: BarChart,
    description: "Predicts lawsuit risks with data-driven analysis and outcome forecasting. Quantify litigation exposure with AI that analyzes historical case outcomes and predicts settlement values.",
    category: "Litigation & Disputes",
    categoryColor: "bg-purple-100 text-purple-800"
  },
  {
    id: 12,
    name: "Court Filing Tracker",
    specialty: "Litigation Monitoring Specialist",
    icon: Gavel,
    description: "Monitors litigation filings with automated docket tracking and case analysis. Stay ahead of litigation trends with automated monitoring of court filings relevant to your industry.",
    category: "Litigation & Disputes",
    categoryColor: "bg-purple-100 text-purple-800"
  },
  {
    id: 13,
    name: "eDiscovery Optimizer",
    specialty: "Document Review Expert",
    icon: FileSearch,
    description: "Prioritizes key documents in eDiscovery with AI-powered relevance scoring. Streamline document review with AI that automatically scores document relevance and detects privilege issues.",
    category: "Litigation & Disputes",
    categoryColor: "bg-purple-100 text-purple-800"
  },
  {
    id: 14,
    name: "Deep Researcher",
    specialty: "Legal Research Expert",
    icon: Book,
    description: "Premium legal research with exhaustive search capabilities and comprehensive analysis. Conduct thorough legal research with AI that searches across multiple databases.",
    category: "Litigation & Disputes",
    categoryColor: "bg-purple-100 text-purple-800"
  },
  
  // Intellectual Property
  {
    id: 15,
    name: "Trademark Tracker",
    specialty: "Brand Protection Specialist",
    icon: Eye,
    description: "Monitors competitor filings and IP risks with global database integration. Protect your brand with automated monitoring of trademark filings worldwide.",
    category: "Intellectual Property",
    categoryColor: "bg-green-100 text-green-800"
  },
  {
    id: 16,
    name: "Patent Prior Art Researcher",
    specialty: "Patent Analysis Expert",
    icon: Lightbulb,
    description: "Conducts comprehensive prior art searches with semantic analysis and visualization. Assess patent viability with AI-powered searches across global patent databases.",
    category: "Intellectual Property",
    categoryColor: "bg-green-100 text-green-800"
  },
  
  // Employment & Immigration
  {
    id: 17,
    name: "Immigration Consultant",
    specialty: "Immigration Law Expert",
    icon: UserCheck,
    description: "Comprehensive immigration case management, compliance monitoring, and strategic guidance. Manage corporate immigration programs with AI-powered case tracking and deadline monitoring.",
    category: "Employment & Immigration",
    categoryColor: "bg-orange-100 text-orange-800"
  },
  {
    id: 18,
    name: "Employee Exit Risk Analyzer",
    specialty: "Employment Risk Specialist",
    icon: Users,
    description: "Reviews exit interviews and departure processes for legal exposure identification. Minimize employment litigation risks by analyzing exit interviews and departure patterns.",
    category: "Employment & Immigration",
    categoryColor: "bg-orange-100 text-orange-800"
  },
  {
    id: 19,
    name: "Employee Handbook Validator",
    specialty: "HR Policy Expert",
    icon: Book,
    description: "Audits employee handbooks for compliance across multiple jurisdictions. Ensure your employee handbook meets all regulatory requirements with AI-powered compliance verification.",
    category: "Employment & Immigration",
    categoryColor: "bg-orange-100 text-orange-800"
  },
  
  // Real Estate & Insurance
  {
    id: 20,
    name: "Realty Advisor",
    specialty: "Real Estate Expert",
    icon: Landmark,
    description: "Comprehensive real estate portfolio analysis and risk assessment. Optimize your real estate portfolio with AI-powered analysis of lease agreements and property risks.",
    category: "Real Estate & Insurance",
    categoryColor: "bg-indigo-100 text-indigo-800"
  },
  {
    id: 21,
    name: "Insurance Policy Analyzer",
    specialty: "Insurance Coverage Expert",
    icon: Shield,
    description: "Analyze corporate insurance policies for comprehensive coverage and risk assessment. Ensure adequate insurance protection with AI that analyzes policy coverage and identifies gaps.",
    category: "Real Estate & Insurance",
    categoryColor: "bg-indigo-100 text-indigo-800"
  },
  
  // Legal Operations & Intelligence
  {
    id: 22,
    name: "Chief Operating Officer",
    specialty: "Legal Operations Expert",
    icon: Briefcase,
    description: "Legal ops command center for building internal operations structures, SOPs, vendor matrices, and KPI dashboards. Transform your legal operations with comprehensive AI-powered management tools.",
    category: "Legal Operations",
    categoryColor: "bg-gray-100 text-gray-800"
  },
  {
    id: 23,
    name: "Invoice Checker",
    specialty: "Legal Spend Analyst",
    icon: Calculator,
    description: "Analyze outside counsel invoices for compliance with billing guidelines and cost optimization. Control legal spend with AI that reviews outside counsel invoices for billing guideline compliance.",
    category: "Legal Operations",
    categoryColor: "bg-gray-100 text-gray-800"
  },
  {
    id: 24,
    name: "Competitor Analyzer",
    specialty: "Competitive Intelligence Expert",
    icon: TrendingUp,
    description: "Analyzes earnings calls and filings for legal risks and strategic insights. Stay ahead of competitive and regulatory risks by analyzing competitor earnings calls and SEC filings.",
    category: "Legal Operations",
    categoryColor: "bg-gray-100 text-gray-800"
  },
  
  // Knowledge & Configuration
  {
    id: 25,
    name: "Firm IQ",
    specialty: "AI Configuration Expert",
    icon: Brain,
    description: "Personalize White Shoe AI with your organization's context, style, and knowledge. Maximize AI effectiveness by configuring your organization's context across three key areas.",
    category: "Knowledge & Config",
    categoryColor: "bg-yellow-100 text-yellow-800"
  }
];

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
              Comprehensive AI associates working together to transform your legal workflow. 
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your AI legal assistant that understands legal context
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Work alongside AI that understands legal nuances and provides expert guidance on any legal topic. 
                Get instant research assistance, case law analysis, regulatory interpretation, contract clause suggestions, 
                and legal memorandum drafting support. Your always-available legal research partner that speaks your language in every practice area.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Instant research assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Case law analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Regulatory interpretation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Contract clause suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Legal memorandum drafting support</span>
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

      {/* Firm IQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-6 bg-slate-docket text-pure-white">AI Configuration</Badge>
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Firm IQ
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Personalize White Shoe AI with your organization's context, style, and knowledge. 
              Maximize AI effectiveness by configuring your organization's context across three key areas.
            </p>
          </div>

          {/* Three Key Areas */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
            {/* Company Profile */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                    <Building className="h-6 w-6 text-pure-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Company Profile</CardTitle>
                    <p className="text-sm text-gray-500">Foundational Context</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Configure foundational context including industry sector, jurisdiction, regulatory environment, 
                  and business structure to ensure AI responses are tailored to your organization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Industry & sector classification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Primary jurisdiction & regulatory framework</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Business structure & entity information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Key compliance requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Style Rules */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                    <FileText className="h-6 w-6 text-pure-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Style Rules</CardTitle>
                    <p className="text-sm text-gray-500">Formatting & Preferences</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Define your organization's preferred formatting, citation styles, terminology, and document 
                  structure to ensure consistent, professional output.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Document formatting preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Citation styles & legal conventions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Preferred terminology & language</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Tone & communication style</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                    <Database className="h-6 w-6 text-pure-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Knowledge Base</CardTitle>
                    <p className="text-sm text-gray-500">Proprietary Intelligence</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Upload and organize your proprietary documents, templates, precedents, and institutional 
                  knowledge to create AI responses grounded in your organization's expertise.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Proprietary document library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Template & precedent collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Institutional knowledge capture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Semantic search & retrieval</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-midnight-brief mb-4">
              Contextual AI That Knows Your Organization
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Firm IQ ensures that every AI interaction is informed by your organization's unique context, style, and knowledge. 
              The result is AI assistance that feels native to your practice, speaks your language, and understands your specific needs.
            </p>
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
              25 specialized AI assistants that handle specific legal workflows with expert precision across every practice area.
            </p>
          </div>

          {/* Featured Associates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-midnight-brief mb-8 text-center">Featured Associates</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Issue Spotter Associate */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                      <Search className="h-6 w-6 text-pure-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Issue Spotter</CardTitle>
                      <p className="text-sm text-gray-500">Risk Detection Specialist</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Identifies key legal risks in internal communications. Protect your organization by analyzing 
                    internal emails, Slack messages, and documents for potential legal exposure with advanced AI 
                    scanning for compliance violations, litigation risks, and policy breaches.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Risk scoring & categorization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Compliance violation detection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Litigation risk identification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Remediation recommendations</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        View Demo
                      </Button>
                    </div>
                    
                    <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <Search className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">Screenshot</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* M&A Companion Associate */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                      <Handshake className="h-6 w-6 text-pure-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">M&A Companion</CardTitle>
                      <p className="text-sm text-gray-500">M&A Legal Assistant</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Your AI-powered M&A legal assistant for due diligence, issue tracking, and document analysis. 
                    Streamline mergers and acquisitions with comprehensive AI-driven due diligence support, 
                    document review automation, and integration planning.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Document review automation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Risk identification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Due diligence checklists</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Integration planning</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        View Demo
                      </Button>
                    </div>
                    
                    <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <Handshake className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">Screenshot</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* All Associates Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-midnight-brief mb-8 text-center">All Associates</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {allAssociates.map((associate) => {
                  const IconComponent = associate.icon;
                  return (
                    <CarouselItem key={associate.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                              <IconComponent className="h-5 w-5 text-pure-white" />
                            </div>
                            <div className="flex-1">
                              <Badge variant="outline" className={`text-xs mb-1 ${associate.categoryColor}`}>
                                {associate.category}
                              </Badge>
                            </div>
                          </div>
                          <h4 className="font-semibold text-lg mb-2 text-midnight-brief">
                            {associate.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-3">
                            {associate.specialty}
                          </p>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {associate.description}
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Platform Benefits</Badge>
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Key Benefits Across All Associates
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Advanced AI capabilities designed specifically for legal professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-slate-docket" />
                  AI-Powered Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced LLM orchestration with Google Gemini and OpenAI integration for sophisticated legal analysis and reasoning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-slate-docket" />
                  Contextual Grounding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Retrieval Augmented Generation (RAG) using your Knowledge Base for personalized, accurate responses tailored to your organization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-slate-docket" />
                  Compliance-First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built-in regulatory awareness and risk assessment across all practice areas and jurisdictions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Workflow className="h-6 w-6 text-slate-docket" />
                  Workflow Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamless integration with existing legal processes and tools, enhancing productivity without disruption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-slate-docket" />
                  Scalable Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From individual tasks to enterprise-wide legal operations, designed to scale with your organization's needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-slate-docket" />
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enterprise-grade security with role-based access control and continuous learning that improves with your organization's data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Platform Connectivity</Badge>
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Core Platform Integrations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with the tools your legal team relies on. Direct integrations for enhanced workflow automation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {/* Carta Integration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-pure-white" />
                </div>
                <CardTitle className="text-xl">Carta Integration</CardTitle>
                <CardDescription>
                  Cap Table & Equity Monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-sm">
                  Connect to Carta to monitor cap table changes and equity plan details. Automate compliance tracking and receive alerts for important updates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Cap table monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Equity plan tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Compliance alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Slack Integration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket mx-auto mb-4">
                  <Slack className="h-6 w-6 text-pure-white" />
                </div>
                <CardTitle className="text-xl">Slack Integration</CardTitle>
                <CardDescription>
                  Communication Analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-sm">
                  Connect to your Slack workspace to analyze communications for legal risks and compliance issues across all channels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Risk detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Compliance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Automated alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gmail Integration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket mx-auto mb-4">
                  <Mail className="h-6 w-6 text-pure-white" />
                </div>
                <CardTitle className="text-xl">Gmail Integration</CardTitle>
                <CardDescription>
                  Email Analysis & Monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-sm">
                  Connect to your Gmail account to analyze emails for legal exposure and ensure compliance with communication policies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email scanning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Risk identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Policy compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Outlook Integration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket mx-auto mb-4">
                  <Mail className="h-6 w-6 text-pure-white" />
                </div>
                <CardTitle className="text-xl">Outlook Integration</CardTitle>
                <CardDescription>
                  Microsoft Email Analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-sm">
                  Connect to Microsoft Outlook to analyze emails for legal risks and maintain compliance across your Microsoft ecosystem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Legal risk analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Microsoft 365 sync</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-midnight-brief mb-4">
              Seamless Data Flow
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              These core integrations enable White Shoe AI to analyze your organization's communications and data in real-time, 
              providing proactive risk detection and compliance monitoring across all your key platforms.
            </p>
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
