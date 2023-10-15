import Banner from "@/components/Banner";
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="lg:overflow-y-hidden lg:max-h-screen flex flex-col-reverse lg:flex-row relative">
          <ChakraProvider>
            <Banner />
            {children}
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
