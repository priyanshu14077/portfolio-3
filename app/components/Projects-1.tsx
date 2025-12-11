"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import GlassSurface from "@/components/GlassSurface";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  liveDemo: string;
}

const projects: Project[] = [
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

// GlassSurface configurations
const featuredGlassConfig = {
  borderRadius: 20,
  borderWidth: 0.08,
  brightness: 55,
  opacity: 0.95,
  blur: 12,
  displace: 0.5,
  backgroundOpacity: 0.15,
  saturation: 1.2,
  distortionScale: -180,
  redOffset: 0,
  greenOffset: 12,
  blueOffset: 24,
  xChannel: "R" as const,
  yChannel: "G" as const,
  mixBlendMode: "overlay" as const,
};

const regularGlassConfigs = [
  {
    borderRadius: 20,
    borderWidth: 0.06,
    brightness: 50,
    opacity: 0.92,
    blur: 10,
    displace: 0.3,
    backgroundOpacity: 0.08,
    saturation: 1.1,
    distortionScale: -160,
    redOffset: 2,
    greenOffset: 10,
    blueOffset: 18,
    xChannel: "R" as const,
    yChannel: "B" as const,
    mixBlendMode: "soft-light" as const,
  },
  {
    borderRadius: 20,
    borderWidth: 0.07,
    brightness: 48,
    opacity: 0.94,
    blur: 11,
    displace: 0.4,
    backgroundOpacity: 0.06,
    saturation: 1.15,
    distortionScale: -170,
    redOffset: -2,
    greenOffset: 8,
    blueOffset: 20,
    xChannel: "G" as const,
    yChannel: "R" as const,
    mixBlendMode: "multiply" as const,
  },
  {
    borderRadius: 20,
    borderWidth: 0.065,
    brightness: 52,
    opacity: 0.93,
    blur: 9,
    displace: 0.35,
    backgroundOpacity: 0.07,
    saturation: 1.2,
    distortionScale: -175,
    redOffset: 1,
    greenOffset: 11,
    blueOffset: 22,
    xChannel: "B" as const,
    yChannel: "G" as const,
    mixBlendMode: "screen" as const,
  },
  {
    borderRadius: 20,
    borderWidth: 0.07,
    brightness: 49,
    opacity: 0.91,
    blur: 10,
    displace: 0.25,
    backgroundOpacity: 0.05,
    saturation: 1.05,
    distortionScale: -165,
    redOffset: 0,
    greenOffset: 9,
    blueOffset: 19,
    xChannel: "R" as const,
    yChannel: "B" as const,
    mixBlendMode: "normal" as const,
  },
  {
    borderRadius: 20,
    borderWidth: 0.068,
    brightness: 51,
    opacity: 0.92,
    blur: 11,
    displace: 0.45,
    backgroundOpacity: 0.09,
    saturation: 1.18,
    distortionScale: -178,
    redOffset: 3,
    greenOffset: 12,
    blueOffset: 23,
    xChannel: "G" as const,
    yChannel: "R" as const,
    mixBlendMode: "difference" as const,
  },
];

const quoteGlassConfig = {
  borderRadius: 20,
  borderWidth: 0.05,
  brightness: 45,
  opacity: 0.88,
  blur: 8,
  displace: 0.2,
  backgroundOpacity: 0.04,
  saturation: 1.0,
  distortionScale: -150,
  redOffset: 0,
  greenOffset: 8,
  blueOffset: 16,
  xChannel: "R" as const,
  yChannel: "G" as const,
  mixBlendMode: "normal" as const,
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isInView,
  isFeatured = false,
}) => {
  const { title, client, description, image, tags, github, liveDemo } = project;

  const glassConfig = isFeatured
    ? featuredGlassConfig
    : regularGlassConfigs[index % regularGlassConfigs.length];

  if (isFeatured) {
    return (
      <div className="relative w-full h-screen rounded-lg overflow-hidden">
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={glassConfig.borderRadius}
          borderWidth={glassConfig.borderWidth}
          brightness={glassConfig.brightness}
          opacity={glassConfig.opacity}
          blur={glassConfig.blur}
          displace={glassConfig.displace}
          backgroundOpacity={glassConfig.backgroundOpacity}
          saturation={glassConfig.saturation}
          distortionScale={glassConfig.distortionScale}
          redOffset={glassConfig.redOffset}
          greenOffset={glassConfig.greenOffset}
          blueOffset={glassConfig.blueOffset}
          xChannel={glassConfig.xChannel}
          yChannel={glassConfig.yChannel}
          mixBlendMode={glassConfig.mixBlendMode}
          className="absolute inset-0"
          style={{
            transition: "all 0.3s ease-in-out",
          }}
        >
          {/* Background Image - Behind Glass */}
          <div className="absolute inset-0 z-0 -m-2">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 .bg-gradient-to-t from-black-100/80 via-black-100/40 to-transparent" />
          </div>

          {/* Content - Inside Glass */}
          <div className="relative z-10 w-full h-full flex flex-col justify-end p-12 md:p-16 text-white-100">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              <h3 className="heading-2 mb-2">{title}</h3>
              <p className="text-20 opacity-90 mb-2">{client}</p>
              <p className="text-18 max-w-2xl opacity-80 mb-6">{description}</p>

              <div className="flex items-center gap-6 mt-4">
                <motion.a
                  href={github}
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
                  href={liveDemo}
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
            </motion.div>
          </div>
        </GlassSurface>
      </div>
    );
  }

  // Regular Project Card
  return (
    <GlassSurface
      width="100%"
      height="auto"
      borderRadius={glassConfig.borderRadius}
      borderWidth={glassConfig.borderWidth}
      brightness={glassConfig.brightness}
      opacity={glassConfig.opacity}
      blur={glassConfig.blur}
      displace={glassConfig.displace}
      backgroundOpacity={glassConfig.backgroundOpacity}
      saturation={glassConfig.saturation}
      distortionScale={glassConfig.distortionScale}
      redOffset={glassConfig.redOffset}
      greenOffset={glassConfig.greenOffset}
      blueOffset={glassConfig.blueOffset}
      xChannel={glassConfig.xChannel}
      yChannel={glassConfig.yChannel}
      mixBlendMode={glassConfig.mixBlendMode}
      className="overflow-hidden hover:scale-[1.02] transition-transform duration-300"
      style={{
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Content fills the GlassSurface wrapper */}
      <div className="w-full flex flex-col -m-2">
        {/* Project Image */}
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 .bg-gradient-to-t from-black-100/40 to-transparent" />
        </div>

        {/* Project Content */}
        <div className="p-10 md:p-12 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="heading-6 text-black-100">{title}</h3>
            <p className="text-18 text-black-60">{client}</p>
            <p className="text-16 text-black-70 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-black-10 text-14 text-black-70 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-6 mt-2 border-t border-black-10">
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 bg-black-100 text-white-100 rounded-lg text-16 hover:bg-black-90 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <svg
                width="18"
                height="18"
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
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 bg-white-100 border-2 border-black-100 text-black-100 rounded-lg text-16 hover:bg-black-10 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <svg
                width="18"
                height="18"
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
      </div>
    </GlassSurface>
  );
};

export default function Projects1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full bg-white-100 py-[350px] md:py-[400px] isolate"
      style={{ zIndex: 2 }}
    >
      <div className="container mx-auto max-w-[1200px] px-6 md:px-10 lg:px-12">
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-[160px] bg-white-100 z-0"
        >
          <div className="flex flex-col gap-[100px]">
            <h2 className="heading-8 text-black-100 mb-4">Featured Project</h2>
            <ProjectCard
              project={featuredProject}
              index={0}
              isInView={isInView}
              isFeatured={true}
            />
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-[100px] py-[180px]"
        >
          <div className="flex justify-center">
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={quoteGlassConfig.borderRadius}
              borderWidth={quoteGlassConfig.borderWidth}
              brightness={quoteGlassConfig.brightness}
              opacity={quoteGlassConfig.opacity}
              blur={quoteGlassConfig.blur}
              displace={quoteGlassConfig.displace}
              backgroundOpacity={quoteGlassConfig.backgroundOpacity}
              saturation={quoteGlassConfig.saturation}
              distortionScale={quoteGlassConfig.distortionScale}
              redOffset={quoteGlassConfig.redOffset}
              greenOffset={quoteGlassConfig.greenOffset}
              blueOffset={quoteGlassConfig.blueOffset}
              xChannel={quoteGlassConfig.xChannel}
              yChannel={quoteGlassConfig.yChannel}
              mixBlendMode={quoteGlassConfig.mixBlendMode}
              className="max-w-[920px] mx-auto"
              style={{
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div className="p-16 md:p-20 -m-2">
                <h2 className="heading-4 text-black-100 text-center leading-relaxed">
                  I&apos;ve had the privilege of building scalable solutions for
                  diverse industries, transforming complex requirements into
                  elegant, performant applications.
                </h2>
              </div>
            </GlassSurface>
          </div>
        </motion.div>

        {/* Selected Projects with ScrollStack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-[280px]"
        >
          <h2 className="heading-8 text-black-100 mb-[140px]">
            Selected Projects
          </h2>

          {/* ScrollStack Container */}
          <ScrollStack
            useWindowScroll={true}
            itemDistance={180}
            itemScale={0.02}
            itemStackDistance={60}
            stackPosition="30%"
            scaleEndPosition="20%"
            baseScale={0.9}
            rotationAmount={0}
            blurAmount={0.5}
            scaleDuration={0.2}
            className="w-full"
          >
            {otherProjects.map((project, index) => (
              <ScrollStackItem
                key={project.id}
                itemClassName="bg-transparent shadow-none h-auto min-h-[500px]"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isInView={isInView}
                  isFeatured={false}
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </motion.div>
      </div>
    </section>
  );
}
