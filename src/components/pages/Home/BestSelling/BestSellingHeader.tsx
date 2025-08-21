'use client';
import { Badge } from "@/components/ui/badge";

const BestSellingHeader = () => {
    return (
        <div >
            {/* Section Header */}
            <div className="flex items-center gap-5">
                <Badge variant="secondary"></Badge>
                <p className="text-sm font-bold align-middle">This Month</p>
            </div>

            {/* category */}
            <div className="flex max-w-screen-sm justify-between items-center my-5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Best Selling Products
                </h1>
            </div>
        </div>
    );
};

export default BestSellingHeader;
