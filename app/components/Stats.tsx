"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    icon: "award",
    title: "Projects Completed",
    value: 12,
    suffix: "",
    details: [
      { number: "6", label: "Web Applications" },
      { number: "4", label: "API Development" },
      { number: "2", label: "E-commerce Platforms" },
    ],
  },
  {
    icon: "code",
    title: "Technologies Mastered",
    value: 15,
    suffix: "+",
    details: [
      { number: "5", label: "Frontend Frameworks" },
      { number: "4", label: "Backend Technologies" },
      { number: "3", label: "Database Systems" },
      { number: "3", label: "Cloud Services" },
    ],
  },
  {
    icon: "users",
    title: "Client Satisfaction",
    value: 98,
    suffix: "%",
    details: null,
  },
  {
    icon: "clock",
    title: "Years of Experience",
    value: 1,
    suffix: "+",
    details: null,
  },
];

function AnimatedNumber({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(interval);
            setHasAnimated(true);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [value, delay, hasAnimated]);

  return (
    <span className="heading-2 text-black-100">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-white-100 py-[300px]">
      <div className="container mx-auto max-w-[1200px] px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-[150px]"
        >
          <h2 className="heading-8 text-black-100">Metric Marvels</h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="flex flex-col gap-[150px]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="flex flex-col md:flex-row items-start justify-center gap-[250px]"
            >
              {/* Left: Icon and Title */}
              <div className="flex flex-col gap-3 min-w-[290px]">
                <div className="flex items-center gap-6 pb-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-black-100"
                    >
                      {stat.icon === "award" && (
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M12 2v6m0 0L9 5m3-3l3 3" />
                      )}
                      {stat.icon === "code" && (
                        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                      )}
                      {stat.icon === "users" && (
                        <>
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </>
                      )}
                      {stat.icon === "clock" && (
                        <circle cx="12" cy="12" r="10" />
                      )}
                    </svg>
                  </div>
                  <h3 className="mono-20 text-black-100">{stat.title}</h3>
                </div>
                <div>
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={index * 200}
                  />
                </div>
              </div>

              {/* Right: Details */}
              {stat.details && (
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-1.5 items-end">
                    {stat.details.map((detail, idx) => (
                      <span key={idx} className="heading-6 text-black-100">
                        {detail.number}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {stat.details.map((detail, idx) => (
                      <span key={idx} className="heading-6 text-black-100">
                        {detail.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
