// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>
];

// ============= Your Code Here =============
type Even = 0 | 2 | 4 | 6 | 8;

type IsOdd<T extends number> = T extends number
  ? Equal<T, number> extends true
    ? false
    : `${T}` extends `${string}${Even}`
    ? false
    : true
  : false;
