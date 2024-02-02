import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

export const metadata = {
  title: "Fetching Data I",
  description: "Generated by Cecilia Perdomo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
