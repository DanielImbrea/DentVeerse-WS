import type { MouseEvent } from "react";

export function clearUrlHash() {
  if (typeof window === "undefined") return;
  const url = window.location.pathname + window.location.search;
  window.history.replaceState(window.history.state, "", url);
}

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth"
) {
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior });
  } else {
    document.getElementById(sectionId)?.scrollIntoView({ behavior, block: "start" });
  }
  clearUrlHash();
}

export function handleHashlessSectionClick(
  e: MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  onAfter?: () => void
) {
  e.preventDefault();
  scrollToSection(sectionId);
  onAfter?.();
}
