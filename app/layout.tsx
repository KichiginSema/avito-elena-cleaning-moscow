import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Елена · Клининг | Профессиональная уборка квартир в Москве",
  description: "Качественная уборка квартир в Москве от 3000₽. Поддерживающая, генеральная уборка, после ремонта. Профсоюзная, Академическая. Рейтинг 5.0. Выезд по всей Москве.",
  keywords: "клининг москва, уборка квартир москва, генеральная уборка, уборка после ремонта, профсоюзная, академическая",
  openGraph: {
    title: "Елена · Клининг | Уборка квартир в Москве",
    description: "Качественная уборка квартир от 3000₽. Рейтинг 5.0",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
