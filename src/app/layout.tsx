import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { UsersProvider } from "../components/UsersContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Front Challenge",
  description: "Front test project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <UsersProvider>
        <body>{children}</body>
      </UsersProvider>
    </html>
  );
}
