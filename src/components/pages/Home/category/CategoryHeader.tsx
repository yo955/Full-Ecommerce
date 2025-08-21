'use client';
import { Badge } from "@/components/ui/badge";

const CategoryHeader = () => {
    return (
        <div >
            {/* Section Header */}
            <div className="flex items-center gap-5">
                <Badge variant="secondary"></Badge>
                <p className="text-sm font-bold align-middle">Categories</p>
            </div>

            {/* category */}
            <div className="flex max-w-screen-sm justify-between items-center my-5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Browse By Category
                </h1>
            </div>
        </div>
    );
};

export default CategoryHeader;
