import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "hover:cursor-pointer hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
  ),
  {
    variants: {
      variant: {
        default:
          "bg-[#d14f4f] text-white shadow-xs hover:bg-red-500 hover:shadow-lg border-2 border-[#d14f4f] hover:border-red-500",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-[#d14f4f]/30 bg-white/80 backdrop-blur-sm shadow-xs hover:bg-[#d14f4f]/10 hover:text-[#d14f4f] hover:border-[#d14f4f] dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-gradient-to-r from-orange-100 to-red-100 text-[#d14f4f] shadow-xs hover:from-orange-200 hover:to-red-200 border-2 border-[#d14f4f]/20 hover:border-[#d14f4f]/40",
        ghost:
          "hover:bg-[#d14f4f]/10 hover:text-[#d14f4f] rounded-2xl dark:hover:bg-accent/50",
        link: "text-[#d14f4f] underline-offset-4 hover:text-red-500",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-xl gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-3xl px-8 has-[>svg]:px-6 text-lg font-semibold",
        icon: "size-9 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
