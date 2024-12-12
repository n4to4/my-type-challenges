// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

// ============= Your Code Here =============
type Chunk<
  T extends any[],
  N extends number,
  Acc extends any[] = [],
  Ret extends any[][] = []
> = T extends [infer Head, ...infer Rest]
  ? Acc["length"] extends N
    ? Chunk<Rest, N, [Head], [...Ret, Acc]>
    : Chunk<Rest, N, [...Acc, Head], Ret>
  : Acc extends []
  ? Ret
  : [...Ret, Acc];

type X1 = Chunk<[], 1>;
type X2 = Chunk<[1, 2, 3], 1>;
