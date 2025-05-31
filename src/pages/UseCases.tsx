
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ShoppingCart
} from "lucide-react";

const useCases = [
  {
    id: "contract-review",
    title: "Contract Review",
    description: "Accelerate contract analysis and risk assessment",
    icon: FileText,
    departments: ["Legal", "Sales"],
    pain: "Manual contract review takes days and misses critical issues",
    play: "AI-powered analysis identifies risks and suggests improvements in minutes",
    payoff: "75% faster contract turnaround, 90% reduction in overlooked risks",
    features: [
      "Automated clause analysis",
      "Risk scoring and prioritization", 
      "Redline suggestions",
      "Compliance checking",
      "Template standardization"
    ]
  },
  {
    id: "compliance-navigator",
    title: "Compliance Navigator", 
    description: "Stay ahead of regulatory requirements across jurisdictions",
    icon: Shield,
    departments: ["Legal", "Ops"],
    pain: "Tracking compliance across multiple jurisdictions is complex and error-prone",
    play: "AI monitors regulatory changes and maps requirements to your operations",
    payoff: "100% compliance tracking coverage, 60% reduction in audit preparation time",
    features: [
      "Regulatory change monitoring",
      "Compliance gap analysis",
      "Automated reporting",
      "Audit trail generation",
      "Multi-jurisdiction support"
    ]
  },
  {
    id: "board-governance",
    title: "Board & Governance",
    description: "Streamline board meetings and governance processes",
    icon: Users,
    departments: ["Legal", "Ops"],
    pain: "Board packet preparation and governance tasks consume excessive time",
    play: "Automated document generation and governance workflow management",
    payoff: "50% reduction in board prep time, 100% governance compliance tracking",
    features: [
      "Board packet automation",
      "Meeting minute generation",
      "Governance calendar",
      "Compliance dashboards",
      "Document version control"
    ]
  }
];

const departments = ["All", "Legal", "Sales", "Ops"];

export default function UseCases() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredUseCases = selectedDepartment === "All" 
    ? useCases 
    : useCases.filter(useCase => useCase.departments.includes(selectedDepartment));

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
              Discover how White Shoe transforms how legal work gets done across practices. 
              No more run-away hourly bills. Measurable results that enable you to do your best work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "default" : "outline"}
                onClick={() => setSelectedDepartment(dept)}
                className={selectedDepartment === dept 
                  ? "bg-slate-docket hover:bg-slate-docket/90 text-pure-white" 
                  : "border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white"
                }
              >
                <Building2 className="h-4 w-4 mr-2" />
                {dept}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {filteredUseCases.map((useCase) => (
              <Card key={useCase.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-docket">
                      <useCase.icon className="h-6 w-6 text-pure-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        {useCase.departments.map((dept) => (
                          <Badge key={dept} variant="secondary" className="text-xs">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Pain → Play → Payoff */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-sm text-red-700">Pain</p>
                        <p className="text-sm text-gray-600">{useCase.pain}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-sm text-blue-700">Play</p>
                        <p className="text-sm text-gray-600">{useCase.play}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-sm text-green-700">Payoff</p>
                        <p className="text-sm text-gray-600">{useCase.payoff}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Quantified Results
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real metrics from teams using White Shoe AI across these use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-slate-docket mx-auto mb-4" />
                <p className="text-3xl font-bold text-midnight-brief">75%</p>
                <p className="text-sm text-gray-600">Faster contract review</p>
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
                <p className="text-3xl font-bold text-midnight-brief">60%</p>
                <p className="text-sm text-gray-600">Less audit prep time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              See These Use Cases in Action
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Book a personalized demo to see how White Shoe AI solves your specific legal challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Request Custom Demo
                </Button>
              </Link>
              <Link to="/platform" className="text-sm font-semibold leading-6 text-midnight-brief hover:text-slate-docket transition-colors">
                Explore platform <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
