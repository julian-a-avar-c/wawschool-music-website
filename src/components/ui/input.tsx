import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-gray-400 selection:bg-[#d14f4f] selection:text-white dark:bg-input/30 border-[#d14f4f]/30 flex h-11 w-full min-w-0 rounded-2xl border-2 bg-gradient-to-r from-white to-orange-50 px-4 py-3 text-base shadow-lg transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm hover:scale-[1.02] hover:shadow-xl hover:border-[#d14f4f]/50",
        "focus-visible:border-[#d14f4f] focus-visible:ring-[#d14f4f]/30 focus-visible:ring-4 focus-visible:scale-105 focus-visible:bg-gradient-to-r focus-visible:from-red-50 focus-visible:to-orange-100",
        "aria-invalid:ring-red-500/30 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 aria-invalid:bg-red-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
