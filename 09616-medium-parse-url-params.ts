// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ParseUrlParams<"">, never>>,
  Expect<Equal<ParseUrlParams<":id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>
];

// ============= Your Code Here =============
type Split<T extends string> = T extends `${infer First}/${infer Rest}`
  ? [First, ...Split<Rest>]
  : [T];

type Extract<T extends string[]> = T extends [
  infer Head,
  ...infer Rest extends string[]
]
  ? Head extends `:${infer Param}`
    ? Param | Extract<Rest>
    : Extract<Rest>
  : never;

type ParseUrlParams<T extends string> = Extract<Split<T>>;

type X1 = Split<"">;
type X2 = Split<"posts/:id/:user/like">;
