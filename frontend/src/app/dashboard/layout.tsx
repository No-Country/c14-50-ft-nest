import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";

export default function DashboardLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider>
      <Header />
      {children}
    </ChakraProvider>
  );
}
