"use client";
import React from "react";
import { motion } from "motion/react";

type ColourfulTextProps = {
  text: string;
  /** If provided, all characters will use this exact color (no cycling). */
  fixedColor?: string;
  /** Keep the original color cycling behavior when no fixedColor is provided. */
  cycle?: boolean;
  /** Interval for color shuffling when cycle is true. */
  intervalMs?: number;
};

export function ColourfulText({
  text,
  fixedColor,
  cycle = true,
  intervalMs = 7000,
}: ColourfulTextProps) {
  const colors = React.useMemo(
    () => [
      "rgb(131, 179, 32)",
      "rgb(47, 195, 106)",
      "rgb(42, 169, 210)",
      "rgb(4, 112, 202)",
      "rgb(107, 10, 255)",
      "rgb(183, 0, 218)",
      "rgb(218, 0, 171)",
      "rgb(230, 64, 92)",
      "rgb(232, 98, 63)",
      "rgb(249, 129, 47)",
    ],
    []
  );

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (fixedColor || !cycle) return; // no cycling if a fixed color is set
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [colors, cycle, fixedColor, intervalMs]);

  const getColor = (index: number) =>
    fixedColor ?? currentColors[index % currentColors.length];

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: getColor(index),
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
