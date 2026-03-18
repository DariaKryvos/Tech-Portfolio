import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our Work",
  description:
    "See what we've built: websites, apps, dashboards, online stores, and more for clients like the Dutch government, ProRail, and Asia Gaming.",
};

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-40 md:pb-20">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
          Our Work
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-4 sm:mb-6">
          Our
          <br />
          <span className="text-gray-500">work.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
          Here's what we've built for our clients. Websites, apps, brands, and
          more.
        </p>
      </section>

      {/* Category pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8 md:pb-12">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="pill-button text-gray-400 text-[10px] sm:text-xs md:text-sm cursor-default"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 md:pb-32">
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl glass-card cursor-pointer block ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/9] sm:aspect-[16/7]" : "aspect-[4/3]"}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex items-end justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-orange-400/80 mb-0.5 sm:mb-1 block">
                      {project.category}
                    </span>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                      {project.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 hidden sm:block max-w-md line-clamp-2">
                      {project.description}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">{project.client}</p>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-orange-400/50 group-hover:bg-orange-400/10 transition-all duration-300">
                    <ArrowUpRight size={12} className="text-gray-500 group-hover:text-orange-400 transition-colors sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            {[
              { value: "9+", label: "Projects delivered" },
              { value: "6+", label: "Industries served" },
              { value: "5", label: "Enterprise clients" },
              { value: "99.9%", label: "Uptime across platforms" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Need something built?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm md:text-base">
            Tell us what you need and we'll make it happen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Start a Conversation
            </Link>
            <Link href="/services" className="pill-button text-gray-400 text-center">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
