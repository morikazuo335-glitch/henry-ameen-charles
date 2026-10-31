"use client";

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
      <div style={{ textAlign: "center" }}>
        <h1>Henry Ameen Charles</h1>

        <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
          <ArrowUpRight size={35} />
          <Code2 size={35} />
          <ShoppingBag size={35} />
        </div>

        <p style={{ color: "#8855ff", marginTop: "25px" }}>
          Lucide icons test successful.
        </p>
      </div>
    </main>
  );
}
