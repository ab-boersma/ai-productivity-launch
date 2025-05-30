
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Lightbulb, 
  Scale,
  Users,
  Rocket,
  Award
} from "lucide-react";

const timeline = [
  {
    year: "2024",
    quarter: "Q1",
    title: "Company Founded",
    description: "White Shoe AI incorporated with the mission to democratize legal AI"
  },
  {
    year: "2024", 
    quarter: "Q2",
    title: "Product Development",
    description: "Core AI Associates developed and tested with beta legal teams"
  },
  {
    year: "2024",
    quarter: "Q3", 
    title: "Security & Compliance",
    description: "SOC 2 Type II certification achieved, enterprise security implemented"
  },
  {
    year: "2024",
    quarter: "Q4",
    title: "Public Beta Launch",
    description: "Platform opened to select legal teams for testing and feedback"
  },
  {
    year: "2025",
    quarter: "Q1",
    title: "General Availability",
    description: "Full platform launch with all AI Associates and integrations"
  }
];

const values = [
  {
    icon: Scale,
    title: "Level the Playing Field",
    description: "Every legal team deserves access to AI productivity tools, regardless of size or budget."
  },
  {
    icon: Target,
    title: "Practical Innovation", 
    description: "We build AI that solves real problems, not science experiments that impress investors."
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    description: "Our AI amplifies human expertise rather than replacing it. Lawyers remain in control."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    background: "Former BigLaw partner turned legal tech entrepreneur. Stanford Law, 15 years in M&A.",
    expertise: "Legal Operations, AI Strategy"
  },
  {
    name: "Michael Rodriguez", 
    role: "CTO & Co-Founder",
    background: "Ex-Google AI researcher with deep expertise in natural language processing and legal applications.",
    expertise: "AI/ML, Platform Engineering"
  },
  {
    name: "Jennifer Walsh",
    role: "Chief Legal Officer",
    background: "Former General Counsel at high-growth startups. Harvard Law, expert in compliance and privacy.",
    expertise: "Privacy, Compliance, Legal Ethics"
  },
  {
    name: "David Kim",
    role: "VP of Product",
    background: "Product leader from legal tech unicorn. Specializes in AI-powered workflow automation.",
    expertise: "Product Strategy, UX Design"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center animate-fade-up">
            <Badge className="mb-6 bg-slate-docket text-pure-white">About Us</Badge>
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              Level the Legal Playing Field
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're on a mission to democratize advanced legal AI, making enterprise-grade 
              productivity tools accessible to legal teams of every size.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The legal industry has an AI divide problem. While BigLaw firms spend millions on AI infrastructure, 
              smaller legal teams are left behind. We're here to change that.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {values.map((value) => (
                <div key={value.title} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-midnight-brief">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-docket">
                      <value.icon className="h-6 w-6 text-pure-white" aria-hidden="true" />
                    </div>
                    {value.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From incorporation to platform launch, here's how we're building the future of legal AI.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-docket h-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={`${item.year}-${item.quarter}`} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {item.year} {item.quarter}
                          </Badge>
                          {item.year === "2025" && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              <Rocket className="h-3 w-3 mr-1" />
                              Upcoming
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-midnight-brief mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-docket rounded-full border-4 border-pure-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Legal experts and AI researchers united by a shared vision of accessible legal technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-docket rounded-full flex items-center justify-center">
                      <span className="text-pure-white font-semibold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-midnight-brief">
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-docket font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.background}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.split(', ').map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl mb-6">
                White-Shoe Calibre, Startup Speed
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our name reflects our commitment to delivering the highest quality legal AI tools 
                with the agility and innovation of a startup. We combine decades of legal expertise 
                with cutting-edge technology to create solutions that actually work in practice.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-slate-docket" />
                  <span className="text-sm font-medium">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-slate-docket" />
                  <span className="text-sm font-medium">AI Innovation</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-docket to-midnight-brief p-8 rounded-lg text-pure-white">
              <h3 className="text-xl font-bold mb-4">By the Numbers</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm opacity-90">Years combined legal experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm opacity-90">Beta testers and counting</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">99.9%</p>
                  <p className="text-sm opacity-90">Platform uptime guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-midnight-brief">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-pure-white sm:text-4xl">
              Join Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to level the legal playing field? Let's show you how White Shoe AI 
              can transform your team's productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white px-8 py-3 text-lg btn-ripple">
                  Get a Demo
                </Button>
              </Link>
              <Link to="/platform" className="text-sm font-semibold leading-6 text-gray-300 hover:text-pure-white transition-colors">
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
