import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "El Shafiq",
  description: "Welcome to El Shafiq for Trading & Construction",
  icons: {
    icon: "./assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
