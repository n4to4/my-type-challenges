// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>,
  Expect<Equal<Join<[], "u">, "">>
];

// ============= Your Code Here =============
type Prefix<
  T extends string,
  U extends string | number,
  R extends string
> = R extends "" ? T : `${R}${U}${T}`;

type Join<T, U extends string | number, R extends string = ""> = T extends [
  infer Head extends string,
  ...infer Tail extends string[]
]
  ? Join<Tail, U, Prefix<Head, U, R>>
  : R;

type X1 = Join<["a", "p", "p", "l", "e"], "-">;
