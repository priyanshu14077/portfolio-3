"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BookACall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="w-full bg-white-100 py-[200px]">
      <div className="container mx-auto max-w-[1200px] px-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl .bg-gradient-to-br from-black-100 to-black-90 rounded-lg p-16 md:p-20 text-center"
        >
          <div className="flex flex-col gap-10 items-center">
            <h3 className="heading-5 text-white-100">Have a project?</h3>
            <h2 className="heading-2 text-white-100">Let&apos;s chat!</h2>
            <p className="text-20 text-white-100/80 max-w-2xl">
              I&apos;m always open to discussing new opportunities, innovative
              projects, and how we can bring your ideas to life with
              cutting-edge technology.
            </p>
            <motion.a
              href="#" // to be attached - Calendly link
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white-100 text-black-100 rounded-lg mono-16 font-semibold hover:bg-white-98 transition-colors"
            >
              Schedule a Call
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-black-100"
              >
                <path
                  d="M5 10L15 10M15 10L10 5M15 10L10 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <p className="text-14 text-white-100/60 mt-4">
              Available for new projects starting {/* to be attached - date */}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
