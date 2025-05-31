
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "White Shoe streamlines our legal analysis and document drafting in ways I never thought possible. My team is easily 3x more productive, and the quality of our output has improved dramatically."
  },
  {
    quote: "Unlike other legal AI tools that require extensive training and setup, this solution was intuitive from day one and knows our business. Finally, an AI platform that understands how legal teams actually work."
  },
  {
    quote: "We evaluated several legal AI platforms, but this was the only one that didn't feel like we needed a computer science degree to use effectively. The accessibility and the price is unmatched."
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
                <blockquote className="text-gray-600">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
