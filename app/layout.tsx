import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

export const metadata = {
  title: "SHIRO CONCEPTS INVESTMENT",
  description:
    "Shiro Concepts Investment is a visionary company based in Dubai, specializing in transforming Business Ideas into unique realities and managing them to achieve excellence in their respective industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/shiro-logo.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
