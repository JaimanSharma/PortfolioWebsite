"use client";

import Nav from "@/components/Nav";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  heroContent,
  highlights,
  experience,
  projects,
  skills,
  about,
  personalInfo,
  ctfs,
} from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20 relative overflow-hidden">
        {/* Subtle background gradient animation */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 -z-20 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%232DD4BF' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px"
            }}
          />
        </div>
        <motion.div
          className="max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary leading-tight break-words">
            {heroContent.headline}
            <span className="inline-block w-1 h-8 bg-accent ml-2 animate-pulse font-mono align-middle">
              |
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {heroContent.tags.map((tag, idx) => (
              <motion.span
                key={tag}
                className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm font-mono text-text-secondary hover:border-accent/50 hover:text-accent transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              View Projects
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:bg-highlight hover:border-accent/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Highlights Section */}
      <Section id="highlights" className="py-12 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%232DD4BF' opacity='0.2'/%3E%3Cpath d='M 20 0 L 20 20 M 0 20 L 20 20' stroke='%232DD4BF' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px"
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="relative overflow-hidden group">
                {/* Subtle accent glow on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="mb-3">
                    {highlight.title === "Cloud Security" && (
                      <img src="/icons/cloud.svg" alt="" className="w-8 h-8 opacity-80" />
                    )}
                    {highlight.title === "Systems + Dev" && (
                      <img src="/icons/code.svg" alt="" className="w-8 h-8 opacity-80" />
                    )}
                    {highlight.title === "Security Research/CTF" && (
                      <img src="/icons/ctf.svg" alt="" className="w-8 h-8 opacity-80" />
                    )}
                    {highlight.title === "Automation" && (
                      <img src="/icons/automation.svg" alt="" className="w-8 h-8 opacity-80" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%232DD4BF' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px"
            }}
          />
        </div>
        <SectionHeading title="Experience" />
        <div className="space-y-8 relative z-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-20 h-20 border border-accent/30 rounded-full" />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-accent font-medium mb-2">{exp.role}</p>
                    </div>
                    <span className="text-sm text-text-secondary font-mono">
                      // {exp.period}
                    </span>
                  </div>
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="text-text-secondary leading-relaxed flex items-start"
                    >
                      <span className="text-accent mr-2 mt-0 flex-shrink-0">•</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {exp.tech.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-text-secondary font-mono">
                      Tech: {exp.tech.join(" · ")}
                    </p>
                  </div>
                )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%232DD4BF' stroke-width='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px"
            }}
          />
        </div>
        <SectionHeading title="Projects" />
        <div className="space-y-8 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                {/* Decorative icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src="/icons/project.svg" alt="" className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <img src="/icons/project.svg" alt="" className="w-8 h-8 opacity-60" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-1">
                          {project.name}
                        </h3>
                        <p className="text-accent text-sm font-mono mb-3">
                          {project.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-3 leading-relaxed mb-4">
                    <span className="font-medium text-text-primary">What it is:</span>{" "}
                    {project.description}
                  </p>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    <span className="font-medium text-text-primary">Why it matters:</span>{" "}
                    {project.why}
                  </p>
                  {project.engineeringAngle && (
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      <span className="font-medium text-text-primary">
                        Engineering angle:
                      </span>{" "}
                      {project.engineeringAngle}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-highlight border border-border rounded text-xs font-mono text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                      >
                        GitHub →
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%232DD4BF' opacity='0.2'/%3E%3Cpath d='M 20 0 L 20 20 M 0 20 L 20 20' stroke='%232DD4BF' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23circuit)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px"
            }}
          />
        </div>
        <SectionHeading title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src="/icons/skill.svg" alt="" className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icons/code.svg" alt="" className="w-6 h-6 opacity-60" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Languages
                  </h3>
                </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 bg-highlight border border-border rounded-lg text-sm font-mono text-text-secondary whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
          >
            <Card className="relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src="/icons/skill.svg" alt="" className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icons/security.svg" alt="" className="w-6 h-6 opacity-60" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Security & Analysis
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.security.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 bg-highlight border border-border rounded-lg text-sm font-mono text-text-secondary whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <Card className="relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src="/icons/skill.svg" alt="" className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icons/cloud.svg" alt="" className="w-6 h-6 opacity-60" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Infra & DevOps
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.infra.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 bg-highlight border border-border rounded-lg text-sm font-mono text-text-secondary whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
          >
            <Card className="relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src="/icons/skill.svg" alt="" className="w-12 h-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icons/automation.svg" alt="" className="w-6 h-6 opacity-60" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Engineering Practices
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.practices.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 bg-highlight border border-border rounded-lg text-sm font-mono text-text-secondary whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        <motion.p
          className="mt-8 text-center text-text-secondary text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I prefer tooling that improves reliability: repeatable builds, automated
          checks, and clear interfaces. I support automating whatever I can.
        </motion.p>
      </Section>

      {/* About Section */}
      <Section id="about">
        <SectionHeading title="About" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                {about}
              </p>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* CTFs & Writeups Section */}
      <Section id="ctfs">
        <SectionHeading title="CTFs & Writeups" />
        {ctfs.length > 0 ? (
          <div className="space-y-8">
            {ctfs.map((ctf, idx) => (
              <motion.div
                key={ctf.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {ctf.name}
                      </h3>
                      <p className="text-accent text-sm font-mono mb-3">
                        {ctf.date} · {ctf.status}
                      </p>
                    </div>
                  </div>
                  {ctf.writeups && ctf.writeups.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-text-primary mb-2">
                        Writeups:
                      </p>
                      {ctf.writeups.map((writeup, wIdx) => (
                        <motion.div
                          key={wIdx}
                          className="flex items-center gap-3 p-3 bg-highlight border border-border rounded-lg hover:border-accent/50 transition-colors group/writeup"
                          whileHover={{ x: 4 }}
                        >
                          <span className="px-2 py-1 bg-surface border border-border rounded text-xs font-mono text-accent whitespace-nowrap">
                            {writeup.category}
                          </span>
                          <Link
                            href={writeup.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent transition-colors text-sm flex-1"
                          >
                            {writeup.title} →
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="text-center">
              <div className="py-8">
                <div className="mb-4 text-4xl">🔒</div>
                <p className="text-text-secondary mb-2">
                  CTF writeups and challenges coming soon.
                </p>
                <p className="text-text-secondary text-sm">
                  Check back for detailed walkthroughs of binary exploitation, reverse engineering, and web
                  security challenges.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionHeading title="Contact" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Let's connect.
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              If you're hiring for internships, research roles, or early-career
              software/security positions, I'd love to chat.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-text-secondary mb-1">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">LinkedIn</p>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  linkedin.com/in/{personalInfo.linkedin}
                </a>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">GitHub</p>
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  github.com/{personalInfo.github}
                </a>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Location/Timezone</p>
                <p className="text-text-primary font-medium">{personalInfo.location}</p>
              </div>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              Email me
            </a>
          </Card>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-text-secondary">
          <p>
            © {personalInfo.currentYear} {personalInfo.name} · Built with Next.js +
            Tailwind on Vercel · Last updated: {personalInfo.lastUpdated}
          </p>
        </div>
      </footer>
    </main>
  );
}

