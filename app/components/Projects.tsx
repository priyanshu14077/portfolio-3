"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid";

const projects = [
  {
    id: 1,
    title: "EmTech Solutions",
    client: "Construction Company",
    description:
      "A high-performance frontend landing page showcasing construction services, built with Next.js and advanced API integration. Features dynamic content management, real-time project updates, and seamless third-party service integrations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    tags: ["Next.js", "API Integration", "TypeScript", "Responsive Design"],
    github: "#", // to be attached
    liveDemo: "#", // to be attached
  },
  {
    id: 2,
    title: "Atmosphere Serene",
    client: "Weather Platform",
    description:
      "A sophisticated weather information platform that leverages geolocation APIs to deliver real-time meteorological data and extended forecasts. Built with coordinate-based querying, featuring interactive maps, detailed analytics, and predictive modeling.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    tags: [
      "API Development",
      "Geolocation",
      "Data Visualization",
      "Real-time Updates",
    ],
    github: "#", // to be attached
    liveDemo: "#", // to be attached
  },
  {
    id: 3,
    title: "ECHO",
    client: "AI Voice Agent",
    description:
      "An intelligent AI-powered voice agent platform designed for marketing agencies. Features natural language processing, automated campaign management, voice-to-text transcription, and seamless CRM integration for enhanced client communication workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI/ML", "Voice Processing", "NLP", "API Integration"],
    github: "#", // to be attached
    liveDemo: "#", // to be attached
  },
  {
    id: 4,
    title: "Proploy",
    client: "Marketplace Platform",
    description:
      "A comprehensive double-sided marketplace connecting service providers with clients. Implements advanced matching algorithms, secure payment gateways, real-time messaging, review systems, and dynamic pricing models with Redis caching for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: [
      "Microservices",
      "Payment Integration",
      "Redis Caching",
      "Real-time Systems",
    ],
    github: "#", // to be attached
    liveDemo: "#", // to be attached
  },
  {
    id: 5,
    title: "Dunne",
    client: "Jewellery E-commerce",
    description:
      'An elegant e-commerce platform for a premium jewellery brand featuring a custom "Make Your Own" configuration system. Includes 3D product visualization, personalized design tools, inventory management, and secure checkout with multiple payment options.',
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    tags: [
      "E-commerce",
      "Custom Configuration",
      "3D Visualization",
      "Payment Gateway",
    ],
    github: "#", // to be attached
    liveDemo: "#", // to be attached
  },
  {
    id: 6,
    title: "CloudSync API",
    client: "Enterprise Solution",
    description:
      "A robust microservices architecture for enterprise data synchronization with advanced security protocols. Features JWT authentication, rate limiting, Redis-based caching, API versioning, and comprehensive monitoring dashboards for system health and performance metrics.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: [
      "Microservices",
      "API Security",
      "Rate Limiting",
      "Redis",
      "Monitoring",
    ],
    github: "#", // to be attached
    liveDemo: "#", // to be attached
  },
];

// Color gradients for each project
const projectGradients = [
  "linear-gradient(145deg,#4F46E5,#000)",
  "linear-gradient(210deg,#10B981,#000)",
  "linear-gradient(165deg,#F59E0B,#000)",
  "linear-gradient(195deg,#EF4444,#000)",
  "linear-gradient(225deg,#8B5CF6,#000)",
  "linear-gradient(135deg,#06B6D4,#000)",
];

const borderColors = [
  "#4F46E5",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Convert projects to ChromaItem format
  const chromaItems: ChromaItem[] = projects.slice(1).map((project, index) => ({
    image: project.image,
    title: project.title,
    subtitle: project.client,
    handle: project.tags.slice(0, 2).join(" • "), // Show first 2 tags
    location:
      project.tags.length > 2 ? `+${project.tags.length - 2} more` : undefined,
    borderColor: borderColors[index % borderColors.length],
    gradient: projectGradients[index % projectGradients.length],
    url: project.liveDemo, // Live demo URL
    githubUrl: project.github, // GitHub URL
  }));

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full bg-white-100 py-[200px] isolate"
      style={{ zIndex: 2 }}
    >
      <div className="container mx-auto max-w-[1200px] px-10">
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-20 bg-white-100 z-0"
        >
          <div className="flex flex-col gap-20">
            <h2 className="heading-8 text-black-100">Featured Project</h2>
            <div className="relative w-full h-screen rounded-lg overflow-hidden bg-white-100 shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-100/80 via-black-100/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white-100 z-10">
                  <h3 className="heading-2 mb-4">{projects[0].title}</h3>
                  <p className="text-20 mb-6 opacity-90">
                    {projects[0].client}
                  </p>
                  <p className="text-18 max-w-2xl opacity-80 mb-8">
                    {projects[0].description}
                  </p>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white-100/10 backdrop-blur-sm border border-white-100/20 rounded-lg text-white-100 text-16 hover:bg-white-100/20 transition-colors flex items-center gap-2"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      GitHub
                    </motion.a>
                    <motion.a
                      href={projects[0].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white-100 text-black-100 rounded-lg text-16 hover:bg-white-98 transition-colors flex items-center gap-2 font-semibold"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Brands/Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-[60px] py-[100px]"
        >
          <div className="flex justify-center">
            <h2 className="heading-4 text-black-100 text-center max-w-[920px]">
              I&apos;ve had the privilege of building scalable solutions for
              diverse industries, transforming complex requirements into
              elegant, performant applications.
            </h2>
          </div>
        </motion.div>

        {/* Projects Grid using ChromaGrid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-[200px]"
        >
          <h2 className="heading-8 text-black-100 mb-[100px]">
            Selected Projects
          </h2>

          {/* ChromaGrid Container */}
          <div className="relative min-h-[800px]">
            <ChromaGrid
              items={chromaItems}
              className="min-h-[800px]"
              radius={400}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
