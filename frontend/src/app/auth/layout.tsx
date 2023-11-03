/* use client */
import Banner from "@/components/Banner";
import React from "react";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="lg:overflow-y-hidden lg:max-h-screen flex flex-col-reverse lg:flex-row relative min-h-screen">
      <Banner />
      {children}
    </main>
  );
}
