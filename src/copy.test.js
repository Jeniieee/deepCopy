import { deepCopy } from "./copy";

const x = {
  a: [1, 2, 3],
  b: {
    a: 3,
    b: 3
  }
};

const ar = [1, 2, 3];

const y = {
  a: "z",
  [Symbol("z")]: "d",
  ar
};

const z = {
  a: "z",
  z: () => "d",
  y
};

var r = {
  a: "z",
  z
};
r.r = r;

test("should deepcopy right", () => {
  expect(deepCopy(x)).toEqual(x);
  expect(deepCopy(r)).toEqual(r);
});
