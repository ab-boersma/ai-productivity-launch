
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { 
    title: "Accessible AI", 
    description: "Enterprise-grade legal support at a starting price every lawyer can access." 
  },
  { 
    title: "Practice-Area Precision", 
    description: "Chat models tuned to your specific discipline for answers that hit the mark." 
  },
  { 
    title: "Business-Savvy Responses", 
    description: "Outputs echo your team's voice and priorities—always context-aware." 
  },
  { 
    title: "Seamless Integration", 
    description: "Integrations with Slack, Outlook, Google, and more—no workflow disruption to power you forward." 
  },
  { 
    title: "Secure & Compliant", 
    description: "Every word is encrypted, ring-fenced, and never used to train our models. Confidentiality isn't a feature; it's the foundation." 
  },
  { 
    title: "Collaboration-First Design", 
    description: "Turn questions into briefs, co-edit with colleagues, and advise clients—all within White Shoe." 
  }
];

export function HowItWorksSection() {
  return (
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
            {features.map((item, index) => (
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
  );
}
