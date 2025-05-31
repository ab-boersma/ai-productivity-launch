
import { Button } from "@/components/ui/button";

export function ProblemInsightSection() {
  return (
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
  );
}
