"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Priyanshu delivered an exceptional Next.js application with robust API integration. His attention to detail and technical expertise made our project a success.",
    author: "Client Name",
    role: "CEO, Company Name", // to be attached
    company: "EmTech Solutions",
  },
  {
    id: 2,
    quote:
      "The microservices architecture and Redis caching implementation significantly improved our platform's performance. Outstanding work on scalability and security.",
    author: "Client Name",
    role: "CTO, Company Name", // to be attached
    company: "Proploy",
  },
  {
    id: 3,
    quote:
      "Working with Priyanshu was a pleasure. He transformed our complex requirements into a clean, maintainable codebase with excellent documentation.",
    author: "Client Name",
    role: "Product Manager, Company Name", // to be attached
    company: "Atmosphere Serene",
  },
  {
    id: 4,
    quote:
      "The AI voice agent integration exceeded our expectations. Priyanshu's expertise in API development and system architecture is truly impressive.",
    author: "Client Name",
    role: "Founder, Company Name", // to be attached
    company: "ECHO",
  },
  {
    id: 5,
    quote:
      "The custom configuration system for our jewellery store is beautifully implemented. The attention to user experience and technical excellence is remarkable.",
    author: "Client Name",
    role: "Owner, Company Name", // to be attached
    company: "Dunne",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-white-100 py-[100px] pb-[100px]">
      <div className="container mx-auto max-w-[1200px] px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-[30px] mb-15"
        >
          <h2 className="heading-8 text-black-100">Applause Corner</h2>
        </motion.div>

        {/* Testimonials Ticker */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -50 * 100],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[400px] bg-white-98 rounded-lg p-8 border border-black-10"
              >
                <p className="text-18 text-black-70 mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex flex-col gap-1">
                  <p className="heading-9 text-black-100">
                    {testimonial.author}
                  </p>
                  <p className="text-16 text-black-60">{testimonial.role}</p>
                  <p className="text-14 text-black-50">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
