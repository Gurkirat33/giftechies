import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Agency Website",
  description: "Created by Gurkirat Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
