"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-black-100 py-[200px] isolate"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto max-w-[1200px] px-10 relative z-0">
        {/* Short Intro Sections - Absolutely Positioned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-10 right-10 z-30"
        >
          <div className="flex flex-col gap-8">
            <p className="mono-24 text-white-100 text-center max-w-4xl mx-auto">
              Full Stack Developer Specializing in Modern Web Technologies
            </p>
          </div>
        </motion.div>

        {/* Profile Section - Starts with proper spacing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-[80px] pt-[180px] relative z-20"
        >
          {/* Photo Container with Shadow and Gradient Overlay */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[400px]"
            >
              {/* Shadow Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-100/50 to-transparent rounded-lg blur-xl opacity-50"></div>

              {/* Photo Card */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-100/60 via-transparent to-transparent z-10"></div>

                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&q=80&fit=crop&auto=format"
                  alt="Priyanshu Kumar Singh"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
                {/* to be changed */}
              </div>

              {/* Badge Overlay */}
              <div className="absolute bottom-[171.5px] left-[53%] -translate-x-1/2 flex flex-col gap-1 items-center z-20">
                <div className="w-[172px] h-auto bg-white-100/20 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-white-100/10">
                  <p className="mono-14 text-white-100 text-center">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Profile Content with Card Styling */}
          <div className="flex-1 flex flex-col gap-[60px] pt-5">
            {/* Bio Section with Shadow and Gradient */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative bg-black-90/30 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-white-100/5"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-100/20 via-transparent to-black-90/20 rounded-lg pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-8">
                <p className="heading-9 text-white-100 leading-relaxed">
                  With over a year of hands-on experience in full-stack web
                  application development, I specialize in architecting robust,
                  scalable solutions using Next.js and TypeScript. My expertise
                  extends to backend design, where I implement secure API
                  architectures with comprehensive authentication systems, rate
                  limiting, and microservices patterns including Redis-based
                  caching strategies.
                </p>
                <p className="heading-9 text-white-100 leading-relaxed">
                  I excel at building production-ready applications that balance
                  performance, security, and maintainability. My approach
                  combines modern frontend frameworks with enterprise-grade
                  backend infrastructure, ensuring seamless user experiences
                  backed by reliable, efficient systems.
                </p>
              </div>
            </motion.div>

            {/* Location Section with Shadow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-black-90/30 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white-100/5"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 .bg-gradient-to-br from-black-100/20 via-transparent to-black-90/20 rounded-lg pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <p className="heading-9 text-white-100">
                    Based and work in New Delhi
                  </p>
                  <div className="w-[30px] h-[20px] rounded bg-white-100/20 flex items-center justify-center shadow-md">
                    <span className="text-xs">🇮🇳</span>
                  </div>
                </div>
                <div className="flex items-end gap-0.5">
                  <p className="text-16 text-white-100">GMT +5:30</p>
                  <span className="mono-18 text-white-100">(IST)</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links Section with Shadow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative bg-black-90/30 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-white-100/5"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-100/20 via-transparent to-black-90/20 rounded-lg pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex items-center gap-10">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 text-white-100 hover:text-white-100/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label={link.name}
                    >
                      <svg
                        width="24"
                        height="24"
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
                  className="inline-flex items-center gap-2 text-16 text-white-100/80 hover:text-white-100 transition-colors w-fit px-4 py-2 rounded-lg bg-white-100/5 hover:bg-white-100/10 border border-white-100/10 shadow-md"
                >
                  <span className="mono-16 text-white-100">RESUMÉ</span>
                  <svg
                    width="16"
                    height="16"
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
