
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
            Your Legal AI Support.<br />
            Accessible for Every Lawyer.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The AI Productivity Layer You Need.<br />Ready When You Are.
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
  );
}
