import { Suspense } from "react";
import Header from "@/components/Header";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
