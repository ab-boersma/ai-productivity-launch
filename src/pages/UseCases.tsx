import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FileText, 
  Shield, 
  Users,
  CheckCircle,
  Clock,
  TrendingUp,
  Building2,
  Briefcase,
  Search,
  MessageSquare,
  Scale,
  Eye,
  Lightbulb,
  UserCheck,
  Landmark,
  Calculator,
  Brain,
  Handshake,
  Target,
  BarChart,
  FileSearch,
  Book,
  Gavel,
  Globe,
  Award
} from "lucide-react";

// White Shoe Co-Counsel - appears in ALL practice areas
const coCounsel = {
  id: "co-counsel",
  name: "White Shoe Co-Counsel",
  specialty: "AI Legal Assistant",
  description: "Work alongside AI that understands legal nuances and provides expert guidance on any legal topic. Get instant research assistance, case law analysis, regulatory interpretation, contract clause suggestions, and legal memorandum drafting support. Your always-available legal research partner that speaks your language in every practice area.",
  icon: MessageSquare,
  features: [
    "Instant research assistance",
    "Case law analysis", 
    "Regulatory interpretation",
    "Contract clause suggestions",
    "Legal memorandum drafting support"
  ],
  category: "Universal",
  practiceAreas: ["All Practice Areas"] // Special case - shows in all
};

