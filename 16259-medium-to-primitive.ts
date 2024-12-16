// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
  readonlyArr: readonly ["test"];
  fn: () => any;
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
  readonlyArr: readonly [string];
  fn: Function;
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];

// ============= Your Code Here =============
type ToPrimitive1<T> = {
  [k in keyof T]: Prim<T[k]>;
};

type Prim<T> = T extends number
  ? number
  : T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends Function
  ? Function
  : T extends object
  ? { [k in keyof T]: Prim<T[k]> }
  : T;

type X0 = ToPrimitive<PersonInfo>;
type X1 = ToPrimitive<{ x: "foo" }>;

type ToPrimitive<T> = T extends Function
  ? Function
  : T extends object
  ? { [K in keyof T]: ToPrimitive<T[K]> }
  : T extends { valueOf(): infer R }
  ? R
  : T;

type Fn<T> = T extends { valueOf: () => infer R } ? R : T;
type X2 = Fn<"foo">;
type X3 = Fn<42>;
