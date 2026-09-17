"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleHashlessSectionClick } from "@/lib/hashless-scroll";

type HashlessScrollLinkProps = {
  sectionId: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href" | "onClick">;

export default function HashlessScrollLink({
  sectionId,
  className,
  children,
  onNavigate,
  ...rest
}: HashlessScrollLinkProps) {
  const pathname = usePathname();
  const onHome = pathname === "/";

  if (sectionId === "top") {
    return (
      <Link
        href="/"
        className={className}
        onClick={(e) => {
          if (!onHome) return;
          handleHashlessSectionClick(e, "top", onNavigate);
        }}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={onHome ? `#${sectionId}` : `/#${sectionId}`}
      className={className}
      onClick={(e) => {
        if (!onHome) return;
        handleHashlessSectionClick(e, sectionId, onNavigate);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
