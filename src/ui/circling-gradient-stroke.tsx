"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export interface CirclingGradientStrokeProps {
  size?: number;
  strokeWidth?: number;
  duration?: number; // Duration for one complete rotation in seconds
  colors?: string[]; // Array of 4 colors for the gradient
  className?: string;
  opacity?: number;
}

export const CirclingGradientStroke: React.FC<CirclingGradientStrokeProps> = ({
  size = 400,
  strokeWidth = 4,
  duration = 12, // Slower: 5 rounds per minute = 12 seconds per round
  colors = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'], // Default: Blue, Purple, Red, Green
  className = "",
  opacity = 0.8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Motion value for rotation
  const rotation = useMotionValue(0);
  
  // Motion value for stroke animation
  const strokeDashoffset = useMotionValue(0);

  useEffect(() => {
    // Animate rotation continuously
    const rotationControls = animate(rotation, 360, {
      repeat: Infinity,
      ease: "linear",
      duration,
    });

    // Animate stroke dash for flowing effect (slower than before)
    const strokeControls = animate(strokeDashoffset, -circumference, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.8, // Stroke flows at 80% of rotation speed
    });

    return () => {
      rotationControls.stop();
      strokeControls.stop();
    };
  }, [duration, circumference, rotation, strokeDashoffset]);

  // Ensure we have exactly 4 colors
  const gradientColors = colors.length >= 4 ? colors.slice(0, 4) : [
    ...colors,
    ...Array(4 - colors.length).fill(colors[colors.length - 1] || '#3b82f6')
  ];

  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        width={size}
        height={size}
        className="absolute"
        style={{ 
          rotate: rotation,
          opacity,
        }}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id="circling-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="33%" stopColor={gradientColors[1]} />
            <stop offset="66%" stopColor={gradientColors[2]} />
            <stop offset="100%" stopColor={gradientColors[3]} />
          </linearGradient>
          
          {/* Radial gradient for glow effect */}
          <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.4" />
            <stop offset="30%" stopColor={gradientColors[1]} stopOpacity="0.2" />
            <stop offset="70%" stopColor={gradientColors[2]} stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Enhanced glow effect circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius + 30}
          fill="url(#glow-gradient)"
          opacity="0.6"
        />

        {/* Main gradient stroke - more visible */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#circling-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * 0.4} ${circumference * 0.6}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          filter="drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
        />

        {/* Secondary stroke for depth - more visible */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth * 1.5}
          fill="none"
          stroke="url(#circling-gradient)"
          strokeWidth={strokeWidth * 0.6}
          strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
          style={{ strokeDashoffset: strokeDashoffset }}
          strokeLinecap="round"
          opacity="0.7"
          filter="drop-shadow(0 0 4px rgba(139, 92, 246, 0.4))"
        />

        {/* Third outer stroke for extra effect */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius + strokeWidth}
          fill="none"
          stroke="url(#circling-gradient)"
          strokeWidth={strokeWidth * 0.4}
          strokeDasharray={`${circumference * 0.15} ${circumference * 0.85}`}
          style={{ strokeDashoffset: strokeDashoffset }}
          strokeLinecap="round"
          opacity="0.5"
          filter="drop-shadow(0 0 6px rgba(239, 68, 68, 0.3))"
        />
      </motion.svg>
    </div>
  );
};