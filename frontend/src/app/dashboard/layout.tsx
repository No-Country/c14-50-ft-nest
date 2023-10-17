import Header from "@/components/Header";
import { ChakraProvider } from '@chakra-ui/react';
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout ({
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
