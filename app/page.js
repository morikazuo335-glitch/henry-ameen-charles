"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#08080d",
        color: "white",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Henry Ameen Charles</h1>
        <p>Framer Motion test successful.</p>
      </motion.div>
    </main>
  );
}
