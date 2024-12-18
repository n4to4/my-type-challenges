// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>
];

// ============= Your Code Here =============

type Number<T extends number, Idx extends any[] = []> = Idx["length"] extends T
  ? Idx
  : Number<T, [...Idx, any]>;

type Square<
  N extends number,
  Arr extends any[] = Number<N>,
  Idx extends any[] = [],
  R extends any[] = []
> = Idx["length"] extends N
  ? R["length"]
  : Square<N, Arr, [...Idx, any], [...R, ...Arr]>;
