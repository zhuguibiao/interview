let value: any;
value.foo.bar; // success

let value2: unknown;
// value2.foo.bar; // Error

/* 
  function myFunc(maybeString: string | undefined | null) {
    // Type 'string | null | undefined' is not assignable to type 'string'. // Type 'undefined' is not assignable to type 'string'.
    const onlyString: string = maybeString;
    const ignoreUndefinedAndNull: string = maybeString!; // Ok
  }
 */



interface X {
  c: string;
  d: string;
}
interface Y {
  c: number;
  e: string;
}
type XY = X & Y;
let p: XY;

// p = { c: () => never, d: "d", e: "e" };

// interface
interface Person1 {
  name: string;
  age?: number;
  [propName: string]: any;
}
const p1 = { name: "semlinker" };
const p3 = { name: "kakuqo", sex: 1, shouRu: 12 };

/** type和interface
 *
 * 1.接口和类型别名都可以用来描述对象的形状或函数签名
 */
interface PointII {
  x: number;
}
interface SetPointI {
  (x: number, y: number): void;
}

type PointT = { x: number };
type SetPointT = (x: number, y: number) => void;

/*
 * 2.类型别名可以用于一些其他类型，比如原始类型、联合类型和元组:
 */

// primitive
type Name = string;

// object
type PartialPointX = { x: number };
type PartialPointY = { y: number };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];
var a: Data = [1, "2"];
/**
 * 3.扩展写法不同，接口和类型别名不是互斥的。接口可以扩展类 型别名，而反过来是不行的。
 */
