"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlassSurface from "@/components/GlassSurface";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/priyanshu-kumar-singh14/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/priyanshu14077",
      icon: "github",
    },
    { name: "Twitter", url: "#", icon: "twitter" }, // to be attached
    {
      name: "Email",
      url: "mailto:kumarpriyanshu20012@gmail.com",
      icon: "email",
    },
  ];

  // GlassSurface config for About section
  const aboutGlassConfig = {
    borderRadius: 20,
    borderWidth: 0.07,
    brightness: 50,
    opacity: 0.92,
    blur: 11,
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
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-black-100 py-[400px] md:py-[500px] isolate"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 relative z-0">
        {/* Header Banner - Absolutely Fixed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-6 md:left-10 lg:left-16 right-6 md:right-10 lg:right-16 z-30"
        >
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={aboutGlassConfig.borderRadius}
            borderWidth={aboutGlassConfig.borderWidth}
            brightness={aboutGlassConfig.brightness}
            opacity={aboutGlassConfig.opacity}
            blur={aboutGlassConfig.blur}
            displace={aboutGlassConfig.displace}
            backgroundOpacity={aboutGlassConfig.backgroundOpacity}
            saturation={aboutGlassConfig.saturation}
            distortionScale={aboutGlassConfig.distortionScale}
            redOffset={aboutGlassConfig.redOffset}
            greenOffset={aboutGlassConfig.greenOffset}
            blueOffset={aboutGlassConfig.blueOffset}
            xChannel={aboutGlassConfig.xChannel}
            yChannel={aboutGlassConfig.yChannel}
            mixBlendMode={aboutGlassConfig.mixBlendMode}
            className="max-w-5xl mx-auto"
            style={{
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div className="p-8 md:p-12 -m-2">
              <p className="mono-24 text-white-100 text-center leading-relaxed">
                Full Stack Developer Specializing in Modern Web Technologies
              </p>
            </div>
          </GlassSurface>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-[140px] pt-[280px] relative z-20"
        >
          {/* Photo Container */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[450px] mx-auto lg:mx-0"
            >
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={20}
                borderWidth={0.08}
                brightness={55}
                opacity={0.95}
                blur={12}
                displace={0.5}
                backgroundOpacity={0.12}
                saturation={1.2}
                distortionScale={-180}
                redOffset={0}
                greenOffset={12}
                blueOffset={24}
                xChannel="R"
                yChannel="G"
                mixBlendMode="overlay"
                className="relative overflow-hidden"
                style={{
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="relative w-full .aspect-[3/4] -m-2">
                  {/* Shadow Container */}
                  <div className="absolute inset-0 .bg-gradient-to-br from-black-100/50 to-transparent rounded-lg blur-xl opacity-50 -z-10"></div>

                  {/* Photo */}
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&q=80&fit=crop&auto=format"
                    alt="Priyanshu Kumar Singh"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                  {/* to be changed */}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 .bg-gradient-to-t from-black-100/60 via-transparent to-transparent z-10"></div>

                  {/* Badge Overlay */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-white-100/20 backdrop-blur-md rounded-lg px-6 py-3 shadow-2xl border border-white-100/20">
                      <p className="mono-16 text-white-100 text-center font-medium">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </motion.div>
          </div>

          {/* Profile Content */}
          <div className="flex-1 flex flex-col gap-[100px] pt-12">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GlassSurface
                width="100%"
                height="auto"
                borderRadius={aboutGlassConfig.borderRadius}
                borderWidth={aboutGlassConfig.borderWidth}
                brightness={aboutGlassConfig.brightness}
                opacity={aboutGlassConfig.opacity}
                blur={aboutGlassConfig.blur}
                displace={aboutGlassConfig.displace}
                backgroundOpacity={aboutGlassConfig.backgroundOpacity}
                saturation={aboutGlassConfig.saturation}
                distortionScale={aboutGlassConfig.distortionScale}
                redOffset={aboutGlassConfig.redOffset}
                greenOffset={aboutGlassConfig.greenOffset}
                blueOffset={aboutGlassConfig.blueOffset}
                xChannel={aboutGlassConfig.xChannel}
                yChannel={aboutGlassConfig.yChannel}
                mixBlendMode={aboutGlassConfig.mixBlendMode}
                className="shadow-2xl"
                style={{
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="p-12 md:p-16 -m-2">
                  <div className="flex flex-col gap-10">
                    <h3 className="heading-7 text-white-100 mb-2">About Me</h3>
                    <div className="flex flex-col gap-8">
                      <p className="text-18 text-white-100/90 leading-relaxed">
                        With over a year of hands-on experience in full-stack
                        web application development, I specialize in
                        architecting robust, scalable solutions using Next.js
                        and TypeScript. My expertise extends to backend design,
                        where I implement secure API architectures with
                        comprehensive authentication systems, rate limiting, and
                        microservices patterns including Redis-based caching
                        strategies.
                      </p>
                      <p className="text-18 text-white-100/90 leading-relaxed">
                        I excel at building production-ready applications that
                        balance performance, security, and maintainability. My
                        approach combines modern frontend frameworks with
                        enterprise-grade backend infrastructure, ensuring
                        seamless user experiences backed by reliable, efficient
                        systems.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </motion.div>

            {/* Location & Social Section */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex-1"
              >
                <GlassSurface
                  width="100%"
                  height="auto"
                  borderRadius={aboutGlassConfig.borderRadius}
                  borderWidth={aboutGlassConfig.borderWidth}
                  brightness={aboutGlassConfig.brightness}
                  opacity={aboutGlassConfig.opacity}
                  blur={aboutGlassConfig.blur}
                  displace={aboutGlassConfig.displace}
                  backgroundOpacity={aboutGlassConfig.backgroundOpacity}
                  saturation={aboutGlassConfig.saturation}
                  distortionScale={aboutGlassConfig.distortionScale}
                  redOffset={aboutGlassConfig.redOffset}
                  greenOffset={aboutGlassConfig.greenOffset}
                  blueOffset={aboutGlassConfig.blueOffset}
                  xChannel={aboutGlassConfig.xChannel}
                  yChannel={aboutGlassConfig.yChannel}
                  mixBlendMode={aboutGlassConfig.mixBlendMode}
                  className="shadow-xl"
                  style={{
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div className="p-10 md:p-12 -m-2">
                    <div className="flex flex-col gap-6">
                      <h4 className="heading-8 text-white-100">Location</h4>
                      <div className="flex items-center gap-4">
                        <p className="text-18 text-white-100/90">
                          New Delhi, India
                        </p>
                        <div className="w-10 h-6 rounded bg-white-100/20 flex items-center justify-center shadow-lg border border-white-100/10">
                          <span className="text-base">🇮🇳</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t border-white-100/10">
                        <p className="text-16 text-white-100/80">GMT +5:30</p>
                        <span className="mono-18 text-white-100/80">(IST)</span>
                      </div>
                    </div>
                  </div>
                </GlassSurface>
              </motion.div>

              {/* Social Links Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-1"
              >
                <GlassSurface
                  width="100%"
                  height="auto"
                  borderRadius={aboutGlassConfig.borderRadius}
                  borderWidth={aboutGlassConfig.borderWidth}
                  brightness={aboutGlassConfig.brightness}
                  opacity={aboutGlassConfig.opacity}
                  blur={aboutGlassConfig.blur}
                  displace={aboutGlassConfig.displace}
                  backgroundOpacity={aboutGlassConfig.backgroundOpacity}
                  saturation={aboutGlassConfig.saturation}
                  distortionScale={aboutGlassConfig.distortionScale}
                  redOffset={aboutGlassConfig.redOffset}
                  greenOffset={aboutGlassConfig.greenOffset}
                  blueOffset={aboutGlassConfig.blueOffset}
                  xChannel={aboutGlassConfig.xChannel}
                  yChannel={aboutGlassConfig.yChannel}
                  mixBlendMode={aboutGlassConfig.mixBlendMode}
                  className="shadow-xl"
                  style={{
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div className="p-10 md:p-12 -m-2">
                    <div className="flex flex-col gap-8">
                      <h4 className="heading-8 text-white-100">Connect</h4>
                      <div className="flex items-center gap-8 flex-wrap">
                        {socialLinks.map((link) => (
                          <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 flex items-center justify-center text-white-100 hover:text-white-100/80 transition-all duration-300 rounded-lg bg-white-100/5 hover:bg-white-100/10 border border-white-100/10"
                            aria-label={link.name}
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {link.icon === "linkedin" && (
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                              )}
                              {link.icon === "github" && (
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              )}
                              {link.icon === "twitter" && (
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                              )}
                              {link.icon === "email" && (
                                <>
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                  <polyline points="22,6 12,13 2,6" />
                                </>
                              )}
                            </svg>
                          </motion.a>
                        ))}
                      </div>

                      {/* Resume Download */}
                      <motion.a
                        href="#" // to be attached
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 text-18 text-white-100/90 hover:text-white-100 transition-colors w-fit px-6 py-3 rounded-lg bg-white-100/10 hover:bg-white-100/15 border border-white-100/20 shadow-lg mt-4"
                      >
                        <span className="mono-18 text-white-100 font-medium">
                          Download RESUMÉ
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-white-100"
                        >
                          <path
                            d="M8 12L3 7M8 12L13 7M8 12V2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </GlassSurface>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
