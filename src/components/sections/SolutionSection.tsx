
import { MessageSquare, Search, Workflow } from "lucide-react";

export function SolutionSection() {
  return (
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
  );
}
