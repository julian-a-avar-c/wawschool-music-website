import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[#d14f4f]/30 placeholder:text-gray-400 focus-visible:border-[#d14f4f] focus-visible:ring-[#d14f4f]/30 aria-invalid:ring-red-500/30 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 aria-invalid:bg-red-50 dark:bg-input/30 flex field-sizing-content min-h-20 w-full rounded-2xl border-2 bg-gradient-to-r from-white to-orange-50 px-4 py-3 text-base shadow-lg transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:scale-[1.02] focus-visible:bg-gradient-to-r focus-visible:from-red-50 focus-visible:to-orange-100 hover:scale-[1.01] hover:shadow-xl hover:border-[#d14f4f]/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
