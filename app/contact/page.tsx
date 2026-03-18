import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Megokruto. Email, call, or WhatsApp us about your website, app, or branding project. We usually respond within 24 hours.",
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-40 md:pb-20">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
          Contact
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-4 sm:mb-6">
          Get in
          <br />
          <span className="text-gray-500">touch.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
          Need a website, app, or anything else? Send us a message and we'll get back to you fast.
        </p>
      </section>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <a
            href="mailto:megokruto@gmail.com"
            className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 group hover:border-orange-400/20"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-400/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-400/20 transition-colors">
              <Mail size={16} className="text-orange-400 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1">Email</h3>
            <p className="text-[10px] sm:text-sm text-gray-400 break-all">megokruto@gmail.com</p>
          </a>

          <a
            href="tel:+31627586965"
            className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 group hover:border-orange-400/20"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-orange-400/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-400/20 transition-colors">
              <Phone size={16} className="text-orange-400 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1">Phone</h3>
            <p className="text-[10px] sm:text-sm text-gray-400">+31 6 27 58 69 65</p>
          </a>

          <a
            href="https://wa.me/31627586965"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 group hover:border-[#25D366]/20"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle size={16} className="text-[#25D366] sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1">WhatsApp</h3>
            <p className="text-[10px] sm:text-sm text-gray-400">Quick response</p>
          </a>

          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center mb-3 sm:mb-4">
              <MapPin size={16} className="text-gray-400 sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white mb-0.5 sm:mb-1">Location</h3>
            <p className="text-[10px] sm:text-sm text-gray-400">The Netherlands</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              What to expect
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              From message to kickoff
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Send a Message",
                desc: "Email, call, or WhatsApp us. Tell us what you need, when you need it, and your budget.",
              },
              {
                step: "02",
                title: "Free Call",
                desc: "We'll hop on a free 30-minute call to talk about your project and answer your questions.",
              },
              {
                step: "03",
                title: "We Start Building",
                desc: "You get a clear plan with what we'll do, how long it takes, and what it costs. Say yes and we start.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 relative">
                <div className="text-2xl sm:text-3xl font-bold text-white/10 mb-2 sm:mb-3">{item.step}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services reminder */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 sm:mb-6">
              What we can help with
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
              {[
                "Websites",
                "Apps",
                "Social Media",
                "Branding",
                "Security",
                "Design",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="pill-button text-gray-400 text-[10px] sm:text-xs md:text-sm hover:text-orange-400 hover:border-orange-400/30 transition-all"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Clock size={14} className="text-orange-400" />
            <span className="text-xs sm:text-sm text-gray-400">Usually respond within 24 hours</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Ready when you are.
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base">
            No strings attached. Just tell us what you need and we'll figure it out together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:megokruto@gmail.com" className="pill-button-primary text-center inline-flex items-center justify-center gap-2">
              Send an Email <ArrowRight size={14} />
            </a>
            <a href="https://wa.me/31627586965" target="_blank" rel="noopener noreferrer" className="pill-button text-gray-400 text-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
