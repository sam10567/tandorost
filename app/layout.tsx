import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تندرست | سلامت، ساده‌تر از همیشه",
  description: "پزشک مناسب خود را پیدا کنید و نوبت آزمایشی رزرو کنید.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
