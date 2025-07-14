import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and resolves Tailwind CSS conflicts
 * @param inputs - Class names to combine
 * @returns Combined and resolved class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
