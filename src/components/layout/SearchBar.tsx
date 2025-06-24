"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export type SearchBarProps = {
  class?: string;
};

export function SearchBar({ class: className }: SearchBarProps) {
  return <Input className={cn(className)} placeholder="Search site" />;
}
