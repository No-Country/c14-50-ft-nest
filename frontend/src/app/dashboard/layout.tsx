import Header from "@/components/Header";
import { ChakraProvider } from '@chakra-ui/react';

export default function DashboardLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ChakraProvider>
          <Header />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
