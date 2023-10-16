import { Suspense } from "react";
import Header from "@/components/Header";
import Loading from "./loading";
import { ChakraProvider } from '@chakra-ui/react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </ChakraProvider>
      </body>
    </html>
  );
}