// All specialized associates
const associates = [
  // Corporate & Securities
  {
    id: "corporate-secretary",
    name: "Corporate Secretary",
    specialty: "Corporate Governance Specialist",
    description: "Transform your corporate governance workflow with AI that drafts professional board minutes from transcripts, generates formal board resolutions for any corporate action, and creates unanimous written consents. Includes director questionnaires, fiduciary duty guidance, and board skills matrix templates.",
    icon: Building2,
    features: [
      "Professional board minutes from transcripts",
      "Formal board resolutions generation",
      "Unanimous written consents",
      "Director questionnaires",
      "Fiduciary duty guidance"
    ],
    category: "Corporate & Securities",
    practiceAreas: ["Corporate & Commercial Law", "Banking & Finance"]
  },
  {
    id: "funding-navigator",
    name: "Funding Navigator",
    specialty: "Corporate Funding Expert",
    description: "Navigate complex funding rounds with confidence. Analyze term sheets, SAFE notes, and debt agreements with AI-powered valuation assessment, liquidation preference analysis, and securities law compliance verification. Includes market benchmarking and risk scoring.",
    icon: TrendingUp,
    features: [
      "Term sheet analysis",
      "SAFE notes and debt agreements review",
      "Valuation assessment",
      "Securities law compliance",
      "Market benchmarking"
    ],
    category: "Corporate & Securities",
    practiceAreas: ["Emerging Companies & Venture Capital", "Capital Markets", "Banking & Finance"]
  },
  {
    id: "ma-companion",
    name: "M&A Companion",
    specialty: "M&A Legal Assistant",
    description: "Streamline mergers and acquisitions with comprehensive AI-driven due diligence support. Analyze transaction documents, identify regulatory compliance issues, track deal progress, and manage integration planning. Features document review automation and risk identification.",
    icon: Handshake,
    features: [
      "Due diligence automation",
      "Transaction document analysis",
      "Regulatory compliance tracking",
      "Deal progress management",
      "Integration planning"
    ],
    category: "Corporate & Securities",
    practiceAreas: ["Corporate & Commercial Law", "Emerging Companies & Venture Capital", "Antitrust & Competition"]
  },
  {
    id: "investor-relations",
    name: "Investor Relations Manager",
    specialty: "Investor Communications Expert",
    description: "Craft compelling, compliant investor communications with AI that understands SEC requirements. Generate earnings call scripts, analyze disclosure adequacy, review forward-looking statements, and ensure consistent messaging across all investor touchpoints.",
    icon: Users,
    features: [
      "SEC-compliant communications",
      "Earnings call scripts",
      "Disclosure adequacy analysis",
      "Forward-looking statement review",
      "Consistent messaging"
    ],
    category: "Corporate & Securities",
    practiceAreas: ["Corporate & Commercial Law", "Capital Markets", "Securities Litigation"]
  },
  {
    id: "equity-plan-reviewer",
    name: "Equity Plan Reviewer",
    specialty: "Equity Compensation Specialist",
    description: "Ensure your equity plans meet all regulatory requirements with AI-powered analysis of vesting terms, SEC compliance verification, tax implication assessment, and industry benchmarking. Reviews documentation completeness and provides optimization recommendations.",
    icon: Award,
    features: [
      "Vesting terms analysis",
      "SEC compliance verification",
      "Tax implication assessment",
      "Industry benchmarking",
      "Documentation completeness review"
    ],
    category: "Corporate & Securities",
    practiceAreas: ["Emerging Companies & Venture Capital", "Compensation & Benefits", "Tax"]
  },
  {
    id: "esg-disclosure",
    name: "ESG Disclosure Companion",
    specialty: "ESG Compliance Expert",
    description: "Navigate the complex ESG disclosure landscape with AI-powered template generation, regulatory compliance checking, and risk assessment. Create comprehensive sustainability reports, diversity disclosures, and environmental impact statements.",
    icon: Globe,
    features: [
      "ESG template generation",
      "Regulatory compliance checking",
      "Sustainability reports",
      "Diversity disclosures",
      "Environmental impact statements"
    ],
    category: "Corporate & Securities",
    practiceAreas: ["Corporate & Commercial Law", "Environmental Law", "Public Law & Government Relations"]
  },

  // Compliance & Risk Management
  {
    id: "issue-spotter",
    name: "Issue Spotter",
    specialty: "Risk Detection Specialist",
    description: "Protect your organization by analyzing internal emails, Slack messages, and documents for potential legal exposure. Advanced AI scans communications for compliance violations, litigation risks, regulatory issues, and policy breaches with actionable remediation recommendations.",
    icon: Search,
    features: [
      "Communication risk analysis",
      "Compliance violation detection",
      "Litigation risk identification",
      "Policy breach monitoring",
      "Remediation recommendations"
    ],
    category: "Compliance & Risk",
    practiceAreas: ["Privacy & Data Protection", "White Collar & Regulatory Defense", "Employment & Labor Law"]
  },
  {
    id: "compliance-navigator",
    name: "Compliance Navigator",
    specialty: "Regulatory Compliance Expert",
    description: "Ensure your policies meet all regulatory requirements with AI that scans for GDPR, CCPA, and other privacy law compliance gaps. Features automated policy analysis, cross-reference checking with current regulations, and real-time regulatory updates.",
    icon: Shield,
    features: [
      "GDPR & CCPA compliance",
      "Automated policy analysis",
      "Regulatory cross-referencing",
      "Real-time updates",
      "Multi-jurisdiction support"
    ],
    category: "Compliance & Risk",
    practiceAreas: ["Privacy & Data Protection", "Healthcare & Life Sciences", "Banking & Finance"]
  },
  {
    id: "sales-marketing-approver",
    name: "Sales & Marketing Approver",
    specialty: "Marketing Compliance Specialist",
    description: "Prevent regulatory violations before they happen with automated review of marketing materials, sales presentations, and customer communications. AI analyzes content for false claims, regulatory compliance, and industry-specific requirements.",
    icon: Target,
    features: [
      "Marketing material review",
      "False claims detection",
      "Regulatory compliance checking",
      "Industry-specific requirements",
      "Brand consistency verification"
    ],
    category: "Compliance & Risk",
    practiceAreas: ["Healthcare & Life Sciences", "Privacy & Data Protection", "Antitrust & Competition"]
  },
  {
    id: "corporate-policies",
    name: "Corporate Policies Drafter",
    specialty: "Policy Development Expert",
    description: "Create comprehensive corporate policies tailored to your jurisdiction and industry with AI-powered template generation. Features smart customization based on company profile, regulatory requirement integration, and automated updates when regulations change.",
    icon: FileText,
    features: [
      "AI-powered template generation",
      "Jurisdiction-aware customization",
      "Regulatory integration",
      "Policy gap analysis",
      "Automated regulatory updates"
    ],
    category: "Compliance & Risk",
    practiceAreas: ["Privacy & Data Protection", "Employment & Labor Law", "Healthcare & Life Sciences"]
  },

  // Litigation & Disputes
  {
    id: "litigation-risk-modeler",
    name: "Litigation Risk Modeler",
    specialty: "Litigation Analytics Expert",
    description: "Quantify litigation exposure with AI that analyzes historical case outcomes, predicts settlement values, and assesses jurisdiction-specific risks. Features litigation probability scoring, cost-benefit analysis of legal strategies, and exposure prediction modeling.",
    icon: BarChart,
    features: [
      "Historical case analysis",
      "Settlement value prediction",
      "Jurisdiction-specific risk assessment",
      "Probability scoring",
      "Cost-benefit analysis"
    ],
    category: "Litigation & Disputes",
    practiceAreas: ["Litigation & Dispute Resolution", "Securities Litigation", "Employment & Labor Law"]
  },
  {
    id: "court-filing-tracker",
    name: "Court Filing Tracker",
    specialty: "Litigation Monitoring Specialist",
    description: "Stay ahead of litigation trends with automated monitoring of court filings relevant to your company and industry. Features real-time docket tracking, case outcome prediction, similar case analysis, and pattern recognition across jurisdictions.",
    icon: Gavel,
    features: [
      "Automated court filing monitoring",
      "Real-time docket tracking",
      "Case outcome prediction",
      "Similar case analysis",
      "Cross-jurisdiction pattern recognition"
    ],
    category: "Litigation & Disputes",
    practiceAreas: ["Litigation & Dispute Resolution", "Securities Litigation", "Intellectual Property"]
  },
  {
    id: "ediscovery-optimizer",
    name: "eDiscovery Optimizer",
    specialty: "Document Review Expert",
    description: "Streamline document review with AI that automatically scores document relevance, detects privilege issues, and clusters related materials. Features smart categorization, advanced search capabilities, and automated redaction suggestions.",
    icon: FileSearch,
    features: [
      "Document relevance scoring",
      "Privilege issue detection",
      "Related material clustering",
      "Smart categorization",
      "Automated redaction suggestions"
    ],
    category: "Litigation & Disputes",
    practiceAreas: ["Litigation & Dispute Resolution", "White Collar & Regulatory Defense", "Securities Litigation"]
  },
  {
    id: "deep-researcher",
    name: "Deep Researcher",
    specialty: "Legal Research Expert",
    description: "Conduct thorough legal research with AI that searches across multiple databases, analyzes case law patterns, and provides comprehensive legal memoranda. Features semantic case law analysis, regulatory interpretation, and precedent tracking.",
    icon: Book,
    features: [
      "Multi-database search",
      "Case law pattern analysis",
      "Comprehensive memoranda",
      "Semantic analysis",
      "Precedent tracking"
    ],
    category: "Litigation & Disputes",
    practiceAreas: ["Litigation & Dispute Resolution", "Intellectual Property", "Tax"]
  },

  // Intellectual Property
  {
    id: "trademark-tracker",
    name: "Trademark Tracker",
    specialty: "Brand Protection Specialist",
    description: "Protect your brand with automated monitoring of trademark filings worldwide. Features real-time alerts for similar marks, infringement risk assessment, competitive intelligence gathering, portfolio management, and renewal tracking.",
    icon: Eye,
    features: [
      "Worldwide trademark monitoring",
      "Real-time similar mark alerts",
      "Infringement risk assessment",
      "Portfolio management",
      "Renewal tracking"
    ],
    category: "Intellectual Property",
    practiceAreas: ["Intellectual Property", "Antitrust & Competition"]
  },
  {
    id: "patent-researcher",
    name: "Patent Prior Art Researcher",
    specialty: "Patent Analysis Expert",
    description: "Assess patent viability with AI-powered searches across global patent databases and technical literature. Features semantic similarity analysis, patent landscape visualization, infringement risk identification, and detailed report generation.",
    icon: Lightbulb,
    features: [
      "Global patent database search",
      "Semantic similarity analysis",
      "Patent landscape visualization",
      "Infringement risk identification",
      "Detailed report generation"
    ],
    category: "Intellectual Property",
    practiceAreas: ["Intellectual Property", "Healthcare & Life Sciences"]
  },

  // Employment & Immigration
  {
    id: "immigration-consultant",
    name: "Immigration Consultant",
    specialty: "Immigration Law Expert",
    description: "Manage corporate immigration programs with AI-powered case tracking, deadline monitoring, and compliance verification. Features multi-visa support (H-1B, L-1, O-1, Green Cards), I-9 compliance tracking, and strategic guidance for complex immigration matters.",
    icon: UserCheck,
    features: [
      "Multi-visa support",
      "Case tracking & deadline monitoring",
      "I-9 compliance tracking",
      "Strategic guidance",
      "Automated reminders"
    ],
    category: "Employment & Immigration",
    practiceAreas: ["Immigration Law", "Employment & Labor Law"]
  },
  {
    id: "employee-exit-analyzer",
    name: "Employee Exit Risk Analyzer",
    specialty: "Employment Risk Specialist",
    description: "Minimize employment litigation risks by analyzing exit interviews, departure patterns, and termination processes. Features risk pattern recognition, non-compete compliance verification, and strategic recommendations for risk mitigation.",
    icon: Users,
    features: [
      "Exit interview analysis",
      "Departure pattern recognition",
      "Non-compete compliance",
      "Discrimination claim identification",
      "Risk mitigation strategies"
    ],
    category: "Employment & Immigration",
    practiceAreas: ["Employment & Labor Law", "Litigation & Dispute Resolution"]
  },
  {
    id: "employee-handbook",
    name: "Employee Handbook Validator",
    specialty: "HR Policy Expert",
    description: "Ensure your employee handbook meets all regulatory requirements with AI-powered compliance verification. Features gap analysis against current regulations, language clarity assessment, and jurisdiction-specific compliance checking.",
    icon: Book,
    features: [
      "Regulatory compliance verification",
      "Gap analysis",
      "Language clarity assessment",
      "Jurisdiction-specific checking",
      "Automated update recommendations"
    ],
    category: "Employment & Immigration",
    practiceAreas: ["Employment & Labor Law", "Privacy & Data Protection"]
  },

  // Real Estate & Insurance
  {
    id: "realty-advisor",
    name: "Realty Advisor",
    specialty: "Real Estate Expert",
    description: "Optimize your real estate portfolio with AI-powered analysis of lease agreements, property risks, market trends, and regulatory compliance. Features portfolio optimization recommendations, lease term analysis, and market comparison.",
    icon: Landmark,
    features: [
      "Portfolio optimization",
      "Lease agreement analysis",
      "Property risk assessment",
      "Market trend analysis",
      "Regulatory compliance"
    ],
    category: "Real Estate & Insurance",
    practiceAreas: ["Real Estate", "Environmental Law"]
  },
  {
    id: "insurance-analyzer",
    name: "Insurance Policy Analyzer",
    specialty: "Insurance Coverage Expert",
    description: "Ensure adequate insurance protection with AI that analyzes policy coverage, identifies gaps, and assesses risk exposure. Features coverage comparison against industry standards, exclusion analysis, and claim scenario testing.",
    icon: Shield,
    features: [
      "Policy coverage analysis",
      "Gap identification",
      "Risk exposure assessment",
      "Industry standard comparison",
      "Claim scenario testing"
    ],
    category: "Real Estate & Insurance",
    practiceAreas: ["Real Estate", "Healthcare & Life Sciences", "Banking & Finance"]
  },

  // Legal Operations
  {
    id: "chief-operating-officer",
    name: "Chief Operating Officer",
    specialty: "Legal Operations Expert",
    description: "Transform your legal operations with comprehensive AI-powered management tools. Create detailed SOPs, track vendor performance, monitor KPIs, manage legal projects, and generate executive reports. Features automated workflow creation and performance benchmarking.",
    icon: Briefcase,
    features: [
      "SOP creation & management",
      "Vendor performance tracking",
      "KPI monitoring",
      "Project management",
      "Executive reporting"
    ],
    category: "Legal Operations",
    practiceAreas: ["All Practice Areas"] // Shows in all areas
  },
  {
    id: "invoice-checker",
    name: "Invoice Checker",
    specialty: "Legal Spend Analyst",
    description: "Control legal spend with AI that reviews outside counsel invoices for billing guideline compliance, identifies cost-saving opportunities, and tracks spending patterns. Features automated invoice analysis and spend optimization recommendations.",
    icon: Calculator,
    features: [
      "Billing guideline compliance",
      "Cost-saving identification",
      "Spending pattern tracking",
      "Automated invoice analysis",
      "Spend optimization"
    ],
    category: "Legal Operations",
    practiceAreas: ["All Practice Areas"] // Shows in all areas
  },
  {
    id: "competitor-analyzer",
    name: "Competitor Analyzer",
    specialty: "Competitive Intelligence Expert",
    description: "Stay ahead of competitive and regulatory risks by analyzing competitor earnings calls, SEC filings, and public disclosures. Features sentiment analysis, forward-looking statement identification, and competitive intelligence gathering.",
    icon: TrendingUp,
    features: [
      "Earnings call analysis",
      "SEC filing review",
      "Sentiment analysis",
      "Forward-looking statement ID",
      "Competitive intelligence"
    ],
    category: "Legal Operations",
    practiceAreas: ["Capital Markets", "Securities Litigation", "Antitrust & Competition"]
  },

  // Knowledge & Configuration
  {
    id: "firm-iq",
    name: "Firm IQ",
    specialty: "AI Configuration Expert",
    description: "Maximize AI effectiveness by configuring your organization's context across three key areas: Company Profile (industry, jurisdiction, regulatory information), Style Rules (formatting preferences, citation styles, terminology), and Knowledge Base (proprietary documents, templates, precedents).",
    icon: Brain,
    features: [
      "Company profile configuration",
      "Style rules customization",
      "Knowledge base integration",
      "Template management",
      "AI personalization"
    ],
    category: "Knowledge & Config",
    practiceAreas: ["All Practice Areas"] // Shows in all areas
  }
];

