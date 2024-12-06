// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
  Expect<
    Equal<
      ObjectEntries<{ key: string | undefined }>,
      ["key", string | undefined]
    >
  >
];

// ============= Your Code Here =============
type ObjectEntries<T, U = Required<T>> = {
  [k in keyof U]: [k, U[k] extends never ? undefined : U[k]];
}[keyof U];

type X = ObjectEntries<Model>;
type Y = ObjectEntries<Partial<Model>>;
type Z = ObjectEntries<{ key?: undefined }>;

interface Test {
  key?: undefined;
}
type Entries<T, U = Required<T>> = {
  [k in keyof U]: U[k];
};
type X1 = Entries<Test>;
type X2 = Required<Test>;
