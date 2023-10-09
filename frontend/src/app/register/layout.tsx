import Banner from "@/components/Banner";
import React from "react";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Banner />
        {children}
      </body>
    </html>
  );
}
