"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import BookACall from "./components/BookACall";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white-100">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Stats />
      <Testimonials />
      <BookACall />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
