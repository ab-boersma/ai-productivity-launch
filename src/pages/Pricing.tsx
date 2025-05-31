

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Building2, Users, Zap, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "Solo",
    seats: "1-3 seats",
    price: "$199",
    period: "/month",
    description: "Perfect for fractional GCs and small legal teams",
    icon: Users,
    popular: false,
    features: [
      "3 AI Associate seats",
      "Unlimited document analysis",
      "Basic integrations (Slack, Teams)",
      "Standard support",
      "SOC 2 compliance",
      "99.9% uptime SLA",
      "Email support"
    ]
  },
  {
    name: "Growth",
    seats: "4-15 seats", 
    price: "$799",
    period: "/month",
    description: "Ideal for Series B scale-ups and growing legal teams",
    icon: TrendingUp,
    popular: true,
    features: [
      "15 AI Associate seats",
      "Unlimited document analysis",
      "Advanced integrations + API access",
      "Priority support",
      "SOC 2 compliance",
      "99.9% uptime SLA",
      "Custom workflows",
      "Advanced analytics",
      "Dedicated onboarding"
    ]
  },
  {
    name: "Corporate",
    seats: "16-50+ seats",
    price: "Custom",
    period: "",
    description: "Enterprise solution for public companies and large legal departments",
    icon: Building2,
    popular: false,
    features: [
      "Unlimited AI Associate seats",
      "Unlimited document analysis", 
      "Full integration suite + white-label API",
      "24/7 premium support",
      "SOC 2 + custom compliance",
      "99.99% uptime SLA",
      "Custom AI model training",
      "Advanced security features",
      "Dedicated customer success manager",
      "On-premise deployment option"
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

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-slate-docket' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-slate-docket text-pure-white">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                      <plan.icon className="h-6 w-6 text-pure-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <p className="text-sm text-gray-600">{plan.seats}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-4xl font-bold tracking-tight text-midnight-brief">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${plan.popular 
                        ? 'bg-slate-docket hover:bg-slate-docket/90 text-pure-white' 
                        : 'bg-midnight-brief hover:bg-midnight-brief/90 text-pure-white'
                      } btn-ripple`}
                    >
                      {plan.name === "Corporate" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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
                  Start Free Trial
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

