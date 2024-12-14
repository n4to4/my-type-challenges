// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trunc<0.1>, "0">>,
  Expect<Equal<Trunc<0.2>, "0">>,
  Expect<Equal<Trunc<1.234>, "1">>,
  Expect<Equal<Trunc<12.345>, "12">>,
  Expect<Equal<Trunc<-5.1>, "-5">>,
  Expect<Equal<Trunc<".3">, "0">>,
  Expect<Equal<Trunc<"1.234">, "1">>,
  Expect<Equal<Trunc<"-10.234">, "-10">>,
  Expect<Equal<Trunc<10>, "10">>
];

// ============= Your Code Here =============
type RemoveFrac<T extends string | number> = `${T}` extends `${infer N}.${any}`
  ? `${N}`
  : `${T}`;

type ToNumber<T extends string> = T extends "" ? "0" : T;

type Trunc<T extends string | number> = ToNumber<RemoveFrac<T>>;

type X1 = Trunc<0.1>;
type X2 = Trunc<".3">;
type X3 = Trunc<10>;
