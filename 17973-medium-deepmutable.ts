// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Test1 {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
  readonly meta: {
    readonly author: string;
  };
}
type Test2 = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "s";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};
interface DeepMutableTest1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type DeepMutableTest2 = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "s";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type cases = [
  Expect<Equal<DeepMutable<Test1>, DeepMutableTest1>>,
  Expect<Equal<DeepMutable<Test2>, DeepMutableTest2>>
];

type errors = [
  // @ts-expect-error
  DeepMutable<"string">,
  // @ts-expect-error
  DeepMutable<0>
];

// ============= Your Code Here =============
type DeepMutable<T extends object> = {
  -readonly [k in keyof T]: T[k] extends object
    ? DeepMutable<T[k]>
    : T[k] extends any[]
    ? Arr<T[k]>
    : T[k];
};

type Arr<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? Head extends object
    ? [DeepMutable<Head>, ...Arr<Tail>]
    : [Head, ...Arr<Tail>]
  : [];

type X1 = DeepMutable<Test1>;
type X2 = DeepMutable<Test2>;
type X3 = DeepMutable<{ readonly x: string; y: number }>;
type X4 = DeepMutable<{
  readonly x: string;
  readonly y: readonly ["hey", { readonly arr: 42 }];
}>;
