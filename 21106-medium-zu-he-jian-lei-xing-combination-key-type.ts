// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type ModifierKeys = ["cmd", "ctrl", "opt", "fn"];
type CaseTypeOne =
  | "cmd ctrl"
  | "cmd opt"
  | "cmd fn"
  | "ctrl opt"
  | "ctrl fn"
  | "opt fn";

type cases = [Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>];

// ============= Your Code Here =============
type Combs<T extends string[]> = T extends [
  infer Head extends string,
  ...infer Tail extends string[]
]
  ? `${Head & string} ${Tail[number]}` | Combs<Tail>
  : never;

type X1 = Combs<ModifierKeys>;
