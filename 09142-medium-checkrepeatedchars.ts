// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>
];

// ============= Your Code Here =============
type CheckRepeatedChars<
  T extends string,
  Seen = never
> = T extends `${infer Head}${infer Tail}`
  ? Head extends Seen
    ? true
    : CheckRepeatedChars<Tail, Seen | Head>
  : false;
