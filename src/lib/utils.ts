import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the correct URL for a public asset, accounting for the Vite base path.
 * Use this for all paths that come from the `public/` folder (e.g. images from episodes.json).
 * @param path - path starting with '/' e.g. '/img/episodes/S1E0.png'
 */
export function getAssetUrl(path: string): string {
  if (!path) return path;
  const base = import.meta.env.BASE_URL ?? "/";
  // Avoid double slashes
  return `${base.replace(/\/$/, "")}${path}`;
}
