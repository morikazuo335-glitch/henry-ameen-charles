"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ShoppingBag } from "lucide-react";

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
        style={{ textAlign: "center" }}
      >
        <h1>Henry Ameen Charles</h1>

        <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
          <ArrowUpRight size={35} />
          <Code2 size={35} />
          <ShoppingBag size={35} />
        </div>

        <p style={{ color: "#8855ff", marginTop: "25px" }}>
          Animation and icons working together.
        </p>
      </motion.div>
    </main>
  );
}
