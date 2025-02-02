import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/section/Navbar";
const geistSans = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}  antialiased`}
      >
        <Navbar /> {children}
      </body>
    </html>
  );
}
