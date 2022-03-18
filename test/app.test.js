import * as app from "../src/app";
import * as math from "../src/math";
import * as math_jest from "../src/jest-mock-math"
math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math_jest.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math_jest.subtract).toHaveBeenCalledWith(1, 2);
});