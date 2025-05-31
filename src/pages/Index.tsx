import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Search, 
  Workflow, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Building2,
  Briefcase
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              Your AI Legal Support – ready in minutes, priced for every legal team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Safe AI legal tools within reach for every lawyer.<br />Get equipped today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Sign Up
                </Button>
              </Link>
              <Link to="/platform" className="text-sm font-semibold leading-6 text-midnight-brief hover:text-slate-docket transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Insight Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-slate-docket">The AI Divide</h2>
            <p className="mt-2 text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Less than 10% of mid-market legal teams can afford current AI tools
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              While BigLaw firms spend millions on AI infrastructure, smaller legal teams are left behind. 
              White Shoe AI democratizes advanced legal AI for teams of every size.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white">
                Read The AI Divide White Paper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              The Productivity of a White Shoe Firm
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to supercharge your legal team's productivity
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-midnight-brief">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                    <MessageSquare className="h-6 w-6 text-pure-white" aria-hidden="true" />
                  </div>
                  White Shoe Co-Counsel
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  First of its kind practice area specific Legal AI support. Our AI understands your practice and increases your productivity.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-midnight-brief">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                    <Search className="h-6 w-6 text-pure-white" aria-hidden="true" />
                  </div>
                  White Shoe Associates
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Taking repeatable workstreams to predictable workflows to allow you to focus on counseling businesses forward.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-midnight-brief">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                    <Workflow className="h-6 w-6 text-pure-white" aria-hidden="true" />
                  </div>
                  User Builder Teams
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We're not just tech geeks—we build the tools we've needed at top firms and Fortune 500s to drive real impact.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              What Makes White Shoe Different?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              There's a lot of AI out there. There's only one White Shoe.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  title: "Accessible AI", 
                  description: "Enterprise-grade legal support at a starting price every lawyer can afford." 
                },
                { 
                  title: "Practice-Area Precision", 
                  description: "Chat models tuned to your specific discipline for answers that hit the mark." 
                },
                { 
                  title: "Business-Savvy Responses", 
                  description: "Outputs echo your firm's voice and priorities—always context-aware." 
                },
                { 
                  title: "Seamless Integration", 
                  description: "Lives inside Slack, Outlook, Word, and more—no workflow disruption." 
                },
                { 
                  title: "Collaboration-First Design", 
                  description: "Turn questions into briefs, co-edit with colleagues, and advise clients—all within White Shoe." 
                }
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-pure-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-docket text-pure-white font-bold text-xs flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-midnight-brief mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value/ROI Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Measurable Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See real results from day one
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <Card className="bg-slate-docket text-pure-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">ROI Calculator</h3>
                  <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <div>
                      <p className="text-4xl font-bold">8 hrs</p>
                      <p className="text-sm opacity-90">saved per attorney/week</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">15×</p>
                      <p className="text-sm opacity-90">return on investment</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">$50K+</p>
                      <p className="text-sm opacity-90">annual savings per team</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to="/contact">
                      <Button variant="outline" className="border-pure-white text-pure-white hover:bg-pure-white hover:text-slate-docket">
                        Calculate Your ROI
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Trusted by Legal Teams
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                quote: "White Shoe AI transformed our contract review process. What used to take days now takes hours.",
                author: "Sarah Chen",
                role: "General Counsel",
                company: "TechCorp"
              },
              {
                quote: "Finally, enterprise-grade AI that doesn't require an enterprise budget.",
                author: "Michael Rodriguez",
                role: "Legal Director", 
                company: "GrowthCo"
              },
              {
                quote: "The integration with our existing tools was seamless. Our team was productive from day one.",
                author: "Jennifer Walsh",
                role: "VP Legal",
                company: "InnovateLtd"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <blockquote className="text-gray-600 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-midnight-brief">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
