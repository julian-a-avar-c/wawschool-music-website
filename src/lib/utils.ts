import { clsx, type ClassValue } from "clsx";
import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function* intersperseGenerator<A, B>(
  array: A[],
  delim: (prev: A, index?: number, array?: A[]) => B,
) {
  let prev: A | null = null;
  let isDelim = false;
  let index = 0;
  for (const a of array) {
    if (isDelim) {
      yield delim(prev as A, index, array);
      index += 1;
    }
    isDelim = true;
    prev = a;
    yield a;
    index += 1;
  }
}

export function intersperse<A, B>(
  array: A[],
  delim: (prev: A, index?: number, array?: A[]) => B,
): (A | B)[] {
  return Array.from(intersperseGenerator(array, delim));
}

/**
 * Groups a flat array of items into rows based on the specified column counts.
 *
 * @template T - The type of each item in the input array.
 * @param items - An array of items of type T.
 * @param rows - An array of numbers where each number represents the number of items (columns) in that row.
 * @returns An array of arrays of items, one per row.
 *
 * @example
 * const items = ['a', 'b', 'c', 'd', 'e'];
 * const rows = [2, 3];
 * const result = groupItemsByRows(items, rows);
 * console.log(result);
 * // Output:
 * // [['a', 'b'], ['c', 'd', 'e']]
 */
export function groupItemsByRows<T>(items: T[], rows: number[]): T[][] {
  const result: T[][] = [];
  let index = 0;

  for (const columns of rows) {
    result.push(items.slice(index, index + columns));
    index += columns;
  }

  return result;
}

