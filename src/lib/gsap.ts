"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registers GSAP plugins exactly once on the client.
 * Call this at the top of any component that uses ScrollTrigger
 * before referencing gsap timelines tied to scroll position.
 *
 * Note: this project uses GSAP's free core + ScrollTrigger only.
 * GSAP's ScrollSmoother plugin is part of Club GreenSock (paid) and
 * is intentionally not used here — native CSS smooth scrolling plus
 * ScrollTrigger-driven parallax covers the "smooth scrolling" brief
 * without requiring a paid license.
 */
export function registerGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
