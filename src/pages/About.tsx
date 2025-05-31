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
  Award
} from "lucide-react";

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
    name: "Aaron Boersma",
    role: "Co-Founder",
    background: "With over 10 years experience in buying and selling legal services. From local legal work in Mississippi to large-scale global transactions, Aaron has bought and sold legal services at every corner of the legal market."
  },
  {
    name: "Alex Rindels", 
    role: "Co-Founder and Technical Advisor",
    background: "Leading general counsel at one of the first unicorn AI startups. Alex knows what it means for legal to enable a business to scale globally."
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

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experienced founders united by a shared vision of accessible legal technology.
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
                  <p className="text-gray-600 text-sm">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 sm:py-32 bg-ice-fog">
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
