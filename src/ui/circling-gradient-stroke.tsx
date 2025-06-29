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
  size = 360, // Reduced from 400 to be closer to profile picture
  strokeWidth = 4,
  duration = 12, // 5 rounds per minute
  colors = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'], // Default: Blue, Purple, Red, Green
  className = "",
  opacity = 0.8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Motion values for different rings
  const rotation1 = useMotionValue(0);
  const rotation2 = useMotionValue(0);
  const rotation3 = useMotionValue(0);
  const rotation4 = useMotionValue(0);
  const rotation5 = useMotionValue(0);
  
  // Motion values for stroke animations
  const strokeDashoffset1 = useMotionValue(0);
  const strokeDashoffset2 = useMotionValue(0);
  const strokeDashoffset3 = useMotionValue(0);
  const strokeDashoffset4 = useMotionValue(0);
  const strokeDashoffset5 = useMotionValue(0);

  useEffect(() => {
    // Main ring - clockwise
    const rotationControls1 = animate(rotation1, 360, {
      repeat: Infinity,
      ease: "linear",
      duration,
    });

    const strokeControls1 = animate(strokeDashoffset1, -circumference, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.8,
    });

    // Second ring - counter-clockwise, slightly faster
    const rotationControls2 = animate(rotation2, -360, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.9,
    });

    const strokeControls2 = animate(strokeDashoffset2, circumference, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.7,
    });

    // Third ring - clockwise, different speed
    const rotationControls3 = animate(rotation3, 360, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 1.1,
    });

    const strokeControls3 = animate(strokeDashoffset3, -circumference * 0.8, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.9,
    });

    // Fourth ring (smaller) - counter-clockwise
    const rotationControls4 = animate(rotation4, -360, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.7,
    });

    const strokeControls4 = animate(strokeDashoffset4, circumference * 0.6, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.6,
    });

    // Fifth ring (smallest) - clockwise, fastest
    const rotationControls5 = animate(rotation5, 360, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.6,
    });

    const strokeControls5 = animate(strokeDashoffset5, -circumference * 0.5, {
      repeat: Infinity,
      ease: "linear",
      duration: duration * 0.5,
    });

    return () => {
      rotationControls1.stop();
      strokeControls1.stop();
      rotationControls2.stop();
      strokeControls2.stop();
      rotationControls3.stop();
      strokeControls3.stop();
      rotationControls4.stop();
      strokeControls4.stop();
      rotationControls5.stop();
      strokeControls5.stop();
    };
  }, [duration, circumference]);

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
      <svg
        width={size}
        height={size}
        className="absolute"
        style={{ opacity }}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id="circling-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="33%" stopColor={gradientColors[1]} />
            <stop offset="66%" stopColor={gradientColors[2]} />
            <stop offset="100%" stopColor={gradientColors[3]} />
          </linearGradient>
          
          <linearGradient id="circling-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[1]} />
            <stop offset="33%" stopColor={gradientColors[2]} />
            <stop offset="66%" stopColor={gradientColors[3]} />
            <stop offset="100%" stopColor={gradientColors[0]} />
          </linearGradient>

          <linearGradient id="circling-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColors[2]} />
            <stop offset="33%" stopColor={gradientColors[3]} />
            <stop offset="66%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>

          <linearGradient id="circling-gradient-4" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[3]} />
            <stop offset="50%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>

          <linearGradient id="circling-gradient-5" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="50%" stopColor={gradientColors[2]} />
            <stop offset="100%" stopColor={gradientColors[3]} />
          </linearGradient>
          
          {/* Radial gradient for glow effect */}
          <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.3" />
            <stop offset="30%" stopColor={gradientColors[1]} stopOpacity="0.2" />
            <stop offset="70%" stopColor={gradientColors[2]} stopOpacity="0.1" />
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

        {/* Main outer ring */}
        <g style={{ transform: `rotate(${rotation1.get()}deg)`, transformOrigin: `${size/2}px ${size/2}px` }}>
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#circling-gradient-1)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference * 0.3} ${circumference * 0.7}`}
            style={{ strokeDashoffset: strokeDashoffset1 }}
            strokeLinecap="round"
            filter="drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))"
          />
        </g>

        {/* Second ring - counter-rotating */}
        <g style={{ transform: `rotate(${rotation2.get()}deg)`, transformOrigin: `${size/2}px ${size/2}px` }}>
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth * 2}
            fill="none"
            stroke="url(#circling-gradient-2)"
            strokeWidth={strokeWidth * 0.8}
            strokeDasharray={`${circumference * 0.2} ${circumference * 0.8}`}
            style={{ strokeDashoffset: strokeDashoffset2 }}
            strokeLinecap="round"
            opacity="0.7"
            filter="drop-shadow(0 0 4px rgba(139, 92, 246, 0.3))"
          />
        </g>

        {/* Third ring - middle */}
        <g style={{ transform: `rotate(${rotation3.get()}deg)`, transformOrigin: `${size/2}px ${size/2}px` }}>
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth * 4}
            fill="none"
            stroke="url(#circling-gradient-3)"
            strokeWidth={strokeWidth * 0.6}
            strokeDasharray={`${circumference * 0.15} ${circumference * 0.85}`}
            style={{ strokeDashoffset: strokeDashoffset3 }}
            strokeLinecap="round"
            opacity="0.6"
            filter="drop-shadow(0 0 3px rgba(239, 68, 68, 0.3))"
          />
        </g>

        {/* Fourth ring - smaller, faster */}
        <g style={{ transform: `rotate(${rotation4.get()}deg)`, transformOrigin: `${size/2}px ${size/2}px` }}>
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth * 6}
            fill="none"
            stroke="url(#circling-gradient-4)"
            strokeWidth={strokeWidth * 0.4}
            strokeDasharray={`${circumference * 0.1} ${circumference * 0.9}`}
            style={{ strokeDashoffset: strokeDashoffset4 }}
            strokeLinecap="round"
            opacity="0.5"
            filter="drop-shadow(0 0 2px rgba(16, 185, 129, 0.3))"
          />
        </g>

        {/* Fifth ring - smallest, fastest */}
        <g style={{ transform: `rotate(${rotation5.get()}deg)`, transformOrigin: `${size/2}px ${size/2}px` }}>
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth * 8}
            fill="none"
            stroke="url(#circling-gradient-5)"
            strokeWidth={strokeWidth * 0.3}
            strokeDasharray={`${circumference * 0.08} ${circumference * 0.92}`}
            style={{ strokeDashoffset: strokeDashoffset5 }}
            strokeLinecap="round"
            opacity="0.4"
            filter="drop-shadow(0 0 1px rgba(59, 130, 246, 0.2))"
          />
        </g>
      </svg>
    </div>
  );
};