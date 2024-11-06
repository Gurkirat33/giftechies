import Footer from "@/components/UI/Footer";
import "./globals.css";
import Navbar from "@/components/UI/Navbar/Navbar";

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
