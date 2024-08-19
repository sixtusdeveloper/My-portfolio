import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 flex flex-col items-center border relative md:pt-10 mx-auto max-w-7xl px-4 lg:px-8 pb-20 rounded-3xl dark:bg-black-100 bg-neutral-100  border-gray-900 dark:border-neutral-900">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[420px] md:w-[800px]"
        slideMode="hover"
      />
    </div>
  );
}
