"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

/**
 * Client component that initializes scroll animations
 * Add this once in the layout - no visual output
 */
export function ScrollAnimations() {
  useAnimateOnScroll();
  return null;
}