const practiceAreas = [
  "All Practice Areas",
  "Corporate & Commercial Law",
  "Emerging Companies & Venture Capital", 
  "Litigation & Dispute Resolution",
  "Intellectual Property",
  "Employment & Labor Law",
  "Compensation & Benefits",
  "Real Estate",
  "Tax",
  "Banking & Finance",
  "Capital Markets",
  "Securities Litigation",
  "Environmental Law",
  "Antitrust & Competition",
  "Bankruptcy & Restructuring",
  "Healthcare & Life Sciences",
  "Privacy & Data Protection",
  "Trusts & Estates",
  "Immigration Law",
  "White Collar & Regulatory Defense",
  "Public Law & Government Relations"
];

export default function UseCases() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState("All Practice Areas");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter associates based on selected practice area and search query
  const getFilteredAssociates = () => {
    let filteredAssociates = [];
    
    // Always include Co-Counsel first
    if (selectedPracticeArea === "All Practice Areas" || 
        coCounsel.practiceAreas.includes("All Practice Areas")) {
      filteredAssociates.push(coCounsel);
    }
    
    // Add specialized associates
    const specializedAssociates = associates.filter(associate => {
      const matchesPracticeArea = selectedPracticeArea === "All Practice Areas" || 
                                 associate.practiceAreas.includes(selectedPracticeArea) ||
                                 associate.practiceAreas.includes("All Practice Areas");
      
      const matchesSearch = searchQuery === "" ||
                           associate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           associate.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           associate.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesPracticeArea && matchesSearch;
    });
    
    filteredAssociates.push(...specializedAssociates);
    
    // If searching and Co-Counsel doesn't match search but should be shown, filter it out
    if (searchQuery !== "" && 
        !coCounsel.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !coCounsel.specialty.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !coCounsel.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      filteredAssociates = filteredAssociates.filter(a => a.id !== "co-counsel");
    }
    
    return filteredAssociates;
  };

  const filteredAssociates = getFilteredAssociates();

  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center animate-fade-up">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Practice Areas</Badge>
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              AI Solutions for Every Practice Area
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how White Shoe transforms legal work across all 20+ practice areas. 
              From corporate law to litigation, our specialized AI associates deliver measurable results 
              that enable you to do your best work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search associates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Practice Area Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {practiceAreas.map((area) => (
              <Button
                key={area}
                variant={selectedPracticeArea === area ? "default" : "outline"}
                onClick={() => setSelectedPracticeArea(area)}
                className={`text-xs px-3 py-2 ${
                  selectedPracticeArea === area 
                    ? "bg-slate-docket hover:bg-slate-docket/90 text-pure-white" 
                    : "border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white"
                }`}
              >
                <Scale className="h-3 w-3 mr-1" />
                {area}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Associates Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-midnight-brief mb-4">
              {selectedPracticeArea === "All Practice Areas" 
                ? "All AI Associates" 
                : `${selectedPracticeArea} Associates`}
            </h2>
            <p className="text-gray-600">
              {filteredAssociates.length} AI assistant{filteredAssociates.length !== 1 ? 's' : ''} available
              {selectedPracticeArea !== "All Practice Areas" && ` for ${selectedPracticeArea}`}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredAssociates.map((associate) => {
              const IconComponent = associate.icon;
              return (
                <Card key={associate.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                        <IconComponent className="h-6 w-6 text-pure-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{associate.name}</CardTitle>
                        <p className="text-sm text-gray-500">{associate.specialty}</p>
                      </div>
                    </div>
                    
                    {/* Practice Area Badges */}
                    {associate.practiceAreas.length > 0 && associate.practiceAreas[0] !== "All Practice Areas" && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {associate.practiceAreas.slice(0, 2).map((area) => (
                          <Badge key={area} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                        {associate.practiceAreas.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{associate.practiceAreas.length - 2} more
                          </Badge>
                        )}
                      </div>
                    )}
                    
                    <CardDescription className="text-sm">
                      {associate.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Key Features */}
                    <div className="mb-6">
                      <p className="font-semibold text-sm mb-3">Key Features</p>
                      <ul className="space-y-2">
                        {associate.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </li>
                        ))}
                        {associate.features.length > 4 && (
                          <li className="text-xs text-gray-500">
                            +{associate.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* No Results Message */}
          {filteredAssociates.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No associates found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or selecting a different practice area.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchQuery(""); setSelectedPracticeArea("All Practice Areas");}}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Practice Area Specific CTA */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Ready to Transform Your {selectedPracticeArea === "All Practice Areas" ? "Legal Practice" : selectedPracticeArea}?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join legal teams that are already increasing their productivity by 10x per week with White Shoe.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Sign Up
                </Button>
              </Link>
              <Link to="/platform" className="text-sm font-semibold leading-6 text-midnight-brief hover:text-slate-docket transition-colors">
                Explore platform <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Quantified Results Across Practice Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real metrics from legal teams using White Shoe AI across all practice areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-slate-docket mx-auto mb-4" />
                <p className="text-3xl font-bold text-midnight-brief">8+</p>
                <p className="text-sm text-gray-600">Hours saved per week</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-slate-docket mx-auto mb-4" />
                <p className="text-3xl font-bold text-midnight-brief">90%</p>
                <p className="text-sm text-gray-600">Reduction in missed risks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-slate-docket mx-auto mb-4" />
                <p className="text-3xl font-bold text-midnight-brief">15×</p>
                <p className="text-sm text-gray-600">Return on investment</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-slate-docket mx-auto mb-4" />
                <p className="text-3xl font-bold text-midnight-brief">500+</p>
                <p className="text-sm text-gray-600">Legal teams served</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
