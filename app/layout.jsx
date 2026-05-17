export const metadata = {
  title: "The Cosset",
  description: "Luxury Unisex Salon & Nail Studio",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
