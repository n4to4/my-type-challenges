// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];

// ============= Your Code Here =============
type PartialByKeys<T, K extends keyof T = never> = [K] extends [never]
  ? Partial<T>
  : Omit<
      {
        [p in keyof T as p extends K ? p : never]?: T[p];
      } & {
        [p in keyof T as p extends K ? never : p]: T[p];
      },
      never
    >;

type X = PartialByKeys<User, "name">;
type Y = PartialByKeys<User>;
