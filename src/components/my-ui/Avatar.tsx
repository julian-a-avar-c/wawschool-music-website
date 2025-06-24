import {
  Avatar as UiAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import type { ReactNode } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
};
export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  return (
    <UiAvatar className={className}>
      <AvatarImage src={src} alt={alt} className="object-cover" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </UiAvatar>
  );
}
