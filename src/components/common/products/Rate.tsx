"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

const Rate = ({ value = 2, max = 5 }: { value?: number; max?: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5",
            i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
};

export default Rate;
