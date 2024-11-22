// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

// ============= Your Code Here =============
type Merge<F, S> = Omit<
  {
    [k in keyof F as k extends keyof S ? never : k]: F[k];
  } & {
    [k in keyof S]: S[k];
  },
  never
>;

type X = Merge<Foo, Bar>;
type Y = Merge<{ n: number }, { s: string }>;
