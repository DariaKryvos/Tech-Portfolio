import Link from "next/link";
import type { Metadata } from "next";
import {
  Briefcase,
  GraduationCap,
  Code,
  Cloud,
  Shield,
  Globe,
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CV - Daria Kryvosheieva",
  description:
    "Software developer and founder of Megokruto. Experience in web development, cloud, and cybersecurity for government, healthcare, and gaming.",
};

const experience = [
  {
    role: "Founder & Lead Developer",
    company: "Megokruto",
    period: "2023 - Present",
    description:
      "My own agency where we build websites, apps, logos, run social media, and protect against hackers. We do everything from start to finish for clients in government, healthcare, banks, and gaming.",
    highlights: [
      "Built and launched 7+ live projects",
      "Worked with clients in 5+ different industries",
      "Built every project with security from day one",
    ],
  },
  {
    role: "Software Engineer",
    company: "Sopra Steria",
    period: "2021 - 2023",
    description:
      "Built websites and apps for big Dutch companies and the government. Worked on projects that had to follow strict rules and handle sensitive data.",
    highlights: [
      "Built the National Health Dashboard for the Dutch government",
      "Built a monitoring system for the Dutch railways (ProRail)",
      "Built internal tools and event websites",
    ],
  },
  {
    role: "Software Developer",
    company: "Asia Gaming",
    period: "2020 - 2021",
    description:
      "Developed real-time gaming platforms handling thousands of concurrent users. Focused on performance optimization, secure financial transactions, and UI/UX improvements.",
    highlights: [
      "Engineered high-performance real-time platform",
      "Reduced response times to sub-second levels",
      "Led complete UI/UX redesign initiative",
    ],
  },
];

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
    "Vue.js",
  ],
  Backend: ["Node.js", "Python", "Java", ".NET", "REST APIs", "GraphQL"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "CI/CD", "Kubernetes"],
  Security: [
    "Penetration Testing",
    "GDPR Compliance",
    "ISO 27001",
    "Secure Architecture",
  ],
  Design: [
    "Figma",
    "UI/UX Design",
    "Design Systems",
    "Wireframing",
    "Prototyping",
  ],
  Other: [
    "Agile/Scrum",
    "Project Management",
    "Git",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
};

const education = [
  {
    degree: "Bachelor of Science - Software Engineering",
    school: "University of Applied Sciences",
    period: "2017 - 2021",
    details:
      "Focus on full-stack development, cloud architecture, and software design patterns.",
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Certified Ethical Hacker (CEH)",
  "Scrum Master (PSM I)",
];

export default function CV() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-40 md:pb-20">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
          Resume
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-4 sm:mb-6">
          Daria
          <br />
          <span className="text-gray-500">Kryvosheieva</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
          Software developer who builds websites, apps, and online platforms.
          Also runs a digital agency that does everything from design to
          security.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} /> The Netherlands
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={12} /> megokruto@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={12} /> +31 6 27 58 69 65
          </span>
        </div>
        {/* <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/CV%20Daria%20Kryvosheieva.pdf"
            download
            className="pill-button-primary text-center inline-flex items-center justify-center gap-2"
          >
            <Download size={14} /> Download PDF
          </a>
          <Link href="/contact" className="pill-button text-gray-400 text-center">
            Get in Touch
          </Link>
        </div> */}
      </section>

      {/* Experience */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
            <Briefcase
              size={18}
              className="text-orange-400"
              strokeWidth={1.5}
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Experience
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-orange-400/70">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4">
                  {job.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-400"
                    >
                      <ArrowRight
                        size={10}
                        className="text-orange-400/60 mt-1 shrink-0 sm:w-3 sm:h-3"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
            <Code size={18} className="text-orange-400" strokeWidth={1.5} />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <h3 className="text-[10px] sm:text-sm uppercase tracking-widest text-gray-500 font-medium mb-3 sm:mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <GraduationCap
                  size={18}
                  className="text-orange-400"
                  strokeWidth={1.5}
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Education
                </h2>
              </div>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-orange-400/70 mb-1.5 sm:mb-2">
                    {edu.school}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <Shield
                  size={18}
                  className="text-orange-400"
                  strokeWidth={1.5}
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Certifications
                </h2>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex items-center gap-2.5 sm:gap-3"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-400/10 flex items-center justify-center shrink-0">
                      <Shield size={12} className="text-orange-400" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-white font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base">
            Whether you have a project in mind or want to explore possibilities,
            let's connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="pill-button-primary text-center">
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="pill-button text-gray-400 text-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
