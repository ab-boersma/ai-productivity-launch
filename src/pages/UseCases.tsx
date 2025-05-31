
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Briefcase, Users, Bot } from "lucide-react";

const practiceAreas = [
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description: "Comprehensive corporate legal services for complex business transactions and strategic initiatives.",
    associates: ["Contract Analysis Assistant", "Due Diligence Coordinator", "Merger Documentation Specialist"]
  },
  {
    id: "emerging-companies",
    title: "Emerging Companies & Venture Capital",
    description: "Supporting startups and growth companies through funding rounds and strategic partnerships.",
    associates: ["Term Sheet Analyzer", "Cap Table Manager", "Investor Relations Assistant"]
  },
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    description: "Strategic litigation support and dispute resolution across all practice areas.",
    associates: ["Discovery Assistant", "Brief Writing Specialist", "Case Strategy Analyzer"]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    description: "Protecting and monetizing intellectual property assets in the digital age.",
    associates: ["Patent Research Assistant", "Trademark Filing Specialist", "IP Portfolio Manager"]
  },
  {
    id: "employment",
    title: "Employment & Labor Law",
    description: "Comprehensive employment law guidance for modern workplace challenges.",
    associates: ["Policy Review Assistant", "Compliance Monitor", "Employee Relations Specialist"]
  },
  {
    id: "compensation",
    title: "Compensation & Benefits",
    description: "Designing competitive compensation structures and benefit programs.",
    associates: ["Benefits Analysis Tool", "Equity Plan Assistant", "Compliance Checker"]
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Full-service real estate legal support for commercial and residential transactions.",
    associates: ["Property Due Diligence Assistant", "Lease Analysis Tool", "Zoning Research Specialist"]
  },
  {
    id: "tax",
    title: "Tax",
    description: "Strategic tax planning and compliance for individuals and businesses.",
    associates: ["Tax Code Navigator", "Planning Strategy Assistant", "Compliance Monitor"]
  },
  {
    id: "banking",
    title: "Banking & Finance",
    description: "Complex financial transactions and regulatory compliance support.",
    associates: ["Loan Documentation Assistant", "Regulatory Compliance Monitor", "Credit Analysis Tool"]
  },
  {
    id: "capital-markets",
    title: "Capital Markets",
    description: "Securities offerings and capital markets transactions.",
    associates: ["Prospectus Assistant", "SEC Filing Specialist", "Market Analysis Tool"]
  },
  {
    id: "securities-litigation",
    title: "Securities Litigation",
    description: "Specialized litigation support for securities-related disputes.",
    associates: ["Securities Law Research Assistant", "Disclosure Analysis Tool", "Expert Witness Coordinator"]
  },
  {
    id: "environmental",
    title: "Environmental Law",
    description: "Environmental compliance and sustainability legal support.",
    associates: ["Regulation Tracker", "Environmental Impact Assessor", "Compliance Assistant"]
  },
  {
    id: "antitrust",
    title: "Antitrust & Competition",
    description: "Competition law compliance and merger clearance support.",
    associates: ["Market Analysis Assistant", "Merger Review Tool", "Competition Compliance Monitor"]
  },
  {
    id: "bankruptcy",
    title: "Bankruptcy & Restructuring",
    description: "Financial restructuring and insolvency proceedings support.",
    associates: ["Asset Valuation Assistant", "Restructuring Plan Analyzer", "Creditor Relations Tool"]
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description: "Regulatory compliance and transactions in healthcare and life sciences.",
    associates: ["FDA Compliance Assistant", "Clinical Trial Coordinator", "Healthcare Regulation Monitor"]
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    description: "Data privacy compliance and cybersecurity legal support.",
    associates: ["GDPR Compliance Assistant", "Data Breach Response Tool", "Privacy Policy Generator"]
  },
  {
    id: "trusts",
    title: "Trusts & Estates",
    description: "Wealth preservation and estate planning for high-net-worth individuals.",
    associates: ["Estate Planning Assistant", "Trust Administration Tool", "Tax Planning Specialist"]
  },
  {
    id: "immigration",
    title: "Immigration Law",
    description: "Business immigration and global mobility solutions.",
    associates: ["Visa Application Assistant", "Compliance Tracker", "Global Mobility Coordinator"]
  },
  {
    id: "white-collar",
    title: "White Collar & Regulatory Defense",
    description: "Criminal defense and regulatory enforcement proceedings.",
    associates: ["Investigation Assistant", "Regulatory Response Tool", "Compliance Audit Specialist"]
  },
  {
    id: "public-law",
    title: "Public Law & Government Relations",
    description: "Government affairs and public policy legal support.",
    associates: ["Policy Analysis Assistant", "Regulatory Tracker", "Government Relations Coordinator"]
  }
];

export default function UseCases() {
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set());

  const toggleExpanded = (areaId: string) => {
    const newExpanded = new Set(expandedAreas);
    if (newExpanded.has(areaId)) {
      newExpanded.delete(areaId);
    } else {
      newExpanded.add(areaId);
    }
    setExpandedAreas(newExpanded);
  };

  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-midnight-brief to-slate-docket">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-garamond text-pure-white sm:text-6xl">
              Practice Areas
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Comprehensive AI-powered legal support across all major practice areas. 
              Every practice area includes White Shoe Co-Counsel and specialized associates.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:gap-8">
            {practiceAreas.map((area) => {
              const isExpanded = expandedAreas.has(area.id);
              return (
                <Card 
                  key={area.id} 
                  className="group hover:shadow-lg transition-all duration-300 border-ice-fog hover:border-slate-docket/30"
                >
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleExpanded(area.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-slate-docket/10 rounded-lg group-hover:bg-slate-docket/20 transition-colors">
                          <Briefcase className="h-5 w-5 text-slate-docket" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-garamond text-midnight-brief">
                            {area.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {area.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-docket">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent className="border-t border-ice-fog">
                      <div className="pt-6 space-y-6">
                        {/* White Shoe Co-Counsel */}
                        <div className="bg-gradient-to-r from-slate-docket/5 to-midnight-brief/5 p-6 rounded-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-slate-docket rounded-lg">
                              <Bot className="h-5 w-5 text-pure-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-midnight-brief">
                              White Shoe Co-Counsel
                            </h3>
                          </div>
                          <p className="text-gray-600">
                            Advanced AI legal assistant specialized in {area.title.toLowerCase()}, 
                            providing expert guidance, document analysis, and strategic insights 
                            tailored to this practice area.
                          </p>
                        </div>

                        {/* Associates */}
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <Users className="h-5 w-5 text-slate-docket" />
                            <h3 className="text-lg font-semibold text-midnight-brief">
                              Specialized Associates
                            </h3>
                          </div>
                          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                            {area.associates.map((associate, index) => (
                              <div 
                                key={index}
                                className="p-4 bg-pure-white border border-ice-fog rounded-lg hover:border-slate-docket/30 transition-colors"
                              >
                                <div className="text-sm font-medium text-midnight-brief">
                                  {associate}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white">
                            Explore {area.title}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
