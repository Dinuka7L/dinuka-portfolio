"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export const MovingBorderImage = ({
  src,
  size = 320,
  borderWidth = 16,
  duration = 5,
  className = "",
  ...props
}: {
  src: string;
  size?: number;
  borderWidth?: number;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => {
  const radius = (size - borderWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Motion value for stroke offset
  const strokeDashoffset = useMotionValue(0);

  // Animate the stroke offset in a loop
  useEffect(() => {
    const controls = animate(strokeDashoffset, -circumference, {
      repeat: Infinity,
      ease: "linear",
      duration,
    });
    return () => controls.stop();
  }, [circumference, duration]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="absolute"
        style={{ transform: "rotate(-90deg)" }}
      >
        <defs>
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <motion.circle
  cx={size / 2}
  cy={size / 2}
  r={radius}
  fill="none"
  stroke="url(#gradient)"
  strokeWidth={borderWidth}
  strokeDasharray={`${circumference * 0.25} ${circumference}`}
  style={{ strokeDashoffset }}
  strokeLinecap="round"
/>
      </svg>

      {/* Image inside the border */}
      <img
        src={src}
        alt="Profile"
        className={`rounded-full object-cover ${className}`}
        style={{
          width: size - borderWidth * 2,
          height: size - borderWidth * 2,
          zIndex: 10,
        }}
        {...props}
      />
    </div>
  );
};
