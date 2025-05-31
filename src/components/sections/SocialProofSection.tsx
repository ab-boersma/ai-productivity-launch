
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
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
];

export function SocialProofSection() {
  return (
    <section className="py-24 sm:py-32 bg-ice-fog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
            Trusted by Legal Teams
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
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
  );
}
