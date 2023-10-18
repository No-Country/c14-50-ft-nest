/* use client */
import Banner from "@/components/Banner";
import React from "react";

export default function RegisterLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="lg:overflow-y-hidden lg:max-h-screen flex flex-col-reverse lg:flex-row relative">
          <Banner />
          {children}
        </main>
      </body>
    </html>
  );
}
