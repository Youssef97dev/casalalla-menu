import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Menu Casa lalla takerkoust",
  description: "Vibe Agafay Desert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
