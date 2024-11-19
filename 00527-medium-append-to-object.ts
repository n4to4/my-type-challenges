// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  moon: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, "moon", false | undefined>, testExpect3>>
];

// ============= Your Code Here =============
type AppendToObject_1<T, U extends string, V> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : V;
};
type AppendToObject_2<T, U extends string, V> = Omit<
  T & { [k in U]: V },
  never
>;

type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };
type AppendToObject<T, U extends string, V> = Resolve<T & { [k in U]: V }>;

type X = AppendToObject<test1, "home", boolean>;
