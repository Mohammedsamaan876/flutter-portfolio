import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
export const metadata: Metadata = { title: "Mohammed Samaan Jushiddi — Flutter Developer", description: "Personal portfolio of Mohammed Samaan Jushiddi, a Flutter Developer building cross-platform mobile applications with Flutter and Dart." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={geist.variable}><body>{children}</body></html>; }
