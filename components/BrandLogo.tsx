import Image from "next/image";
import { SITE } from "@/lib/constants";

type BrandLogoProps = {
  /** mark = simbol; full = wordmark cu text */
  variant?: "mark" | "full";
  size?: number;
  className?: string;
  priority?: boolean;
};

const FULL_ASPECT = 1010 / 686;

export default function BrandLogo({
  variant = "mark",
  size = 36,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const isFull = variant === "full";
  const src = isFull ? SITE.logoFullSrc : SITE.logoSrc;
  const height = isFull ? 44 : size;
  const width = isFull ? Math.round(height * FULL_ASPECT) : size;

  return (
    <Image
      src={src}
      alt={SITE.name}
      width={width}
      height={height}
      priority={priority}
      className={
        isFull
          ? `h-11 w-auto max-w-[min(240px,62vw)] object-contain object-left ${className}`
          : `object-contain ${className}`
      }
      style={isFull ? undefined : { width: size, height: size }}
    />
  );
}
