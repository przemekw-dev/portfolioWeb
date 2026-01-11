// components/FrutigerComponents.jsx
"use client";

import { useEffect } from "react";

export function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`glass-card ${
        hover ? "hover-lift" : ""
      } p-6 relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function SkillCard({ icon, title, description }) {
  return (
    <GlassCard>
      <div className="text-4xl mb-4 text-accent-green">{icon}</div>
      <h3 className="text-xl font-exo font-semibold mb-3">{title}</h3>
      <p className="text-text-light/80 font-montserrat">{description}</p>
    </GlassCard>
  );
}

export function ProjectCard({ title, description, tags, icon }) {
  return (
    <div className="glass-card hover-lift overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-primary-blue to-accent-green flex items-center justify-center">
        <div className="text-6xl text-white">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-exo font-semibold mb-3">{title}</h3>
        <p className="text-text-light/80 font-montserrat mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent-green/20 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import { FaMobileAlt, FaServer, FaCloud } from "react-icons/fa";
import { SiTypescript, SiReact, SiCsharp, SiNodedotjs } from "react-icons/si";

export function FloatingSphere({ className = "" }) {
  return (
    <div
      className={`w-64 h-64 glass-card rounded-full flex flex-col justify-center items-center relative floating-element ${className}`}
    >
      <div className="flex gap-8 mb-4">
        <FaMobileAlt className="text-5xl text-primary-blue" />
        <FaServer className="text-5xl text-secondary-blue" />
      </div>
      <div className="flex gap-8 mb-4">
        <FaCloud className="text-5xl text-accent-green" />
        <SiTypescript className="text-5xl text-blue-400" />
      </div>
      <div className="flex gap-8">
        <SiReact className="text-5xl text-cyan-400" />
        <SiNodedotjs className="text-5xl text-green-500" />
      </div>
    </div>
  );
}

export function BubbleBackground() {
  useEffect(() => {
    // Create dynamic bubbles on client side
    const createBubbles = () => {
      const container = document.querySelector(".bubble-container");
      if (!container) return;

      for (let i = 0; i < 5; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";

        // Random size and position
        const size = Math.random() * 100 + 50;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;

        // Random animation duration
        const duration = Math.random() * 20 + 20;
        bubble.style.animationDuration = `${duration}s`;

        container.appendChild(bubble);
      }
    };

    createBubbles();
  }, []);

  return (
    <div className="bubble-container fixed inset-0 pointer-events-none z-[-1]" />
  );
}

export function CTAButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-block bg-gradient-to-r from-primary-blue to-accent-green text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}
