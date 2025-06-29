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
  size = 600,
  strokeWidth = 2,
  duration = 6, // 10 rounds per minute = 6 seconds per round
  colors = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'], // Default: Blue, Purple, Red, Green
  className = "",
  opacity = 0.6,
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

    // Animate stroke dash for flowing effect
    const strokeControls = animate(strokeDashoffset, -circumference, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.5, // Stroke flows twice as fast as rotation
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
            <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.3" />
            <stop offset="50%" stopColor={gradientColors[1]} stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow effect circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius + 20}
          fill="url(#glow-gradient)"
          opacity="0.4"
        />

        {/* Main gradient stroke */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#circling-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * 0.3} ${circumference * 0.7}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
        />

        {/* Secondary stroke for depth */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth}
          fill="none"
          stroke="url(#circling-gradient)"
          strokeWidth={strokeWidth * 0.5}
          strokeDasharray={`${circumference * 0.2} ${circumference * 0.8}`}
          style={{ strokeDashoffset: strokeDashoffset }}
          strokeLinecap="round"
          opacity="0.5"
        />
      </motion.svg>
    </div>
  );
};