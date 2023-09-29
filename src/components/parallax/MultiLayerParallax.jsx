"use client";

import { motion, useScroll, useTransform, useTransition, animated, config } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MultiLayerParallax = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);


  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        Alexander Tim
      </motion.h1>

      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 bg-[url(/images/mountain1.jpg)] bg-bottom bg-cover"
      />
      <div className="absolute inset-0 z-20 bg-[url(/images/mountain2.png)] bg-bottom bg-cover" />
    </div>
  );
};

export default MultiLayerParallax;
