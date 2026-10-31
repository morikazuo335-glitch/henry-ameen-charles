
import "./globals.css";

export const metadata = {
  title: "Henry Ameen Charles | Web Developer",
  description:
    "Henry Ameen Charles — Webflow, Shopify and Framer Developer. Creating premium digital experiences for ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
