import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Swipee サポート", template: "%s | Swipee" },
  description: "写真整理アプリSwipeeのサポート、プライバシーポリシー、利用規約。",
  icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
