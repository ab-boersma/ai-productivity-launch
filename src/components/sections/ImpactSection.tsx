
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Grid2X2, DollarSign } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief sm:text-4xl">
            White Shoe Drives Impact
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are focused on output that matters, not time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Pages Statistic */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-docket to-slate-docket/90">
              <CardContent className="p-8 text-center text-pure-white relative">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <FileText className="h-12 w-12" />
                </div>
                <div className="relative z-10">
                  <p className="text-5xl font-bold mb-4">130</p>
                  <p className="text-lg leading-relaxed opacity-90">
                    pages of work product per White Shoe Billable Hour
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Practice Areas Statistic */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-docket/90 to-slate-docket">
              <CardContent className="p-8 text-center text-pure-white relative">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Grid2X2 className="h-12 w-12" />
                </div>
                <div className="relative z-10">
                  <p className="text-5xl font-bold mb-4">20</p>
                  <p className="text-lg leading-relaxed opacity-90">
                    Practice Areas to support your every need
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Statistic */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-docket to-slate-docket/80">
              <CardContent className="p-8 text-center text-pure-white relative">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <DollarSign className="h-12 w-12" />
                </div>
                <div className="relative z-10">
                  <p className="text-5xl font-bold mb-4">$19</p>
                  <p className="text-lg leading-relaxed opacity-90">
                    a monthly price that enables support for everyone
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
