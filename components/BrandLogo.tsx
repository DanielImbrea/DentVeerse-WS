import Image from "next/image";
import { SITE } from "@/lib/constants";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ size = 36, className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src={SITE.logoSrc}
      alt={SITE.name}
      width={488}
      height={488}
      priority={priority}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
