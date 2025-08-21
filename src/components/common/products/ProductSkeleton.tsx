// components/ProductSkeleton.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";

const ProductSkeleton = () => {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-md animate-pulse">
      <div className="h-48 w-full bg-gray-300 rounded-t-2xl" />
      <CardContent className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
        <div className="h-3 w-1/2 bg-gray-200 rounded" />
        <div className="h-10 w-full bg-gray-300 rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default ProductSkeleton;
