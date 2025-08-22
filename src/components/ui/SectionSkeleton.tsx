"use client";

import { Skeleton } from "@/components/ui/skeleton";
import ProductSkeleton from "../common/products/ProductSkeleton";

type SectionSkeletonProps = {
    items?: number;
};

export const SectionSkeleton = ({ items = 4 }: SectionSkeletonProps) => {
    return (
        <div className="space-y-12 p-4">
            {/* Section Header */}
            <div className="space-y-2">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-1/3" />
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: items }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        </div>
    );
};
