// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

// ============= Your Code Here =============
type Integer1<T extends number> = `${T}` extends `${bigint}` ? T : never;

type Integer<T extends string | number> = number extends T
  ? never
  : `${T}` extends `${string}.${string}`
  ? never
  : T;

type X1 = Integer<1.0>;
