// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

// prettier-ignore
type Tests = [
  Expect<Equal<Hanoi<0>, []>>,
  Expect<Equal<Hanoi<1>, [['A', 'B']]>>,
  Expect<Equal<Hanoi<2>, [['A', 'C'], ['A', 'B'], ['C', 'B']]>>,
  Expect<Equal<Hanoi<3>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
  Expect<Equal<Hanoi<5>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['C', 'A'], ['B', 'C'], ['B', 'A'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
]

// ============= Your Code Here =============
type Hanoi<N extends number, From = "A", To = "B", Intermediate = "C"> = Helper<
  N,
  [],
  From,
  To,
  Intermediate
>;

type Helper<
  N extends number,
  C extends 1[],
  From extends unknown,
  To extends unknown,
  Intermediate extends unknown
> = C["length"] extends N
  ? []
  : [
      ...Helper<N, [...C, 1], From, Intermediate, To>,
      [From, To],
      ...Helper<N, [...C, 1], Intermediate, To, From>
    ];
