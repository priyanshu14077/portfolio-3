"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop",
    alt: "Dark tech workspace",
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop",
    alt: "Dark development environment",
  },
  {
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80&auto=format&fit=crop",
    alt: "Dark code on screen",
  },
  {
    url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80&auto=format&fit=crop",
    alt: "Dark modern technology",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black-100 overflow-hidden">
      {/* Hero Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {heroImages.map((image, index) => {
            if (index !== currentImage) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onLoad={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-black-100/60" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-[40px] py-[40px]">
        {/* First Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sticky top-10 self-start"
        >
          <h1 className="heading-1 text-white-100">PRIYANSHU</h1>
        </motion.div>

        {/* Middle Section */}
        <div className="flex justify-between items-center w-full px-[40px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-start gap-10"
          >
            <div className="w-[60px] h-[31px] relative">
              <span className="mono-24 text-white-100">2K25</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-1px h-[100px] bg-white-100" />
              <div className="w-[24px] h-[137px] relative">
                <span className="mono-18 text-white-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                  ./ portfolio
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="sticky bottom-[40px] self-end flex items-end justify-between w-full px-[40px]"
        >
          <div className="flex flex-col gap-2.5 max-w-[410px] pt-7.5">
            <p className="mono-24 text-white-100">
              Crafting Scalable Solutions Through Code & Architecture
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-9 flex items-center justify-center"
            >
              <svg
                width="32"
                height="35"
                viewBox="0 0 32 35"
                fill="none"
                className="text-white-100"
              >
                <path
                  d="M16 0L16 30M16 30L6 20M16 30L26 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
          <h1 className="heading-1 text-white-100">SINGH</h1>
        </motion.div>
      </div>

      {/* Image Loader Indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black-100">
          <div className="w-12 h-12 border-2 border-white-100/30 border-t-white-100 rounded-full animate-spin" />
        </div>
      )}
    </section>
  );
}
