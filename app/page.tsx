"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import BookACall from "./components/BookACall";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Projects1 from "./components/Projects-1";

export default function Home() {
  return (
    <main className="min-h-screen bg-white-100">
      <Navigation />
      <Hero />
      <About />
      <Technologies />
      <Stats />
      {/* <Testimonials /> */}
      <Projects1 />
      <BookACall />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
