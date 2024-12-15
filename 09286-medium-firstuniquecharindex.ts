// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>
];

// ============= Your Code Here =============
type Dup<
  Char extends string,
  Str extends string
> = Str extends `${string}${Char}${string}` ? true : false;

type FirstUniqueCharIndex<
  T extends string,
  Prefix extends string = "",
  Idx extends any[] = []
> = T extends `${infer First}${infer Rest}`
  ? Rest extends `${string}${First}${string}`
    ? FirstUniqueCharIndex<Rest, `${Prefix}${First}`, [...Idx, any]>
    : Prefix extends `${string}${First}${string}`
    ? FirstUniqueCharIndex<Rest, `${Prefix}`, [...Idx, any]>
    : Idx["length"]
  : -1;

type X1 = "aa" extends `${string}a${string}` ? true : false;
type X2 = FirstUniqueCharIndex<"aaa">;
