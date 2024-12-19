// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MergeAll<[]>, {}>>,
  Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
  Expect<Equal<MergeAll<[{ a: string }, { a: string }]>, { a: string }>>,
  Expect<Equal<MergeAll<[{}, { a: string }]>, { a: string }>>,
  Expect<Equal<MergeAll<[{ a: 1 }, { c: 2 }]>, { a: 1; c: 2 }>>,
  Expect<
    Equal<
      MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>,
      { a: 1 | 2; b: 2; c: 3 }
    >
  >,
  Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>
];

// ============= Your Code Here =============
type MergeAll<
  T extends any[],
  R extends Record<PropertyKey, any> = {}
> = T extends [infer Head, ...infer Tail]
  ? MergeAll<
      Tail,
      Omit<R, keyof Head> & {
        [k in keyof Head]: k extends keyof R ? R[k] | Head[k] : Head[k];
      }
    >
  : Omit<R, never>;

type X1 = MergeAll<[{}, { a: 1 }, { a: 2 }]>;
type F1<
  T extends Record<PropertyKey, any>,
  K extends PropertyKey
> = K extends keyof T ? T[K] : false;
type X2 = F1<{ a: 1 }, "b">;
type X3 = MergeAll<[{ a: 1 }]>;
type X4 = MergeAll<[{ a: 1 }, { a: 10; c: 2 }]>;
type X5 = Omit<{ a: 1 } & { a: 1 | 2 | 3 }, never>;
