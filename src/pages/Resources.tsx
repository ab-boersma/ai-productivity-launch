
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FileText, 
  Video, 
  Calendar,
  Search,
  Download,
  Clock,
  User,
  Tag
} from "lucide-react";

const resourceTypes = ["All", "Blog", "White Papers", "Events", "Videos"];

const resources = [
  {
    id: "ai-divide-whitepaper",
    type: "White Papers",
    title: "The AI Divide: How Legal Tech is Creating Winners and Losers",
    description: "A comprehensive analysis of AI adoption in legal teams and the growing divide between have and have-nots.",
    author: "White Shoe AI Research Team",
    date: "2024-11-15",
    readTime: "12 min read",
    featured: true,
    tags: ["AI", "Legal Tech", "Research"]
  },
  {
    id: "contract-review-guide",
    type: "Blog",
    title: "The Complete Guide to AI-Powered Contract Review",
    description: "Learn how to implement AI contract review processes that actually work in practice.",
    author: "Sarah Chen",
    date: "2024-11-10",
    readTime: "8 min read",
    featured: false,
    tags: ["Contracts", "AI", "Workflow"]
  },
  {
    id: "compliance-automation",
    type: "Blog", 
    title: "Automating Compliance: A Legal Team's Playbook",
    description: "Step-by-step guide to building automated compliance workflows that scale.",
    author: "Michael Rodriguez",
    date: "2024-11-05",
    readTime: "6 min read",
    featured: false,
    tags: ["Compliance", "Automation", "Playbook"]
  },
  {
    id: "future-legal-webinar",
    type: "Events",
    title: "The Future of Legal: AI, Automation, and Access",
    description: "Join industry leaders discussing how AI is democratizing legal services.",
    author: "White Shoe AI",
    date: "2024-12-01",
    readTime: "60 min",
    featured: false,
    tags: ["Webinar", "Future", "AI"]
  },
  {
    id: "platform-demo-video",
    type: "Videos",
    title: "White Shoe AI Platform Demo",
    description: "See our AI Associates in action with a comprehensive platform walkthrough.",
    author: "Product Team",
    date: "2024-10-30",
    readTime: "15 min",
    featured: false,
    tags: ["Demo", "Platform", "Tutorial"]
  },
  {
    id: "small-team-roi",
    type: "Blog",
    title: "ROI Strategies for Small Legal Teams",
    description: "How smaller legal departments can achieve enterprise-level productivity with AI.",
    author: "Jennifer Walsh",
    date: "2024-10-25",
    readTime: "5 min read",
    featured: false,
    tags: ["ROI", "Small Teams", "Strategy"]
  }
];

export default function Resources() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === "All" || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const featuredResource = resources.find(r => r.featured);

  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center animate-fade-up">
            <Badge className="mb-6 bg-slate-docket text-pure-white">Resources</Badge>
            <h1 className="text-4xl font-bold tracking-garamond text-midnight-brief sm:text-6xl">
              Legal AI Insights & Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay ahead of the curve with insights on legal AI, productivity strategies, 
              and best practices from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      {featuredResource && (
        <section className="py-16 bg-ice-fog">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative">
              <Badge className="mb-4 bg-slate-docket text-pure-white">Featured</Badge>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{featuredResource.type}</Badge>
                      {featuredResource.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold tracking-garamond text-midnight-brief mb-4">
                      {featuredResource.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {featuredResource.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredResource.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredResource.readTime}
                      </div>
                    </div>
                    <Button className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download White Paper
                    </Button>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-slate-docket to-midnight-brief p-8 text-pure-white flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <p className="text-sm opacity-90">
                        Essential reading for legal teams navigating AI adoption
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {resourceTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={selectedType === type 
                    ? "bg-slate-docket hover:bg-slate-docket/90 text-pure-white" 
                    : "border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white"
                  }
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.filter(r => !r.featured).map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {resource.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-6">
                    {resource.title}
                  </CardTitle>
                  <CardDescription>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4" />
                    {resource.author}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-slate-docket text-slate-docket hover:bg-slate-docket hover:text-pure-white">
                    {resource.type === "Events" ? "Register" : 
                     resource.type === "Videos" ? "Watch" : "Read More"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 sm:py-32 bg-midnight-brief">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-garamond text-pure-white sm:text-4xl">
              Stay Updated on Legal AI
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get the latest insights, research, and best practices delivered to your inbox weekly.
            </p>
            <form className="mt-8 sm:flex sm:max-w-md mx-auto">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border-white/20 text-pure-white placeholder:text-gray-400"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Button
                  type="submit"
                  className="bg-slate-docket hover:bg-slate-docket/90 text-pure-white"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
