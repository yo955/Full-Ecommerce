'use client';
import { Badge } from "@/components/ui/badge";
import Countdown from "./Countdown";

const FlashSalesHeader = () => {
  return (
    <div >
      {/* Section Header */}
      <div className="flex items-center gap-5">
        <Badge variant="secondary"></Badge>
        <p className="text-sm font-bold align-middle">Today’s</p>
      </div>

      {/* Countdown Timer */}
      <div className="flex max-w-screen-sm justify-between items-center my-5 flex-wrap">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Flash Sales
        </h1>
        <Countdown targetDate="2025-08-25 23:59:59" />
      </div>
    </div>
  );
};

export default FlashSalesHeader;
