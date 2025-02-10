"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface query {
  children: React.ReactNode;
}
const QueryProvider = ({ children }: query) => {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
