"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card3D } from "./card3D";

const projects = [
  "https://framerusercontent.com/images/JeI7uULY0av9DxD7q7NVLTuoNc.png",
  "https://framerusercontent.com/images/pfcMvn2yqXD2Cl6VWthMkHlhaKQ.png",
  "https://framerusercontent.com/images/W508S15xkXJdvalNWW9jYJSIKg.png",
];

export function ProjectCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-4 -mt-16 pb-40 z-20"
      style={{ perspective: "1500px" }}
    >
      <button onClick={() => scroll("left")} className="absolute left-6 top-1/3 z-40 p-4 rounded-full border backdrop-blur-md bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--primary-text-color)] hover:brightness-110 active:scale-95">
        <ChevronLeft />
      </button>
      <button onClick={() => scroll("right")} className="absolute right-6 top-1/3 z-40 p-4 rounded-full border backdrop-blur-md bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--primary-text-color)] hover:brightness-110 active:scale-95">
        <ChevronRight />
      </button>

      <div ref={carouselRef} className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide gap-8 py-10">
        {projects.map((path, index) => (
          <div key={index} className="min-w-full snap-center px-4">
            <Card3D src={path} scrollYProgress={scrollYProgress} />
          </div>
        ))}
      </div>
    </section>
  );
}