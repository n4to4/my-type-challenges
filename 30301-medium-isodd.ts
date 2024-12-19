// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>
];

// ============= Your Code Here =============
type Odd = 1 | 3 | 5 | 7 | 9;
type IsOdd<T extends number> = `${T}` extends `${number | ""}${Odd}`
  ? true
  : false;

type F1<T extends number> = `${T}` extends number ? 1 : 2;
type X1 = F1<number>;
