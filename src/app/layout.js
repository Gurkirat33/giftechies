import Footer from "@/components/UI/Footer";
import "./globals.css";
import NavbarComponent from "@/components/UI/Navbar/NavbarComponent";

export const metadata = {
  title: "Agency Website",
  description: "Created by Gurkirat Singh",
};

const themeScript = `
  let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let stored = localStorage.getItem('theme');
  
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
