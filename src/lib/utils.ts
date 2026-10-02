import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Plain <img> src strings aren't prefixed with next.config's basePath, so prefix them manually.
export const BASE_PATH = "/new-portfolio";
