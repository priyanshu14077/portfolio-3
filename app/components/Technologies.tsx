"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    number: "01 ——",
    title: "Frontend Development",
    description:
      "Building responsive, performant user interfaces using modern React frameworks and TypeScript. Specializing in Next.js for server-side rendering, static site generation, and optimized production builds that deliver exceptional user experiences.",
    features: [
      { label: "Next.js & React", active: true },
      { label: "TypeScript", active: true },
      { label: "Tailwind CSS", active: true },
      { label: "State Management", active: true },
      { label: "Performance Optimization", active: false },
    ],
  },
  {
    number: "02 ——",
    title: "Backend Architecture",
    description:
      "Designing scalable server-side solutions with robust API development, database optimization, and microservices patterns. Implementing secure authentication systems, rate limiting, and efficient data processing pipelines.",
    features: [
      { label: "RESTful APIs", active: true },
      { label: "GraphQL", active: true },
      { label: "Database Design", active: true },
      { label: "Authentication & Authorization", active: true },
      { label: "API Security", active: false },
    ],
  },
  {
    number: "03 ——",
    title: "Microservices & Caching",
    description:
      "Architecting distributed systems with Redis-based caching strategies, message queues, and service orchestration. Implementing efficient data flow patterns, cache invalidation strategies, and horizontal scaling solutions.",
    features: [
      { label: "Redis Caching", active: true },
      { label: "Microservices Architecture", active: true },
      { label: "Message Queues", active: true },
      { label: "Load Balancing", active: true },
      { label: "Service Discovery", active: false },
    ],
  },
  {
    number: "04 ——",
    title: "API Security & Performance",
    description:
      "Implementing comprehensive security measures including JWT authentication, OAuth integration, rate limiting, CORS policies, and input validation. Optimizing API performance through caching, compression, and efficient query patterns.",
    features: [
      { label: "JWT Authentication", active: true },
      { label: "Rate Limiting", active: true },
      { label: "API Versioning", active: true },
      { label: "Security Best Practices", active: true },
      { label: "Performance Monitoring", active: false },
    ],
  },
  {
    number: "05 ——",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on cloud platforms with CI/CD pipelines, containerization, and infrastructure as code. Ensuring high availability, automated scaling, and comprehensive monitoring solutions.",
    features: [
      { label: "Cloud Hosting", active: true },
      { label: "CI/CD Pipelines", active: true },
      { label: "Docker & Containers", active: true },
      { label: "Monitoring & Logging", active: true },
      { label: "Infrastructure as Code", active: false },
    ],
  },
];

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="technologies"
      ref={ref}
      className="w-full bg-white-98 py-[300px]"
    >
      <div className="container mx-auto max-w-[1440px] px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="sticky top-[100px] mb-[80px] bg-white-98 z-10"
        >
          <h2 className="heading-8 text-black-100">Technical Expertise</h2>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sticky top-[180px] mb-[100px] flex justify-center z-10"
        >
          <h2 className="heading-4 text-black-100 text-center max-w-[850px]">
            &quot;Code is not just what it looks like and feels like. Code is
            how it performs, scales, and maintains.&quot;
          </h2>
        </motion.div>

        {/* Technologies List */}
        <div className="flex flex-col gap-0">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="sticky top-[420px] py-[60px] z-10"
            >
              <div className="bg-white-100 rounded-lg p-12 border border-black-10">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className=".flex-shrink-0">
                    <span className="mono-18 text-black-60">{tech.number}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-8">
                    <h3 className="heading-6 text-black-100">{tech.title}</h3>
                    <p className="text-18 text-black-70 leading-relaxed">
                      {tech.description}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {tech.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 ${
                            feature.active ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              feature.active ? "bg-black-100" : "bg-black-30"
                            }`}
                          />
                          <span className="text-16 text-black-70">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
