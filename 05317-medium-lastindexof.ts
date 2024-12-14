// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, "a", number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, "a", any, 1], any>, 5>>
];

// ============= Your Code Here =============
type Identical<T, U> = T extends U ? (U extends T ? true : false) : false;
type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;

type LastIndexOf<T extends any[], U> = T extends [...infer L, infer R]
  ? Identical<R, U> extends true
    ? L["length"]
    : LastIndexOf<L, U>
  : -1;

type X1 = LastIndexOf<[1, 2, 3, 2, 1], 2>;
