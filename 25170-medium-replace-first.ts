// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

// prettier-ignore
type cases = [
  Expect<Equal<ReplaceFirst<[1, 2, 3], 3, 4>, [1, 2, 4]>>,
  Expect<Equal<ReplaceFirst<['A', 'B', 'C'], 'C', 'D'>, ['A', 'B', 'D']>>,
  Expect<Equal<ReplaceFirst<[true, true, true], true, false>, [false, true, true]>>,
  Expect<Equal<ReplaceFirst<[string, boolean, number], boolean, string>, [string, string, number]>>,
  Expect<Equal<ReplaceFirst<[1, 'two', 3], string, 2>, [1, 2, 3]>>,
  Expect<Equal<ReplaceFirst<['six', 'eight', 'ten'], 'eleven', 'twelve'>, ['six', 'eight', 'ten']>>,
]

// ============= Your Code Here =============
type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [
  infer Head,
  ...infer Tail
]
  ? Head extends S
    ? [R, ...Tail]
    : [Head, ...ReplaceFirst<Tail, S, R>]
  : [];

type X1 = ReplaceFirst<[1, "two", 3], string, 2>;
