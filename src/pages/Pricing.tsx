import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Building2, Users, Zap, TrendingUp, Construction } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Clerk",
    seats: "1 user",
    monthlyPrice: "$24",
    yearlyPrice: "$19",
    description: "Essential legal support for solo practitioners",
    icon: Users,
    popular: false,
    features: [
      "Basic contract review",
      "Document analysis",
      "Legal research assistance",
      "Email support",
      "Standard templates",
      "Basic integrations"
    ]
  },
  {
    name: "Junior Associate",
    seats: "Up to 5 users", 
    monthlyPrice: "$49",
    yearlyPrice: "$39",
    description: "Expanded capabilities for growing legal teams",
    icon: TrendingUp,
    popular: true,
    features: [
      "Advanced contract review",
      "Unlimited document analysis",
      "Legal research & writing",
      "Priority support",
      "Custom templates",
      "Advanced integrations",
      "Team collaboration tools",
      "Basic analytics"
    ]
  },
  {
    name: "Senior Associate",
    seats: "Up to 15 users",
    monthlyPrice: "$99",
    yearlyPrice: "$79",
    description: "Advanced support for established legal teams",
    icon: Zap,
    popular: false,
    features: [
      "Expert contract negotiation",
      "Unlimited document analysis",
      "Advanced legal research",
      "24/7 priority support",
      "Custom AI training",
      "Full integration suite",
      "Advanced analytics",
      "Dedicated onboarding",
      "Compliance monitoring"
    ]
  },
  {
    name: "Partner",
    seats: "Unlimited users",
    monthlyPrice: "$249",
    yearlyPrice: "$199",
    description: "Full enterprise solution for large firms",
    icon: Building2,
    popular: false,
    features: [
      "White-label AI solutions",
      "Unlimited everything",
      "Custom AI model training",
      "Dedicated success manager",
      "Enterprise integrations",
      "Advanced security features",
      "Custom compliance",
      "On-premise deployment",
      "API access",
      "Priority feature requests"
    ]
  }
];

const faqs = [
  {
    question: "What's included in unlimited drafts?",
    answer: "All plans include unlimited document analysis, contract reviews, legal research queries, and AI-generated content. There are no hidden usage limits or per-document fees."
  },
  {
    question: "How does the seat-based pricing work?",
    answer: "A seat is for one user who can access all AI Associates. You can add or remove seats monthly. Each seat includes full platform access and unlimited usage."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start."
  },
  {
    question: "What integrations are available?",
    answer: "We integrate with Slack, Microsoft Teams, popular CLM systems, document repositories, and offer REST API access. Custom integrations available for Corporate plans."
  },
  {
    question: "How secure is my data?",
    answer: "We maintain SOC 2 Type II compliance, use end-to-end encryption, and never train AI models on your data. Corporate plans include additional security features and on-premise options."
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes, you can change plans at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle."
  }
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center animate-fade-up">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Pricing</Badge>
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              White Shoe Support for Every Lawyer.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Accessible pricing to fit your team. Choose the plan that fits your needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <ToggleGroup 
              type="single" 
              value={billingPeriod} 
              onValueChange={(value) => value && setBillingPeriod(value as "monthly" | "yearly")}
              className="bg-ice-fog rounded-lg p-1"
            >
              <ToggleGroupItem 
                value="monthly" 
                className="px-6 py-3 data-[state=on]:bg-pure-white data-[state=on]:shadow-sm"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="yearly" 
                className="px-6 py-3 data-[state=on]:bg-pure-white data-[state=on]:shadow-sm"
              >
                Yearly
                <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 20%</Badge>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Under Construction Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-docket">
                  <Construction className="h-8 w-8 text-pure-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-garamond text-midnight-brief mb-4">
                Pricing Plans Under Construction
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We're working hard to bring you the perfect pricing structure. 
                Our plans will be available soon with options for every legal team size.
              </p>
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 btn-ripple">
                  Get Notified When Available
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Calculate Your ROI
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how much your team can save with White Shoe AI
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-slate-docket mb-2">8 hrs</div>
                  <div className="text-sm text-gray-600 mb-4">Saved per attorney/week</div>
                  <div className="text-xs text-gray-500">Average time savings on contract review, research, and document analysis</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-docket mb-2">15×</div>
                  <div className="text-sm text-gray-600 mb-4">Return on investment</div>
                  <div className="text-xs text-gray-500">Based on billable hour value vs. subscription cost</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-docket mb-2">$50K+</div>
                  <div className="text-sm text-gray-600 mb-4">Annual savings per team</div>
                  <div className="text-xs text-gray-500">Includes efficiency gains and reduced external counsel costs</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link to="/contact">
                  <Button variant="outline" className="border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white">
                    Get Custom ROI Analysis
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-semibold text-midnight-brief mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-midnight-brief">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-pure-white sm:text-4xl">
              Ready to Level the Legal Playing Field?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join legal teams already saving time and money with White Shoe AI. 
              Start your free trial today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Sign Up
                </Button>
              </Link>
              <Link to="/platform" className="text-sm font-semibold leading-6 text-gray-300 hover:text-pure-white transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
