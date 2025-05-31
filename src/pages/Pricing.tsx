
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
    question: "How do \"Billable Hours\" work on White Shoe AI, and what happens if I exceed my monthly allotment?",
    answer: "A White Shoe Billable Hour isn't a stopwatch—it's output. One hour represents roughly 125 pages of finished work product (drafts, analyses, briefs). When you hit your cap, additional hours are available for purchase for less than 0.5% of the cost of an law firm associate to support your work."
  },
  {
    question: "Can I upgrade or downgrade my plan at any time, and how is proration handled?",
    answer: "Yes. Upgrades take effect instantly with a prorated charge for the rest of the billing period. Downgrades kick in on your next renewal date so you get full value from the hours you've already purchased."
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Absolutely. Pay annually and you'll get the equivalent of two months free—about a 17% savings."
  },
  {
    question: "What exactly is a \"Company Profile,\" and why might I need more than one?",
    answer: "A Company Profile stores a distinct set of documents, policies, templates, and brand voice. You'll want additional profiles if you handle multiple clients, have several subsidiaries, or need a sandboxed environment for deals like M&A due diligence."
  },
  {
    question: "Do unused Billable Hours roll over?",
    answer: "No. Hours reset each month to keep pricing predictable and razor-thin. If you anticipate a heavy month, you can top up or temporarily upgrade."
  },
  {
    question: "What happens to my data if I cancel my subscription?",
    answer: "Your workspace switches to read-only for 30 days so you can export anything you need. After that, all data is permanently deleted from our production backups under our Data Retention & Deletion Policy."
  },
  {
    question: "Is there a free trial or demo?",
    answer: "Yes. A free trial is available with a redemption code. Product demos are available upon request. Reach out to aaron@white-shoe.ai"
  },
  {
    question: "Are setup fees, onboarding costs, or long-term contracts required?",
    answer: "None. Subscriptions are month-to-month (or annual if you prefer) with zero implementation fees. Guided videos and live office hours are included free."
  },
  {
    question: "Does the Partner plan include every feature from the lower tiers?",
    answer: "Yes. Partner users get the entire associate library, unlimited profiles, custom associates on request, and priority support."
  },
  {
    question: "How do custom Associates or add-on practice areas work for Partner users?",
    answer: "Tell us the workflow—say, \"FinTech licensing\" or \"Biotech IP landscape.\" We'll configure a domain-trained associate within about a week at no extra cost for Partner subscribers."
  },
  {
    question: "What integrations are available, and are they included in all plans?",
    answer: "Native connectors include Slack, Microsoft Teams, Outlook, Gmail, Google Drive, OneDrive, Box, and a Zapier beta. Integrations are bundled starting with Junior Associate; Clerk users can add them à la carte."
  },
  {
    question: "How is my confidential information protected?",
    answer: "No prompts or outputs are ever used to train external models. SOC 2 Type II, GDPR, and CCPA compliant infrastructure. AES-256 encryption at rest and TLS 1.3 in transit. Your data stays yours—trust is non-negotiable."
  },
  {
    question: "Do you offer volume, nonprofit, or educational discounts?",
    answer: "We do. Contact sales for tailored pricing, and ask about pro-bono credits for legal-aid clinics."
  },
  {
    question: "How fast is customer support, and what channels are included with each tier?",
    answer: "Clerk: email only, responses within 24 hours. Junior Associate: email plus live chat, responses within 12 hours. Senior Associate: email, chat, and callback phone support, responses within 8 hours. Partner: dedicated Customer Success Manager, priority email and chat, two-hour response SLA plus uptime credits."
  },
  {
    question: "Can multiple users share a single subscription, and how are additional seats billed?",
    answer: "Each subscription includes one named seat. You can add teammates anytime: $9 (Clerk), $19 (Junior), $29 (Senior), or $49 (Partner) per user per month. All seats share the same pool of Billable Hours."
  },
  {
    question: "If my legal needs are very niche, can I request a bespoke Associate or feature?",
    answer: "Yes. Partner subscribers get bespoke associates free of charge. Junior Associate and Senior Associate users can purchase one-off builds. We love edge cases—they sharpen the platform for everyone."
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
