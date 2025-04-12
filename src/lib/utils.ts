import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class name strings into a single string.
 * It intelligently handles Tailwind CSS classes, ensuring that conflicting styles
 * are resolved correctly.
 *
 * @param inputs - An array of class name strings.
 * @returns A single string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Example Usage (Not part of the utility function, for demonstration)
// -----------------------------------------------------------------
// const baseClasses = 'font-bold text-center';
// const dynamicClasses = isLarge ? 'text-lg' : 'text-sm';
// const colorClass = color === 'red' ? 'text-red-500' : 'text-blue-500';
//
// const finalClasses = cn(
//   baseClasses,
//   dynamicClasses,
//   colorClass,
//   'bg-white p-4 rounded-md', // Regular class names can be included too
//   undefined, // undefined and null values are ignored
//   null
// );
//
// console.log(finalClasses); // Output: Merged class names
// -----------------------------------------------------------------
